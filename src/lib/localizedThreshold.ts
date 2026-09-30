// Localized display string for the US$300 baseline used in Purchase & Sales
// Policy copy (VAVITAS Preferred qualifying spend + international free-shipping
// threshold). The displayed local-currency amounts are guidance only; Shopify
// Checkout remains the source of truth for the actual amounts charged.
//
// Approximations are aligned with the existing AnnouncementBar threshold and
// rounded to friendly marketing numbers. They are NOT used for checkout.

import type { Region, Language } from "@/i18n/RegionContext";

type ThresholdEntry = { amount: string; isUsd: boolean };

const LOCALIZED_USD300: Record<Region, ThresholdEntry> = {
  global: { amount: "US$300", isUsd: true },
  sg: { amount: "S$400", isUsd: false },
  cn: { amount: "CN¥2,200", isUsd: false },
  hk: { amount: "HK$2,350", isUsd: false },
};

export const getLocalizedUsd300 = (region: Region): ThresholdEntry =>
  LOCALIZED_USD300[region] ?? LOCALIZED_USD300.global;

/**
 * Returns the customer-facing phrase for US$300 in policy copy.
 * - USD market           → "US$300"        (en)  /  "300 美元"  (zh)
 * - Non-USD market (en)  → "S$400, approximately equivalent to US$300"
 * - Non-USD market (zh)  → "S$400（约合 300 美元）" / "（約合 300 美元）"
 */
export const getLocalizedUsd300Display = (
  region: Region,
  language: Language,
): string => {
  const { amount, isUsd } = getLocalizedUsd300(region);
  if (isUsd) {
    return language === "en" ? "US$300" : "300 美元";
  }
  if (language === "en") {
    return `${amount}, approximately equivalent to US$300`;
  }
  if (language === "zh-CN") {
    return `${amount}（约合 300 美元）`;
  }
  return `${amount}（約合 300 美元）`;
};
