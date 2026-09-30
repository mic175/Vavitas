## Goal
Add regional variants of the site at `/sg` (Singapore) and `/cn` (China, Simplified Chinese), keep `/` as the global default, plus an optional geo-based suggestion banner. No backend/business-logic changes — pure frontend i18n + routing.

## 1. Routing structure

Update `src/App.tsx` to mount the same page tree under three prefixes:

```text
/                       → Index (global)
/sg                     → Index (Singapore)
/cn                     → Index (China)
/products/:id           → ProductDetail (global)
/sg/products/:id        → ProductDetail (Singapore)
/cn/products/:id        → ProductDetail (China)
/shop/:id, /sg/shop/:id, /cn/shop/:id
/cart, /sg/cart, /cn/cart
/checkout/confirmed/redirect (+ /sg, /cn)
* → NotFound
```

Implementation: wrap routes with an optional `:region(sg|cn)?` style by declaring each region as its own `<Route path="/sg/*">` containing the same children, OR simpler — declare the full set three times. I'll use a small helper that renders the route tree given a `basePath`.

## 2. Region context

New file `src/i18n/RegionContext.tsx`:
- `Region = "global" | "sg" | "cn"`
- `useRegion()` reads the first URL segment via `useLocation()` and returns the current region + `prefix` (`""`, `"/sg"`, `"/cn"`).
- `useT()` returns a translator that looks up a key in the current region's dictionary, falling back to `global`.
- Exposes a `<Link>`-like helper `regionalPath(path)` that prepends the prefix so internal links stay within the region.

## 3. Translations

New file `src/i18n/translations.ts` with three dictionaries (`global`, `sg`, `cn`). Keys cover all user-facing strings currently hardcoded in the visible homepage sections + header/footer + product page chrome:

- Header (nav labels, "Where to Buy", account menu, hello sign in)
- AnnouncementBar items
- HeroSection slides (headlines + subtext)
- InspirationSection
- BenefitCategoriesSection
- ProductsSection (eyebrow, title, subtitle, "View Product")
- AboutSection
- QualitySection
- GlobalCertificationsSection
- TestimonialsSection
- TeamSection
- CompanyNewsSection
- FAQSection (questions/answers)
- NewsletterSection
- FooterSection
- ProductDetail/ProductShop chrome labels (Benefits, Ingredients, Directions, Add to Cart, etc.)

`sg` copy = English with Singapore phrasing (SGD pricing hint, "Free shipping across Singapore", spelling: "favourite", "personalised", local trust line). `cn` copy = full Simplified Chinese translation.

Product data (`src/data/products.ts`): extend each product with localized `name`, `subtitle`, `description`, `longDescription`, `benefits`, `tagline` per region. Default field stays as global; add a `i18n: { sg?: Partial<Product>, cn?: Partial<Product> }` map. Components read via a small `useLocalizedProduct(product)` helper.

## 4. Components updated to consume i18n

Refactor these components to call `useT()` / `useRegion()` and use `regionalPath()` for internal `<Link to=...>`:
- `Header.tsx`, `AnnouncementBar.tsx`, `FooterSection.tsx`
- `HeroSection.tsx`, `InspirationSection.tsx`, `BenefitCategoriesSection.tsx`, `ProductsSection.tsx`, `AboutSection.tsx`, `QualitySection.tsx`, `GlobalCertificationsSection.tsx`, `TestimonialsSection.tsx`, `TeamSection.tsx`, `CompanyNewsSection.tsx`, `FAQSection.tsx`, `NewsletterSection.tsx`
- `ProductCard.tsx`, `pages/ProductDetail.tsx`, `pages/ProductShop.tsx`, `pages/CartEmpty.tsx`, `pages/OrderSuccess.tsx`

Visual design, layouts, colors, images — unchanged.

## 5. Region selector

New `src/components/RegionSwitcher.tsx`: dropdown with 🌐 Global / 🇸🇬 Singapore / 🇨🇳 中国. On select: navigate to the same path under the new prefix and `localStorage.setItem('vavitas.region', choice)`. Place in `Header.tsx` (desktop top-right next to account, mobile inside menu) and also a compact text version in `FooterSection.tsx`.

## 6. Geo-suggestion banner

New `src/components/RegionSuggestionBanner.tsx`, rendered inside `Index` only when `useRegion() === "global"`:

- On mount, check `localStorage.getItem('vavitas.regionDismissed')` and `vavitas.region`. If either set, do nothing.
- Detect country via free no-key endpoint `https://ipapi.co/json/` (fallback to `navigator.language` containing `zh-CN` → china, `en-SG`/`zh-SG` → singapore).
- If country is `SG` → banner: "It looks like you're visiting from Singapore. Switch to our Singapore site? [Go to /sg] [Dismiss]"
- If country is `CN` → banner in Simplified Chinese suggesting `/cn`.
- "Go to" navigates and sets `vavitas.region`. "Dismiss" sets `vavitas.regionDismissed = '1'`. Never auto-redirects.

Banner sits below the sticky `AnnouncementBar`+`Header` block (inside the sticky container) so it's visible but dismissible.

## 7. SEO / misc

- Set `<html lang>` dynamically in a small effect inside `RegionContext`: `en` for global/sg, `zh-CN` for cn.
- Update `<title>` and `<meta description>` per region via a `useEffect` in `Index`.
- All `<Link to="/...">` across the codebase updated to use `regionalPath()` so navigation stays within the chosen region.

## 8. Verification

- Visit `/`, `/sg`, `/cn` — confirm copy switches and layout is identical.
- Visit `/sg/products/fish-oil` and `/cn/products/fish-oil` — confirm localized product copy renders.
- Switcher round-trip preserves the current path.
- Banner only appears at `/`, only once, and never force-redirects.

## Out of scope

- Currency conversion / per-region pricing logic (copy hint only).
- Translating long marketing essays not currently shown on the homepage.
- Server-side geo or hreflang sitemap generation.
