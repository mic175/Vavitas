import { Sparkles, Users, CheckCircle2 } from "lucide-react";
import collagenFibers from "@/assets/collagen-fibers.jpg";
import collagenSkin from "@/assets/collagen-skin.jpg";
import collagenLifestyle from "@/assets/collagen-lifestyle.jpg";
import reasonElasticity from "@/assets/collagen-reason-elasticity.jpg";
import reasonWrinkle from "@/assets/collagen-reason-wrinkle.jpg";
import reasonHairNails from "@/assets/collagen-reason-hair-nails.jpg";
import reasonJoints from "@/assets/collagen-reason-joints.jpg";
import verisolLogo from "@/assets/logo-verisol-gelita.png";
import vavitasLogo from "@/assets/vavitas-logo.png";
import VavitasChoiceBadge from "@/components/VavitasChoiceBadge";
import VavitasStandardFrame from "@/components/VavitasStandardFrame";
import AnimatedImageFrame from "@/components/AnimatedImageFrame";
import { L } from "@/i18n/L";

const CollagenEducation = () => {
  return (
    <section className="max-w-6xl mx-auto mb-14 space-y-12 md:space-y-14">
      {/* Intro Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          <L>{`Collagen 101 · Powered by VERISOL®`}</L>
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
          <L>{`The Bioactive Collagen Peptide Clinically Proven for Skin, Hair & Nails`}</L>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          <L>{`Collagen is the body's most abundant protein — the scaffolding behind firm skin, strong hair and resilient nails. After 25, our natural collagen production drops about 1% every year. Vavitas Collagen Peptides deliver VERISOL® — bioactive peptides specifically optimized to stimulate skin cell metabolism from within.`}</L>
        </p>
      </div>

      {/* Generic vs VERISOL comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"><L>{`Generic Collagen`}</L></p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4"><L>{`Undirected Protein`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`Most collagen powders are generic hydrolyzed peptides — fragments of varying size that the body uses for general protein needs, with no clinical evidence of where they end up.`}</L>
          </p>
        </div>
        <div className="rounded-sm p-8 relative">
          <VavitasChoiceBadge />
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2"><L>{`VERISOL® Bioactive Peptides`}</L></p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4"><L>{`Targeted to Your Skin Cells`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`Specifically optimized peptide sizes that stimulate fibroblasts in the skin —`}</L>
            <span className="font-semibold text-primary"> <L>{`clinically proven`}</L></span> <L>{`to boost elasticity in 4 weeks and reduce wrinkle volume in 8 weeks.`}</L>
          </p>
        </div>
      </div>

      {/* Collagen fibers feature block */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <AnimatedImageFrame
          src={collagenFibers}
          alt="Collagen triple-helix fibers visualization"
        />
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`The Body's Scaffolding`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`Why Collagen Is the Protein That Holds Us Together`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-6">
            <L>{`Collagen makes up roughly 30% of all protein in the body — the structural matrix of skin, hair, nails, bones, joints and connective tissue. As natural production declines with age, supplementing with bioactive peptides helps replenish this essential scaffolding from the inside out.`}</L>
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`2500mg`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Clinical dose`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`4 wks`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Visible results`}</L></p>
            </div>
            <div className="text-center">
              <p className="font-heading text-3xl font-semibold text-primary"><L>{`VERISOL®`}</L></p>
              <p className="text-xs text-muted-foreground mt-1"><L>{`Trusted quality`}</L></p>
            </div>
          </div>
        </div>
      </div>

      {/* Four key benefits */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`Why VERISOL® Matters`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
            <L>{`Four Reasons to Choose Bioactive Peptides`}</L>
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              image: reasonElasticity,
              title: "Skin Elasticity",
              text: "Clinical studies show a significant increase in skin elasticity after just 4 weeks of daily use.",
            },
            {
              image: reasonWrinkle,
              title: "Wrinkle Reduction",
              text: "Measurable reduction in eye wrinkle volume after 8 weeks — supporting visibly smoother skin.",
            },
            {
              image: reasonHairNails,
              title: "Hair & Nail Strength",
              text: "Stronger nail growth and reduced breakage, plus improved hair resilience and shine.",
            },
            {
              image: reasonJoints,
              title: "Joint & Connective Tissue",
              text: "Supports the connective tissue that cushions joints and maintains mobility as you age.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border/40 rounded-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted/30">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={768}
                  height={768}
                />
              </div>
              <div className="p-6">
                <h4 className="font-heading font-semibold text-foreground mb-2"><L>{item.title}</L></h4>
                <p className="text-sm text-foreground/70 leading-relaxed"><L>{item.text}</L></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Beauty spotlight */}
      <div className="grid md:grid-cols-5 gap-8 items-center bg-muted/30 rounded-sm p-6 md:p-10">
        <div className="md:col-span-2 flex justify-center">
          <img
            src={collagenSkin}
            alt="Premium skincare flat lay representing radiant skin"
            className="w-full max-w-[320px] aspect-square object-cover rounded-sm"
            loading="lazy"
            width={1280}
            height={960}
          />
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]"><L>{`Beauty From Within`}</L></p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`Skincare That Works Where Topicals Can't Reach`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-4">
            <L>{`Topical creams sit on the surface — but visible aging starts in the deeper dermal layer where collagen is produced. VERISOL® bioactive peptides travel through the bloodstream to fibroblasts, signalling them to produce new collagen, elastin and proteoglycans for firmer, more hydrated skin.`}</L>
          </p>
          <p className="text-sm text-muted-foreground italic">
            <L>{`*Results based on randomized, double-blind, placebo-controlled clinical studies on VERISOL® bioactive collagen peptides.`}</L>
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
            <L>{`For Everyone Who Wants to Age on Their Own Terms`}</L>
          </h3>
          <ul className="space-y-3">
            {[
              "Adults 25+ noticing the first signs of fine lines or loss of firmness",
              "Anyone prioritizing visible skin elasticity, hydration and glow",
              "People with brittle nails or hair that's lost its strength",
              "Active individuals supporting joint and connective tissue resilience",
              "Beauty-from-within enthusiasts who want clinically validated results",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed"><L>{text}</L></span>
              </li>
            ))}
          </ul>
        </div>
        <AnimatedImageFrame
          src={collagenLifestyle}
          alt="Diverse group representing everyone who benefits from collagen"
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
            <L>{`Made with`}</L>{" "}
            <span className="italic text-primary"><L>{`VERISOL®`}</L></span>
            <br className="hidden md:block" />{" "}
            the Clinically Proven Bioactive Collagen Peptide
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
                src={verisolLogo}
                alt="VERISOL® bioactive collagen peptide ingredient brand"
                className="max-h-full w-auto object-contain"
                loading="lazy"
                width={768}
                height={512}
              />
            </div>
          </div>

          <p className="text-foreground/75 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
            <L>{`Vavitas formulates with VERISOL® — a specifically optimized bioactive collagen peptide backed by multiple peer-reviewed clinical studies for skin elasticity, wrinkle reduction and nail strength. Sourced from a leading European collagen specialist and delivered at the full clinical dose, with no fillers or artificial flavors.`}</L>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-primary/15">
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`2500mg`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Clinical dose`}</L></p>
            </div>
            <div className="border-x border-primary/15">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`4 wks`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Visible results`}</L></p>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`VERISOL®`}</L></p>
            </div>
          </div>
        </div>
      </VavitasStandardFrame>
    </section>
  );
};

export default CollagenEducation;
