import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { useRegion, useT } from "@/i18n/RegionContext";

const CartEmpty = () => {
  const t = useT();
  const { regionalPath } = useRegion();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24 gradient-hero">
        <div className="max-w-xl w-full text-center animate-fade-in">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-teal-muted">
            <ShoppingCart className="h-14 w-14 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading text-foreground mb-6 accent-bar-center">
            {t("Your cart is currently empty")}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
            {t("It looks like you haven't added any items yet. Start exploring our premium supplements.")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="gradient-teal text-primary-foreground hover:opacity-90 px-10">
              <Link to={regionalPath("/") + "#products"}>{t("Continue Shopping")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-10">
              <Link to={regionalPath("/")}>{t("Return to Home")}</Link>
            </Button>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CartEmpty;
