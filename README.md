# VAVITAS

Source code for the VAVITAS supplement brand website: a responsive React application with regional storefront experiences, multilingual product education, Shopify purchase links, and a Supabase partnership inquiry backend.

**Brand website:** [vavitas-health.com](https://www.vavitas-health.com)  
**Shopify storefront:** [shop.vavitas-health.com](https://shop.vavitas-health.com)

## Features

- **Product discovery and education** for Fish Oil, Vitamin D3 + K2, NMN, Ubiquinol, and Collagen Peptides, with product photography, ingredient information, usage details, FAQs, and dedicated educational sections.
- **Regional experiences** for Global, Singapore, Mainland China, and Hong Kong, with English, Simplified Chinese, and Traditional Chinese translations. Region and language choices are persisted locally and passed into Shopify links.
- **Shopify integration** for product variants and selling plans, subscription selection, and localized purchase handoff. Checkout and payment processing take place in Shopify.
- **Brand and company content** including manufacturing partners, quality and certification displays, team profiles, news, testimonials, video, and a Trustpilot widget.
- **Partnership inquiries** submitted to a Supabase Edge Function, stored in a database, and accompanied by internal and customer confirmation emails when the email integration is configured.
- **Policy and support pages** for shipping, returns and refunds, privacy, terms, and customer support.
- **Responsive UI** built with Tailwind CSS, shadcn/ui, and Radix UI components.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, TypeScript, Vite 5, React Router 6 |
| UI | Tailwind CSS 3, shadcn/ui, Radix UI, Lucide icons |
| Data and forms | TanStack Query, React Hook Form, Zod |
| Commerce | Shopify Storefront GraphQL API and hosted Shopify storefront |
| Backend | Supabase client, SQL migrations, Deno Edge Function |
| Tooling | ESLint, Vitest, Testing Library; exported Playwright configuration |

The project was originally developed with Lovable. Its exported source, assets, migrations, and configuration are maintained here. The npm lockfile provides the installation path documented below; the original Bun lockfiles are also retained.

## Local development

### Prerequisites

- Node.js 22 LTS with npm.
- A Supabase project URL and a browser-safe publishable key. The Supabase client is initialized when the application loads, so these values must be configured before starting the site.

### 1. Clone and install

```bash
git clone https://github.com/mic175/Vavitas.git
cd Vavitas
npm ci
```

### 2. Configure the environment

Copy the example file:

```bash
cp .env.example .env
```

In Windows PowerShell, use:

```powershell
Copy-Item .env.example .env
```

Replace the placeholders in `.env` with your project's settings:

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL, used by the browser client |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Browser-safe publishable key, used by the browser client |
| `VITE_SUPABASE_PROJECT_ID` | Project reference included in the original export; not read by the current client |

Vite exposes `VITE_` variables to the browser. Keep service-role credentials, email provider keys, and other private credentials in server-side settings. `.env` files are ignored by Git; `.env.example` contains placeholders only.

### 3. Start the development server

```bash
npm run dev
```

Open **http://localhost:8080**. If that port is occupied, use the URL printed by Vite. Restart the server after changing environment values.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production output in `dist/` |
| `npm run build:dev` | Build with development-mode configuration |
| `npm run preview` | Preview the built site locally |
| `npm run lint` | Run the existing ESLint rules |
| `npm test` | Run the existing Vitest tests once |
| `npm run test:watch` | Run Vitest in watch mode |

To preview a production build:

```bash
npm run build
npm run preview
```

Use the local URL printed by the preview command.

## Routes and regional behavior

The application uses client-side routing. Most routes are available at the global root and under `/sg`, `/cn`, and `/hk`.

| Route | Purpose |
| --- | --- |
| `/` | Global home page |
| `/sg`, `/cn`, `/hk` | Regional home pages |
| `/product/:id` | Product information and education |
| `/products/:id` | Product information alias |
| `/shop/:id` | Product purchase and subscription selection |
| `/shop` | Legacy redirect to the Fish Oil information page |
| `/checkout/confirmed/redirect` | Checkout return page |
| `/cart` | Empty-cart landing page |
| `/shipping-policy`, `/returns-refunds` | Purchase policy pages |
| `/privacy-policy`, `/terms-of-service`, `/support` | Privacy, terms, and support |

Example product IDs: `fish-oil`, `vitamin-d3-k2`, `nmn`, `ubiquinol`, and `collagen-peptides`. A regional product URL looks like `/sg/product/fish-oil`.

The region is derived from the URL prefix. Default languages are English for Global and Singapore, Simplified Chinese for Mainland China, and Traditional Chinese for Hong Kong. Each region supports all three languages. The existing legacy `/shop` redirect points to the global Fish Oil page.

## Project structure

| Path | Contents |
| --- | --- |
| `src/pages/` | Home, product, purchase, checkout return, cart, and policy pages |
| `src/components/` | Website sections, navigation, product education, forms, and commerce UI |
| `src/components/ui/` | Reusable shadcn/ui and Radix-based components |
| `src/data/products.ts` | Product metadata and links |
| `src/i18n/` | Region/language context and translation dictionaries |
| `src/lib/shopifyLinks.ts` | Localized storefront URLs and Shopify handoff helpers |
| `src/lib/shopifyStorefront.ts` | Storefront API product, selling-plan, and cart helpers |
| `src/integrations/supabase/` | Browser client and generated database types |
| `src/assets/` | Product, brand, lifestyle, partner, and certification imagery |
| `public/` | Favicon, robots file, sitemap, and video |
| `supabase/functions/submit-partnership-inquiry/` | Inquiry validation, database insert, and email delivery |
| `supabase/migrations/` | Storage access policies and partnership inquiry schema/policies |
| `src/test/` | Existing test setup and starter test |
| `.lovable/` | Original development plan from the export |

## Integration setup

### Shopify

The existing Shopify domain, public Storefront access token, and API version are defined in `src/lib/shopifyStorefront.ts`. Storefront URLs and localization logic are in `src/lib/shopifyLinks.ts`; product handles and links are in `src/data/products.ts`.

When adapting the project to a different store, update these settings together and configure matching product handles, variants, markets, and selling plans in Shopify. The public Storefront token is part of the browser integration; private Admin API credentials do not belong in this frontend.

### Supabase and partnership emails

For a separate backend environment:

1. Configure the frontend `.env` for that Supabase project.
2. Update the project reference in `supabase/config.toml` and apply the included migrations to the intended project.
3. Deploy the `submit-partnership-inquiry` Edge Function.
4. Ensure its runtime has `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, plus the server-side `LOVABLE_API_KEY` and `RESEND_API_KEY` required by the current email gateway implementation.
5. Configure the sending domain and review the sender, reply-to, and internal recipient addresses in the function.

The current function sends email through Lovable's Resend connector gateway. Independent hosting requires access to that gateway or a replacement email transport. It saves inquiries to `partnership_inquiries` before sending emails; an email failure can therefore occur after an inquiry has already been saved.

## Deployment

Run `npm run build` with the target environment's frontend variables and deploy the resulting `dist/` directory to a static host. Configure the host to serve `index.html` for application routes so refreshing a URL such as `/cn/product/nmn` works.

Supabase functions and migrations are deployed separately. Shopify continues to provide its hosted storefront and checkout. This repository import does not change either service's deployment.

## Current implementation notes

- The newsletter form currently displays a success message in the UI; it does not submit to a mailing list provider or persist email addresses.
- `/cart` is an empty-cart page. The checkout return page displays a confirmation message without independently verifying an order. Shopify handles the purchase lifecycle.
- Product reviews, ratings, and other brand content include locally maintained data; the Trustpilot widget is a separate external integration.
- The included Vitest suite contains a starter test, not comprehensive feature coverage. The exported Playwright files reference Lovable-specific helper packages that are not declared in `package.json`.
- Live commerce, email, external widgets, and hosted storage depend on their respective services and configuration. A successful local build does not verify these integrations.

## License and assets

No license file is included in the original export. VAVITAS branding, product photography, certification images, and third-party logos are retained as supplied with the project. Check the relevant permissions before reusing them in another project.
