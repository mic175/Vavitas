import { Sun, Bone, ShieldCheck, Sparkles, ArrowRight, Users, CheckCircle2, FlaskConical } from "lucide-react";
import sunlightImg from "@/assets/d3k2-sunlight.jpg";
import boneImg from "@/assets/d3k2-bone.jpg";
import lifestyleImg from "@/assets/d3k2-lifestyle.jpg";
import journeyImg from "@/assets/d3k2-journey.jpg";
import courierIcon from "@/assets/d3k2-courier-icon.png";
import step1Icon from "@/assets/d3k2-step1-icon.png";
import step3Icon from "@/assets/d3k2-step3-icon.png";
import iconDose from "@/assets/d3k2-icon-dose.png";
import iconMk7 from "@/assets/d3k2-icon-mk7.png";
import iconOil from "@/assets/d3k2-icon-oil.png";
import iconVerified from "@/assets/d3k2-icon-verified.png";
import vavitasLogo from "@/assets/vavitas-logo.png";
import VavitasChoiceBadge from "@/components/VavitasChoiceBadge";
import VavitasStandardFrame from "@/components/VavitasStandardFrame";
import AnimatedImageFrame from "@/components/AnimatedImageFrame";
import { L } from "@/i18n/L";

const VitaminD3K2Education = () => {
  return (
    <section className="max-w-6xl mx-auto mb-14 space-y-12 md:space-y-14">
      {/* Intro Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          <L>{`Vitamin D3 + K2 101 · The Synergy Formula`}</L>
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
          <L>{`Sunshine in a Softgel — Engineered for the Modern Indoor Life`}</L>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          <L>{`Over a billion people worldwide are vitamin D insufficient. But D3 alone isn't enough. Vavitas pairs`}</L> <span className="text-primary font-medium"><L>{`5000IU D3`}</L></span> <L>{`with`}</L>{" "}
          <span className="text-primary font-medium"><L>{`100mcg K2 (MK-7)`}</L></span> <L>{`— the missing partner that directs calcium where it belongs: into bones and teeth, not arteries.`}</L>
        </p>
      </div>

      {/* D alone vs D3+K2 comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            <L>{`Traditional Vitamin D`}</L>
          </p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            <L>{`Half the Equation`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`D2 or low-dose D3 boosts calcium absorption — but without K2, that calcium can drift into arteries and soft tissue instead of strengthening the skeleton it was meant to build.`}</L>
          </p>
        </div>
        <div className="rounded-sm p-8 relative">
          <VavitasChoiceBadge />
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            <L>{`Vavitas D3 + K2 (MK-7)`}</L>
          </p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            <L>{`The Complete System`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`D3 unlocks calcium absorption from the gut. K2 (MK-7) activates osteocalcin and matrix Gla protein to`}</L>{" "}
            <span className="font-semibold text-primary"><L>{`guide that calcium into bones`}</L></span> <L>{`while keeping it out of arteries — true cardiovascular and skeletal synergy.`}</L>
          </p>
        </div>
      </div>

      {/* Sunlight feature block */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <AnimatedImageFrame
          src={sunlightImg}
          alt="Bright sunlight streaming over open landscape"
        />
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`The Modern Sunlight Gap`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`We Live Indoors. Our Biology Hasn't Caught Up.`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-6">
            <L>{`Indoor work, sunscreen, latitude, age and skin tone all dramatically reduce the body's ability to synthesize vitamin D from sunshine. The result: nearly 1 in 2 adults are insufficient. Vavitas delivers a clinically meaningful`}</L> <strong><L>{`5000IU`}</L></strong> <L>{`daily — the level supported by leading endocrinology research for sustained sufficiency.`}</L>
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`5000IU`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Vitamin D3`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`100mcg`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`K2 as MK-7`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`2-in-1`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Daily softgel`}</L></p>
            </div>
          </div>
        </div>
      </div>

      {/* The science: how D3 + K2 work together */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`The Science of Synergy`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            <L>{`How D3 and K2 Work Together — Step by Step`}</L>
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "D3 Absorbs Calcium",
              text: "Vitamin D3 (cholecalciferol) signals your intestines to absorb calcium from food into the bloodstream — the form your body actually uses.",
              icon: null,
              illustration: step1Icon,
              scene: "Mealtime · gut uptake",
            },
            {
              step: "02",
              title: "K2 Activates the Couriers",
              text: "K2 (MK-7) activates osteocalcin and MGP — the proteins responsible for transporting calcium to bones and away from arterial walls.",
              icon: null,
              illustration: courierIcon,
              scene: "In-transit · protein couriers",
            },
            {
              step: "03",
              title: "Calcium Lands Where It Belongs",
              text: "Bones and teeth gain density. Arteries stay flexible. The cardiovascular and skeletal systems work in harmony — not in conflict.",
              icon: null,
              illustration: step3Icon,
              scene: "Bone density · supple arteries",
            },
          ].map((item, i) => (
            <div key={i} className="relative bg-card border border-border/40 rounded-sm p-6">
              <p className="font-heading text-5xl font-semibold text-primary/15 absolute top-4 right-5">
                {item.step}
              </p>
              <div className={`${item.illustration ? "w-16 h-16" : "w-11 h-11"} rounded-sm bg-primary/10 flex items-center justify-center mb-4 relative overflow-hidden`}>
                {item.illustration ? (
                  <img src={item.illustration} alt="" className="w-full h-full object-contain mix-blend-multiply" loading="lazy" width={64} height={64} />
                ) : (
                  <item.icon className="w-5 h-5 text-primary" />
                )}
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2 relative"><L>{item.title}</L></h4>
              <p className="text-sm text-foreground/70 leading-relaxed relative mb-3"><L>{item.text}</L></p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary/70 font-semibold relative"><L>{item.scene}</L></p>
              {i < 2 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-primary/40 absolute -right-5 top-1/2 -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>

        {/* Visual journey illustration — sun → gut → skeleton → heart */}
        <div className="mt-12 relative max-w-2xl mx-auto">
          <div className="overflow-hidden bg-transparent">
            <img
              src={journeyImg}
              alt="Diverse global personas illustrating the D3 + K2 journey: sunlight, intestinal absorption, skeletal strength, and cardiovascular health"
              className="w-full h-auto object-contain mix-blend-multiply"
              loading="lazy"
              width={1920}
              height={576}
            />
          </div>
          {/* Subtle journey labels under the illustration */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 px-2">
            {[
              { n: "01", label: "Sunlight Source", sub: "D3 synthesised" },
              { n: "02", label: "Gut Absorption", sub: "Calcium uptake" },
              { n: "03", label: "Skeletal Strength", sub: "K2 directs to bone" },
              { n: "04", label: "Heart Protection", sub: "Arteries stay clear" },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="text-[10px] tracking-[0.3em] text-primary/70 font-semibold uppercase">{s.n}</p>
                <p className="font-heading text-sm text-foreground mt-1"><L>{s.label}</L></p>
                <p className="text-[11px] text-muted-foreground mt-0.5"><L>{s.sub}</L></p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bone health spotlight */}
      <div className="grid md:grid-cols-5 gap-8 items-center bg-muted/30 rounded-sm p-6 md:p-10">
        <div className="md:col-span-2 flex justify-center">
          <img
            src={boneImg}
            alt="Mother and grandmother walking together in warm afternoon sunlight, symbolizing lifelong bone and heart wellness"
            className="w-full max-w-[320px] aspect-square object-cover rounded-sm"
            loading="lazy"
            width={1280}
            height={960}
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-3">
            <Bone className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]">
              <L>{`Bone & Heart Spotlight`}</L>
            </p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`One Nutrient Pair. Two Lifelong Systems.`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-4">
            <L>{`Bone density peaks in your late 20s, then steadily declines — especially after menopause and andropause. Meanwhile, arterial calcification quietly accelerates with age. The D3+K2 pairing is the only nutritional duo proven to support`}</L>{" "}
            <span className="text-primary font-medium"><L>{`both`}</L></span> <L>{`ends of this equation, helping preserve skeletal strength while keeping vascular tissue supple.`}</L>
          </p>
          <p className="text-sm text-muted-foreground italic">
            <L>{`*MK-7 is the most bioavailable form of K2, with a half-life over 70× longer than MK-4.`}</L>
          </p>
        </div>
      </div>

      {/* Four key benefits */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`Why Vavitas D3 + K2`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            <L>{`Engineered for Performance, Verified for Safety`}</L>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: iconDose,
              title: "Clinically Optimal Dose",
              text: "5000IU D3 — the daily level endorsed by The Endocrine Society for adults with limited sun exposure.",
            },
            {
              icon: iconMk7,
              title: "MK-7 Bioactive Form",
              text: "Premium menaquinone-7 from natural fermentation — the most absorbable, longest-lasting form of K2.",
            },
            {
              icon: iconOil,
              title: "Oil-Suspended Delivery",
              text: "Suspended in olive oil for fat-soluble vitamins to absorb up to 5× more efficiently than dry tablets.",
            },
            {
              icon: iconVerified,
              title: "Third-Party Verified",
              text: "Every batch tested in a US NSF-certified facility for potency, purity and freedom from heavy metals and contaminants.",
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

      {/* Who should consider */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]">
              <L>{`Who Will Thrive With It`}</L>
            </p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            <L>{`Made for Bright Days and Long Lives`}</L>
          </h3>
          <ul className="space-y-3">
            {[
              "Office workers, drivers and anyone spending most daylight hours indoors",
              "Adults 40+ protecting bone density and cardiovascular flexibility",
              "Women in or approaching menopause, when bone loss accelerates",
              "Active families building strong skeletons for the next generation",
              "People in northern latitudes or who consistently use sunscreen",
              "Anyone supplementing calcium and looking for safe, balanced support",
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
          alt="Active adults enjoying outdoor lifestyle in sunlight"
          contain
          className="order-first md:order-last"
        />
      </div>

      {/* The Vavitas Standard — editorial trust block */}
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
            <span className="italic text-primary"><L>{`D3 + K2`}</L></span>
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
            <L>{`Vavitas D3 + K2 sets a new bar for the category — pairing a clinically meaningful 5000IU of D3 with 100mcg of bioactive MK-7 in a single oil-suspended softgel. Manufactured in a US FDA-registered, NSF-certified facility and third-party tested for purity, it's the simplest, most rigorously verified way to close the modern sunshine gap and support lifelong bone and cardiovascular wellness.`}</L>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-primary/15">
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`5000IU`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`D3 Daily`}</L></p>
            </div>
            <div className="border-x border-primary/15">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`MK-7`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                <L>{`Bioactive K2`}</L>
              </p>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`NSF`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                <L>{`Certified`}</L>
              </p>
            </div>
          </div>
        </div>
      </VavitasStandardFrame>
    </section>
  );
};

export default VitaminD3K2Education;
