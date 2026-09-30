import {
  defaultLanguageForRegion,
  getCurrentRegionLanguageSelection,
  LANGUAGE_STORAGE_KEY,
  REGION_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  type Language,
  type Region,
} from "@/i18n/RegionContext";

export const SHOPIFY_BASE = "https://shop.vavitas-health.com";

const SHOPIFY_ORIGIN = new URL(SHOPIFY_BASE).origin;
const UTM = "utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web";

const SHOPIFY_COUNTRY: Record<Region, string> = {
  global: "US",
  sg: "SG",
  cn: "CN",
  hk: "HK",
};

const detectRegionFromPath = (pathname: string): Region => {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "sg" || seg === "cn" || seg === "hk") return seg;
  return "global";
};

const readStoredRegion = (): Region | null => {
  try {
    const value = localStorage.getItem(REGION_STORAGE_KEY);
    if (value === "global" || value === "sg" || value === "cn" || value === "hk") return value;
  } catch {
    /* ignore */
  }
  return null;
};

const readStoredLanguage = (): Language | null => {
  try {
    const value = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (value === "en" || value === "zh-CN" || value === "zh-TW") return value;
  } catch {
    /* ignore */
  }
  return null;
};

const resolveRuntimeRegionLanguage = (
  fallbackRegion: Region,
  fallbackLanguage: Language,
): { region: Region; language: Language } => {
  if (typeof window === "undefined") {
    return { region: fallbackRegion, language: fallbackLanguage };
  }

  const visibleSelection = getCurrentRegionLanguageSelection();
  const pathRegion = detectRegionFromPath(window.location.pathname);
  const storedRegion = readStoredRegion();
  const region = pathRegion !== "global" ? pathRegion : visibleSelection.region ?? storedRegion ?? fallbackRegion;

  const storedLanguage = readStoredLanguage();
  const language = SUPPORTED_LANGUAGES[region].includes(visibleSelection.language)
    ? visibleSelection.language
    : storedLanguage && SUPPORTED_LANGUAGES[region].includes(storedLanguage)
      ? storedLanguage
    : SUPPORTED_LANGUAGES[region].includes(fallbackLanguage)
      ? fallbackLanguage
      : defaultLanguageForRegion(region);

  return { region, language };
};

// Confirmed Shopify market-language URL prefixes. All outbound storefront URLs
// are built through buildShopifyUrl so hrefs and click redirects match exactly.
const SHOPIFY_PATH_PREFIX: Partial<Record<Region, Partial<Record<Language, string>>>> = {
  global: {
    en: "/en-us",
    "zh-CN": "/zh-hans-us",
    "zh-TW": "/zh-hant-us",
  },
  sg: {
    en: "/en-sg",
    "zh-CN": "/zh-hans-sg",
    "zh-TW": "/zh-hant-sg",
  },
  hk: {
    en: "/en-hk",
    "zh-CN": "/zh-hans-hk",
    "zh-TW": "/zh-hant-hk",
  },
  cn: {
    en: "/en-cn",
    "zh-CN": "/zh-hans-cn",
    "zh-TW": "/zh-hant-cn",
  },
};

const getPathPrefix = (region: Region, language: Language): string => SHOPIFY_PATH_PREFIX[region]?.[language] ?? "";

const STOREFRONT_PREFIX_PATTERN = /^\/(?:en|zh-hans|zh-hant)-(?:us|sg|cn|hk)(?=\/|$)/;

export const buildShopifyUrl = (region: Region, language: Language, route: string): string => {
  const prefix = getPathPrefix(region, language);
  const normalized = route.startsWith("/") ? route : `/${route}`;
  const [pathAndSearch, hash = ""] = normalized.split("#");
  const [pathname, search = ""] = pathAndSearch.split("?");
  const params = new URLSearchParams(search);
  params.set("country", SHOPIFY_COUNTRY[region]);
  const query = params.toString();
  return `${SHOPIFY_BASE}${prefix}${pathname}${query ? `?${query}` : ""}${hash ? `#${hash}` : ""}`;
};

const toStorefrontUrl = (path: string, region: Region, language: Language): string =>
  buildShopifyUrl(region, language, path);

const normalizeStorefrontTargetUrl = (targetUrl: string, region: Region, language: Language): string => {
  const parsed = new URL(targetUrl, SHOPIFY_BASE);
  if (parsed.origin !== SHOPIFY_ORIGIN) return targetUrl;

  const strippedPathname = parsed.pathname.replace(STOREFRONT_PREFIX_PATTERN, "") || "/";
  return toStorefrontUrl(`${strippedPathname}${parsed.search}${parsed.hash}`, region, language);
};

