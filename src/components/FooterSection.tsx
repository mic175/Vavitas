import logoAsset from "@/assets/vavitas-tree-logo.png.asset.json";
const logo = logoAsset.url;
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { useRegion, useT } from "@/i18n/RegionContext";
import RegionSwitcher from "./RegionSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  getShopifyLoginUrl,
  getShopifyAccountUrl,
  getShopifyRewardsUrl,
  redirectToShopifyLocalizedUrl,
} from "@/lib/shopifyLinks";

const FooterSection = () => {
  const t = useT();
  const { regionalPath, region, language } = useRegion();
  const instagramUrl =
    region === "sg" ? "https://www.instagram.com/vavitashealth.sg/" : "https://www.instagram.com/vavitas_health/";
  const tiktokUrl = region === "sg" ? "https://www.tiktok.com/@vavitashealth.sg" : "https://www.tiktok.com/@vavitas";
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-12 max-w-6xl mx-auto mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Vavitas" className="h-24 -mt-4 mb-4 opacity-90" />
            <p className="text-background/50 text-sm leading-relaxed mb-4">{t("footer.tagline")}</p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://www.vavitas-health.com"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                title="Official Website"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589656589270"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#1877F2" }}
                title="Facebook"
              >
                <Facebook className="w-4 h-4 fill-current" />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)" }}
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Vavitas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#FF0000" }}
                title="YouTube"
              >
                <Youtube className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.linkedin.com/company/112709935/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#0A66C2" }}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://www.tiktok.com/@vavitashealth"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                style={{ backgroundColor: "#000000" }}
                title="TikTok"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
                </svg>
              </a>
              <a
                href="https://www.xiaohongshu.com/user/profile/6a029771000000000d034c00"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[10px] font-bold transition-transform hover:scale-110"
                style={{ backgroundColor: "#FF2442" }}
                title="小红书 (RED)"
              >
                RED
              </a>
              <a
                href="https://v.lemon8-app.com/s/OgpvdxFwdp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold transition-transform hover:scale-110"
                style={{ backgroundColor: "#FFE600", color: "#1a1a1a" }}
                title="Lemon8"
              >
                L8
              </a>
              <a
                href="https://www.douyin.com/user/MS4wLjABAAAAyx23L4Zfk30DnYxFoyli1IaRh7Kdc3LWkpiMZeIGxy8H_kR859tGPrlM4UwwAKrQ?from_tab_name=main"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: "#25F4EE" }}
                title="抖音 (Douyin)"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" style={{ color: "#111111" }}>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.93a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.products")}</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li>
                <a
                  href={`${regionalPath("/")}#products`}
                  className="hover:text-background transition-colors font-medium text-background/70"
                >
                  {t("footer.all")}
                </a>
              </li>
              {[
                { id: "fish-oil", label: "Fish Oil" },
                { id: "vitamin-d3-k2", label: "Vitamin D3 + K2" },
                { id: "nmn", label: "NMN" },
                { id: "ubiquinol", label: "Ubiquinol" },
                { id: "collagen-peptides", label: "Collagen Peptides" },
              ].map((p) => (
                <li key={p.id}>
                  <a
                    href={regionalPath(`/product/${p.id}`)}
                    className="hover:text-background transition-colors"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Shop by Health Goal */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.shopByGoal")}</h4>
            <ul className="space-y-2 text-sm text-background/50">
              {[
                { key: "heart", labelKey: "bc.filter.heart" },
                { key: "bone", labelKey: "bc.filter.bone" },
                { key: "energy", labelKey: "bc.filter.energy" },
                { key: "aging", labelKey: "bc.filter.aging" },
                { key: "skin", labelKey: "bc.filter.skin" },
              ].map((g) => (
                <li key={g.key}>
                  <a
                    href={`${regionalPath("/")}?goal=${g.key}#products`}
                    className="hover:text-background transition-colors"
                  >
                    {t(g.labelKey as Parameters<typeof t>[0])}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li>
                <a href={`${regionalPath("/")}#about`} className="hover:text-background transition-colors">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href={`${regionalPath("/")}#team`} className="hover:text-background transition-colors">
                  {t("footer.ourTeam")}
                </a>
              </li>
              <li>
                <a href={`${regionalPath("/")}#quality`} className="hover:text-background transition-colors">
                  {t("footer.qualityStandards")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.vavitas-health.com"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  {t("footer.officialSite")}
                </a>
              </li>
            </ul>
            <div className="mt-5 space-y-3">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-background/40 mb-2">{t("footer.region")}</p>
                <RegionSwitcher variant="footer" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-background/40 mb-2">{t("footer.language")}</p>
                <LanguageSwitcher variant="footer" />
              </div>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.customerCare")}</h4>
            <ul className="space-y-2 text-sm text-background/50">
              <li>
                <a href={regionalPath("/shipping-policy")} className="hover:text-background transition-colors">
                  {t("footer.shippingPolicy")}
                </a>
              </li>
              <li>
                <a href={regionalPath("/returns-refunds")} className="hover:text-background transition-colors">
                  {t("footer.returnsRefunds")}
                </a>
              </li>
              <li>
                <a href={regionalPath("/privacy-policy")} className="hover:text-background transition-colors">
                  {t("footer.privacyPolicy")}
                </a>
              </li>
              <li>
                <a href={regionalPath("/terms-of-service")} className="hover:text-background transition-colors">
                  {t("footer.termsOfService")}
                </a>
              </li>
              <li>
                <a href={regionalPath("/support")} className="hover:text-background transition-colors">
                  {t("footer.contactSupport")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="text-sm text-background/50 space-y-2">
              <p>Vavitas Inc.</p>
              <p>Cliffside Park, NJ 07010, USA</p>
              <a href="mailto:info@vavitas-health.com" className="hover:text-background transition-colors block">
                info@vavitas-health.com
              </a>
              <a
                href="https://www.vavitas-health.com"
                rel="noopener noreferrer"
                className="hover:text-background transition-colors block"
              >
                www.vavitas-health.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 pb-6 mb-2">
          <h4 className="font-heading text-lg font-semibold mb-4 text-background">{t("footer.membership")}</h4>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-background/50">
            <li>
              <a
                href={`${regionalPath("/")}#rewards`}
                className="hover:text-background transition-colors"
              >
                {t("footer.rewards")}
              </a>
            </li>
            <li>
              <a
                href={getShopifyRewardsUrl(region, language)}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "footer-rewards" });
                }}
                className="hover:text-background transition-colors"
              >
                {t("footer.createAccount")}
              </a>
            </li>
            <li>
              <a
                href={getShopifyLoginUrl(region, language)}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "footer-login" });
                }}
                className="hover:text-background transition-colors"
              >
                {t("footer.signIn")}
              </a>
            </li>
            <li>
              <a
                href={getShopifyAccountUrl(region, language)}
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "footer-orders" });
                }}
                className="hover:text-background transition-colors"
              >
                {t("footer.orderHistory")}
              </a>
            </li>
          </ul>
        </div>


        <div className="border-t border-background/10 pt-8 text-center text-xs text-background/30">
          <p className="max-w-3xl mx-auto mb-3">{t("footer.disclaimer")}</p>
          <p>
            © {new Date().getFullYear()} Vavitas Inc. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
