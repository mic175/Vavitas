import { Heart, Users, CheckCircle2 } from "lucide-react";
import mitochondriaImg from "@/assets/ubiquinol-mitochondria.jpg";
import lifestyleImg from "@/assets/ubiquinol-lifestyle.jpg";
import heartImg from "@/assets/ubiquinol-heart.jpg";
import kanekaLogo from "@/assets/logo-kaneka-qh.png";
import vavitasLogo from "@/assets/vavitas-logo.png";
import reasonAgeImg from "@/assets/ubiquinol-reason-age.jpg";
import reasonAbsorptionImg from "@/assets/ubiquinol-reason-absorption.jpg";
import reasonAntioxidantImg from "@/assets/ubiquinol-reason-antioxidant.jpg";
import reasonEnergyImg from "@/assets/ubiquinol-reason-energy.jpg";
import VavitasChoiceBadge from "@/components/VavitasChoiceBadge";
import VavitasStandardFrame from "@/components/VavitasStandardFrame";
import AnimatedImageFrame from "@/components/AnimatedImageFrame";
import { L } from "@/i18n/L";

const UbiquinolEducation = () => {
  return (
    <section className="max-w-6xl mx-auto mb-14 space-y-12 md:space-y-14">
      {/* Intro Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          <L>{`Ubiquinol 101 · Powered by Kaneka Ubiquinol®`}</L>
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
          <L>{`The Active Form of CoQ10 Your Cells Can Use Immediately`}</L>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          <L>{`CoQ10 fuels every cell in your body — but as we age, our ability to convert it into its usable form declines. Vavitas Ubiquinol delivers the body-ready form directly, so your heart, brain and muscles get the energy and antioxidant protection they need.`}</L>
        </p>
      </div>

      {/* Ubiquinone vs Ubiquinol comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"><L>{`Ubiquinone`}</L></p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4"><L>{`The Raw Material`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`The oxidized form of CoQ10. Before your body can use it as an antioxidant, it must first convert ubiquinone into ubiquinol — a process that becomes less efficient as we age.`}</L>
          </p>
        </div>
        <div className="rounded-sm p-8 relative">
          <VavitasChoiceBadge />
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2"><L>{`Ubiquinol`}</L></p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4"><L>{`The Finished Product`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`The reduced, active antioxidant form your body uses immediately. Up to`}</L>{" "}
            <span className="font-semibold text-primary"><L>{`8× more bioavailable`}</L></span> <L>{`than standard CoQ10 — directly supporting cellular energy and free-radical defense.`}</L>
          </p>
        </div>
      </div>

      {/* Mitochondria feature block */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <AnimatedImageFrame
          src={mitochondriaImg}
          alt="Mitochondria producing ATP energy molecules"
          height={832}
        />
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`Cellular Energy Engine`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`Where Your Body's ATP Is Born`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-6">
            <L>{`Inside every cell, mitochondria turn the food you eat into ATP — the fuel that powers every heartbeat, thought and movement. Ubiquinol is essential to this energy chain, shuttling electrons that drive ATP production and neutralizing free radicals that damage your cells along the way.`}</L>
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary">8×</p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Better absorption`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`100mg`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Per softgel`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`Kaneka®`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Trusted quality`}</L></p>
            </div>
          </div>
        </div>
      </div>

      {/* Four key benefits */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`Why Ubiquinol Matters`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            <L>{`Four Reasons to Choose the Active Form`}</L>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: reasonAgeImg,
              alt: "Smiling mature person holding a glowing CoQ10 molecule",
              title: "Natural Decline With Age",
              text: "After 40, the body's ability to convert ubiquinone into ubiquinol slows down — making the active form a smarter choice.",
            },
            {
              image: reasonAbsorptionImg,
              alt: "Friendly cell character absorbing golden nutrient droplets",
              title: "Superior Absorption",
              text: "Clinical studies show Ubiquinol is approximately 8× more bioavailable than standard CoQ10.",
            },
            {
              image: reasonAntioxidantImg,
              alt: "Cheerful cell character holding a teal shield against free radicals",
              title: "Antioxidant Power",
              text: "The only form of CoQ10 that acts directly as an antioxidant, shielding cells from oxidative damage.",
            },
            {
              image: reasonEnergyImg,
              alt: "Joyful person radiating warm sunlit energy",
              title: "Energy Efficiency",
              text: "Already in the form your body needs — fueling the heart, brain and muscles that depend on mitochondrial activity.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border/40 rounded-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="aspect-square bg-warm-cream/40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={768}
                  height={768}
                />
              </div>
              <div className="p-5">
                <h4 className="font-heading font-semibold text-foreground mb-2"><L>{item.title}</L></h4>
                <p className="text-sm text-foreground/70 leading-relaxed"><L>{item.text}</L></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heart health spotlight */}
      <div className="grid md:grid-cols-5 gap-8 items-center bg-muted/30 rounded-sm p-6 md:p-10">
        <div className="md:col-span-2 flex justify-center">
          <img
            src={heartImg}
            alt="Heart illustration symbolizing cardiovascular support"
            className="w-full max-w-[320px] aspect-square object-cover rounded-sm"
            loading="lazy"
            width={1024}
            height={1024}
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]"><L>{`Heart Health Spotlight`}</L></p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`A Tireless Muscle Demands Tireless Energy`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-4">
            <L>{`The heart contains some of the highest concentrations of CoQ10 in the body — for good reason. It beats over 100,000 times a day, and every contraction depends on mitochondrial energy. Ubiquinol helps maintain the cellular fuel and antioxidant balance your cardiovascular system relies on.`}</L>
          </p>
          <p className="text-sm text-muted-foreground italic">
            <L>{`*Statins and certain medications are known to deplete CoQ10 levels — talk to your healthcare provider if this applies to you.`}</L>
          </p>
        </div>
      </div>

      {/* Who should consider */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]"><L>{`Who It's For`}</L></p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            <L>{`Designed for the Lives You Want to Keep Living`}</L>
          </h3>
          <ul className="space-y-3">
            {[
              "Adults 40+ supporting healthy aging from the cellular level",
              "People taking statins, which are known to deplete CoQ10",
              "Anyone focused on long-term heart and cardiovascular wellness",
              "Active individuals seeking sustained energy and recovery",
              "Those experiencing fatigue or low daily energy",
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
          alt="Active mature couple jogging together"
          contain
          height={832}
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
            <L>{`Made with`}</L>{" "}
            <span className="italic text-primary"><L>{`Kaneka Ubiquinol®`}</L></span>
            <br className="hidden md:block" />{" "}
            the World's Most Trusted Source
          </h3>

          <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="flex items-center justify-center h-16 md:h-20">
              <img
                src={vavitasLogo}
                alt="Vavitas brand mark"
                className="max-h-full w-auto object-contain"
                loading="lazy"
              />
            </div>
            <span className="h-12 md:h-16 w-px bg-primary/25" aria-hidden="true" />
            <div className="flex items-center justify-center h-16 md:h-20">
              <img
                src={kanekaLogo}
                alt="Made with Quality — Kaneka Ubiquinol® official seal"
                className="max-h-full w-auto object-contain"
                loading="lazy"
                width={1213}
                height={1080}
              />
            </div>
          </div>

          <p className="text-foreground/75 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            <L>{`Vavitas formulates with Kaneka Ubiquinol® — a patented ubiquinol ingredient and the active antioxidant form of CoQ10. Produced through Kaneka's proprietary yeast-fermentation process and manufactured at its U.S. facility, it's the same form recognized worldwide for its stability, purity and superior bioavailability — now delivered in our premium softgel for everyday use.`}</L>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-primary/15">
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">8×</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Bioavailable`}</L></p>
            </div>
            <div className="border-x border-primary/15">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`USA`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Fermented`}</L></p>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Kaneka Ubiquinol®`}</L></p>
            </div>
          </div>
        </div>
      </VavitasStandardFrame>
    </section>
  );
};

export default UbiquinolEducation;
