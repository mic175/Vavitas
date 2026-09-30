import { Gift, Bell, Sparkles } from "lucide-react";
import { useRegion, useT } from "@/i18n/RegionContext";
import { getShopifyRewardsUrl, redirectToShopifyLocalizedUrl } from "@/lib/shopifyLinks";

const RewardsSection = () => {
  const t = useT();
  const { region, language } = useRegion();
  const url = getShopifyRewardsUrl(region, language);

  return (
    <section id="rewards" className="py-20 bg-gradient-to-br from-primary/[0.06] via-warm-cream to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-sm border border-primary/20 bg-background/80 backdrop-blur p-8 md:p-14 shadow-sm">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">{t("rewards.eyebrow")}</p>
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
                {t("rewards.title")}
              </h2>
              <p className="text-foreground/75 leading-relaxed mb-6">{t("rewards.desc")}</p>
              <a
                href={url}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "rewards-section" });
                }}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-xs hover:bg-accent transition-all duration-300"
              >
                {t("rewards.cta")}
              </a>
            </div>
            <ul className="md:col-span-2 space-y-4">
              {[
                { Icon: Gift, label: t("rewards.perk1") },
                { Icon: Bell, label: t("rewards.perk2") },
                { Icon: Sparkles, label: t("rewards.perk3") },
              ].map(({ Icon, label }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
