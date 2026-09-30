import qualityImg from "@/assets/quality-global-partners.jpg";
import { useT } from "@/i18n/RegionContext";

const QualitySection = () => {
  const t = useT();
  return (
    <section id="quality" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            {t("quality.eyebrow")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            {t("quality.titleA")} <span className="text-primary italic">{t("quality.titleB")}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("quality.desc")}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-sm">
            <img
              src={qualityImg}
              alt="VAVITAS global manufacturing partners — facilities in Germany, the USA, and Japan"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
