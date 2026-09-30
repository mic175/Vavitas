import { Fish, Heart, Brain, Eye, Activity, ShieldCheck, Sparkles, FlaskConical, ArrowRight, Users, CheckCircle2, Droplets } from "lucide-react";
import oceanImg from "@/assets/fish-oil-ocean.jpg";
import heartImg from "@/assets/fish-oil-heart.jpg";
import lifestyleImg from "@/assets/fish-oil-lifestyle.jpg";
import journeyImg from "@/assets/fish-oil-journey.jpg";
import sourceIcon from "@/assets/fish-oil-source-icon.png";
import purifyIcon from "@/assets/fish-oil-purify-icon.png";
import absorbIcon from "@/assets/fish-oil-absorb-icon.png";
import iconConcentration from "@/assets/fish-oil-icon-concentration.png";
import iconFreshness from "@/assets/fish-oil-icon-freshness.png";
import iconAnchovy from "@/assets/fish-oil-icon-anchovy.png";
import iconIfos from "@/assets/fish-oil-icon-ifos.png";
import vavitasLogo from "@/assets/vavitas-logo.png";
import VavitasChoiceBadge from "@/components/VavitasChoiceBadge";
import VavitasStandardFrame from "@/components/VavitasStandardFrame";
import AnimatedImageFrame from "@/components/AnimatedImageFrame";
import { L } from "@/i18n/L";

