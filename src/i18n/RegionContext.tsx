import { createContext, useContext, useEffect, useMemo, useRef, useState, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resolveDict, TranslationKey } from "./translations";

export type Region = "global" | "sg" | "cn" | "hk";
export type Language = "en" | "zh-CN" | "zh-TW";

export const REGION_STORAGE_KEY = "vavitas.region";
export const LANGUAGE_STORAGE_KEY = "vavitas.language";

// Supported languages per region (first item is the default).
export const SUPPORTED_LANGUAGES: Record<Region, Language[]> = {
  global: ["en", "zh-CN", "zh-TW"],
  sg: ["en", "zh-TW", "zh-CN"],
  cn: ["zh-CN", "zh-TW", "en"],
  hk: ["zh-TW", "en", "zh-CN"],
};

export const defaultLanguageForRegion = (region: Region): Language =>
  SUPPORTED_LANGUAGES[region][0];

type RegionLanguageSelection = { region: Region; language: Language };

let currentRegionLanguageSelection: RegionLanguageSelection = {
  region: "global",
  language: "en",
};

export const getCurrentRegionLanguageSelection = (): RegionLanguageSelection =>
  currentRegionLanguageSelection;

export const persistRegionLanguageSelection = (region: Region, language: Language) => {
  currentRegionLanguageSelection = { region, language };

  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(REGION_STORAGE_KEY, region);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    /* ignore */
  }
};

interface RegionContextValue {
  region: Region;
  language: Language;
  supportedLanguages: Language[];
  prefix: string; // "", "/sg", "/cn", "/hk"
  t: (key: TranslationKey) => string;
  regionalPath: (path: string) => string;
  setLanguage: (lang: Language) => void;
}

const RegionContext = createContext<RegionContextValue | null>(null);

const detectRegionFromPath = (pathname: string): Region => {
  const seg = pathname.split("/").filter(Boolean)[0];
  if (seg === "sg" || seg === "cn" || seg === "hk") return seg;
  return "global";
};

const readStoredLanguage = (): Language | null => {
  try {
    const v = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (v === "en" || v === "zh-CN" || v === "zh-TW") return v;
  } catch {
    /* ignore */
  }
  return null;
};

const QUERY_LANG_MAP: Record<string, Language> = {
  en: "en",
  english: "en",
  zhcn: "zh-CN",
  "zh-cn": "zh-CN",
  zhhans: "zh-CN",
  "zh-hans": "zh-CN",
  zhtw: "zh-TW",
  "zh-tw": "zh-TW",
  zhhant: "zh-TW",
  "zh-hant": "zh-TW",
};

const parseQueryRegion = (v: string | null): Region | null => {
  if (!v) return null;
  const lower = v.toLowerCase();
  if (lower === "global" || lower === "sg" || lower === "cn" || lower === "hk") return lower as Region;
  return null;
};

const parseQueryLanguage = (v: string | null): Language | null => {
  if (!v) return null;
  return QUERY_LANG_MAP[v.toLowerCase()] ?? null;
};

export const RegionProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // One-time sync of ?region=&lang= query params from Shopify hand-back.
  // Read from window.location once at mount so we capture params even if
  // upstream routing strips them before our first render commits.
  const syncedRef = useRef(false);
  const initialSync = useMemo(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const qRegion = parseQueryRegion(params.get("region"));
    const qLang = parseQueryLanguage(params.get("lang"));
    if (!qRegion && !qLang) return null;

    const pathRegion = detectRegionFromPath(window.location.pathname);
    const targetRegion: Region = pathRegion !== "global" ? pathRegion : (qRegion ?? pathRegion);
    const targetLang: Language =
      qLang && SUPPORTED_LANGUAGES[targetRegion].includes(qLang)
        ? qLang
        : defaultLanguageForRegion(targetRegion);

    return { targetRegion, targetLang, params };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (syncedRef.current || !initialSync) return;
    syncedRef.current = true;
    const { targetRegion, targetLang, params } = initialSync;

    persistRegionLanguageSelection(targetRegion, targetLang);
    setLanguageState(targetLang);

    params.delete("region");
    params.delete("lang");
    const remaining = params.toString();

    const strippedPath =
      window.location.pathname.replace(/^\/(sg|cn|hk)(?=\/|$)/, "") || "/";
    const newPrefix = targetRegion === "global" ? "" : `/${targetRegion}`;
    const newPath = (newPrefix + (strippedPath === "/" ? "" : strippedPath)) || "/";
    const newUrl = newPath + (remaining ? `?${remaining}` : "") + window.location.hash;

    navigate(newUrl, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const region = detectRegionFromPath(location.pathname);
  const supported = SUPPORTED_LANGUAGES[region];

  // Resolve language: stored if compatible, else region default.
  const resolveLanguage = (r: Region): Language => {
    const stored = readStoredLanguage();
    if (stored && SUPPORTED_LANGUAGES[r].includes(stored)) return stored;
    return defaultLanguageForRegion(r);
  };

  const [language, setLanguageState] = useState<Language>(() => resolveLanguage(region));

  currentRegionLanguageSelection = { region, language };

  // Re-resolve language when region changes (e.g. user switched site).
  useEffect(() => {
    const nextLanguage = resolveLanguage(region);
    persistRegionLanguageSelection(region, nextLanguage);
    setLanguageState(nextLanguage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region]);

  useEffect(() => {
    document.documentElement.lang =
      language === "zh-CN" ? "zh-CN" : language === "zh-TW" ? "zh-TW" : "en";
  }, [language]);

  const setLanguage = (lang: Language) => {
    if (!supported.includes(lang)) return;
    persistRegionLanguageSelection(region, lang);
    setLanguageState(lang);
  };

  const prefix = region === "global" ? "" : `/${region}`;

  const value = useMemo<RegionContextValue>(() => {
    const dict = resolveDict(region, language);
    return {
      region,
      language,
      supportedLanguages: supported,
      prefix,
      t: (key) => dict[key] ?? key,
      regionalPath: (path) => {
        if (!path.startsWith("/")) return path;
        const cleaned = path.replace(/^\/(sg|cn|hk)(?=\/|$)/, "") || "/";
        if (region === "global") return cleaned;
        if (cleaned === "/") return prefix;
        return `${prefix}${cleaned}`;
      },
      setLanguage,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [region, language, prefix]);

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
};

const FALLBACK_REGION: Region = "global";
const FALLBACK_LANGUAGE: Language = "en";
const fallbackDict = resolveDict(FALLBACK_REGION, FALLBACK_LANGUAGE);
const fallbackValue: RegionContextValue = {
  region: FALLBACK_REGION,
  language: FALLBACK_LANGUAGE,
  supportedLanguages: SUPPORTED_LANGUAGES[FALLBACK_REGION],
  prefix: "",
  t: (key) => fallbackDict[key] ?? key,
  regionalPath: (path) => path,
  setLanguage: () => {},
};

export const useRegion = () => {
  const ctx = useContext(RegionContext);
  return ctx ?? fallbackValue;
};

export const useT = () => useRegion().t;
