import { useT, useRegion } from "@/i18n/RegionContext";

// Approximate conversions of US$300 free-shipping threshold per region.
// Rounded to friendly marketing numbers; not used for actual checkout pricing.
const SHIPPING_AMOUNT_BY_REGION: Record<string, string> = {
  global: "US$300",
  sg: "S$400",
  cn: "¥2,200",
  hk: "HK$2,350",
};

const AnnouncementBar = () => {
  const t = useT();
  const { region } = useRegion();
  const amount = SHIPPING_AMOUNT_BY_REGION[region] ?? "US$300";
  const ann0 = t("ann.0").replace("{amount}", amount);
  const announcements = [ann0, t("ann.1"), t("ann.2"), t("ann.3")];

  return (
    <div className="bg-foreground text-background overflow-hidden h-9 flex items-center">
      <div className="animate-marquee whitespace-nowrap flex gap-16">
        {[...announcements, ...announcements, ...announcements].map((text, i) => (
          <span key={i} className="text-xs tracking-widest uppercase font-medium">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
