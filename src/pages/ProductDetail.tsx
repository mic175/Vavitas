import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Star } from "lucide-react";
import { products } from "@/data/products";
import iconSupplementFacts from "@/assets/icon-supplement-facts.png";
import iconDirections from "@/assets/icon-directions.png";
import iconQualityAssurance from "@/assets/icon-quality-assurance.png";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import FooterSection from "@/components/FooterSection";
import UbiquinolEducation from "@/components/UbiquinolEducation";
import CollagenEducation from "@/components/CollagenEducation";
import NMNEducation from "@/components/NMNEducation";
import VitaminD3K2Education from "@/components/VitaminD3K2Education";
import FishOilEducation from "@/components/FishOilEducation";
import SubscriptionSelector from "@/components/SubscriptionSelector";
import PurchasePolicyAccordion from "@/components/PurchasePolicyAccordion";

import { useRegion, useT } from "@/i18n/RegionContext";
import { getShopifyBuyNowUrl, getShopifyRewardsUrl, redirectToShopifyLocalizedUrl } from "@/lib/shopifyLinks";
import type { TranslationKey } from "@/i18n/translations";
import d3k2Label1 from "@/assets/d3k2-label-1.png";
import d3k2Label2 from "@/assets/d3k2-label-2.png";
import d3k2Label3 from "@/assets/d3k2-label-3.png";
import fishOilLabel1 from "@/assets/fishoil-label-1.png";
import fishOilLabel2 from "@/assets/fishoil-label-2.png";
import fishOilLabel3 from "@/assets/fishoil-label-3.png";
import nmnLabel1 from "@/assets/nmn-label-1.png";
import nmnLabel2 from "@/assets/nmn-label-2.png";
import nmnLabel3 from "@/assets/nmn-label-3.png";
import ubiquinolLabel1 from "@/assets/ubiquinol-label-1.png";
import ubiquinolLabel2 from "@/assets/ubiquinol-label-2.png";
import ubiquinolLabel3 from "@/assets/ubiquinol-label-3.png";
import collagenLabel1 from "@/assets/collagen-label-1.png";
import collagenLabel2 from "@/assets/collagen-label-2.png";
import collagenLabel3 from "@/assets/collagen-label-3.png";
import collagenLabel4 from "@/assets/collagen-label-4.png";

