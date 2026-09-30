import { FlaskConical, Award, BookOpen, Factory, ClipboardCheck, FileText } from "lucide-react";
import { useT } from "@/i18n/RegionContext";


const StandardsSection = () => {
  const t = useT();
  const points = [
    { icon: FlaskConical, title: t("standards.p1.t"), desc: t("standards.p1.d") },
    { icon: Award, title: t("standards.p2.t"), desc: t("standards.p2.d") },
    { icon: BookOpen, title: t("standards.p3.t"), desc: t("standards.p3.d") },
    { icon: Factory, title: t("standards.p4.t"), desc: t("standards.p4.d") },
    { icon: ClipboardCheck, title: t("standards.p5.t"), desc: t("standards.p5.d") },
    { icon: FileText, title: t("standards.p6.t"), desc: t("standards.p6.d") },
  ];

  return (
    <section id="standards" className="py-20 lg:py-24 bg-muted/30 border-y border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            {t("standards.eyebrow")}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight mb-5">
            {t("standards.title")}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {t("standards.intro")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {points.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border/40 p-7 rounded-sm flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_10px_30px_-15px_hsl(183_70%_40%/0.25)]"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardsSection;
