import linYiImage from "@/assets/team-lin-yi.jpg";
import margaritaIcon from "@/assets/team-margarita-icon.png";
import dannyKaoIcon from "@/assets/team-danny-kao-icon.png";
import teamM3 from "@/assets/cn-mirrored/team-m3.jpg";
import teamM4 from "@/assets/cn-mirrored/team-m4.png";
import teamM6 from "@/assets/cn-mirrored/team-m6.jpg";
import { useT } from "@/i18n/RegionContext";

const TeamSection = () => {
  const t = useT();
  const team: Array<{ key: string; image: string; isLogo?: boolean }> = [
    { key: "m1", image: margaritaIcon, isLogo: true },
    { key: "m2", image: linYiImage },
    { key: "m3", image: teamM3 },
    { key: "m4", image: teamM4 },
    { key: "m5", image: dannyKaoIcon, isLogo: true },
    { key: "m6", image: teamM6 },
  ];

  return (
    <section id="team" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">{t("team.eyebrow")}</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{t("team.title")}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("team.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => {
            const name = t(`team.${member.key}.name` as never);
            const role = t(`team.${member.key}.role` as never);
            const bio = t(`team.${member.key}.bio` as never);
            return (
              <div
                key={member.key}
                className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 p-6 border border-border/50 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-full overflow-hidden flex items-center justify-center ${
                      member.isLogo ? "bg-muted p-2 border border-border" : ""
                    }`}
                  >
                    <img
                      src={member.image}
                      alt={name}
                      className={`w-full h-full ${member.isLogo ? "object-contain" : "object-cover"}`}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">{name}</h3>
                    <p className="text-primary text-sm font-semibold">{role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
