import ProductCard from "./ProductCard";
import { products } from "@/data/products";
import { useT } from "@/i18n/RegionContext";

const ProductsSection = () => {
  const t = useT();
  return (
    <section id="product-lineup" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-4">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">{t("products.eyebrow")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            {t("products.title")}
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              name={p.name}
              subtitle={p.subtitle}
              image={p.image}
              badge={p.badge}
              price={p.price}
              rating={p.rating}
              reviewCount={p.reviewCount}
              tagline={p.tagline}
              link={p.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
