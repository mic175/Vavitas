import { useMemo, useState } from "react";
import { Star, ThumbsUp, MessageCircle, Sparkles, Search, X, ExternalLink } from "lucide-react";
import TrustpilotWidget from "@/components/TrustpilotWidget";
import { useT } from "@/i18n/RegionContext";
import type { TranslationKey } from "@/i18n/translations";

type Gender = "female" | "male";

const baseTestimonials: Array<{
  key: string;
  name: string;
  location: string;
  rating: number;
  product: string;
  gender: Gender;
}> = [
  { key: "r1", name: "Sarah M.", location: "New York, NY", rating: 5, product: "Fish Oil", gender: "female" },
  { key: "r2", name: "James L.", location: "Los Angeles, CA", rating: 5, product: "NMN", gender: "male" },
  { key: "r3", name: "Emily R.", location: "Chicago, IL", rating: 5, product: "Collagen Peptides", gender: "female" },
  { key: "r4", name: "David K.", location: "Seattle, WA", rating: 5, product: "Ubiquinol", gender: "male" },
];

const TestimonialsSection = () => {
  const t = useT();
  const tk = (k: string) => t(k as TranslationKey);
  const [showReply, setShowReply] = useState<Record<number, boolean>>({});
  const [productFilter, setProductFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<"all" | Gender>("all");
  const [query, setQuery] = useState("");

  const testimonials = useMemo(
    () =>
      baseTestimonials.map((b) => ({
        ...b,
        text: tk(`tm.${b.key}.text`),
        brandReply: tk(`tm.${b.key}.reply`),
      })),
    [t], // eslint-disable-line react-hooks/exhaustive-deps
  );

  const products = useMemo(() => Array.from(new Set(baseTestimonials.map((t) => t.product))), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return testimonials
      .map((t, i) => ({ t, i }))
      .filter(({ t }) => {
        if (productFilter !== "all" && t.product !== productFilter) return false;
        if (genderFilter !== "all" && t.gender !== genderFilter) return false;
        if (q && !t.text.toLowerCase().includes(q) && !t.name.toLowerCase().includes(q)) return false;
        return true;
      });
  }, [testimonials, productFilter, genderFilter, query]);

  const toggleReply = (i: number) => setShowReply((s) => ({ ...s, [i]: !s[i] }));

  const resetFilters = () => {
    setProductFilter("all");
    setGenderFilter("all");
    setQuery("");
  };

  const hasActiveFilter = productFilter !== "all" || genderFilter !== "all" || query.trim() !== "";

  const Chip = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
        active
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">{t("tm.eyebrow")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            {t("tm.title")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
          <p className="text-muted-foreground text-sm mt-5 max-w-xl mx-auto">{t("tm.subtitle")}</p>
        </div>

        {/* Official Trustpilot widget */}
        <div className="max-w-3xl mx-auto mb-10">
          <TrustpilotWidget />
          <div className="mt-4 flex justify-center">
            <a
              href="https://www.trustpilot.com/evaluate/vavitas-health.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              {t("tm.writeReview")}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Early Customer Testimonials label */}
        <div className="max-w-6xl mx-auto mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary mb-1">
              {t("tm.earlyEyebrow")}
            </p>
            <h3 className="font-heading text-xl md:text-2xl text-foreground">
              {t("tm.earlyTitle")}
            </h3>
          </div>
        </div>


        <div className="max-w-6xl mx-auto mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("tm.search")}
              className="w-full pl-10 pr-10 py-2.5 text-sm bg-card border border-border/60 rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mr-1">
                {t("tm.product")}
              </span>
              <Chip active={productFilter === "all"} onClick={() => setProductFilter("all")}>
                {t("tm.all")}
              </Chip>
              {products.map((p) => (
                <Chip key={p} active={productFilter === p} onClick={() => setProductFilter(p)}>
                  {p}
                </Chip>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mr-1">
                {t("tm.reviewer")}
              </span>
              <Chip active={genderFilter === "all"} onClick={() => setGenderFilter("all")}>
                {t("tm.all")}
              </Chip>
              <Chip active={genderFilter === "female"} onClick={() => setGenderFilter("female")}>
                <span className="inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {t("tm.women")}
                </span>
              </Chip>
              <Chip active={genderFilter === "male"} onClick={() => setGenderFilter("male")}>
                <span className="inline-flex items-center gap-1">
                  <ThumbsUp className="w-3 h-3" /> {t("tm.men")}
                </span>
              </Chip>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
            <span>
              {t("tm.earlyTitle")} ·{" "}
              <span className="font-semibold text-foreground">{filtered.length}</span>/{testimonials.length}
            </span>
            {hasActiveFilter && (
              <button onClick={resetFilters} className="text-primary hover:underline font-medium">
                {t("tm.reset")}
              </button>
            )}
          </div>
        </div>


        {filtered.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-16 border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground text-sm">{t("tm.none")}</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {filtered.map(({ t: rv, i }) => {
              const isOpen = !!showReply[i];
              const Token = rv.gender === "female" ? Sparkles : ThumbsUp;
              const tokenLabel = rv.gender === "female" ? t("tm.cheersHer") : t("tm.respectHim");
              const initial = rv.name.charAt(0);
              const avatarBg = rv.gender === "female" ? "bg-rose-100 text-rose-600" : "bg-sky-100 text-sky-700";

              return (
                <div
                  key={i}
                  className="group relative bg-card border border-border/40 p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-semibold uppercase tracking-wider">
                    <Token className="w-3 h-3" />
                    {tokenLabel}
                  </div>

                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: rv.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic flex-1">"{rv.text}"</p>

                  <div className="border-t border-border/40 pt-4 flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${avatarBg}`}
                    >
                      {initial}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground font-medium text-sm truncate">{rv.name}</p>
                      <p className="text-muted-foreground text-xs truncate">
                        {rv.location} · {rv.product}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-end">
                    <button
                      onClick={() => toggleReply(i)}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t("tm.brandReply")}</span>
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-3 p-3 bg-primary/5 border-l-2 border-primary rounded-sm animate-in fade-in slide-in-from-top-1 duration-300">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-primary mb-1">
                        {t("tm.brandTeam")}
                      </p>
                      <p className="text-xs text-foreground/80 leading-relaxed">{rv.brandReply}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <p className="text-center text-[11px] text-muted-foreground/70 mt-10 max-w-3xl mx-auto leading-relaxed">
          {t("tm.disclaimer")}
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
