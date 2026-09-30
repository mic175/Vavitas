import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoAsset from "@/assets/vavitas-logo-new.png.asset.json";
const logo = logoAsset.url;
import { Menu, X, ShoppingCart, User, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRegion, useT } from "@/i18n/RegionContext";
import RegionSwitcher from "./RegionSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  getShopifyCartUrl,
  getShopifyLoginUrl,
  getShopifyAccountUrl,
  getShopifyRewardsUrl,
  redirectToShopifyLocalizedUrl,
} from "@/lib/shopifyLinks";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { regionalPath, prefix, region, language } = useRegion();
  const t = useT();

  const navLinks = [
    { label: t("nav.about"), to: `${prefix}/#about` },
    { label: t("nav.team"), to: `${prefix}/#team` },
    { label: t("nav.partnerships"), to: `${prefix}/#partnerships` },
  ];

  const productLinks: { id: string; labelKey: string }[] = [
    { id: "fish-oil", labelKey: "p.fish-oil.name" },
    { id: "vitamin-d3-k2", labelKey: "p.vitamin-d3-k2.name" },
    { id: "nmn", labelKey: "p.nmn.name" },
    { id: "ubiquinol", labelKey: "p.ubiquinol.name" },
    { id: "collagen-peptides", labelKey: "p.collagen-peptides.name" },
  ];

  const goalLinks: { key: string; labelKey: string }[] = [
    { key: "heart", labelKey: "bc.filter.heart" },
    { key: "bone", labelKey: "bc.filter.bone" },
    { key: "energy", labelKey: "bc.filter.energy" },
    { key: "aging", labelKey: "bc.filter.aging" },
    { key: "skin", labelKey: "bc.filter.skin" },
  ];
  const cartUrl = getShopifyCartUrl(region, language);

  const HEADER_OFFSET = 116;
  const handleNavClick = (to: string) => (e: React.MouseEvent) => {
    const [path, hash] = to.split("#");
    const targetPath = (path || "/").replace(/\?.*$/, "");
    const isProducts = hash === "products";
    if (hash && location.pathname === targetPath) {
      e.preventDefault();
      if (isProducts) {
        window.dispatchEvent(new CustomEvent("vavitas:reset-product-filter"));
      }
      const el = document.getElementById(hash);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
      if (location.hash !== `#${hash}` || location.search) {
        navigate({ pathname: targetPath, search: "", hash: `#${hash}` }, { replace: false });
      }
      setOpen(false);
    } else if (isProducts) {
      // Navigating from a different page – still ensure reset fires after landing
      window.dispatchEvent(new CustomEvent("vavitas:reset-product-filter"));
    }
  };

  return (
    <header className="w-full bg-background border-b border-border">
      <div className="w-full flex items-center justify-between h-24 px-4 md:px-6 lg:px-10 xl:px-14 gap-6">
        <Link
          to={regionalPath("/") + "#home"}
          onClick={() => setOpen(false)}
          className="flex items-center shrink-0"
        >
          <img src={logo} alt="Vavitas" className="h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-7 xl:gap-9 flex-1 justify-center">
          {/* Products with hover dropdown */}
          <div className="relative group">
            <Link
              to={`${prefix}/#products`}
              onClick={handleNavClick(`${prefix}/#products`)}
              className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide whitespace-nowrap relative"
            >
              {t("nav.products")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            {/* Invisible bridge to keep hover continuous */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full h-3 w-56" />
            <div
              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.75rem)] z-[100] w-56 p-2 bg-background border border-border shadow-xl rounded-md"
            >
              {productLinks.map((p) => (
                <Link
                  key={p.id}
                  to={regionalPath(`/product/${p.id}`)}
                  className="block cursor-pointer px-3 py-2.5 text-sm font-medium rounded-sm hover:bg-accent/10 hover:text-primary"
                >
                  {t(p.labelKey as Parameters<typeof t>[0])}
                </Link>
              ))}
            </div>
          </div>

          {/* Shop by Health Goal with hover dropdown */}
          <div className="relative group">
            <Link
              to={`${prefix}/#products`}
              onClick={handleNavClick(`${prefix}/#products`)}
              className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide whitespace-nowrap relative"
            >
              {t("nav.shopByGoal")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full h-3 w-56" />
            <div
              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.75rem)] z-[100] w-56 p-2 bg-background border border-border shadow-xl rounded-md"
            >
              {goalLinks.map((g) => (
                <Link
                  key={g.key}
                  to={`${prefix}/?goal=${g.key}#products`}
                  className="block cursor-pointer px-3 py-2.5 text-sm font-medium rounded-sm hover:bg-accent/10 hover:text-primary"
                >
                  {t(g.labelKey as Parameters<typeof t>[0])}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={handleNavClick(link.to)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide relative group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Customer Care with hover dropdown */}
          <div className="relative group">
            <span
              className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide whitespace-nowrap relative cursor-default"
            >
              {t("nav.customerCare")}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </span>
            <div className="absolute left-1/2 -translate-x-1/2 top-full h-3 w-56" />
            <div
              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.75rem)] z-[100] w-60 p-2 bg-background border border-border shadow-xl rounded-md"
            >
              {[
                { to: regionalPath("/shipping-policy"), labelKey: "footer.shippingPolicy" },
                { to: regionalPath("/returns-refunds"), labelKey: "footer.returnsRefunds" },
                { to: regionalPath("/privacy-policy"), labelKey: "footer.privacyPolicy" },
                { to: regionalPath("/terms-of-service"), labelKey: "footer.termsOfService" },
                { to: regionalPath("/support"), labelKey: "footer.contactSupport" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block cursor-pointer px-3 py-2.5 text-sm font-medium rounded-sm hover:bg-accent/10 hover:text-primary"
                >
                  {t(item.labelKey as Parameters<typeof t>[0])}
                </Link>
              ))}
            </div>
          </div>
        </nav>


        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">

          <a
            href={cartUrl}
            aria-label={t("header.cart")}
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "cart-icon" });
            }}
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </a>

          <Link
            to={`${prefix}/#products`}
            onClick={handleNavClick(`${prefix}/#products`)}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-xs hover:bg-accent transition-all duration-300 whitespace-nowrap"
          >
            {t("header.whereToBuy")}
          </Link>

          <RegionSwitcher />
          <LanguageSwitcher />

          <DropdownMenu>
            <DropdownMenuTrigger className="group inline-flex items-center gap-2 px-2 py-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none">
              <User size={18} />
              <div className="hidden xl:flex flex-col items-start leading-tight whitespace-nowrap">
                <span className="text-[10px] uppercase tracking-wider text-foreground/60">
                  {t("header.helloSignIn")}
                </span>
                <span className="text-xs font-semibold flex items-center gap-1">
                  {t("header.account")}{" "}
                  <ChevronDown size={12} className="transition-transform group-data-[state=open]:rotate-180" />
                </span>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              sideOffset={8}
              className="z-[100] w-56 p-2 bg-background border border-border shadow-xl"
            >
              <DropdownMenuItem asChild>
                <a
                  href={getShopifyLoginUrl(region, language)}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "account-login" });
                  }}
                  className="cursor-pointer px-3 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-primary"
                >
                  {t("header.login")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href={getShopifyRewardsUrl(region, language)}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "account-rewards" });
                  }}
                  className="cursor-pointer px-3 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-primary"
                >
                  {t("header.createFreeAccount")}
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  to={`${prefix}/#rewards`}
                  onClick={handleNavClick(`${prefix}/#rewards`)}
                  className="cursor-pointer px-3 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-primary"
                >
                  {t("header.membershipBenefits")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a
                  href={getShopifyAccountUrl(region, language)}
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    redirectToShopifyLocalizedUrl(e.currentTarget.href, region, language, { source: "account-orders" });
                  }}
                  className="cursor-pointer px-3 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-primary"
                >
                  {t("header.yourOrders")}
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <a
            href="mailto:support@vavitas-health.com"
            aria-label={t("header.support")}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors border-l border-border ml-1 whitespace-nowrap"
          >
            {t("header.support")}
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-6">
          <Link
            to={`${prefix}/#products`}
            onClick={(e) => {
              handleNavClick(`${prefix}/#products`)(e);
              setOpen(false);
            }}
            className="block py-3 text-base font-medium text-foreground/80 hover:text-primary tracking-wide"
          >
            {t("nav.products")}
          </Link>
          <div className="pl-3 -mt-1 mb-1 border-l border-border/60">
            {productLinks.map((p) => (
              <Link
                key={p.id}
                to={regionalPath(`/product/${p.id}`)}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-foreground/70 hover:text-primary"
              >
                {t(p.labelKey as Parameters<typeof t>[0])}
              </Link>
            ))}
          </div>
          <div className="py-3 text-base font-medium text-foreground/80 tracking-wide">
            {t("nav.shopByGoal")}
          </div>
          <div className="pl-3 -mt-1 mb-1 border-l border-border/60">
            {goalLinks.map((g) => (
              <Link
                key={g.key}
                to={`${prefix}/?goal=${g.key}#products`}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-foreground/70 hover:text-primary"
              >
                {t(g.labelKey as Parameters<typeof t>[0])}
              </Link>
            ))}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={(e) => {
                handleNavClick(link.to)(e);
                setOpen(false);
              }}
              className="block py-3 text-base font-medium text-foreground/80 hover:text-primary tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="py-3 text-base font-medium text-foreground/80 tracking-wide">
            {t("nav.customerCare")}
          </div>
          <div className="pl-3 -mt-1 mb-1 border-l border-border/60">
            {[
              { to: regionalPath("/shipping-policy"), labelKey: "footer.shippingPolicy" },
              { to: regionalPath("/returns-refunds"), labelKey: "footer.returnsRefunds" },
              { to: regionalPath("/privacy-policy"), labelKey: "footer.privacyPolicy" },
              { to: regionalPath("/terms-of-service"), labelKey: "footer.termsOfService" },
              { to: regionalPath("/support"), labelKey: "footer.contactSupport" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-foreground/70 hover:text-primary"
              >
                {t(item.labelKey as Parameters<typeof t>[0])}
              </Link>
            ))}
          </div>

          <Link
            to={`${prefix}/#products`}
            onClick={(e) => {
              handleNavClick(`${prefix}/#products`)(e);
              setOpen(false);
            }}
            className="mt-3 block text-center px-6 py-3 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider"
          >
            {t("header.whereToBuy")}
          </Link>
          <a
            href="mailto:support@vavitas-health.com"
            onClick={() => setOpen(false)}
            className="mt-2 block py-3 text-base font-medium text-foreground/80 hover:text-primary tracking-wide"
          >
            {t("header.support")}
          </a>
          <div className="mt-4 flex justify-center gap-3">
            <RegionSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