const FishOilEducation = () => {
  return (
    <section className="max-w-6xl mx-auto mb-14 space-y-12 md:space-y-14">
      {/* 1. Intro Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          <L>{`Fish Oil 101 · The Deep-Sea Omega-3 Formula`}</L>
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
          <L>{`High-Purity Omega-3 — Engineered for Lifelong Heart, Brain &amp; Vessel Health`}</L>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          <L>{`Modern diets fall short on the marine omega-3s the body cannot make. Vavitas pairs`}</L>{" "}
          <span className="text-primary font-medium"><L>{`700 mg of Omega-3`}</L></span> <L>{`per softgel with a`}</L>{" "}
          <span className="text-primary font-medium"><L>{`DPA-enriched EPA · DHA · DPA`}</L></span> <L>{`profile — the complete trio that supports cardiovascular, cognitive, and vascular wellness, batch after batch.`}</L>
        </p>
      </div>

      {/* 2. Ordinary fish oil vs Vavitas comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <L>{`Ordinary Fish Oil`}</L>
          </p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            <L>{`Low Concentration, EPA + DHA Only`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`Most fish oils deliver only 30% omega-3 from large predatory fish — meaning more capsules, more fillers, higher heavy-metal exposure, and the missing third partner: DPA, the quiet multiplier of vascular metabolism.`}</L>
          </p>
        </div>
        <div className="rounded-sm p-8 relative">
          <VavitasChoiceBadge />
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            <L>{`Vavitas Deep-Sea Fish Oil`}</L>
          </p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            <L>{`70% Omega-3 with the Complete EPA · DHA · DPA Trio`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <span className="font-semibold text-primary"><L>{`700 mg of Omega-3`}</L></span> <L>{`in a single softgel — molecularly distilled from small Peruvian deep-sea anchovies, low-oxidation controlled, and IFOS-tested. The DPA upgrade supports lipid metabolism up to`}</L>{" "}
            <span className="font-semibold text-primary"><L>{`10–20× more efficiently`}</L></span> <L>{`than EPA alone.`}</L>
          </p>
        </div>
      </div>

      {/* 3. The Modern Omega-3 Gap — visual + 3 stats */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <AnimatedImageFrame
          src={oceanImg}
          alt="Sunlit pristine deep ocean waters where Vavitas sources its anchovy fish oil"
        />
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`The Modern Omega-3 Gap`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`We Eat Less Deep-Sea Fish. Our Vessels Notice.`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-6">
            <L>{`Refined diets, busy lifestyles and shrinking deep-sea fish intake leave most adults chronically short on EPA, DHA and DPA. Vavitas concentrates a clinically meaningful`}</L>{" "}
            <strong><L>{`700 mg of Omega-3`}</L></strong> <L>{`into one softgel — the daily level supported by global cardiology guidance for sustained cardiovascular and cognitive resilience.`}</L>
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`700mg`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Omega-3 / softgel`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`EPA·DHA·DPA`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Complete trio`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`IFOS`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`5-Star Tested`}</L></p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. The Science — 3 steps + journey illustration */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`From Deep Sea to Cellular Health`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            <L>{`How Vavitas Omega-3 Works — Step by Step`}</L>
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Sourced From Cold Deep Seas",
              text: "Small Peruvian anchovies — short-lived, low on the food chain — provide naturally clean omega-3 oil with minimal heavy metal accumulation.",
              illustration: sourceIcon,
              scene: "Origin · Peruvian deep waters",
            },
            {
              step: "02",
              title: "Molecularly Distilled & Stabilised",
              text: "Multi-stage molecular distillation removes contaminants and concentrates omega-3 to 70%+, while strict oxidation control keeps every softgel fresh.",
              illustration: purifyIcon,
              scene: "Refinement · low oxidation",
            },
            {
              step: "03",
              title: "Absorbed Where It Matters",
              text: "EPA, DHA and DPA integrate into cell membranes — fueling the heart, brain, retina and vascular tissues that depend on marine omega-3.",
              illustration: absorbIcon,
              scene: "Cellular · whole-body delivery",
            },
          ].map((item, i) => (
            <div key={i} className="relative bg-card border border-border/40 rounded-sm p-6">
              <p className="font-heading text-5xl font-semibold text-primary/15 absolute top-4 right-5">
                {item.step}
              </p>
              <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mb-4 relative overflow-hidden">
                <img
                  src={item.illustration}
                  alt=""
                  className="w-full h-full object-contain mix-blend-multiply"
                  loading="lazy"
                  width={64}
                  height={64}
                />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2 relative"><L>{item.title}</L></h4>
              <p className="text-sm text-foreground/70 leading-relaxed relative mb-3"><L>{item.text}</L></p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-semibold relative">
                <L>{item.scene}</L>
              </p>
              {i < 2 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-primary/40 absolute -right-5 top-1/2 -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 relative max-w-2xl mx-auto">
          <div className="overflow-hidden bg-transparent">
            <img
              src={journeyImg}
              alt="Watercolor journey of Vavitas Fish Oil: anchovy school, golden softgel, body absorption, active longevity"
              className="w-full h-auto object-contain mix-blend-multiply"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 px-2">
            {[
              { n: "01", label: "Deep-Sea Source", sub: "Peruvian anchovy" },
              { n: "02", label: "Molecular Refinement", sub: "70%+ Omega-3" },
              { n: "03", label: "Cellular Uptake", sub: "Heart · brain · vessels" },
              { n: "04", label: "Active Longevity", sub: "Daily, lifelong support" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-[10px] tracking-[0.3em] text-primary/70 font-semibold uppercase">
                  {s.n}
                </p>
                <p className="font-heading text-sm text-foreground mt-1"><L>{s.label}</L></p>
                <p className="text-[11px] text-muted-foreground mt-0.5"><L>{s.sub}</L></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Spotlight — DPA · the quiet multiplier (with 4 system pillars beneath) */}
      <div className="space-y-10">
        <div className="grid md:grid-cols-5 gap-8 items-center bg-muted/30 rounded-sm p-6 md:p-10">
          <div className="md:col-span-2 flex justify-center">
            <img
              src={heartImg}
              alt="Calm adult resting hands on heart, symbolizing cardiovascular wellness supported by omega-3"
              className="w-full max-w-[320px] aspect-square object-cover rounded-sm"
              loading="lazy"
              width={1280}
              height={960}
            />
          </div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-5 h-5 text-primary" />
              <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]">
                <L>{`DPA · The Quiet Multiplier`}</L>
              </p>
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
              <L>{`One Trio. A Lifetime of Vascular Resilience.`}</L>
            </h3>
            <p className="text-foreground/75 leading-relaxed mb-4">
              <L>{`EPA and DHA are the omega-3s most people know — but DPA is the missing partner. DPA binds rapidly with phospholipids and crosses cellular barriers more efficiently than EPA alone. Independent research suggests DPA can support lipid metabolism`}</L>{" "}
              <span className="text-primary font-medium"><L>{`10–20× more effectively`}</L></span> <L>{`than EPA — a meaningful upgrade for long-term cardiovascular and vessel health.`}</L>
            </p>
            <p className="text-sm text-muted-foreground italic">
              <L>{`*IFOS-verified composition consistently exceeds the declared 25 mg DPA — typically &gt;50 mg per softgel.`}</L>
            </p>
          </div>
        </div>

        {/* 4 systems where omega-3 works — extension of the spotlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Cardiovascular", body: "EPA & DHA help maintain healthy lipid levels and normal vascular function." },
            { icon: Brain, title: "Brain & Cognition", body: "DHA is a primary structural fatty acid of the brain, supporting clarity and focus." },
            { icon: Eye, title: "Vision Support", body: "DHA is a critical building block of the retina, supporting healthy vision." },
            { icon: Activity, title: "Joint & Mobility", body: "Omega-3 supports a balanced inflammatory response for active, comfortable joints." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-card border border-border/40 rounded-sm p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2"><L>{title}</L></h4>
              <p className="text-sm text-foreground/70 leading-relaxed"><L>{body}</L></p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Four key product advantages — Engineered for Performance, Verified for Safety */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`Why Vavitas Fish Oil`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            <L>{`Engineered for Performance, Verified for Safety`}</L>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: iconConcentration,
              title: "High Concentration",
              text: "700 mg Omega-3 per softgel (EPA 400 + DHA 300 + DPA 25 mg) — fewer capsules, easier daily compliance.",
            },
            {
              icon: iconFreshness,
              title: "Low-Oxidation Control",
              text: "Strict TOTOX standards keep every softgel fresh and bioactive — no fishy aftertaste, full nutritional value.",
            },
            {
              icon: iconAnchovy,
              title: "Deep-Sea Anchovy Source",
              text: "Small Peruvian anchovies — naturally lower in mercury and contaminants than tuna or salmon-derived oils.",
            },
            {
              icon: iconIfos,
              title: "IFOS 5-Star Verified",
              text: "Every batch independently tested by IFOS for potency, purity, oxidation and contaminants — and consistently exceeds label.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border/40 rounded-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2"><L>{item.title}</L></h4>
              <p className="text-sm text-foreground/70 leading-relaxed"><L>{item.text}</L></p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Who should consider */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]">
              <L>{`Who Will Thrive With It`}</L>
            </p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            <L>{`Built for Daily, Long-Term Nutritional Care`}</L>
          </h3>
          <ul className="space-y-3">
            {[
              "Adults focused on cardiovascular and lipid management",
              "Long hours of mental work or high cognitive demand",
              "Active lifestyles, athletes and those with joint discomfort",
              "Anyone who rarely eats oily deep-sea fish (salmon, sardine, mackerel)",
              "Adults 40+ committed to long-term vascular and brain wellness",
              "Families seeking a clean, IFOS-verified daily omega-3",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed"><L>{text}</L></span>
              </li>
            ))}
          </ul>
        </div>
        <AnimatedImageFrame
          src={lifestyleImg}
          alt="Multi-generational family enjoying active outdoor life, supported by Vavitas omega-3"
          contain
          className="order-first md:order-last"
        />
      </div>

      {/* 8. The Vavitas Standard — final editorial trust block */}
      <VavitasStandardFrame>
        <div className="relative px-6 py-8 md:px-12 md:py-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-primary/40" />
            <p className="text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.4em]">
              <L>{`The Vavitas Standard`}</L>
            </p>
            <span className="h-px w-10 bg-primary/40" />
          </div>

          <h3 className="font-heading text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1] mb-8">
            <L>{`A New Benchmark for`}</L>{" "}
            <span className="italic text-primary"><L>{`Deep-Sea Omega-3`}</L></span>
            <br className="hidden md:block" />{" "}
            <L>{`Manufactured in the USA`}</L>
          </h3>

          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center justify-center h-16 md:h-20">
              <img
                src={vavitasLogo}
                alt="Vavitas brand mark"
                className="max-h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <p className="text-foreground/75 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            <L>{`Vavitas Fish Oil sets a new bar for the category — pairing 700 mg of high-purity Omega-3 with the complete EPA · DHA · DPA trio in a single low-oxidation softgel. Sourced from cold Peruvian deep-sea anchovies, manufactured in a US FDA-registered, NSF-certified facility, and IFOS 5-Star verified for purity, potency and freshness — the most rigorously tested way to support lifelong heart, brain and vascular wellness.`}</L>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-primary/15">
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`700mg`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Omega-3 Daily`}</L></p>
            </div>
            <div className="border-x border-primary/15">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`DPA+`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                <L>{`Complete Trio`}</L>
              </p>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`IFOS`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                <L>{`5-Star Verified`}</L>
              </p>
            </div>
          </div>
        </div>
      </VavitasStandardFrame>
    </section>
  );
};

export default FishOilEducation;
