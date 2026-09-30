import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { useRegion } from "@/i18n/RegionContext";
import { REGION_STORAGE_KEY } from "./RegionSwitcher";

const DISMISS_KEY = "vavitas.regionDismissed";

type Suggested = "sg" | "cn" | null;

const detectByLanguage = (): Suggested => {
  const lang = (navigator.language || "").toLowerCase();
  if (lang.includes("zh-cn") || lang === "zh") return "cn";
  if (lang.includes("sg")) return "sg";
  return null;
};

const RegionSuggestionBanner = () => {
  const { region } = useRegion();
  const navigate = useNavigate();
  const [suggested, setSuggested] = useState<Suggested>(null);

  useEffect(() => {
    if (region !== "global") return;
    try {
      if (localStorage.getItem(DISMISS_KEY) || localStorage.getItem(REGION_STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    let cancelled = false;
    const apply = (s: Suggested) => {
      if (!cancelled && s) setSuggested(s);
    };

    // Try ipapi.co first; fall back to navigator language.
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 2500);
    fetch("https://ipapi.co/json/", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { country_code?: string } | null) => {
        clearTimeout(timer);
        const cc = data?.country_code?.toUpperCase();
        if (cc === "SG") return apply("sg");
        if (cc === "CN") return apply("cn");
        apply(detectByLanguage());
      })
      .catch(() => {
        clearTimeout(timer);
        apply(detectByLanguage());
      });

    return () => {
      cancelled = true;
      ctrl.abort();
      clearTimeout(timer);
    };
  }, [region]);

  if (region !== "global" || !suggested) return null;

  const isCn = suggested === "cn";
  const message = isCn
    ? "您似乎来自中国大陆。访问我们的中国站点以获取本地化内容。"
    : "It looks like you're visiting from Singapore. View our Singapore site for local information.";
  const cta = isCn ? "前往中国站点" : "Go to Singapore site";
  const dismissLabel = isCn ? "关闭" : "Dismiss";
  const target = isCn ? "/cn" : "/sg";

  const handleDismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setSuggested(null);
  };

  const handleGo = () => {
    try {
      localStorage.setItem(REGION_STORAGE_KEY, suggested);
    } catch {
      /* ignore */
    }
    navigate(target);
  };

  return (
    <div className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-2.5 flex items-center justify-between gap-4 text-sm">
        <p className="flex-1 leading-snug">{message}</p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleGo}
            className="px-3 py-1.5 bg-primary-foreground text-primary text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-primary-foreground/90 transition"
          >
            {cta}
          </button>
          <button
            onClick={handleDismiss}
            aria-label={dismissLabel}
            className="p-1.5 hover:bg-primary-foreground/10 rounded-sm transition"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegionSuggestionBanner;
