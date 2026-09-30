import sceneKitchen from "@/assets/scene-kitchen.jpg";
import sceneJogger from "@/assets/scene-jogger.jpg";
import sceneBalcony from "@/assets/scene-balcony.jpg";
import sceneYoga from "@/assets/scene-yoga.jpg";
import sceneDinner from "@/assets/scene-dinner.jpg";
import sceneElders from "@/assets/scene-elders.jpg";
import sceneHiking from "@/assets/scene-hiking.jpg";
import sceneMeditation from "@/assets/scene-meditation.jpg";
import sceneCycling from "@/assets/scene-cycling.jpg";
import { useT } from "@/i18n/RegionContext";

const scenes = [
  { src: sceneKitchen, alt: "Family preparing a fresh meal together" },
  { src: sceneYoga, alt: "Mother and daughters practicing yoga" },
  { src: sceneJogger, alt: "Morning jog at sunrise" },
  { src: sceneMeditation, alt: "Morning meditation by the window" },
  { src: sceneBalcony, alt: "Balcony garden moment" },
  { src: sceneCycling, alt: "Couple cycling in the park" },
  { src: sceneDinner, alt: "Multigenerational family dinner" },
  { src: sceneHiking, alt: "Senior couple hiking in mountains" },
  { src: sceneElders, alt: "Elders enjoying a toast" },
];

const InspirationSection = () => {
  const t = useT();
  return (
    <section className="py-24 bg-foreground text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-4">{t("insp.eyebrow")}</p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-tight mb-8 tracking-tight">
              {t("insp.titleA")} <span className="text-primary italic">{t("insp.titleAccent")}</span> {t("insp.titleB")}
            </h2>
            <div className="space-y-4 text-primary-foreground/70 text-lg leading-relaxed">
              <p>{t("insp.p1")}</p>
              <p className="text-primary-foreground font-semibold text-xl">
                {t("insp.p2a")} <span className="text-primary">{t("insp.p2num")}</span> {t("insp.p2b")}
              </p>
              <p className="text-primary-foreground font-semibold text-xl">
                {t("insp.p3a")} <span className="text-primary">{t("insp.p3num")}</span>{t("insp.p3b")}
              </p>
              <p className="text-primary-foreground font-semibold text-xl">{t("insp.p4")}</p>
              <p className="mt-6">{t("insp.p5")}</p>
              <p>
                {t("insp.p6a")}{" "}
                <span className="text-primary-foreground font-medium">{t("insp.p6em")}</span>
                {t("insp.p6b")}
              </p>
              <p>
                {t("insp.p7a")} <span className="italic text-primary-foreground">{t("insp.p7em")}</span> {t("insp.p7b")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {scenes.map((s) => (
              <div key={s.alt} className="overflow-hidden rounded-sm bg-background aspect-square">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
