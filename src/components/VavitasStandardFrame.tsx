import { ReactNode } from "react";
import backdrop from "@/assets/vavitas-standard-backdrop.jpg";
import { L } from "@/i18n/L";

interface VavitasStandardFrameProps {
  children: ReactNode;
}

/**
 * Shared editorial backdrop for the closing "Vavitas Standard" block on
 * every product page. Watercolor world-and-people backdrop expresses brand
 * culture, sunlight, global ingredient sourcing, and protective health
 * responsibility for diverse communities.
 */
const VavitasStandardFrame = ({ children }: VavitasStandardFrameProps) => {
  return (
    <div className="relative overflow-hidden rounded-sm border border-primary/20 bg-warm-cream">
      {/* Watercolor backdrop layer — full bleed, gently breathing */}
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat bg-cover bg-center mix-blend-multiply animate-backdrop-breathe"
        style={{ backgroundImage: `url(${backdrop})` }}
        aria-hidden="true"
      />
      {/* Slow rotating sun-halo for ambient motion */}
      <div
        className="pointer-events-none absolute -top-1/4 left-1/2 -translate-x-1/2 w-[140%] aspect-square rounded-full opacity-40 animate-spin-slow"
        style={{ background: "conic-gradient(from 0deg, transparent 0%, hsl(45 95% 82% / 0.35) 25%, transparent 50%, hsl(183 70% 70% / 0.25) 75%, transparent 100%)" }}
        aria-hidden="true"
      />
      {/* Cream wash for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-warm-cream/80 via-warm-cream/55 to-warm-cream/90" aria-hidden="true" />

      {/* Lively scattered product-name typography — repeated, drifting, varied scale & color */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
        {[
          { label: "Fish Oil",  top: "8%",  left: "6%",  size: "text-2xl",  rot: "-rotate-6", color: "text-primary/30",       anim: "animate-drift-slow" },
          { label: "Collagen",  top: "14%", left: "78%", size: "text-3xl",  rot: "rotate-3",  color: "text-foreground/25",    anim: "animate-drift-soft" },
          { label: "NMN",       top: "32%", left: "42%", size: "text-5xl",  rot: "-rotate-2", color: "text-primary/25",       anim: "animate-drift-slow" },
          { label: "Ubiquinol", top: "58%", left: "12%", size: "text-2xl",  rot: "rotate-6",  color: "text-foreground/30",    anim: "animate-drift-soft" },
          { label: "D₃ + K₂",   top: "62%", left: "82%", size: "text-3xl",  rot: "-rotate-3", color: "text-primary/30",       anim: "animate-drift-slow" },
          { label: "Fish Oil",  top: "78%", left: "55%", size: "text-xl",   rot: "rotate-2",  color: "text-foreground/20",    anim: "animate-drift-soft" },
          { label: "Collagen",  top: "48%", left: "62%", size: "text-xl",   rot: "-rotate-6", color: "text-primary/20",       anim: "animate-drift-slow" },
          { label: "NMN",       top: "85%", left: "22%", size: "text-2xl",  rot: "rotate-6",  color: "text-foreground/25",    anim: "animate-drift-soft" },
          { label: "Ubiquinol", top: "20%", left: "30%", size: "text-base", rot: "rotate-3",  color: "text-primary/20",       anim: "animate-drift-slow" },
          { label: "D₃ + K₂",   top: "40%", left: "88%", size: "text-base", rot: "-rotate-6", color: "text-foreground/20",    anim: "animate-drift-soft" },
        ].map(({ label, top, left, size, rot, color, anim }, i) => (
          <span
            key={`${label}-${i}`}
            className={`absolute font-heading italic tracking-wide whitespace-nowrap ${size} ${rot} ${color} ${anim}`}
            style={{ top, left, animationDelay: `${(i % 5) * 0.6}s` }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Sunlight ray accent */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,_hsl(45_95%_82%_/_0.45)_0%,_transparent_65%)] animate-shimmer-fade" aria-hidden="true" />
      {/* Brand teal halo */}
      <div className="pointer-events-none absolute -bottom-40 -left-32 w-[26rem] h-[26rem] rounded-full bg-primary/10 blur-3xl animate-shimmer-fade" style={{ animationDelay: "2s" }} aria-hidden="true" />
      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />

      {/* Floating product motifs — subtle drifting icons echoing the lineup */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block" aria-hidden="true">
        {/* Golden softgel */}
        <div className="absolute top-[18%] left-[8%] w-10 h-6 rounded-full bg-gradient-to-br from-amber-200/70 to-amber-400/50 blur-[1px] animate-float-y" style={{ animationDelay: "0s" }} />
        {/* Oil droplet */}
        <div className="absolute top-[70%] left-[14%] w-8 h-10 bg-gradient-to-b from-amber-300/60 to-amber-500/40 animate-float-x" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", animationDelay: "1.5s" }} />
        {/* Teal molecule dot cluster */}
        <div className="absolute top-[26%] right-[10%] flex gap-1.5 animate-float-y" style={{ animationDelay: "2s" }}>
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="w-3.5 h-3.5 rounded-full bg-primary/30" />
          <span className="w-2 h-2 rounded-full bg-primary/50" />
        </div>
        {/* Sun spark */}
        <div className="absolute top-[60%] right-[14%] w-12 h-12 rounded-full bg-[radial-gradient(circle,_hsl(45_95%_75%_/_0.6)_0%,_transparent_70%)] animate-float-x" style={{ animationDelay: "3s" }} />
        {/* Soft capsule */}
        <div className="absolute top-[80%] left-[48%] w-12 h-4 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 animate-float-y" style={{ animationDelay: "4s" }} />
      </div>

      {/* Brand culture banner — appears above the product-specific content */}
      <div className="relative px-6 pt-8 md:px-12 md:pt-10 text-center">
        <p className="font-heading italic text-primary/80 text-sm md:text-base tracking-wide">
          <L>{`Sunlight on every continent. One promise of life.`}</L>
        </p>
        <p className="mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-foreground/55">
          <L>{`Globally Sourced · Ethically Crafted · Universally Trusted`}</L>
        </p>
      </div>

      <div className="relative">{children}</div>

      {/* Closing brand responsibility line */}
      <div className="relative px-6 pb-8 md:px-12 md:pb-10 text-center">
        <div className="mx-auto max-w-2xl pt-5 border-t border-primary/15">
          <p className="text-foreground/70 text-xs md:text-sm leading-relaxed italic">
            <L>{`From the sunlit fields and pristine seas of our partner growers, to families across every continent — Vavitas honors the responsibility of protecting human vitality with master-crafted nutrition for all peoples, all generations.`}</L>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VavitasStandardFrame;
