import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import { useRegion, useT } from "@/i18n/RegionContext";

const OrderSuccess = () => {
  const t = useT();
  const { regionalPath } = useRegion();
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24 gradient-hero">
        <div className="max-w-xl w-full text-center animate-fade-in">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-teal-muted">
            <CheckCircle2 className="h-14 w-14 text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-6 accent-bar-center">
            {t("Thank You!")}
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md mx-auto">
            {t("Your order has been successfully confirmed and is being processed.")}
          </p>
          <Button asChild size="lg" className="gradient-teal text-primary-foreground hover:opacity-90 px-10">
            <Link to={regionalPath("/")}>{t("Return to Home")}</Link>
          </Button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default OrderSuccess;
