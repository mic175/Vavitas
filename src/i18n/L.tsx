import { ReactNode } from "react";
import { useT } from "@/i18n/RegionContext";

/**
 * <L> — wraps customer-facing English text so it's translated at render time.
 * - String children are looked up in the active language dictionary.
 * - Falls back to the original English when no translation is available.
 * - Whitespace-only or non-string children are passed through unchanged.
 */
export const L = ({ children }: { children: ReactNode }) => {
  const t = useT();
  if (children == null || children === false) return null;
  if (typeof children === "string") {
    const collapsed = children.replace(/\s+/g, " ").trim();
    if (!collapsed) return <>{children}</>;
    return <>{t(collapsed)}</>;
  }
  if (typeof children === "number") return <>{children}</>;
  // Array / element children — translate any string leaves we can find.
  if (Array.isArray(children)) {
    return (
      <>
        {children.map((c, i) =>
          typeof c === "string" ? (
            <L key={i}>{c}</L>
          ) : (
            <span key={i}>{c}</span>
          )
        )}
      </>
    );
  }
  return <>{children}</>;
};

export default L;