const productGalleries: Record<string, { src: string; alt: string }[]> = {
  "vitamin-d3-k2": [
    { src: d3k2Label1, alt: "Vavitas D3 + K2 front label" },
    { src: d3k2Label2, alt: "Vavitas D3 + K2 supplement facts" },
    { src: d3k2Label3, alt: "Vavitas D3 + K2 usage and barcode" },
  ],
  "fish-oil": [
    { src: fishOilLabel1, alt: "Vavitas Fish Oil front label" },
    { src: fishOilLabel2, alt: "Vavitas Fish Oil supplement facts" },
    { src: fishOilLabel3, alt: "Vavitas Fish Oil usage and barcode" },
  ],
  nmn: [
    { src: nmnLabel1, alt: "Vavitas NMN front label" },
    { src: nmnLabel2, alt: "Vavitas NMN supplement facts" },
    { src: nmnLabel3, alt: "Vavitas NMN directions and barcode" },
  ],
  ubiquinol: [
    { src: ubiquinolLabel1, alt: "Vavitas Ubiquinol front label" },
    { src: ubiquinolLabel2, alt: "Vavitas Ubiquinol supplement facts" },
    { src: ubiquinolLabel3, alt: "Vavitas Ubiquinol directions and barcode" },
  ],
  "collagen-peptides": [
    { src: collagenLabel1, alt: "Vavitas Collagen Peptides front label" },
    { src: collagenLabel2, alt: "Vavitas Collagen Peptides supplement facts" },
    { src: collagenLabel3, alt: "Vavitas Collagen Peptides directions and barcode" },
    { src: collagenLabel4, alt: "Vavitas Collagen Peptides options to enjoy" },
  ],
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const gallery = id ? (productGalleries[id] ?? []) : [];
  const galleryItems = product ? [{ src: product.image, alt: product.name }, ...gallery] : [];
  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = galleryItems[activeIdx] ?? galleryItems[0];
  const { regionalPath, region, language } = useRegion();
  const t = useT();
  const tk = (k: string) => t(k as TranslationKey);

  useEffect(() => {
    if (!product) return;
    const title = `${product.name} | VAVITAS`;
    const canonicalHref = `https://vavitas-health.com/product/${product.id}`;
    const descriptionContent =
      "VAVITAS offers premium health supplements including Fish Oil, D3+K2, NMN, Ubiquinol CoQ10, and Collagen Peptide. Globally sourced ingredients, made in USA.";

    const previousTitle = document.title;
    document.title = title;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.getAttribute("href");
    canonical.setAttribute("href", canonicalHref);

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const createdDescription = !description;
    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }
    const previousDescription = description.getAttribute("content");
    description.setAttribute("content", descriptionContent);

    return () => {
      document.title = previousTitle;
      if (createdCanonical) {
        canonical?.parentNode?.removeChild(canonical);
      } else if (canonical && previousCanonical !== null) {
        canonical.setAttribute("href", previousCanonical);
      }
      if (createdDescription) {
        description?.parentNode?.removeChild(description);
      } else if (description && previousDescription !== null) {
        description.setAttribute("content", previousDescription);
      }
    };
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-semibold mb-4">{t("pd.notFound")}</h1>
          <Link to={regionalPath("/") + "#products"} className="text-primary underline">
            {t("pd.backProducts")}
          </Link>
        </div>
      </div>
    );
  }

  const fullStars = 5;
  const productDirectionsNote =
    tk(`p.${product.id}.note`) !== `p.${product.id}.note`
      ? tk(`p.${product.id}.note`)
      : t("pd.directionsNote");
  const qualityItems = Array.from({ length: 4 }, (_, index) => {
    const itemKey = `p.${product.id}.qa${index + 1}`;
    return tk(itemKey) !== itemKey ? tk(itemKey) : t(`pd.qa${index + 1}` as TranslationKey);
  });

  return (
    <div className="min-h-screen bg-background">
      {/* 这是你加的吸顶盒子 */}
      <div className="sticky top-0 z-50 w-full flex flex-col">
        <AnnouncementBar />
        <Header />
      </div>
      {/* 盒子结束，下面内容照旧 */}

      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Breadcrumb */}
        <Link
          to={regionalPath("/") + "#products"}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("pd.backBenefits")}
        </Link>


        {/* Main product section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 items-start">
          {/* Product Image — editorial frame with brand slogan */}
          <div className="lg:sticky lg:top-32">
            <div className="flex gap-3">
              {galleryItems.length > 1 && (
                <div className="flex flex-col gap-2 w-16 md:w-20 flex-shrink-0">
                  {galleryItems.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`relative aspect-square rounded-sm overflow-hidden border bg-background transition-all ${
                        activeIdx === i
                          ? "border-primary ring-1 ring-primary"
                          : "border-border/60 hover:border-primary/60"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="absolute inset-0 w-full h-full object-contain p-1"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div className="relative flex-1 overflow-hidden rounded-sm bg-gradient-to-br from-warm-cream via-background to-primary/[0.08] border border-primary/15 p-6 md:p-10 group">
                {/* Sunlit halos for atmospheric depth */}
                <div
                  className="pointer-events-none absolute -top-16 -left-16 w-56 h-56 rounded-full bg-[radial-gradient(circle,_hsl(45_95%_78%_/_0.55)_0%,_transparent_70%)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-[radial-gradient(circle,_hsl(183_70%_70%_/_0.30)_0%,_transparent_70%)]"
                  aria-hidden="true"
                />
                {/* Top hairline */}
                <div
                  className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                  aria-hidden="true"
                />

                {/* Slogan eyebrow */}
                <div className="relative flex items-center justify-center gap-3 mb-4">
                  <span className="h-px w-8 bg-primary/40" />
                  <p className="font-heading italic text-primary/80 text-xs md:text-sm tracking-[0.3em] uppercase">
                    Vavitas<sup className="text-[0.55em]">®</sup>
                  </p>
                  <span className="h-px w-8 bg-primary/40" />
                </div>

                {/* Bottle */}
                <div className="relative flex items-center justify-center min-h-[360px] md:min-h-[440px]">
                  <div className="relative w-full max-w-[420px] aspect-square bg-muted rounded-sm flex items-center justify-center overflow-hidden">
                    <img
                      src={activeItem.src}
                      alt={activeItem.alt}
                      className="relative w-full h-full object-contain drop-shadow-[0_24px_48px_rgba(58,175,169,0.22)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Slogan footer — integrated with product */}
                <div className="relative mt-6 pt-5 border-t border-primary/15 text-center">
                  <p className="font-heading text-xl md:text-2xl text-foreground tracking-tight leading-tight">
                    {t("pd.slogan1")}
                    <span className="italic text-primary"> {t("pd.slogan2")}</span>
                  </p>
                  <p className="mt-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-foreground/55">
                    {t("pd.sloganSub")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            {product.badge && (
              <span className="inline-block w-fit px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
                {tk(`p.${product.id}.badge`) && tk(`p.${product.id}.badge`) !== `p.${product.id}.badge`
                  ? tk(`p.${product.id}.badge`)
                  : product.badge}
              </span>
            )}

            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-2">
              {tk(`p.${product.id}.name`) && tk(`p.${product.id}.name`) !== `p.${product.id}.name`
                ? tk(`p.${product.id}.name`)
                : product.name}
            </h1>
            <p className="text-primary/80 text-lg font-medium mb-4">
              {tk(`p.${product.id}.subtitle`) && tk(`p.${product.id}.subtitle`) !== `p.${product.id}.subtitle`
                ? tk(`p.${product.id}.subtitle`)
                : product.subtitle}
            </p>

            {/* Shared brand summary — crawlable, consistent across all product pages for SEO sitelinks */}
            <p className="text-xs text-muted-foreground/90 leading-relaxed mb-4">
              VAVITAS offers premium health supplements including Fish Oil, D3+K2, NMN, Ubiquinol CoQ10, and Collagen Peptide. Globally sourced ingredients, made in USA.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < fullStars ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                5.0
              </span>
            </div>

            <p className="text-foreground/80 text-base leading-relaxed mb-6">
              {tk(`p.${product.id}.long`) || product.longDescription}
            </p>

            {/* Price (hidden when SubscriptionSelector renders price + CTA together) */}
            {!["ubiquinol", "fish-oil", "vitamin-d3-k2", "nmn", "collagen-peptides"].includes(product.id) && (
              <p className="text-3xl font-semibold text-primary mb-3">{product.price}</p>
            )}

            {/* Member offer */}
            <div className="mb-6 flex flex-wrap items-center gap-3 px-4 py-3 bg-primary/[0.06] border border-primary/20 rounded-sm">
              <span className="text-sm text-foreground/80">{t("pd.memberOffer")}</span>
              <a
                href={getShopifyRewardsUrl(region, language)}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "product-member-offer" });
                }}
                className="inline-flex items-center justify-center px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider hover:bg-accent transition-colors"
              >
                {t("pd.memberCta")}
              </a>
            </div>

            {/* Purchase actions */}
            {["ubiquinol", "fish-oil", "vitamin-d3-k2", "nmn", "collagen-peptides"].includes(product.id) ? (
              <SubscriptionSelector handle={product.id} fallbackPrice={product.price} />
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full max-w-md">
                {/* Buy Now 按钮 (绿底白字) */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={getShopifyBuyNowUrl(product.id, region, language)}
                  onClick={(e) => {
                    e.preventDefault();
                    redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, {
                      newTab: true,
                      source: "product-buy-now",
                    });
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-md transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  {t("pd.buyNow")}
                </a>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  {t("pd.secureCheckout")}
                </p>
              </div>
            )}

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{t("pd.keyBenefits")}</h3>
              <ul className="space-y-2">
                {product.benefits.map((b, i) => {
                  const key = `p.${product.id}.b${i + 1}`;
                  const localized = tk(key);
                  return (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      {localized && localized !== key ? localized : b}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mt-2 pt-4 border-t border-border/40">
              <h3 className="text-sm font-semibold text-foreground mb-1">{t("pd.certsTitle")}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t("pd.certsDesc")}</p>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground/80 mb-2">
                {t("pd.certsHave")}
              </p>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{t("pd.cert1")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{t("pd.cert2")}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{t("pd.cert3")}</span>
                </li>
              </ul>
            </div>
            <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
              {t("pd.manufacturingNote")}
            </p>
          </div>
        </div>

        {/* Quick section navigation */}
        <nav
          aria-label="Product section navigation"
          className="max-w-4xl mx-auto mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-2"
        >
          {[
            { href: "#learn", label: t("pd.navLearn") },
            { href: "#how-to-use", label: t("pd.navHowToUse") },
            { href: "#policies", label: t("pd.navPolicies") },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-primary border border-primary/40 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Product-specific educational content */}
        <section id="learn" className="scroll-mt-32">
          {product.id === "ubiquinol" && <UbiquinolEducation />}
          {product.id === "collagen-peptides" && <CollagenEducation />}
          {product.id === "nmn" && <NMNEducation />}
          {product.id === "vitamin-d3-k2" && <VitaminD3K2Education />}
          {product.id === "fish-oil" && <FishOilEducation />}
        </section>

        {/* Details Tabs — How to Use */}
        <section id="how-to-use" className="scroll-mt-32 max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Supplement Facts */}
            <div className="bg-card rounded-sm p-6 border border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={iconSupplementFacts}
                  alt=""
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <h3 className="font-heading text-lg font-semibold">{t("pd.suppFacts")}</h3>
              </div>
              <div className="space-y-2 text-sm text-foreground/80">
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span>{t("pd.servingSize")}</span>
                  <span className="font-medium">{product.servingSize}</span>
                </div>
                <div className="flex justify-between border-b border-border/30 pb-2">
                  <span>{t("pd.servings")}</span>
                  <span className="font-medium">{product.servingsPerContainer}</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                {tk(`p.${product.id}.ing`) && tk(`p.${product.id}.ing`) !== `p.${product.id}.ing`
                  ? tk(`p.${product.id}.ing`)
                  : product.ingredients}
              </p>
            </div>

            {/* Directions */}
            <div className="bg-card rounded-sm p-6 border border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={iconDirections}
                  alt=""
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <h3 className="font-heading text-lg font-semibold">{t("pd.directions")}</h3>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {tk(`p.${product.id}.dir`) || product.directions}
              </p>
              <div className="mt-6 p-3 bg-muted/30 rounded-sm">
                <p className="text-xs text-muted-foreground">{productDirectionsNote}</p>
              </div>
            </div>

            {/* Quality */}
            <div className="bg-card rounded-sm p-6 border border-border/40">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={iconQualityAssurance}
                  alt=""
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  width={512}
                  height={512}
                />
                <h3 className="font-heading text-lg font-semibold">{t("pd.quality")}</h3>
              </div>
              <ul className="space-y-3 text-sm text-foreground/80">
                {qualityItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Purchase & Sales Policy */}
        <section id="policies" className="scroll-mt-32 max-w-4xl mx-auto mb-16">
          <PurchasePolicyAccordion />
        </section>


        {/* Related Products */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-2">{t("pd.alsoLike")}</h2>
          <p className="text-muted-foreground">{t("pd.alsoLikeSub")}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products
            .filter((p) => p.id !== product.id)
            .map((p) => (
              <Link
                key={p.id}
                to={regionalPath(`/product/${p.id}`)}
                className="group bg-card border border-border/40 rounded-sm overflow-hidden hover:shadow-md transition-all p-4 text-center"
              >
                <div className="aspect-square bg-muted rounded-sm flex items-center justify-center mb-3 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-heading font-semibold text-foreground">
                  {tk(`p.${p.id}.name`) && tk(`p.${p.id}.name`) !== `p.${p.id}.name` ? tk(`p.${p.id}.name`) : p.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {tk(`p.${p.id}.subtitle`) && tk(`p.${p.id}.subtitle`) !== `p.${p.id}.subtitle`
                    ? tk(`p.${p.id}.subtitle`)
                    : p.subtitle}
                </p>
                <p className="text-primary font-semibold mt-1">{p.price}</p>
              </Link>
            ))}
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ProductDetail;
