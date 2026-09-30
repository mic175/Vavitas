import { useNavigate, useLocation } from "react-router-dom";
import { Globe } from "lucide-react";
import {
  useRegion,
  Region,
  defaultLanguageForRegion,
  persistRegionLanguageSelection,
  REGION_STORAGE_KEY,
} from "@/i18n/RegionContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const labels: Record<Region, string> = {
  global: "🌐 Global",
  sg: "🇸🇬 Singapore",
  cn: "🇨🇳 中国",
  hk: "🇭🇰 Hong Kong",
};

interface Props {
  variant?: "header" | "footer";
}

const RegionSwitcher = ({ variant = "header" }: Props) => {
  const { region, language } = useRegion();
  const navigate = useNavigate();
  const location = useLocation();

  const switchTo = (target: Region) => {
    if (target === region) return;
    // Strip current region prefix from pathname.
    const stripped = location.pathname.replace(/^\/(sg|cn|hk)(?=\/|$)/, "") || "/";
    const newPrefix = target === "global" ? "" : `/${target}`;
    const newPath = (newPrefix + (stripped === "/" ? "" : stripped)) || "/";

    // Business rule: switching region always resets language to that region's default.
    persistRegionLanguageSelection(target, defaultLanguageForRegion(target));
    navigate(newPath + location.search + location.hash);
  };

  const triggerClass =
    variant === "header"
      ? "group inline-flex items-center gap-1.5 px-3 py-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none text-xs font-semibold uppercase tracking-wider"
      : "inline-flex items-center gap-1.5 text-background/60 hover:text-background transition-colors text-sm";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={triggerClass}>
        <Globe size={16} />
        <span>{labels[region]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-[100] w-44 p-2 bg-background border border-border shadow-xl"
      >
        {(Object.keys(labels) as Region[]).map((r) => (
          <DropdownMenuItem
            key={r}
            onSelect={() => switchTo(r)}
            className={`cursor-pointer px-3 py-2.5 text-sm font-medium hover:bg-accent/10 hover:text-primary ${
              r === region ? "text-primary" : ""
            }`}
          >
            {labels[r]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RegionSwitcher;
// Re-export for backward-compat with any imports.
export { REGION_STORAGE_KEY };
