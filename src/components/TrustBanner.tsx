import { useState } from "react";
import { FlaskConical, Globe, Shield, Award } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import nusConference from "@/assets/nus-conference-1.jpg";
import globalFactories from "@/assets/global-factories.jpg";
import certFda from "@/assets/cert-fda-cgmp-bactolac.jpg";
import qcLab from "@/assets/bactolac-qc-lab.jpg";

const stats = [
  {
    icon: FlaskConical,
    label: "SCIENCE-DRIVEN",
    desc: "Evidence-based formulas developed by leading nutritional scientists",
    image: { src: nusConference, alt: "Vavitas team at NUS scientific conference" },
  },
  {
    icon: Globe,
    label: "GLOBALLY SOURCED",
    desc: "Premium ingredients from trusted suppliers worldwide for unmatched purity",
    image: { src: globalFactories, alt: "Global manufacturing partners" },
  },
  {
    icon: Shield,
    label: "GMP CERTIFIED",
    desc: "Produced in FDA-registered, GMP-certified facilities in the USA",
    image: { src: certFda, alt: "FDA cGMP certificate" },
  },
  {
    icon: Award,
    label: "THIRD-PARTY TESTED",
    desc: "Every batch tested for purity, potency, and safety — guaranteed",
    image: { src: qcLab, alt: "Third-party QC testing lab" },
  },
];

type LightboxImage = { src: string; alt: string; category: string };

const TrustBanner = () => {
  const [active, setActive] = useState<LightboxImage | null>(null);

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground text-center mb-4 tracking-tight">
          Comprehensive Offerings. Exceptional Quality.
        </h2>
        <p className="text-primary-foreground/70 text-center mb-12 max-w-2xl mx-auto">
          We are passionate about the science and ingredients in our products to support you and your family
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center flex flex-col items-center">
              <div className="w-14 h-14 mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-primary-foreground font-semibold text-sm tracking-widest uppercase mb-2">{s.label}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">{s.desc}</p>
              <div className="w-full mt-auto">
                <button
                  type="button"
                  onClick={() => setActive({ ...s.image, category: s.label })}
                  aria-label={`View larger: ${s.image.alt}`}
                  className="block w-full aspect-[4/3] overflow-hidden rounded-lg bg-primary-foreground/10 ring-1 ring-primary-foreground/15 focus:outline-none focus:ring-2 focus:ring-primary-foreground/60 cursor-zoom-in group"
                >
                  <img
                    src={s.image.src}
                    alt={s.image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background border-border">
          {active && (
            <>
              <div className="bg-muted flex items-center justify-center max-h-[75vh]">
                <img
                  src={active.src}
                  alt={active.alt}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
              <DialogHeader className="px-6 py-4 text-left">
                <DialogTitle className="text-xs tracking-widest uppercase text-muted-foreground font-semibold">
                  {active.category}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground">
                  {active.alt}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default TrustBanner;
