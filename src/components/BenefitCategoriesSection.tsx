import { useEffect, useState } from "react";
import { Heart, Brain, Bone, Sparkles, Shield } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import imgFishOil from "@/assets/category-fish-oil.jpeg";
import imgD3K2 from "@/assets/category-d3k2.jpeg";
import imgNMN from "@/assets/category-nmn.jpeg";
import imgCollagen from "@/assets/category-collagen.jpeg";
import imgUbiquinol from "@/assets/category-ubiquinol.jpeg";
import { useRegion, useT } from "@/i18n/RegionContext";
import type { TranslationKey } from "@/i18n/translations";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

const productById = Object.fromEntries(products.map((p) => [p.id, p]));

const baseCategories = [
  { keyBase: "heart", icon: Heart, link: "/product/fish-oil", image: imgFishOil, productId: "fish-oil", filters: ["heart"] },
  { keyBase: "bone", icon: Bone, link: "/product/vitamin-d3-k2", image: imgD3K2, productId: "vitamin-d3-k2", filters: ["heart", "bone"] },
  { keyBase: "aging", icon: Brain, link: "/product/nmn", image: imgNMN, productId: "nmn", filters: ["aging", "energy"] },
  { keyBase: "skin", icon: Sparkles, link: "/product/collagen-peptides", image: imgCollagen, productId: "collagen-peptides", filters: ["skin"] },
  { keyBase: "energy", icon: Shield, link: "/product/ubiquinol", image: imgUbiquinol, productId: "ubiquinol", filters: ["heart", "energy", "aging"] },
];

const filterChips = ["all", "heart", "bone", "energy", "aging", "skin"] as const;

const BenefitCategoriesSection = () => {
  const t = useT();
  const { regionalPath } = useRegion();
  const tk = (k: string) => t(k as TranslationKey);
  const [searchParams, setSearchParams] = useSearchParams();
  const goalParam = searchParams.get("goal");
  const initialFilter = goalParam && filterChips.includes(goalParam as typeof filterChips[number]) ? goalParam : "all";
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

  useEffect(() => {
    if (goalParam && filterChips.includes(goalParam as typeof filterChips[number])) {
      setActiveFilter(goalParam);
      const el = document.getElementById("products");
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 116;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    } else {
      setActiveFilter("all");
    }
  }, [goalParam]);

  useEffect(() => {
    const reset = () => {
      setActiveFilter("all");
      if (searchParams.get("goal")) {
        const next = new URLSearchParams(searchParams);
        next.delete("goal");
        setSearchParams(next, { replace: true });
      }
    };
    window.addEventListener("vavitas:reset-product-filter", reset);
    return () => window.removeEventListener("vavitas:reset-product-filter", reset);
  }, [searchParams, setSearchParams]);

  const visibleCategories =
    activeFilter === "all" ? baseCategories : baseCategories.filter((c) => c.filters.includes(activeFilter));

  return (
    <section id="products" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">{t("bc.eyebrow")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-3">
            {t("bc.title")}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">{t("bc.subtitle")}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {filterChips.map((f) => {
            const active = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-200",
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-foreground/70 border-border hover:border-primary/50 hover:text-primary",
                )}
              >
                {tk(`bc.filter.${f}`)}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {visibleCategories.map((cat) => {
            const title = tk(`bc.${cat.keyBase}.title`);
            const product = tk(`bc.${cat.keyBase}.product`);
            const sourcing = tk(`bc.${cat.keyBase}.sourcing`);
            const note = tk(`bc.${cat.keyBase}.note`);
            const ctaLabel = tk(`bc.${cat.keyBase}.cta`);
            const scenarios = [tk(`bc.${cat.keyBase}.s1`), tk(`bc.${cat.keyBase}.s2`), tk(`bc.${cat.keyBase}.s3`)];
            return (
              <div
                key={cat.keyBase}
                className="group flex flex-col bg-background rounded-sm overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="block">
                  <div className="relative aspect-[9/16] overflow-hidden bg-muted">
                    <img
                      src={cat.image}
                      alt={title}
                      className="absolute inset-0 w-full h-full object-contain transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                        {tk(`bc.${cat.keyBase}.goal`)}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <cat.icon className="w-6 h-6 text-primary mb-2" />
                      <h3 className="text-primary-foreground font-heading text-xl font-semibold leading-tight">
                        {title}
                      </h3>
                      <p className="text-primary-foreground/80 text-xs mt-1 uppercase tracking-wider">{product}</p>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-1">
                      {t("bc.ingredientStory")}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{sourcing}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-1">
                      {t("bc.vavitasWay")}
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{note}</p>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary mb-2">
                      {t("bc.bestFor")}
                    </p>
                    <ul className="space-y-1">
                      {scenarios.map((s) => (
                        <li key={s} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="mt-[6px] w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 space-y-4 mt-auto">
                    {(() => {
                      const product = productById[cat.productId];
                      if (!product) return null;
                      return (
                        <div className="text-center space-y-1.5">
                          <p className="text-sm text-foreground/80">{t(product.tagline as TranslationKey)}</p>
                          <p className="text-primary font-semibold text-xl">{product.price}</p>
                        </div>
                      );
                    })()}

                    <a
                      href={regionalPath(cat.link)}
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-accent transition-colors duration-300"
                    >
                      {ctaLabel}
                    </a>
                    <p className="text-[10px] text-muted-foreground text-center leading-snug">
                      {t("pd.secureCheckout")}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitCategoriesSection;
