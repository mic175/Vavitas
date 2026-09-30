import { Dna, FlaskConical, TrendingDown, Award, CheckCircle2, Microscope, Users, Sparkles, Atom, Globe2, Stethoscope, GraduationCap } from "lucide-react";
import vavitasLogo from "@/assets/vavitas-logo.png";
import VavitasChoiceBadge from "@/components/VavitasChoiceBadge";
import VavitasStandardFrame from "@/components/VavitasStandardFrame";
import scientistImai from "@/assets/scientist-imai.jpg";
import scientistSinclair from "@/assets/scientist-sinclair.jpg";
import sinclairLifespan from "@/assets/sinclair-lifespan.jpg";
import scientistMaier from "@/assets/scientist-maier.jpg";
import nmnPathway from "@/assets/nmn-pathway.jpg";
import clinicalLab from "@/assets/clinical-lab.jpg";
import vavitasTeamConference from "@/assets/vavitas-team-conference.jpg";
import logoWashU from "@/assets/logo-washu.svg";
import logoHarvardMedical from "@/assets/logo-harvard-medical.svg";
import logoNUS from "@/assets/logo-nus.svg";
import nmnGlobalTrials from "@/assets/nmn-global-trials.jpg";
import lifestyleBrain from "@/assets/lifestyle-brain.jpg";
import lifestyleHeart from "@/assets/lifestyle-heart.jpg";
import lifestyleMuscle from "@/assets/lifestyle-muscle.jpg";
import lifestyleSkin from "@/assets/lifestyle-skin.jpg";
import age20Vitality from "@/assets/age-20-vitality.jpg";
import age40Vitality from "@/assets/age-40-vitality.jpg";
import age60Vitality from "@/assets/age-60-vitality.jpg";
import nmnStep1Icon from "@/assets/nmn-step1-icon.png";
import nmnStep2Icon from "@/assets/nmn-step2-icon.png";
import nmnStep3Icon from "@/assets/nmn-step3-icon.png";
import nmnStep4Icon from "@/assets/nmn-step4-icon.png";
import productNmn from "@/assets/product-vavitas-nmn.png";
import { L } from "@/i18n/L";

