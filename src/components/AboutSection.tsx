import { Award, Factory, FlaskConical, FileText } from "lucide-react";
import aboutTeamImg from "@/assets/hero-team-singapore.jpeg";
import aboutSupportLifeImg from "@/assets/about-support-life.png";
import { useT } from "@/i18n/RegionContext";

const AboutSection = () => {
  const t = useT();
  const features = [
    { icon: Award, title: t("about.f1.t"), desc: t("about.f1.d") },
    { icon: Factory, title: t("about.f2.t"), desc: t("about.f2.d") },
    { icon: FlaskConical, title: t("about.f3.t"), desc: t("about.f3.d") },
    { icon: FileText, title: t("about.f4.t"), desc: t("about.f4.d") },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
          <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-xl mx-auto">
            <div className="overflow-hidden rounded-sm bg-muted aspect-[3/2]">
              <img
                src={aboutTeamImg}
                alt="VAVITAS global community in Singapore"
                className="block w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-sm bg-muted aspect-[3/2]">
              <img
                src={aboutSupportLifeImg}
                alt="VAVITAS — Support Life, Over Time. Premium Ingredients, Proven Science."
                className="block w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">{t("about.eyebrow")}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-tight leading-tight">
              {t("about.titleA")} <span className="text-primary italic">{t("about.titleB")}</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">{t("about.p1")}</p>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">{t("about.p2")}</p>
            <p className="text-muted-foreground text-base leading-relaxed">{t("about.p3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
