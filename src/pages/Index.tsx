import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InspirationSection from "@/components/InspirationSection";
import BenefitCategoriesSection from "@/components/BenefitCategoriesSection";

import StandardsSection from "@/components/StandardsSection";

import AboutSection from "@/components/AboutSection";
import QualitySection from "@/components/QualitySection";
import GlobalCertificationsSection from "@/components/GlobalCertificationsSection";
import PurchasePolicyAccordion from "@/components/PurchasePolicyAccordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import CompanyNewsSection from "@/components/CompanyNewsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import RewardsSection from "@/components/RewardsSection";
import FooterSection from "@/components/FooterSection";
import RegionSuggestionBanner from "@/components/RegionSuggestionBanner";

import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50 w-full flex flex-col">
        <AnnouncementBar />
        <Header />
        <RegionSuggestionBanner />
      </div>

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Your Body Is a Brilliant Machine */}
      <InspirationSection />

      {/* 3. Product Discovery (health-goal filter + product category cards) */}
      <BenefitCategoriesSection />


      {/* Quality You Can Verify (merged standards + quality cards) */}
      <StandardsSection />

      {/* About VAVITAS */}
      <AboutSection />



      {/* 7. Where Science Meets Quality / Global Ingredient Standards */}
      <QualitySection />

      {/* 8. Manufacturing, Certification, Registration & Documentation */}
      <GlobalCertificationsSection />

      {/* 9. Shipping, Returns & Purchase Confidence */}
      <section id="purchase-confidence" className="relative py-20 md:py-24 bg-gradient-to-b from-warm-cream via-background to-background border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <PurchasePolicyAccordion />
        </div>
      </section>

      {/* 10. What Our Customers Say */}
      <TestimonialsSection />

      {/* 11. Partnerships, Academic Events & Media Mentions */}
      <CompanyNewsSection />

      {/* 12. Meet Our Team */}
      <TeamSection />

      {/* 13. Join VAVITAS Wellness Rewards */}
      <RewardsSection />

      {/* 14. Start a Partnership Conversation */}
      <PartnershipsSection />

      {/* FAQ (kept; not in requested list but preserved per instructions) */}
      <FAQSection />

      {/* 15. Email Signup / Footer */}
      <NewsletterSection />
      <FooterSection />
      <ScrollToTop />
    </div>
  );
};

export default Index;
