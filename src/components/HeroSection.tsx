import { useState, useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import heroImg from "@/assets/hero-lifestyle.jpg";
import allProductsImg from "@/assets/all-products-lifestyle.jpg";
import wellnessImg from "@/assets/wellness-family.jpg";
import nusImg from "@/assets/nus-conference-1.jpg";
import conferenceImg from "@/assets/nus-conference-team.jpg";
import showroomImg from "@/assets/quality-showroom.jpg";
import qualityBotanicalImg from "@/assets/quality-botanical-elixir.jpg";
import globalPartnersImg from "@/assets/hero-global-partners.jpg";
import powdersImg from "@/assets/hero-powders.jpg";
import engineeredPurityImg from "@/assets/hero-engineered-purity.jpg";
import { useRegion, useT } from "@/i18n/RegionContext";

const slideImages = [
  heroImg,
  allProductsImg,
  wellnessImg,
  nusImg,
  conferenceImg,
  showroomImg,
  globalPartnersImg,
  powdersImg,
  engineeredPurityImg,
];
// Reference qualityBotanicalImg so the import is not flagged as unused.
void qualityBotanicalImg;

const slideCtas: { href: string; secondaryHref?: string }[] = [
  { href: "#products", secondaryHref: "#about" },
  { href: "#products" },
  { href: "#benefits" },
  { href: "#news" },
  { href: "#news" },
  { href: "#standards" },

  { href: "#quality" },
  { href: "#products" },
  { href: "#quality" },
];

const HeroSection = () => {
  const t = useT();
  const navigate = useNavigate();
  const location = useLocation();
  const { prefix } = useRegion();

  const HEADER_OFFSET = 116;
  const handleCtaClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const hash = href.slice(1);
    // Always clear ?goal so #products opens with "All Products"
    navigate({ pathname: `${prefix}/`, search: "", hash: `#${hash}` }, { replace: false });
    if (hash === "products") {
      window.dispatchEvent(new CustomEvent("vavitas:reset-product-filter"));
    }
    // Smooth scroll if already on the same page
    if (location.pathname === (prefix || "/") || location.pathname === `${prefix}/`) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
        }
      });
    }
  };

  const slides = useMemo(
    () =>
      slideImages.map((image, i) => {
        const t1 = t(`hero.${i}.t1` as never);
        const rawT2 = t(`hero.${i}.t2` as never);
        const t2 = rawT2 === `hero.${i}.t2` ? "" : rawT2;
        const rawT3 = t(`hero.${i}.t3` as never);
        const t3 = rawT3 === `hero.${i}.t3` ? "" : rawT3;
        return {
          image,
          subtitle: t(`hero.${i}.sub` as never),
          title: (
            <>
              {t1}
              {t2 ? (
                <>
                  {" "}
                  <br className="hidden md:block" />
                  {t2}{" "}
                </>
              ) : (
                <>
                  {" "}
                  <br className="hidden md:block" />
                </>
              )}
              {t3 && <span className="text-primary italic">{t3}</span>}
            </>
          ),
          description: t(`hero.${i}.desc` as never),
          cta: { label: t(`hero.${i}.cta` as never), href: slideCtas[i].href },
          secondary: slideCtas[i].secondaryHref
            ? { label: t(`hero.${i}.cta2` as never), href: slideCtas[i].secondaryHref! }
            : undefined,
        };
      }),
    [t],
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 60000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section id="home" className="relative min-h-screen">
      {/* Carousel */}
      <div ref={emblaRef} className="overflow-hidden h-screen">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full relative h-full">
              {/* Background image */}
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="max-w-xl">
                    <p
                      className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.3em] mb-5 transition-all duration-700"
                      style={{
                        opacity: selectedIndex === i ? 1 : 0,
                        transform: selectedIndex === i ? "translateY(0)" : "translateY(20px)",
                      }}
                    >
                      {slide.subtitle}
                    </p>
                    <h1
                      className="font-heading text-[2.75rem] md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-[1.08] mb-6 tracking-tight transition-all duration-700 delay-100"
                      style={{
                        opacity: selectedIndex === i ? 1 : 0,
                        transform: selectedIndex === i ? "translateY(0)" : "translateY(20px)",
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className="text-primary-foreground/70 text-lg leading-relaxed mb-10 max-w-md transition-all duration-700 delay-200"
                      style={{
                        opacity: selectedIndex === i ? 1 : 0,
                        transform: selectedIndex === i ? "translateY(0)" : "translateY(20px)",
                      }}
                    >
                      {slide.description}
                    </p>
                    <div
                      className="flex flex-wrap gap-4 transition-all duration-700 delay-300"
                      style={{
                        opacity: selectedIndex === i ? 1 : 0,
                        transform: selectedIndex === i ? "translateY(0)" : "translateY(20px)",
                      }}
                    >
                      <a
                        href={slide.cta.href}
                        onClick={handleCtaClick(slide.cta.href)}
                        className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-accent transition-all duration-300 rounded-full"
                      >
                        {slide.cta.label}
                      </a>
                      {slide.secondary && (
                        <a
                          href={slide.secondary.href}
                          onClick={handleCtaClick(slide.secondary.href)}
                          className="inline-flex items-center justify-center px-10 py-4 border border-primary-foreground/30 text-primary-foreground font-medium tracking-widest uppercase text-sm hover:border-primary hover:text-primary transition-all duration-300 rounded-full"
                        >
                          {slide.secondary.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-background/40 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              selectedIndex === i ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-4 lg:right-8 z-20 text-primary-foreground/50 text-sm font-medium tracking-wider">
        <span className="text-primary-foreground font-semibold">{String(selectedIndex + 1).padStart(2, "0")}</span>
        {" / "}
        {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
};

export default HeroSection;
