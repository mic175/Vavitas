import PolicyPage from "../PolicyPage";
import { useRegion } from "@/i18n/RegionContext";
import type { PageCopy } from "./policyContent";
import type { Language } from "@/i18n/RegionContext";

interface Props {
  copy: Record<Language, PageCopy>;
}

const SUPPORT_PHRASES = [
  "VAVITAS Customer Support",
  "VAVITAS 客户支持",
  "VAVITAS 客戶支援",
];
const SUPPORT_HREF = "mailto:support@vavitas-health.com";

const renderWithSupportLink = (text: string) => {
  // Split on the first matching support phrase and inject a mailto link.
  for (const phrase of SUPPORT_PHRASES) {
    const idx = text.indexOf(phrase);
    if (idx !== -1) {
      const before = text.slice(0, idx);
      const after = text.slice(idx + phrase.length);
      return (
        <>
          {before}
          <a
            href={SUPPORT_HREF}
            className="text-primary underline underline-offset-2 hover:text-accent"
          >
            {phrase}
          </a>
          {renderWithSupportLink(after)}
        </>
      );
    }
  }
  return <>{text}</>;
};

const PolicyPageBase = ({ copy }: Props) => {
  const { language } = useRegion();
  const page = copy[language] ?? copy.en;
  return (
    <PolicyPage eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
      {page.sections.map((s, i) => (
        <section key={i} className="space-y-3">
          <h2 className="text-2xl font-heading text-foreground">{s.heading}</h2>
          {s.body.map((p, j) => (
            <p key={j} className="text-base leading-relaxed text-foreground/80">
              {renderWithSupportLink(p)}
            </p>
          ))}
          {s.table && (
            <div className="overflow-x-auto -mx-2 md:mx-0 mt-4 mb-2">
              <table className="w-full min-w-[480px] text-sm border border-border/60 border-collapse">
                <thead>
                  <tr className="bg-muted/40">
                    {s.table.headers.map((h, hi) => (
                      <th
                        key={hi}
                        className="text-left font-semibold text-foreground border border-border/60 px-3 py-2.5"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((row, ri) => (
                    <tr key={ri} className="odd:bg-background even:bg-muted/20">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="text-foreground/80 border border-border/60 px-3 py-2.5 align-top"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {s.bodyAfter?.map((p, j) => (
            <p key={`after-${j}`} className="text-base leading-relaxed text-foreground/80">
              {renderWithSupportLink(p)}
            </p>
          ))}
        </section>
      ))}
      {page.footnote && (
        <p className="text-xs text-muted-foreground border-t border-border pt-6 mt-8">{page.footnote}</p>
      )}
    </PolicyPage>
  );
};

export default PolicyPageBase;
