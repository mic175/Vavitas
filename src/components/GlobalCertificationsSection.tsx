import certUsa from "@/assets/cert-usa.png";
import certFdaRegistered from "@/assets/cert-fda-registered.jpg";
import certNsfGmp from "@/assets/cert-nsf-gmp.jpg";
import certCgmp from "@/assets/cert-cgmp.jpg";
import logoBactolac from "@/assets/logo-bactolac-clean.png";
import bactolacHQ from "@/assets/bactolac-hq.jpg";
import bactolacProduction from "@/assets/bactolac-production.jpg";
import bactolacLine from "@/assets/bactolac-line.jpg";
import bactolacQcLab from "@/assets/bactolac-qc-lab.jpg";
import bactolacBlisterPacking from "@/assets/bactolac-blister-packing.jpg";
import certFdaCgmpBactolac from "@/assets/cert-fda-cgmp-bactolac.jpg";
import certNsfGmp455 from "@/assets/cert-nsf-gmp-455.jpg";
import productVavitasCollagenPeptide from "@/assets/product-vavitas-collagen-peptide.jpg";
import productVavitasUbiquinol from "@/assets/product-vavitas-ubiquinol.jpg";
import productVavitasNmn from "@/assets/product-vavitas-nmn.png";

import gelitaHQ from "@/assets/gelita-headquarters.jpg";
import gelitaLab from "@/assets/gelita-lab.jpg";
import gelitaProducts from "@/assets/gelita-products.jpg";
import gelitaLogistics from "@/assets/gelita-logistics.jpg";
import gelitaProduction from "@/assets/gelita-production.jpg";
import gelitaRnd from "@/assets/gelita-rnd.jpg";
import certEuGmp from "@/assets/cert-eu-gmp.png";
import certIso22000 from "@/assets/cert-iso-22000.png";
import certIfsFood from "@/assets/cert-ifs-food.png";
import logoVerisol from "@/assets/logo-verisol-teal.png";
import logoBcp from "@/assets/logo-bcp-teal.png";
import kanekaHQ from "@/assets/kaneka-headquarters.jpg";
import kanekaLab from "@/assets/kaneka-lab.jpg";
import kanekaProducts from "@/assets/kaneka-products.jpg";
import kanekaFermentation from "@/assets/kaneka-fermentation.jpg";
import kanekaSoftgelLine from "@/assets/kaneka-softgel-line.jpg";
import logoKaneka from "@/assets/logo-kaneka-clean.png";
import logoUbiquinol from "@/assets/logo-ubiquinol.png";
import logoKanekaQ10 from "@/assets/logo-kaneka-q10.png";
import certGmp from "@/assets/cert-gmp.png";
import certIso22000Badge from "@/assets/cert-iso-22000-badge.png";
import certHalal from "@/assets/cert-halal.png";
import { L } from "@/i18n/L";

type CertItem = { label: string; logo?: string };

type PartnerBrand = {
  wordmark: string;
  suffix?: string;
  accent: "primary" | "japan";
};

type PartnerInfo = {
  brand: PartnerBrand;
  logo?: string;
  name: string;
  tagline: string;
  body: string;
  website?: { label: string; url: string };
  gallery?: string[];
  products?: { name: string; subtitle?: string; logo?: string; desc: string }[];
};

type Country = {
  flag: string;
  country: string;
  badge: string;
  badgeIsPhoto?: boolean;
  badges?: string[];
  facility: string;
  certs: CertItem[];
  desc: string;
  partner?: PartnerInfo;
  partners?: PartnerInfo[];
};

