import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const CANONICAL_URL = "https://vavitas-health.com/product/fish-oil";
const PAGE_TITLE = "Fish Oil | VAVITAS";

/**
 * Redirects the exact legacy /shop URL to the Fish Oil informational product page.
 * Does NOT match /shop/:slug — those still render ProductShop.
 */
const ShopRootRedirect = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    // Canonical
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const createdCanonical = !canonical;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const previousCanonical = canonical.getAttribute("href");
    canonical.setAttribute("href", CANONICAL_URL);

    // Meta refresh (instant)
    const meta = document.createElement("meta");
    meta.setAttribute("http-equiv", "refresh");
    meta.setAttribute("content", `0;url=${CANONICAL_URL}`);
    document.head.appendChild(meta);

    return () => {
      document.title = previousTitle;
      if (createdCanonical) {
        canonical?.parentNode?.removeChild(canonical);
      } else if (canonical && previousCanonical !== null) {
        canonical.setAttribute("href", previousCanonical);
      }
      meta.parentNode?.removeChild(meta);
    };
  }, []);

  return <Navigate to="/product/fish-oil" replace />;
};

export default ShopRootRedirect;
