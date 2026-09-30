import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRegion, useT } from "@/i18n/RegionContext";
import { redirectToShopifyLocalizedUrl, getShopifyPolicyUrl, getShopifyRewardsUrl } from "@/lib/shopifyLinks";
import { getLocalizedUsd300 } from "@/lib/localizedThreshold";
import type { TranslationKey } from "@/i18n/translations";

const SUPPORT_URL = "/support";

// Accordion sections in the required order. paragraphs = number of p<N> keys
// to render. dynamicThreshold = name of the paragraph whose key has both
// `.usd` and `.local` variants and must receive {amount} substitution.
type Section = {
  value: string;
  base: string;
  paragraphs: number;
  dynamicParagraph?: number;
};

const SECTIONS: Section[] = [
  { value: "rewards", base: "policy.rewards", paragraphs: 3, dynamicParagraph: 2 },
  { value: "pricing", base: "policy.pricing", paragraphs: 4 },
  { value: "shipping", base: "policy.shipping", paragraphs: 1 },
  { value: "returns", base: "policy.returns", paragraphs: 10 },
  { value: "subs", base: "policy.subs", paragraphs: 9 },
  { value: "discount", base: "policy.discount", paragraphs: 6 },
  { value: "orderchanges", base: "policy.orderchanges", paragraphs: 6 },
  { value: "use", base: "policy.use", paragraphs: 6 },
  { value: "intl", base: "policy.intl", paragraphs: 6 },
];

const linkifyInlineMentions = (html: string, supportHref: string, subsHref: string): string => {
  const replacements: { needle: string; href: string; external: boolean }[] = [
    { needle: "Subscription Cancellation Policy", href: subsHref, external: true },
    { needle: "订阅取消政策", href: subsHref, external: true },
    { needle: "訂閱取消政策", href: subsHref, external: true },
    { needle: "VAVITAS Customer Support", href: "mailto:support@vavitas-health.com", external: true },
    { needle: "VAVITAS 客户支持", href: "mailto:support@vavitas-health.com", external: true },
    { needle: "VAVITAS 客戶支援", href: "mailto:support@vavitas-health.com", external: true },
  ];
  let out = html;
  for (const { needle, href, external } of replacements) {
    const idx = out.indexOf(needle);
    if (idx === -1) continue;
    const attrs = external
      ? ` href="${href}" rel="noopener noreferrer"`
      : ` href="${href}"`;
    const anchor = `<a class="text-primary underline underline-offset-2 hover:text-accent"${attrs}>${needle}</a>`;
    out = out.slice(0, idx) + anchor + out.slice(idx + needle.length);
  }
  return out;
};

const PurchasePolicyAccordion = () => {
  const t = useT();
  const { region, language, regionalPath } = useRegion();
  const tk = (k: string) => t(k as TranslationKey);

  const { amount, isUsd } = getLocalizedUsd300(region);
  const supportHref = regionalPath(SUPPORT_URL);
  const subsHref = getShopifyPolicyUrl("subscription-policy", region, language);
  const rewardsHref = getShopifyRewardsUrl(region, language);

  const renderParagraph = (key: string): string => {
    const raw = tk(key);
    return linkifyInlineMentions(raw, supportHref, subsHref);
  };

  const renderDynamicParagraph = (base: string): string => {
    const variantKey = isUsd ? `${base}.usd` : `${base}.local`;
    const raw = tk(variantKey).replace(/\{amount\}/g, amount);
    return linkifyInlineMentions(raw, supportHref, subsHref);
  };



  return (
    <section>
      <div className="text-center mb-12 md:mb-14">
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-4">
          {t("policy.eyebrow") || "Shop With Confidence"}
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight leading-[1.15] mb-5">
          {t("policy.title")}
        </h2>
        <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
          <span className="h-px w-10 bg-primary/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
          <span className="h-px w-10 bg-primary/40" />
        </div>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t("policy.intro")}
        </p>
      </div>
      <Accordion type="single" collapsible defaultValue="rewards" className="w-full">

        {SECTIONS.map((section) => (
          <AccordionItem
            key={section.value}
            value={section.value}
            className="border-b border-border/40"
          >
            <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline hover:text-primary py-4">
              {tk(`${section.base}.title`)}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-foreground/75 leading-relaxed space-y-3">
              {Array.from({ length: section.paragraphs }, (_, i) => {
                const idx = i + 1;
                const html =
                  section.dynamicParagraph === idx
                    ? renderDynamicParagraph(`${section.base}.p${idx}`)
                    : renderParagraph(`${section.base}.p${idx}`);
                return <p key={idx} dangerouslySetInnerHTML={{ __html: html }} />;
              })}
              {section.value === "rewards" && (
                <a
                  href={rewardsHref}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "policy-rewards" });
                  }}
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
                >
                  {t("policy.cta")}
                </a>
              )}
              {section.value === "shipping" && (
                <Link
                  to={regionalPath("/shipping-policy")}
                  className="mt-2 inline-flex items-center text-primary underline underline-offset-2 hover:text-accent text-xs font-semibold uppercase tracking-wider"
                >
                  {t("policy.shipping.viewFull")} →
                </Link>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default PurchasePolicyAccordion;
