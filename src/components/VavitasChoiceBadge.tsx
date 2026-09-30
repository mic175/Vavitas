import vavitasMark from "@/assets/vavitas-mark.png";

/**
 * "Vavitas Choice" emblem — built around the actual Vavitas tree mark.
 *
 * Hierarchy:
 *  1. The brand mark (real cropped tree logo) is the visual anchor — large, crisp,
 *     unobstructed, sitting in a quiet circular field with a hairline ring.
 *  2. "CHOICE" is the typographic hero — large, wide-tracked display caps, set
 *     with the editorial weight of a chapter title.
 *  3. "VAVITAS" is the small over-line that names the maker.
 *
 * Sits on the card's top edge like an embossed seal.
 */
const VavitasChoiceBadge = () => {
  return (
    <div className="absolute -top-8 left-5 flex items-center gap-3 pointer-events-none select-none">
      {/* Brand mark medallion */}
      <div className="relative h-14 w-14 rounded-full bg-background ring-1 ring-primary/30 shadow-[0_6px_20px_-8px_hsl(var(--primary)/0.45)] flex items-center justify-center">
        {/* faint inner ring for depth */}
        <div className="absolute inset-1 rounded-full ring-1 ring-primary/10" />
        {/* soft radial bloom */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,hsl(var(--primary)/0.10),transparent_70%)]" />
        <img
          src={vavitasMark}
          alt="Vavitas"
          className="relative h-10 w-auto"
        />
      </div>

      {/* Typography lockup */}
      <div className="flex flex-col leading-none">
        <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-primary/70 mb-1">
          Vavitas
        </span>
        <span className="font-heading text-[22px] md:text-[24px] font-semibold uppercase tracking-[0.18em] text-primary">
          Choice
        </span>
        {/* hairline accent under wordmark */}
        <span className="mt-1.5 h-px w-10 bg-primary/40" />
      </div>
    </div>
  );
};

export default VavitasChoiceBadge;