const navigateToStorefrontUrl = (url: string, options?: { newTab?: boolean }) => {
  if (options?.newTab) {
    window.open(url, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.assign(url);
};

const logShopifyRedirect = (
  finalUrl: string,
  visibleRegion: Region,
  visibleLanguage: Language,
  source = "shopify-link",
) => {
  const parsed = new URL(finalUrl, SHOPIFY_BASE);
  console.log("[Shopify Redirect]", {
    visibleRegion,
    visibleLanguage,
    route: `${parsed.pathname}${parsed.search}${parsed.hash}`,
    finalUrl,
    source,
  });
};

export const redirectToShopifyLocalizedUrl = (
  targetUrl: string,
  region: Region,
  language: Language,
  options?: { newTab?: boolean; source?: string },
) => {
  if (typeof document === "undefined") {
    if (typeof window !== "undefined") {
      navigateToStorefrontUrl(targetUrl, options);
    }
    return;
  }

  const resolved = resolveRuntimeRegionLanguage(region, language);
  const normalizedTargetUrl = normalizeStorefrontTargetUrl(targetUrl, resolved.region, resolved.language);
  logShopifyRedirect(normalizedTargetUrl, resolved.region, resolved.language, options?.source);

  // Best-effort: clear any stale Shopify market/currency/locale cookies that
  // the browser holds for the *current* origin (vavitas-health.com). These
  // can shadow what Shopify reads on the shop subdomain when set on the
  // parent domain (`.vavitas-health.com`) by an earlier session and cause
  // Shopify to silently fall back to the previous market on the first visit
  // after a long gap — even when our /localization POST tries to set a new
  // one. We can't touch HttpOnly cookies, but cookies set on the parent
  // domain via JS (some apps do this) can be expired here.
  const STALE_COOKIES = [
    "cart_currency",
    "localization",
    "_shopify_country",
    "_shopify_currency",
    "_shopify_market",
  ];
  const host = window.location.hostname;
  // Domain candidates: exact host, and parent-domain forms ("vavitas-health.com").
  const domainParts = host.split(".");
  const domainCandidates = new Set<string>([host]);
  for (let i = 1; i < domainParts.length - 1; i++) {
    domainCandidates.add(domainParts.slice(i).join("."));
  }
  STALE_COOKIES.forEach((name) => {
    domainCandidates.forEach((domain) => {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    });
    document.cookie = `${name}=; Max-Age=0; path=/`;
  });

  // Directly landing on Shopify's market/language-prefixed URL is the most
  // reliable first-visit handoff: Shopify sets `localization` and currency
  // cookies from the URL itself, even when the visitor has no prior cookies.
  navigateToStorefrontUrl(normalizedTargetUrl, options);
};

export const getShopifyProductUrl = (productId: string, region: Region, language: Language): string =>
  toStorefrontUrl(`/products/${productId}?${UTM}`, region, language);

export const getShopifyBuyNowUrl = getShopifyProductUrl;

/**
 * Build a Shopify product-page URL that preselects a variant and (optionally)
 * a subscription selling plan. Used to send Buy Now from the Lovable product
 * page to the matching Shopify product page so the customer can still adjust
 * quantity, keep shopping, and use the Shopify cart.
 *
 * Params on the URL:
 *   - variant: numeric variant id (Horizon/Dawn preselect this natively)
 *   - selling_plan: numeric selling plan id (subscription only)
 *   - purchase_option=subscribe: hint flag for theme JS
 *   - subscription_frequency: human-readable frequency hint (optional)
 *
 * NOTE: Shopify's default Horizon / Dawn themes preselect `?variant=` out of
 * the box, but they do NOT automatically preselect a subscription radio from
 * `?selling_plan=`. A small theme snippet is required — see the message
 * accompanying this change for the exact Liquid/JS to paste in.
 */
export const getShopifyProductPageUrl = (
  productHandle: string,
  region: Region,
  language: Language,
  options?: {
    variantNumericId?: string;
    sellingPlanNumericId?: string;
    subscriptionFrequency?: string;
    quantity?: number;
  },
): string => {
  const params = new URLSearchParams();
  if (options?.variantNumericId) params.set("variant", options.variantNumericId);
  if (options?.sellingPlanNumericId) {
    params.set("selling_plan", options.sellingPlanNumericId);
    params.set("purchase_option", "subscribe");
    if (options.subscriptionFrequency) {
      params.set("subscription_frequency", options.subscriptionFrequency);
    }
  } else if (options?.variantNumericId) {
    params.set("purchase_option", "one_time");
  }
  const rawQty = Number(options?.quantity);
  const qty = Number.isFinite(rawQty) && rawQty >= 1 ? Math.floor(rawQty) : 1;
  params.set("quantity", String(qty));
  params.set("utm_source", "copyToPasteBoard");
  params.set("utm_medium", "product-links");
  params.set("utm_content", "web");
  return toStorefrontUrl(`/products/${productHandle}?${params.toString()}`, region, language);
};

export const getShopifyCartUrl = (region: Region, language: Language): string =>
  toStorefrontUrl("/cart", region, language);

// Cart permalink that adds a variant (optionally with a selling plan for
// subscriptions). Shopify recognizes `?selling_plan=<numeric id>` on the
// /cart/{variantId}:{qty} permalink and applies the subscription at checkout.
export const getShopifyCartPermalinkUrl = (
  variantNumericId: string,
  region: Region,
  language: Language,
  options?: { quantity?: number; sellingPlanNumericId?: string },
): string => {
  const qty = options?.quantity ?? 1;
  const sp = options?.sellingPlanNumericId
    ? `?selling_plan=${encodeURIComponent(options.sellingPlanNumericId)}`
    : "";
  return toStorefrontUrl(`/cart/${variantNumericId}:${qty}${sp}`, region, language);
};

export const getShopifyLoginUrl = (region: Region, language: Language): string =>
  toStorefrontUrl("/account/login", region, language);

export const getShopifyCreateAccountUrl = (region: Region, language: Language): string =>
  toStorefrontUrl("/account/register", region, language);

export const getShopifyAccountUrl = (region: Region, language: Language): string =>
  toStorefrontUrl("/account/orders", region, language);

export const getShopifySearchUrl = (query: string, region: Region, language: Language): string =>
  toStorefrontUrl(`/search?q=${encodeURIComponent(query)}`, region, language);

export const getShopifyPolicyUrl = (handle: string, region: Region, language: Language): string =>
  toStorefrontUrl(`/policies/${handle}`, region, language);

export const getShopifyRewardsUrl = (region: Region, language: Language): string =>
  toStorefrontUrl("/pages/join-vavitas-wellness-rewards", region, language);
