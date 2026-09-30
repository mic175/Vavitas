import { Languages } from "lucide-react";
import { useRegion, Language, useT } from "@/i18n/RegionContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const labels: Record<Language, string> = {
  en: "EN",
  "zh-CN": "简",
  "zh-TW": "繁",
};

const fullLabels: Record<Language, string> = {
  en: "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
};

interface Props {
  variant?: "header" | "footer";
}

const LanguageSwitcher = ({ variant = "header" }: Props) => {
  const { language, supportedLanguages, setLanguage } = useRegion();
  const t = useT();

  // Hide switcher if the current region only supports a single language.
  if (supportedLanguages.length < 2) return null;

  const triggerClass =
    variant === "header"
      ? "group inline-flex items-center gap-1.5 px-3 py-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none text-xs font-semibold uppercase tracking-wider"
      : "inline-flex items-center gap-1.5 text-background/60 hover:text-background transition-colors text-sm";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClass} aria-label={t("lang.label")}>
        <Languages size={16} />
        <span>{labels[language]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-[100] w-44 p-2 bg-background border border-border shadow-xl"
      >
        {supportedLanguages.map((l) => (
          <DropdownMenuItem
            key={l}
            onSelect={() => setLanguage(l)}
            className={`cursor-pointer px-3 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-primary ${
              l === language ? "text-primary" : ""
            }`}
          >
            {fullLabels[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