const countries: Country[] = [
  {
    flag: "🇺🇸",
    country: "United States",
    badge: bactolacHQ,
    badgeIsPhoto: true,
    facility: "Bactolac Pharmaceutical — Hauppauge, New York",
    certs: [
      { label: "FDA Registered", logo: certFdaRegistered },
      { label: "NSF / GMP", logo: certNsfGmp },
      { label: "cGMP Certified", logo: certCgmp },
    ],
    desc: "Pharmaceutical-grade manufacturing under FDA oversight, ensuring every batch meets strict cGMP standards.",
    partner: {
      brand: { wordmark: "BACTOLAC", suffix: "PHARMACEUTICAL", accent: "primary" },
      logo: logoBactolac,
      name: "In partnership with Bactolac Pharmaceutical, Inc.",
      tagline: "Founded 1995 · Hauppauge, New York · Large-scale Contract Manufacturer",
      body: "One of the largest U.S. contract manufacturers of dietary supplements, Bactolac offers full-service R&D, manufacturing, and private-label services across diverse dosage forms — operating cGMP-certified, FDA-registered facilities.",
      website: { label: "bactolac.com", url: "https://www.bactolac.com" },
      gallery: [bactolacHQ, bactolacProduction, bactolacLine],
      products: [
        {
          name: "VAVITAS® Collagen Peptide",
          subtitle: "VERISOL® Stick Packs",
          logo: productVavitasCollagenPeptide,
          desc: "Skin, Hair, Nail + Joint support — clinically studied bioactive collagen peptide stick packs.",
        },
        {
          name: "VAVITAS® Ubiquinol",
          subtitle: "Active CoQ10 · 100mg",
          logo: productVavitasUbiquinol,
          desc: "Superior absorption softgels — the active form of CoQ10 for heart & cellular energy.",
        },
      ],
    },
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    badge: gelitaHQ,
    badgeIsPhoto: true,
    facility: "Gelita AG Headquarters — Eberbach, Baden-Württemberg",
    certs: [
      { label: "EU-GMP Certified", logo: certEuGmp },
      { label: "ISO 22000", logo: certIso22000 },
      { label: "IFS Food Standard", logo: certIfsFood },
    ],
    desc: "European pharmaceutical excellence with rigorous EU-GMP protocols and full traceability of every ingredient.",
    partner: {
      brand: { wordmark: "GELITA", suffix: "AG", accent: "primary" },
      name: "In partnership with Gelita AG",
      tagline: "Family-owned since 1875 · Global leader in collagen & gelatin",
      body: "With ~3,000 employees and operations in 20+ countries, Gelita supplies pharmaceutical-grade collagen peptides and gelatin to the world's most demanding food, nutrition, and pharmaceutical brands — backed by industry-leading R&D and quality systems.",
      website: { label: "gelita.com", url: "https://www.gelita.com" },
      gallery: [gelitaHQ, gelitaLab, gelitaRnd],
      products: [
        {
          name: "VERISOL®",
          logo: logoVerisol,
          desc: "Beauty from Within — clinically studied bioactive collagen peptides for skin elasticity.",
        },
        {
          name: "Bioactive Collagen Peptides®",
          logo: logoBcp,
          desc: "Trusted Science — targeted BCP® portfolio for joints, bones, muscles & beauty.",
        },
      ],
    },
  },
  {
    flag: "🇯🇵",
    country: "Japan",
    badge: kanekaHQ,
    badgeIsPhoto: true,
    facility: "Kaneka Corporation Headquarters — Osaka, Japan",
    certs: [
      { label: "GMP Certified", logo: certGmp },
      { label: "ISO 22000", logo: certIso22000Badge },
      { label: "Halal Certified", logo: certHalal },
    ],
    desc: "Precision Japanese craftsmanship — patented yeast-fermentation technology with the highest standards of purity, potency, and clinical validation.",
    partner: {
      brand: { wordmark: "KANEKA", suffix: "Corp.", accent: "japan" },
      name: "In partnership with Kaneka Corporation",
      tagline: "Founded 1949 · Osaka · Global leader in functional ingredients",
      body: "A publicly listed Japanese chemicals & life-sciences company, Kaneka is the inventor and global benchmark for Ubiquinol® — the reduced, bio-active form of CoQ10 — produced via patented yeast fermentation and validated by extensive clinical research.",
      website: { label: "kanekanutrients.com", url: "https://www.kanekanutrients.com/" },
      gallery: [kanekaHQ, kanekaLab, kanekaSoftgelLine],
      products: [
        {
          name: "Kaneka Ubiquinol®",
          logo: logoUbiquinol,
          desc: "The reduced, bioactive form of CoQ10 — patented yeast-fermentation, clinically validated for cellular energy.",
        },
        {
          name: "Kaneka Q10™",
          logo: logoKanekaQ10,
          desc: "The global benchmark CoQ10 ingredient — premium purity for heart & cellular health supplements.",
        },
      ],
    },
  },
];

const GlobalCertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">
            <L>{`Global Certifications`}</L>
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            <L>{`Trusted Across`}</L>{" "}
            <span className="text-primary italic"><L>{`Three Continents`}</L></span>
          </h2>
        </div>

        {/* Country cards — uniform 3-column layout for US / Germany / Japan */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {countries.map((c) => {
            return (
            <div
              key={c.country}
              className="group relative bg-card rounded-sm p-8 lg:p-10 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
            >
              {/* Badge / Photo(s) */}
              {c.badges && c.badges.length > 1 ? (
                <div className="relative mb-6 w-full grid grid-cols-2 gap-2">
                  {c.badges.map((src, i) => (
                    <div
                      key={i}
                      className="relative h-44 overflow-hidden rounded-sm"
                    >
                      <img
                        src={src}
                        alt={`${c.country} manufacturing partner facility ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                        width={400}
                        height={300}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={
                    c.badgeIsPhoto
                      ? "relative mb-7 w-full h-56 lg:h-64 overflow-hidden rounded-sm"
                      : "relative mb-7 w-44 h-44 flex items-center justify-center"
                  }
                >
                  {!c.badgeIsPhoto && (
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
                  )}
                  <img
                    src={c.badge}
                    alt={
                      c.badgeIsPhoto
                        ? `${c.country} manufacturing partner facility`
                        : `${c.country} pharmaceutical manufacturing certification badge`
                    }
                    className={
                      c.badgeIsPhoto
                        ? "w-full h-full object-cover scale-110 group-hover:scale-[1.18] transition-transform duration-700"
                        : "relative w-full h-full object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500"
                    }
                    loading="lazy"
                    width={768}
                    height={768}
                  />
                </div>
              )}

              {/* Country */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl" aria-hidden="true">
                  {c.flag}
                </span>
                <h3 className="font-heading text-3xl font-semibold text-foreground">
                  <L>{c.country}</L>
                </h3>
              </div>

              <p className="text-sm text-muted-foreground uppercase tracking-[0.2em] mb-6 font-medium">
                <L>{c.facility}</L>
              </p>

              {/* Cert list — with logo badges where available */}
              {c.certs.some((x) => x.logo) ? (
                <div className="w-full mb-6">
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {c.certs.map((cert) => (
                      <div
                        key={cert.label}
                        className="flex flex-col items-center gap-2 rounded-lg bg-background/60 border border-border/50 p-4"
                      >
                        {cert.logo ? (
                          <img
                            src={cert.logo}
                            alt={`${cert.label} certification logo`}
                            className="w-16 h-16 object-contain"
                            loading="lazy"
                            width={128}
                            height={128}
                          />
                        ) : (
                          <span className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                          </span>
                        )}
                        <span className="text-[11px] font-semibold uppercase tracking-wide text-foreground/80 text-center leading-tight">
                          <L>{cert.label}</L>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <ul className="space-y-2 mb-6 w-full">
                  {c.certs.map((cert) => (
                    <li
                      key={cert.label}
                      className="flex items-center justify-center gap-2 text-base text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-medium"><L>{cert.label}</L></span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Description */}
              <p className="text-foreground/70 text-base leading-relaxed border-t border-border/40 pt-6">
                <L>{c.desc}</L>
              </p>

              {/* Partner block(s) */}
              {(c.partner || c.partners) && (() => {
                const list: PartnerInfo[] = c.partners ?? (c.partner ? [c.partner] : []);
                const showLabel = list.length > 1;
                return (
                  <div className={`mt-6 w-full flex-1 flex ${list.length > 1 ? "grid grid-cols-1 lg:grid-cols-2 gap-5" : "flex-col"}`}>
                    {list.map((partner, idx) => (
                      <div
                        key={partner.brand.wordmark + idx}
                        className="rounded-sm bg-primary/5 border border-primary/20 p-5 lg:p-6 text-left flex flex-col flex-1 w-full"
                      >
                        {showLabel && (
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/70 mb-2">
                            <L>{`Manufacturing Partner`}</L> {String.fromCharCode(65 + idx)}
                          </p>
                        )}
                        {/* Partner wordmark or logo */}
                        <div className="flex items-center justify-center mb-4 pb-4 border-b border-primary/15 min-h-[4.5rem]">
                          {c.country === "Japan" ? (
                            <img
                              src={logoKaneka}
                              alt="Kaneka Corporation logo"
                              className="h-20 w-auto object-contain"
                              loading="lazy"
                            />
                          ) : partner.logo ? (
                            <img
                              src={partner.logo}
                              alt={`${partner.brand.wordmark} logo`}
                              className={`${c.country === "United States" ? "h-28" : "h-20"} w-auto object-contain mix-blend-multiply`}
                              loading="lazy"
                            />
                          ) : (
                            <>
                              <span className="font-heading text-2xl font-black tracking-[0.2em] text-primary">
                                <L>{partner.brand.wordmark}</L>
                              </span>
                              {partner.brand.suffix && (
                                <span className="ml-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                                  <L>{partner.brand.suffix}</L>
                                </span>
                              )}
                            </>
                          )}
                        </div>
                        <p className="font-heading text-base font-semibold text-primary mb-1.5 min-h-[3rem]">
                          <L>{partner.name}</L>
                        </p>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 min-h-[2.5rem]">
                          <L>{partner.tagline}</L>
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed mb-4 min-h-[12rem]">
                          <L>{partner.body}</L>
                        </p>
                        {partner.gallery && (
                          <div
                            className={`grid gap-2 ${
                              partner.gallery.length >= 5
                                ? "grid-cols-3 sm:grid-cols-5"
                                : partner.gallery.length === 4
                                ? "grid-cols-2 sm:grid-cols-4"
                                : "grid-cols-3"
                            }`}
                          >
                            {partner.gallery.map((src, i) => (
                              <img
                                key={i}
                                src={src}
                                alt={`${partner.brand.wordmark} facility ${i + 1}`}
                                className="w-full h-20 sm:h-24 object-cover rounded-md"
                                loading="lazy"
                                width={240}
                                height={160}
                              />
                            ))}
                          </div>
                        )}

                        {partner.products && (
                          <div className="mt-5 pt-5 border-t border-primary/15">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground text-center mb-4 font-semibold">
                              {c.country === "United States" ? "Flagship Products" : "Flagship Product Brands"}
                            </p>
                            <div
                              className={
                                partner.products.length >= 3
                                  ? "grid grid-cols-3 gap-3"
                                  : partner.products.length > 1
                                  ? "grid grid-cols-2 gap-3"
                                  : "grid grid-cols-1 gap-3"
                              }
                            >
                              {partner.products.map((p) => (
                                <div
                                  key={p.name}
                                  className="flex flex-col items-center text-center gap-2 rounded-lg p-2"
                                >
                                  <div className="h-56 w-full flex flex-col items-center justify-center overflow-hidden">
                                    {p.logo ? (
                                      <img
                                        src={p.logo}
                                        alt={`${p.name} logo`}
                                        className={`${c.country === "United States" ? "h-full w-full scale-[1.8]" : "max-h-56 max-w-full"} object-contain mix-blend-multiply`}
                                        loading="lazy"
                                      />
                                    ) : (
                                      <>
                                        <span className="font-heading text-base font-bold text-primary tracking-tight">
                                          <L>{p.name}</L>
                                        </span>
                                        {p.subtitle && (
                                          <span className="text-[9px] uppercase tracking-widest text-muted-foreground mt-0.5">
                                            <L>{p.subtitle}</L>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-foreground/75 leading-snug min-h-[5rem]">
                                    <L>{p.desc}</L>
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {partner.website && (
                          <div className="mt-auto pt-4 border-t border-primary/15 flex items-center justify-center gap-2 text-xs">
                            <span className="uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                              <L>{`Official Site`}</L>
                            </span>
                            <a
                              href={partner.website.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors"
                            >
                              {partner.website.label} ↗
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalCertificationsSection;
