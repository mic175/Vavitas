// Lightweight Shopify Storefront API client. The access token below is a
// PUBLIC Storefront API token — safe to ship in browser code (Shopify
// documents this explicitly; it is scoped to unauthenticated read endpoints).
import { useEffect, useState } from "react";

const SHOPIFY_DOMAIN = "npc1ww-vi.myshopify.com";
const STOREFRONT_TOKEN = "7b08887e2c2697d7b29e8852b3ddf347";
const API_VERSION = "2024-10";

const ENDPOINT = `https://${SHOPIFY_DOMAIN}/api/${API_VERSION}/graphql.json`;

export type Money = { amount: string; currencyCode: string };

export type SellingPlan = {
  id: string; // gid://shopify/SellingPlan/...
  name: string;
  options: { name: string; value: string }[];
  priceAdjustments: {
    adjustmentValue:
      | { __typename: "SellingPlanPercentagePriceAdjustment"; adjustmentPercentage: number }
      | { __typename: "SellingPlanFixedAmountPriceAdjustment"; adjustmentAmount: Money }
      | { __typename: "SellingPlanFixedPriceAdjustment"; price: Money };
  }[];
};

export type SellingPlanGroup = {
  name: string;
  appName?: string | null;
  options: { name: string; values: string[] }[];
  sellingPlans: { nodes: SellingPlan[] };
};

export type Variant = {
  id: string; // gid://shopify/ProductVariant/...
  title: string;
  availableForSale: boolean;
  price: Money;
  sellingPlanAllocations?: {
    nodes: {
      sellingPlan: { id: string };
      priceAdjustments: { price: Money; compareAtPrice: Money }[];
    }[];
  };
};

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  variants: { nodes: Variant[] };
  sellingPlanGroups: { nodes: SellingPlanGroup[] };
};

const PRODUCT_QUERY = /* GraphQL */ `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      variants(first: 10) {
        nodes {
          id
          title
          availableForSale
          price { amount currencyCode }
          sellingPlanAllocations(first: 20) {
            nodes {
              sellingPlan { id }
              priceAdjustments { price { amount currencyCode } compareAtPrice { amount currencyCode } }
            }
          }
        }
      }
      sellingPlanGroups(first: 5) {
        nodes {
          name
          appName
          options { name values }
          sellingPlans(first: 20) {
            nodes {
              id
              name
              options { name value }
              priceAdjustments {
                adjustmentValue {
                  __typename
                  ... on SellingPlanPercentagePriceAdjustment { adjustmentPercentage }
                  ... on SellingPlanFixedAmountPriceAdjustment { adjustmentAmount { amount currencyCode } }
                  ... on SellingPlanFixedPriceAdjustment { price { amount currencyCode } }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function fetchShopifyProduct(handle: string): Promise<ShopifyProduct | null> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
      Accept: "application/json",
    },
    body: JSON.stringify({ query: PRODUCT_QUERY, variables: { handle } }),
  });
  if (!res.ok) throw new Error(`Shopify Storefront ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map((e: { message: string }) => e.message).join("; "));
  return json.data?.product ?? null;
}

export function useShopifyProduct(handle: string | null | undefined) {
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(!!handle);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!handle) {
      setProduct(null);
      setLoading(false);
      return;
    }
    let active = true;
    setLoading(true);
    setError(null);
    fetchShopifyProduct(handle)
      .then((p) => {
        if (!active) return;
        setProduct(p);
      })
      .catch((e: Error) => {
        if (!active) return;
        setError(e.message);
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [handle]);

  return { product, loading, error };
}

// Extract the numeric ID from a Shopify gid like "gid://shopify/ProductVariant/12345"
export const numericId = (gid: string): string => gid.split("/").pop() ?? gid;

// ---------------- Cart (subscription-safe checkout handoff) ----------------

const CART_CREATE_MUTATION = /* GraphQL */ `
  mutation CartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart { id checkoutUrl }
      userErrors { field message }
    }
  }
`;

export async function createShopifyCart(args: {
  merchandiseId: string; // variant GID
  quantity?: number;
  sellingPlanId?: string | null; // selling plan GID
  buyerCountryCode?: string; // e.g. "US", "SG"
}): Promise<{ id: string; checkoutUrl: string }> {
  const line: Record<string, unknown> = {
    merchandiseId: args.merchandiseId,
    quantity: args.quantity ?? 1,
  };
  if (args.sellingPlanId) line.sellingPlanId = args.sellingPlanId;

  const input: Record<string, unknown> = { lines: [line] };
  if (args.buyerCountryCode) {
    input.buyerIdentity = { countryCode: args.buyerCountryCode };
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
      Accept: "application/json",
    },
    body: JSON.stringify({ query: CART_CREATE_MUTATION, variables: { input } }),
  });
  if (!res.ok) throw new Error(`Shopify cartCreate ${res.status}`);
  const json = await res.json();
  const userErrs = json.data?.cartCreate?.userErrors;
  if (json.errors?.length) {
    throw new Error(json.errors.map((e: { message: string }) => e.message).join("; "));
  }
  if (userErrs?.length) {
    throw new Error(userErrs.map((e: { message: string }) => e.message).join("; "));
  }
  const cart = json.data?.cartCreate?.cart;
  if (!cart?.checkoutUrl) throw new Error("No checkoutUrl returned");
  return cart;
}
