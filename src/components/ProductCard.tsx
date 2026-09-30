import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { useRegion, useT } from "@/i18n/RegionContext";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  badge?: string;
  price: string;
  rating: number;
  reviewCount: number;
  tagline: string;
  link: string;
}

const ProductCard = ({ id, name, subtitle, image, badge, price, rating, tagline }: ProductCardProps) => {
  const fullStars = 5;
  const hasHalf = false;
  const displayRating = "5.0";
  void rating;
  const { regionalPath } = useRegion();
  const t = useT();
  const productPath = regionalPath(`/product/${id}`);

  return (
    <Link
      to={productPath}
      className="group block bg-card border border-border/40 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      aria-label={`View details for ${name}`}
    >
      <div className="relative bg-muted/40 p-8 flex items-center justify-center aspect-square">
        {badge && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider z-10">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
          loading="lazy"
        />
      </div>

      <div className="p-6 text-center flex flex-col">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{t(subtitle)}</p>

        <div className="flex items-center justify-center gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < fullStars ? 'text-yellow-500 fill-yellow-500' : i === fullStars && hasHalf ? 'text-yellow-500 fill-yellow-500/50' : 'text-muted-foreground/30'}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">{displayRating}</span>
        </div>

        <p className="text-foreground/80 text-sm mb-4">{t(tagline)}</p>
        <p className="text-primary font-semibold text-lg mb-2">{price}</p>
        <p className="text-xs text-muted-foreground underline underline-offset-4 mb-4">
          {t("products.viewFacts")}
        </p>

        <div className="mt-auto inline-flex items-center justify-center w-full py-3 bg-accent/80 text-accent-foreground text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors tracking-wider uppercase">
          {t("products.viewProduct")}
        </div>
      </div>

    </Link>
  );
};

export default ProductCard;