const NMNEducation = () => {
  return (
    <section className="max-w-6xl mx-auto mb-14 space-y-12 md:space-y-14">
      {/* Intro Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
          <L>{`NMN 101 · The Science of Healthy Longevity`}</L>
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
          <L>{`Replenishing the Cellular Currency of Youth`}</L>
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          <L>{`NMN (β-Nicotinamide Mononucleotide) is the most efficient direct precursor to NAD⁺ — a coenzyme essential for energy metabolism, DNA repair and cellular vitality. As we age, NAD⁺ levels decline sharply. Vavitas NMN is engineered to restore them, drawing on decades of pioneering research from the world's leading longevity scientists.`}</L>
        </p>
      </div>

      {/* The NMN → NAD+ pathway */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"><L>{`Step 01`}</L></p>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3"><L>{`NMN Intake`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`A natural B3-derived molecule found in broccoli, avocado and edamame — but only in trace amounts. Oral NMN is highly bioavailable in humans.`}</L>
          </p>
        </div>
        <div className="bg-primary/5 rounded-sm p-8 border-2 border-primary/30 relative">
          <span className="absolute -top-3 left-6 bg-primary text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-sm">
            <L>{`Conversion`}</L>
          </span>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2"><L>{`Step 02`}</L></p>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3"><L>{`Converts to NAD⁺`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`Of all NAD⁺ precursors (NA, NAM, NR, NMN), NMN is the most efficient — converted in a single enzymatic step to fuel every cell in the body.`}</L>
          </p>
        </div>
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"><L>{`Step 03`}</L></p>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-3"><L>{`Cellular Renewal`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`NAD⁺ powers mitochondrial energy, sirtuin activation, DNA repair and cell revitalization — the biological foundations of healthy aging.`}</L>
          </p>
        </div>
      </div>

      {/* NR vs NMN — Vavitas Choice comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"><L>{`Nicotinamide Riboside (NR)`}</L></p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4"><L>{`The Indirect Path`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`An earlier-generation NAD⁺ precursor. NR must first be converted into NMN inside the cell before it can become NAD⁺ — adding an extra enzymatic step and reducing efficiency along the way.`}</L>
          </p>
        </div>
        <div className="rounded-sm p-8 relative">
          <VavitasChoiceBadge />
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2"><L>{`β-Nicotinamide Mononucleotide (NMN)`}</L></p>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4"><L>{`The Direct Precursor`}</L></h3>
          <p className="text-foreground/75 leading-relaxed text-sm">
            <L>{`The most efficient direct precursor to NAD⁺ — converted in a`}</L>{" "}
            <span className="font-semibold text-primary"><L>{`single enzymatic step`}</L></span> <L>{`by NMNAT. Larger and more bioactive than NR, NMN delivers cellular fuel exactly where the body needs it.`}</L>
          </p>
        </div>
      </div>

      {/* Pathway visual — NMN's journey through the human body */}
      <figure className="relative rounded-sm overflow-hidden border border-primary/20 bg-gradient-to-br from-background via-primary/[0.03] to-primary/[0.07]">
        {/* Decorative ambient glow */}
        <div className="pointer-events-none absolute -top-32 -right-24 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative px-6 py-8 md:px-12 md:py-12">
          {/* Header */}
          <div className="text-center mb-8 md:mb-14 max-w-2xl mx-auto">
            <p className="text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.35em] mb-3">
              <L>{`The Cellular Journey`}</L>
            </p>
            <h3 className="font-heading text-2xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight mb-4">
              <L>{`From a Single Capsule`}</L> <br className="hidden sm:block" />
              <span className="italic text-primary"><L>{`to Every Cell in Your Body`}</L></span>
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <L>{`Trace NMN's path — absorbed in minutes, converted in a single enzymatic step, and delivered as NAD⁺ to power the body's most vital biological systems.`}</L>
            </p>
          </div>

          {/* Journey diagram — 4 stages */}
          <ol className="relative grid gap-6 md:gap-4 md:grid-cols-4 mb-12">
            {/* Animated connector line on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />

            {[
              {
                stage: "01",
                time: "T+0 min",
                title: "Oral Intake",
                body: "A single Vavitas capsule delivers pharmaceutical-grade β-NMN — bypassing the trace amounts found in food.",
                illustration: nmnStep1Icon,
              },
              {
                stage: "02",
                time: "T+15 min",
                title: "Rapid Absorption",
                body: "Specialized Slc12a8 transporters in the small intestine usher NMN into the bloodstream within minutes.",
                illustration: nmnStep2Icon,
              },
              {
                stage: "03",
                time: "T+30 min",
                title: "NAD⁺ Conversion",
                body: "Inside every cell, NMN is converted to NAD⁺ in a single enzymatic step by NMNAT — the most efficient pathway known.",
                illustration: nmnStep3Icon,
              },
              {
                stage: "04",
                time: "Continuous",
                title: "Cellular Renewal",
                body: "NAD⁺ activates sirtuins, fuels mitochondria, repairs DNA — the biochemical foundation of healthy aging.",
                illustration: nmnStep4Icon,
              },
            ].map((step, i) => (
              <li key={step.stage} className="relative group">
                <div className="relative flex flex-col items-center text-center">
                  {/* Circular icon node */}
                  <div className="relative mb-4">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-primary/15 blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="relative w-[88px] h-[88px] rounded-full bg-background border border-primary/20 flex items-center justify-center shadow-sm group-hover:border-primary/50 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                      <img
                        src={step.illustration}
                        alt=""
                        loading="lazy"
                        width={512}
                        height={512}
                        className="w-[78px] h-[78px] object-contain mix-blend-multiply"
                      />
                    </div>
                    <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-[10px] font-bold tracking-wider shadow-md">
                      {step.stage}
                    </span>
                  </div>

                  <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-primary/70 mb-1.5">
                    <L>{step.time}</L>
                  </p>
                  <h4 className="font-heading text-base md:text-lg font-semibold text-foreground mb-2 tracking-tight">
                    <L>{step.title}</L>
                  </h4>
                  <p className="text-xs md:text-[13px] text-foreground/70 leading-relaxed max-w-[220px] mx-auto">
                    <L>{step.body}</L>
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Reaction equation */}
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.06] to-transparent rounded-sm" />
            <div className="relative flex flex-wrap items-center justify-center gap-3 md:gap-6 px-6 py-6 md:py-8 border-y border-primary/15">
              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-1"><L>{`Precursor`}</L></p>
                <p className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight"><L>{`NMN`}</L></p>
              </div>

              <div className="flex flex-col items-center gap-1 px-2">
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70 font-semibold"><L>{`NMNAT enzyme`}</L></span>
                <svg viewBox="0 0 80 16" className="w-16 md:w-24 h-4 text-primary" aria-hidden="true" focusable="false">
                  <line x1="2" y1="8" x2="70" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <polyline points="64,3 72,8 64,13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[10px] text-muted-foreground italic"><L>{`single step`}</L></span>
              </div>

              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-1"><L>{`Cellular Fuel`}</L></p>
                <p className="font-heading text-2xl md:text-3xl font-semibold text-primary tracking-tight"><L>{`NAD⁺`}</L></p>
              </div>

              <div className="hidden md:flex flex-col items-center gap-1 px-2">
                <svg viewBox="0 0 80 16" className="w-16 md:w-24 h-4 text-primary/70" aria-hidden="true" focusable="false">
                  <line x1="2" y1="8" x2="70" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
                  <polyline points="64,3 72,8 64,13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-semibold mb-1"><L>{`Outcomes`}</L></p>
                <p className="font-heading text-sm md:text-base font-semibold text-foreground/85 leading-tight">
                  <L>{`Energy · Repair`}</L><br /><L>{`Longevity`}</L>
                </p>
              </div>
            </div>
          </div>

          {/* Body systems impact grid — life in motion */}
          <div className="mt-14 md:mt-16">
            <div className="text-center mb-8 md:mb-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-semibold mb-2">
                <L>{`Where Restored NAD⁺ Goes to Work`}</L>
              </p>
              <p className="text-sm md:text-base text-foreground/70 italic max-w-xl mx-auto">
                <L>{`The science you can feel — in the moments that make a life.`}</L>
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                {
                  name: "Brain",
                  scene: "Quiet focus",
                  detail: "Cognitive clarity & neuronal repair",
                  img: lifestyleBrain,
                  alt: "Mature woman reading peacefully by a sunlit window",
                },
                {
                  name: "Heart",
                  scene: "Active years",
                  detail: "Cardiovascular endurance",
                  img: lifestyleHeart,
                  alt: "Active mature couple hiking on a mountain trail at sunset",
                },
                {
                  name: "Muscle",
                  scene: "Daily movement",
                  detail: "Mitochondrial energy output",
                  img: lifestyleMuscle,
                  alt: "Strong mature man practicing yoga in a sunlit studio",
                },
                {
                  name: "Skin & Cells",
                  scene: "Sun-kissed glow",
                  detail: "DNA repair & regeneration",
                  img: lifestyleSkin,
                  alt: "Radiant mature woman smiling with healthy glowing skin",
                },
              ].map((system) => (
                <figure
                  key={system.name}
                  className="group/sys relative overflow-hidden rounded-sm border border-border/50 hover:border-primary/40 transition-all duration-500 aspect-[3/4] shadow-sm hover:shadow-lg"
                >
                  <img
                    src={system.img}
                    alt={system.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover/sys:scale-105"
                  />
                  {/* Gradient veil — darken top + bottom for legibility */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-transparent to-transparent"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/20 to-transparent"
                  />
                  {/* Subtle teal accent on hover */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover/sys:opacity-100 transition-opacity duration-500 mix-blend-multiply"
                  />
                  {/* Top scene label */}
                  <div className="absolute inset-x-0 top-0 p-4 md:p-5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                    <p className="text-[10px] uppercase tracking-[0.22em] font-semibold text-background drop-shadow">
                      <L>{system.scene}</L>
                    </p>
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 text-background">
                    <p className="font-heading text-lg md:text-xl font-semibold text-background tracking-tight mb-1">
                      <L>{system.name}</L>
                    </p>
                    <p className="text-[11px] md:text-xs text-background/80 leading-snug">
                      <L>{system.detail}</L>
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <figcaption className="block text-center text-[11px] text-muted-foreground/80 italic mt-10 max-w-2xl mx-auto">
            <L>{`The NMN → NAD⁺ pathway: from a single capsule, through the bloodstream, into every mitochondrion — restoring the cellular currency of youth.`}</L>
          </figcaption>
        </div>
      </figure>
      <div className="grid md:grid-cols-2 gap-8 items-center bg-muted/30 rounded-sm p-8 md:p-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <TrendingDown className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]"><L>{`The Aging Equation`}</L></p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
            <L>{`By 60, NAD⁺ Falls to Half of Young-Adult Levels`}</L>
          </h3>
          <p className="text-foreground/75 leading-relaxed mb-4">
            <L>{`Decades of research confirm that NAD⁺ depletion is a hallmark of aging — directly linked to fatigue, metabolic slowdown, cardiovascular decline and cognitive changes. Restoring NAD⁺ has become one of the most promising frontiers in longevity science.`}</L>
          </p>
          <p className="text-sm text-muted-foreground italic">
            <L>{`Source: Rajman, Chwalek, Sinclair.`}</L> <em><L>{`Cell Metabolism`}</L></em>, 2018.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {[
              {
                age: "Age 20",
                percent: "100%",
                img: age20Vitality,
                alt: "Woman in her 20s after a morning run on a sunlit park bench, Vavitas NMN beside her water bottle",
                caption: "Morning run · peak vitality preserved",
                percentClass: "text-primary",
                imgOpacity: "opacity-100",
                showProduct: false,
              },
              {
                age: "Age 40",
                percent: "~70%",
                img: age40Vitality,
                alt: "Professional woman in her 40s at her home-office desk with coffee, Vavitas NMN beside her notebook",
                caption: "Career & self-care · sustaining clarity",
                percentClass: "text-primary/75",
                imgOpacity: "opacity-90",
                showProduct: false,
              },
              {
                age: "Age 60",
                percent: "~50%",
                img: age60Vitality,
                alt: "Vibrant woman in her 60s tending herbs in a sunlit kitchen, Vavitas NMN on the windowsill",
                caption: "Active longevity · replenishing each day",
                percentClass: "text-primary/50",
                imgOpacity: "opacity-75",
                showProduct: false,
              },
            ].map((stage) => (
              <figure
                key={stage.age}
                className="group rounded-sm bg-card border border-border/40 hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={stage.img}
                    alt={stage.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-105 ${stage.imgOpacity}`}
                  />
                  {/* Intervention marker: tiny product corner badge on the Age 60 card */}
                  {stage.showProduct && (
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-sm bg-background/90 backdrop-blur-sm border border-primary/30 pl-1.5 pr-2 py-1 shadow-sm">
                      <img
                        src={productNmn}
                        alt="Vavitas NMN bottle"
                        className="w-6 h-6 object-contain"
                        loading="lazy"
                      />
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-primary leading-none">
                        <L>{`Replenish`}</L><span className="block text-[7px] text-foreground/55 tracking-[0.15em] mt-0.5"><L>{`NAD⁺ here`}</L></span>
                      </span>
                    </div>
                  )}
                </div>
                <figcaption className="p-3 md:p-4 text-center bg-card">
                  <p className={`font-heading text-2xl md:text-3xl font-semibold ${stage.percentClass}`}>
                    <L>{stage.percent}</L>
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground mt-1 uppercase tracking-[0.2em] font-semibold">
                    <L>{stage.age}</L>
                  </p>
                  <p className="text-[10px] md:text-[11px] text-foreground/65 italic mt-1.5 leading-snug">
                    <L>{stage.caption}</L>
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Scientific intervention axis — keeps research tone, signals product role */}
          <div className="mt-4 flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-foreground/55">
            <span className="font-semibold text-foreground/70"><L>{`NAD⁺`}</L></span>
            <span className="relative flex-1 h-px bg-gradient-to-r from-primary via-primary/50 to-primary/15">
              <span className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-primary/40 ring-2 ring-background" aria-hidden="true" />
            </span>
            <span className="italic normal-case tracking-normal text-foreground/65">
              <L>{`Vavitas NMN 300mg · delayed-release intervention point`}</L>
            </span>
          </div>
        </div>
      </div>

      {/* The Pioneers */}
      <div>
        <div className="text-center mb-8">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            <L>{`Standing on the Shoulders of Giants`}</L>
          </p>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">
            <L>{`The Scientists Who Discovered NMN's Potential`}</L>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            <L>{`Modern NMN science was built by two visionaries whose work redefined what's possible in human longevity research.`}</L>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Imai */}
          <article className="group bg-card border border-border/40 rounded-sm overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all">
            <div className="flex flex-col sm:grid sm:grid-cols-5">
              <div className="sm:col-span-2 aspect-[16/10] sm:aspect-square overflow-hidden bg-muted/30">
                <img
                  src={scientistImai}
                  alt="Portrait of Prof. Shin-ichiro Imai, NMN biology pioneer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  width={768}
                  height={768}
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-3 p-5 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Microscope className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold leading-snug"><L>{`Pioneer of NMN Biology`}</L></p>
                </div>
                <h4 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-tight mb-3">
                  <L>{`Prof. Shin-ichiro Imai`}</L>
                </h4>
                <div
                  className="flex items-start gap-2.5 mb-4"
                  role="group"
                  aria-label="Affiliation: Washington University School of Medicine"
                >
                  <span
                    role="img"
                    aria-label="Washington University in St. Louis seal"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-background border border-primary/20 flex-shrink-0 p-1.5 shadow-sm"
                  >
                    <img
                      src={logoWashU}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold leading-tight" aria-hidden="true"><L>{`WashU Medicine`}</L></p>
                    <p className="text-xs text-primary/85 font-medium leading-snug mt-0.5"><L>{`Washington University School of Medicine`}</L></p>
                  </div>
                </div>
                <p className="text-foreground/75 leading-relaxed text-sm mb-4">
                  <L>{`His 2016 landmark study showed long-term NMN administration significantly slowed age-associated decline in mice — establishing NMN as a credible target for human longevity intervention.`}</L>
                </p>
                <ul className="space-y-2 border-t border-border/40 pt-4">
                  {[
                    "Established the NMN → NAD⁺ → Sirtuin pathway as a key longevity-related metabolic axis",
                    "Identified NMN absorption and transport mechanisms in the body",
                    "Demonstrated NMN improves age-related metabolic functions (animal studies)",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-foreground/75 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span><L>{item}</L></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-5 md:px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-t border-primary/20">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30">
                  <Atom className="w-3 h-3 text-primary" />
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-primary"><L>{`Founding Scientist`}</L></span>
                </span>
                <p className="text-[12px] text-foreground/80 italic font-medium leading-snug">
                  <L>{`Imai defined the science.`}</L>
                </p>
              </div>
            </div>
          </article>

          {/* Sinclair */}
          <article className="group bg-card border border-border/40 rounded-sm overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all">
            <div className="flex flex-col sm:grid sm:grid-cols-5">
              <div className="sm:col-span-2 aspect-[16/10] sm:aspect-square overflow-hidden bg-muted/30">
                <img
                  src={scientistSinclair}
                  alt="Portrait of Prof. David A. Sinclair, longevity science researcher"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  width={768}
                  height={768}
                  loading="lazy"
                />
              </div>
              <div className="sm:col-span-3 p-5 md:p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Dna className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold leading-snug"><L>{`Architect of Longevity Science`}</L></p>
                </div>
                <h4 className="font-heading text-lg md:text-xl font-semibold text-foreground leading-tight mb-3">
                  <L>{`Prof. David A. Sinclair`}</L>
                </h4>
                <div
                  className="flex items-start gap-2.5 mb-4"
                  role="group"
                  aria-label="Affiliation: Harvard Medical School"
                >
                  <span
                    role="img"
                    aria-label="Harvard Medical School shield"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-background border border-primary/20 flex-shrink-0 p-1.5 shadow-sm"
                  >
                    <img
                      src={logoHarvardMedical}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain"
                      width={44}
                      height={44}
                      loading="lazy"
                    />
                  </span>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold leading-tight" aria-hidden="true"><L>{`Harvard Med`}</L></p>
                    <p className="text-xs text-primary/85 font-medium leading-snug mt-0.5"><L>{`Harvard Medical School`}</L></p>
                  </div>
                </div>
                <p className="text-foreground/75 leading-relaxed text-sm mb-4">
                  <L>{`His work on sirtuins and NAD⁺-boosting molecules reframed aging as a treatable biological process — and his bestseller`}</L> <em><L>{`Lifespan`}</L></em> <L>{`brought NMN to global audiences.`}</L>
                </p>
                <figure className="flex items-center gap-3 mb-4 p-3 rounded-sm bg-muted/40 border border-border/40">
                  <img
                    src={sinclairLifespan}
                    alt="Cover of Lifespan: Why We Age — and Why We Don't Have To by David A. Sinclair"
                    className="w-14 h-auto object-contain shadow-md flex-shrink-0"
                    width={120}
                    height={180}
                    loading="lazy"
                  />
                  <figcaption className="text-[11px] text-muted-foreground leading-snug">
                    <span className="block font-semibold text-foreground/90 italic"><L>{`Lifespan`}</L></span>
                    <L>{`Why We Age — and Why We Don't Have To`}</L>
                    <span className="block mt-0.5 text-[10px] uppercase tracking-wider text-primary/80 font-semibold"><L>{`International Bestseller`}</L></span>
                  </figcaption>
                </figure>
                <ul className="space-y-2 border-t border-border/40 pt-4">
                  {[
                    "Established that declining NAD⁺ is a key driver of aging",
                    "Elevated NMN to global prominence through research and personal advocacy",
                    "Advanced clinical translation and commercialization of NMN",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-xs text-foreground/75 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <span><L>{item}</L></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="px-5 md:px-6 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-t border-primary/20">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30">
                  <Globe2 className="w-3 h-3 text-primary" />
                  <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-primary"><L>{`Global Visionary`}</L></span>
                </span>
                <p className="text-[12px] text-foreground/80 italic font-medium leading-snug">
                  <L>{`Sinclair brought NMN to the world.`}</L>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Vavitas + AbinoNutra Clinical Story */}
      <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-background to-primary/[0.04]">
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative px-6 py-14 md:px-16 md:py-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 bg-primary/40" />
              <p className="text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.4em]">
                <L>{`The Vavitas × AbinoNutra® Standard`}</L>
              </p>
              <span className="h-px w-10 bg-primary/40" />
            </div>
            <h3 className="font-heading text-3xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1] mb-6">
              <L>{`Clinically Validated NMN.`}</L><br className="hidden md:block" />{" "}
              <span className="italic text-primary"><L>{`Proven in Humans.`}</L></span>
            </h3>
            <p className="text-foreground/75 leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
              <L>{`Vavitas NMN is formulated with`}</L> <span className="font-semibold text-foreground"><L>{`AbinoNutra® NMN`}</L></span> <L>{`— the award-winning ingredient produced in a US FDA-registered, cGMP facility with chemical and optical purity exceeding`}</L> <span className="font-semibold text-primary">99.0%</span><L>{`. It is one of the only NMN ingredients in the world validated in a published, gold-standard human clinical trial.`}</L>
            </p>
          </div>

          {/* NUS / Prof. Maier Collaboration */}
          <div className="bg-background/60 backdrop-blur-sm rounded-sm border border-primary/15 mb-10 overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 aspect-square md:aspect-auto bg-muted/30 overflow-hidden">
                <img
                  src={scientistMaier}
                  alt="Portrait of Prof. Andrea Maier of NUS Healthy Longevity Centre"
                  className="w-full h-full object-cover"
                  width={768}
                  height={768}
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <div
                  className="flex items-center gap-3 mb-4"
                  role="group"
                  aria-label="Affiliation: NUS Healthy Longevity Centre, National University of Singapore"
                >
                  <span
                    role="img"
                    aria-label="National University of Singapore coat of arms"
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-background border border-primary/20 flex-shrink-0 p-1.5 shadow-sm"
                  >
                    <img
                      src={logoNUS}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-contain"
                      width={56}
                      height={56}
                      loading="lazy"
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" focusable="false" />
                      <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-[0.22em]">
                        <L>{`NUS Healthy Longevity Centre`}</L>
                      </p>
                    </div>
                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5"><L>{`National University of Singapore`}</L></p>
                  </div>
                </div>
                <h4 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4 tracking-tight">
                  <L>{`The Landmark Trial with Prof. Andrea Maier`}</L>
                </h4>
                <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
                  <L>{`In partnership with`}</L> <span className="font-semibold"><L>{`Professor Andrea Maier`}</L></span><L>{`, Director of the Centre for Healthy Longevity at the National University of Singapore, our team conducted one of the largest randomized, double-blinded, placebo-controlled human trials on NMN. Published in`}</L> <em><L>{`GeroScience`}</L></em> <L>{`(2023) and awarded`}</L> <span className="font-semibold text-primary"><L>{`3rd Prize by the American Aging Association (AGE)`}</L></span> <L>{`in 2024.`}</L>
                </p>

                <ul className="space-y-2 mb-6">
                  {[
                    "Advanced human clinical trials of NMN",
                    "Confirmed NAD⁺ elevation and safety",
                    "Enabled the shift from lab research to clinical application",
                  ].map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><L>{item}</L></span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2.5 mb-6 px-4 py-3 rounded-sm bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 flex-shrink-0">
                    <Stethoscope className="w-3 h-3 text-primary" />
                    <span className="text-[9px] uppercase tracking-[0.18em] font-bold text-primary whitespace-nowrap"><L>{`Clinical Translator`}</L></span>
                  </span>
                  <p className="text-[12px] md:text-sm text-foreground/80 italic font-medium leading-snug">
                    <L>{`She made NMN a clinically relevant intervention in human medicine.`}</L>
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-primary/15">
                  <div className="text-center">
                    <p className="font-heading text-3xl md:text-4xl font-semibold text-primary">4.7×<span className="text-base align-super">*</span></p>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider leading-relaxed">
                      <L>{`Blood NAD⁺ elevation`}</L><br /><L>{`over baseline (600 mg)`}</L>
                    </p>
                  </div>
                  <div className="text-center sm:border-x border-primary/15">
                    <p className="font-heading text-3xl md:text-4xl font-semibold text-primary">−6.7<span className="text-base align-super">*</span></p>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider leading-relaxed">
                      <L>{`Years biological age`}</L><br /><L>{`reduction (600 mg group)`}</L>
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-heading text-3xl md:text-4xl font-semibold text-primary">99%+</p>
                    <p className="text-xs text-muted-foreground mt-2 uppercase tracking-wider leading-relaxed">
                      <L>{`Chemical & optical`}</L><br /><L>{`purity verified`}</L>
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground/80 italic leading-relaxed pt-4 text-center">
                  <L>{`*Data from a published human clinical trial (GeroScience, 600 mg group). Individual results may vary. These statements have not been evaluated by the U.S. Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.`}</L>
                </p>
              </div>
            </div>
          </div>

          {/* Lab visual */}
          <figure className="rounded-sm overflow-hidden border border-primary/15 mb-10">
            <img
              src={clinicalLab}
              alt="Modern clinical research laboratory conducting NMN human trials"
              className="w-full h-auto object-cover"
              width={1280}
              height={768}
              loading="lazy"
            />
            <figcaption className="px-6 py-3 text-xs text-muted-foreground text-center bg-background/70">
              <L>{`Inside our cGMP research laboratories — where every batch of AbinoNutra® NMN is tested for purity and potency.`}</L>
            </figcaption>
          </figure>

          {/* CSO & Team Research */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background/60 backdrop-blur-sm rounded-sm border border-primary/15 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={vavitasTeamConference}
                  alt="Vavitas scientific team with Prof. Andrea Maier at the NUS Geromedicine Unlock Healthy Longevity Conference, Singapore"
                  width={1920}
                  height={1080}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="w-5 h-5 text-primary" />
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                    <L>{`CSO & Scientific Team`}</L>
                  </p>
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
                  <L>{`A Decade of NMN Innovation`}</L>
                </h4>
                <p className="text-foreground/75 leading-relaxed text-sm">
                  <L>{`Our Chief Scientific Officer leads a US-based research team that has been advancing NMN since 2020 — pioneering scalable, high-purity manufacturing, achieving SA-GRAS recognition, and driving the regulatory progress that returned NMN to the U.S. market under FDA review.`}</L>
                </p>
              </div>
            </div>
            <div className="bg-background/60 backdrop-blur-sm rounded-sm border border-primary/15 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={nmnGlobalTrials}
                  alt="Global clinical trials of NMN across Singapore, Japan and Taiwan"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                    <L>{`Ongoing Global Research`}</L>
                  </p>
                </div>
                <h4 className="font-heading text-xl font-semibold text-foreground mb-3">
                  <L>{`Four Active Trials Across Three Countries`}</L>
                </h4>
                <p className="text-foreground/75 leading-relaxed text-sm">
                  <L>{`Beyond the published GeroScience study, our team is currently conducting four additional human clinical trials in Singapore, Japan and Taiwan — exploring NMN's diverse applications in physical performance, metabolic health and biological-age reversal.`}</L>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src={vavitasLogo}
              alt="Vavitas brand mark"
              className="h-14 md:h-16 w-auto object-contain opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Who Should Consider */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-primary" />
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em]"><L>{`Who It's For`}</L></p>
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6 tracking-tight">
            <L>{`For Those Who Refuse to Slow Down`}</L>
          </h3>
          <ul className="space-y-3">
            {[
              "Adults 40+ proactively investing in healthy longevity",
              "Performance-focused individuals seeking sustained cellular energy",
              "Those experiencing age-related fatigue or metabolic slowdown",
              "Anyone interested in evidence-based biological-age management",
              "Health-conscious consumers who demand pharmaceutical-grade purity",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed"><L>{text}</L></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-muted/30 rounded-sm p-8 border border-border/40">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3"><L>{`Quality Assurance`}</L></p>
          <h4 className="font-heading text-xl font-semibold text-foreground mb-4">
            <L>{`What Makes Vavitas NMN Different`}</L>
          </h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            {[
              "AbinoNutra® award-winning NMN ingredient",
              "US FDA-registered, cGMP-certified manufacturing",
              "≥99% chemical and optical purity",
              "SA-GRAS recognized by FDA-accredited experts",
              "Delayed-release capsule for optimal bioavailability",
              "Validated by published human clinical data",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <L>{text}</L>
              </li>
            ))}
          </ul>
        </div>
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
            <span className="italic text-primary"><L>{`AbinoNutra® NMN`}</L></span>
            <br className="hidden md:block" />{" "}
            the Clinically Validated Choice
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
            <L>{`Vavitas formulates with AbinoNutra® NMN — an award-winning, pharmaceutical-grade β-Nicotinamide Mononucleotide produced under US FDA-registered cGMP standards and validated through published human clinical trials. The result: ≥99% chemical and optical purity, SA-GRAS recognition, and a delayed-release capsule engineered for maximum cellular bioavailability.`}</L>
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto pt-6 border-t border-primary/15">
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">≥99%</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`Purity`}</L></p>
            </div>
            <div className="border-x border-primary/15">
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary"><L>{`cGMP`}</L></p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`FDA-Registered`}</L></p>
            </div>
            <div>
              <p className="font-heading text-2xl md:text-3xl font-semibold text-primary">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1"><L>{`AbinoNutra® NMN`}</L></p>
            </div>
          </div>
        </div>
      </VavitasStandardFrame>
    </section>
  );
};

export default NMNEducation;
