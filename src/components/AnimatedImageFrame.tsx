import { ReactNode } from "react";

interface AnimatedImageFrameProps {
  src: string;
  alt: string;
  className?: string;
  /** When true, image is contained (not cropped). Default: false (cover crop with aspect-[4/3]) */
  contain?: boolean;
  width?: number;
  height?: number;
  children?: ReactNode;
}

/**
 * Refined editorial image frame: warm watercolor wash, soft static sunlight
 * halos, and a subtle hover lift. Image itself stays still — the frame
 * provides "scene presence", not literal motion.
 */
const AnimatedImageFrame = ({
  src,
  alt,
  className = "",
  contain = false,
  width = 1280,
  height = 960,
  children,
}: AnimatedImageFrameProps) => {
  return (
    <div
      className={`relative rounded-sm overflow-hidden bg-gradient-to-br from-warm-cream via-background to-primary/5 group transition-shadow duration-500 hover:shadow-[0_20px_60px_-20px_hsl(183_70%_40%/0.25)] ${
        contain ? "p-4" : "aspect-[4/3]"
      } ${className}`}
    >
      {/* Static sunlit halos — atmosphere, not motion */}
      <div
        className="pointer-events-none absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[radial-gradient(circle,_hsl(45_95%_78%_/_0.55)_0%,_transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-10 w-56 h-56 rounded-full bg-[radial-gradient(circle,_hsl(183_70%_70%_/_0.30)_0%,_transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 right-8 w-20 h-20 rounded-full bg-[radial-gradient(circle,_hsl(45_95%_75%_/_0.40)_0%,_transparent_70%)]"
        aria-hidden="true"
      />
      {/* Soft inner vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_60px_hsl(45_60%_85%/0.35)]"
        aria-hidden="true"
      />
      <img
        src={src}
        alt={alt}
        className={`relative ${
          contain ? "w-full h-auto object-contain" : "w-full h-full object-cover"
        } rounded-sm transition-transform duration-700 ease-out group-hover:scale-[1.02]`}
        loading="lazy"
        width={width}
        height={height}
      />
      {children}
    </div>
  );
};

export default AnimatedImageFrame;
