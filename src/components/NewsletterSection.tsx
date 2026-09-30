import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useT } from "@/i18n/RegionContext";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const t = useT();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: t("news.toastTitle"),
      description: t("news.toastDesc"),
    });
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm font-semibold uppercase tracking-[0.25em] mb-3">{t("news.eyebrow")}</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary-foreground mb-4 tracking-tight">
            {t("news.title")}
          </h2>
          <p className="text-primary-foreground/70 text-base mb-8 leading-relaxed">
            {t("news.subtitle")}
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder={t("news.placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-primary-foreground/50 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={submitted}
              className="px-8 py-3.5 bg-primary-foreground text-primary font-semibold text-xs uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors disabled:opacity-70"
            >
              {submitted ? t("news.subscribed") : t("news.signUp")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
