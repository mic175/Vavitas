import { useEffect, useMemo, useState } from "react";
import {
  useShopifyProduct,
  numericId,
  type SellingPlan,
} from "@/lib/shopifyStorefront";
import { useRegion, useT } from "@/i18n/RegionContext";
import { getShopifyProductPageUrl, redirectToShopifyLocalizedUrl } from "@/lib/shopifyLinks";
import type { TranslationKey } from "@/i18n/translations";

type Mode = "onetime" | "subscribe";

interface Props {
  handle: string;
  /** Fallback display price if Shopify variant isn't loaded yet */
  fallbackPrice?: string;
}

const formatMoney = (amount: string, currencyCode: string, locale: string) => {
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency: currencyCode }).format(
      Number(amount),
    );
  } catch {
    return `${currencyCode} ${amount}`;
  }
};

const planPercentOff = (plan: SellingPlan): number | null => {
  for (const adj of plan.priceAdjustments ?? []) {
    if (adj.adjustmentValue.__typename === "SellingPlanPercentagePriceAdjustment") {
      return adj.adjustmentValue.adjustmentPercentage;
    }
  }
  return null;
};

const SubscriptionSelector = ({ handle, fallbackPrice }: Props) => {
  const t = useT();
  const tk = (k: string) => t(k as TranslationKey);
  const { region, language } = useRegion();
  const { product, loading, error } = useShopifyProduct(handle);
  const [mode, setMode] = useState<Mode>("onetime");
  const [planId, setPlanId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [quantityInput, setQuantityInput] = useState<string>("1");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Reset quantity whenever the product changes (different handle = different page).
  useEffect(() => {
    setQuantity(1);
    setQuantityInput("1");
  }, [handle]);

  const normalizeQuantity = (val: number): number => {
    if (!Number.isFinite(val) || val < 1) return 1;
    return Math.floor(val);
  };

  const commitQuantity = (raw: string) => {
    const parsed = parseInt(raw, 10);
    const next = normalizeQuantity(parsed);
    setQuantity(next);
    setQuantityInput(String(next));
  };

  const decQuantity = () => {
    const next = normalizeQuantity(quantity - 1);
    setQuantity(next);
    setQuantityInput(String(next));
  };

  const incQuantity = () => {
    const next = normalizeQuantity(quantity + 1);
    setQuantity(next);
    setQuantityInput(String(next));
  };

  const variant = product?.variants.nodes.find((v) => v.availableForSale) ?? product?.variants.nodes[0];
  const group = product?.sellingPlanGroups.nodes[0];
  const plans = useMemo(() => group?.sellingPlans.nodes ?? [], [group]);
  const activePlan = plans.find((p) => p.id === planId) ?? plans[0] ?? null;
  const effectivePlanId = mode === "subscribe" ? activePlan?.id ?? null : null;

  // Price display
  const locale = language === "zh-CN" ? "zh-CN" : language === "zh-TW" ? "zh-TW" : "en-US";
  let displayPrice = fallbackPrice ?? "";
  let strikePrice: string | null = null;
  if (variant) {
    const oneTime = formatMoney(variant.price.amount, variant.price.currencyCode, locale);
    if (mode === "subscribe" && effectivePlanId) {
      const alloc = variant.sellingPlanAllocations?.nodes.find(
        (n) => n.sellingPlan.id === effectivePlanId,
      );
      const subPrice = alloc?.priceAdjustments[0]?.price;
      if (subPrice) {
        displayPrice = formatMoney(subPrice.amount, subPrice.currencyCode, locale);
        strikePrice = oneTime;
      } else {
        displayPrice = oneTime;
      }
    } else {
      displayPrice = oneTime;
    }
  }

  const subscriptionFrequencyHint = (plan: SellingPlan | null | undefined): string | undefined => {
    if (!plan) return undefined;
    const fromOptions = plan.options
      .map((o) => o.value)
      .filter(Boolean)
      .join("_");
    const raw = fromOptions || plan.name;
    if (!raw) return undefined;
    return raw.trim().toLowerCase().replace(/\s+/g, "_");
  };

  const handleBuy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (!variant || submitting) return;
    setSubmitError(null);

    redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, {
      newTab: false,
      source: "subscription-buy-now",
    });
  };

  const hasSubscriptions = !loading && !error && plans.length > 0;
  const groupPercent = plans.map(planPercentOff).find((p): p is number => typeof p === "number");

  return (
    <div className="mb-6">
      {/* Purchase Options — only render the Subscribe option when the
          Shopify product actually has selling plans attached. */}
      {hasSubscriptions && (
        <div className="mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">{t("pd.purchaseOptions")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setMode("onetime")}
              className={`text-left rounded-sm border px-4 py-3 transition-colors ${
                mode === "onetime"
                  ? "border-primary bg-primary/[0.06]"
                  : "border-border/60 hover:border-primary/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground">{t("pd.oneTime")}</span>
                <span
                  className={`w-4 h-4 rounded-full border ${
                    mode === "onetime" ? "border-primary bg-primary" : "border-muted-foreground/40"
                  }`}
                />
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("subscribe");
                if (!planId && plans[0]) setPlanId(plans[0].id);
              }}
              className={`text-left rounded-sm border px-4 py-3 transition-colors ${
                mode === "subscribe"
                  ? "border-primary bg-primary/[0.06]"
                  : "border-border/60 hover:border-primary/60"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-foreground">
                  {t("pd.subscribe")}
                  {typeof groupPercent === "number" && (
                    <span className="ml-2 text-primary font-semibold">{groupPercent}% OFF</span>
                  )}
                </span>
                <span
                  className={`w-4 h-4 rounded-full border ${
                    mode === "subscribe" ? "border-primary bg-primary" : "border-muted-foreground/40"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      )}
      {loading && (
        <p className="mb-2 text-xs text-muted-foreground">{t("pd.subLoading")}</p>
      )}

      {/* Frequency picker (subscribe only) */}
      {mode === "subscribe" && hasSubscriptions && (
        <div className="mb-4 p-4 rounded-sm border border-primary/20 bg-primary/[0.04]">
          <p className="text-sm font-semibold text-foreground mb-2">{t("pd.deliveryEvery")}</p>
          <div className="flex flex-wrap gap-2">
            {plans.map((p) => {
              const selected = (activePlan?.id ?? plans[0].id) === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlanId(p.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors ${
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/60 hover:border-primary/60 text-foreground"
                  }`}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
          <ul className="mt-3 space-y-1 text-xs text-foreground/75">
            <li className="flex gap-2"><span className="text-primary">•</span>{tk("pd.subBenefit1")}</li>
            <li className="flex gap-2"><span className="text-primary">•</span>{tk("pd.subBenefit2")}</li>
            <li className="flex gap-2"><span className="text-primary">•</span>{tk("pd.subBenefit3")}</li>
          </ul>
        </div>
      )}

      {/* Price */}
      <div className="flex items-baseline gap-3 mb-4">
        <p className="text-3xl font-semibold text-primary">{displayPrice}</p>
        {strikePrice && (
          <p className="text-base text-muted-foreground line-through">{strikePrice}</p>
        )}
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md sm:items-stretch">
        {/* Quantity selector */}
        <div
          className="inline-flex items-center justify-between rounded-md border border-border/60 bg-background h-12 sm:h-auto sm:w-auto"
          role="group"
          aria-label={t("pd.quantity") as string}
        >
          <button
            type="button"
            onClick={decQuantity}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="w-10 h-full inline-flex items-center justify-center text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed rounded-l-md"
          >
            −
          </button>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={quantityInput}
            onChange={(e) => {
              const v = e.target.value.replace(/[^0-9]/g, "");
              setQuantityInput(v);
              const parsed = parseInt(v, 10);
              if (Number.isFinite(parsed) && parsed >= 1) setQuantity(Math.floor(parsed));
            }}
            onBlur={(e) => commitQuantity(e.target.value)}
            aria-label="Quantity"
            className="w-12 h-full text-center text-sm font-medium bg-transparent outline-none"
          />
          <button
            type="button"
            onClick={incQuantity}
            aria-label="Increase quantity"
            className="w-10 h-full inline-flex items-center justify-center text-foreground hover:bg-muted rounded-r-md"
          >
            +
          </button>
        </div>

        <a
          href={
            variant
              ? getShopifyProductPageUrl(handle, region, language, {
                  variantNumericId: numericId(variant.id),
                  sellingPlanNumericId: effectivePlanId ? numericId(effectivePlanId) : undefined,
                  subscriptionFrequency: effectivePlanId
                    ? subscriptionFrequencyHint(activePlan)
                    : undefined,
                  quantity,
                })
              : "#"
          }
          target="_self"
          rel="noopener"
          onClick={handleBuy}
          aria-disabled={submitting}
          className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-md disabled:opacity-50 aria-disabled:opacity-60 aria-disabled:pointer-events-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          {submitting ? "…" : t("pd.buyNow")}
        </a>
      </div>
      <p className="mt-3 text-xs text-muted-foreground text-center">
        {t("pd.secureCheckout")}
      </p>
      {submitError && (
        <p className="mt-2 text-xs text-destructive">{submitError}</p>
      )}
    </div>
  );
};

export default SubscriptionSelector;
