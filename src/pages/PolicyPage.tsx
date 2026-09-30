import { ReactNode } from "react";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";

interface PolicyPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

const PolicyPage = ({ eyebrow, title, intro, children }: PolicyPageProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero border-b border-border/60">
          <div className="container mx-auto px-6 lg:px-8 py-20 lg:py-28 max-w-4xl text-center">
            {eyebrow && (
              <p className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground accent-bar-center">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {intro}
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-8 text-foreground/85 leading-relaxed">
            {children}
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default PolicyPage;
