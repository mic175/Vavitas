import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import nusConference1 from "@/assets/nus-conference-1.jpg";
import nusConference2 from "@/assets/nus-conference-2.jpg";
import nusConference3 from "@/assets/nus-conference-3.jpg";
import nusConference4 from "@/assets/nus-conference-4.jpg";
import nusConference5 from "@/assets/nus-conference-5.jpg";
import nusConference6 from "@/assets/nus-conference-6.jpg";
import nusConference7 from "@/assets/nus-conference-7.jpg";
import nusConference8 from "@/assets/nus-conference-8.jpg";
import nusConference9 from "@/assets/nus-conference-9.jpg";
import nusConference10 from "@/assets/nus-conference-10.jpg";
import nusConference11 from "@/assets/nus-conference-11.jpg";
import nusGeromedicineConference from "@/assets/nus-geromedicine-conference.jpg";
import nusAuditoriumConference from "@/assets/nus-conference-auditorium-new.jpg.asset.json";
import nusShawFoundationAlumniHouse from "@/assets/nus-shaw-foundation-alumni-house.png.asset.json";
import nusAcademyLinkedinPost from "@/assets/nus-academy-linkedin-post.png";
import nutraingredientsLongevity from "@/assets/nutraingredients-article-v2.png.asset.json";
import news3 from "@/assets/cn-mirrored/news-3.jpg";
import news4 from "@/assets/cn-mirrored/news-4.jpg";
import news5 from "@/assets/cn-mirrored/news-5.jpg";
import { useT } from "@/i18n/RegionContext";

const CompanyNewsSection = () => {
  const t = useT();
  const newsItems = [
    {
      images: [nusConference6, nusShawFoundationAlumniHouse.url, nusConference2, nusConference3, nusConference10, nusConference11],
      title: t("news.item1"),
    },
    {
      images: [news3],
      title: t("news.item3"),
    },
    {
      images: [news4],
      title: t("news.item4"),
    },
    {
      images: [news5],
      title: t("news.item5"),
    },
  ];
  const featuredCards = [
    { href: "https://geromedicine.sg/", img: nusAuditoriumConference.url, title: t("news.card1.title") },
    { href: "https://geromedicine.sg/", img: nusGeromedicineConference, title: t("news.card2.title") },
    {
      img: nusAcademyLinkedinPost,
      title: t("news.card3.title"),
      noLink: true,
    },
    {
      href: "https://www.nutraingredients.com/Article/2026/03/16/pharmacy-chain-founder-sets-up-nutraceutical-start-up-with-longevity-focus/",
      img: nutraingredientsLongevity.url,
      title: t("news.card4.title"),
    },
  ];
  return (
    <section id="news" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">{t("news.eyebrowSection")}</p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground tracking-tight">
            {t("news.titleSection")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mt-6" />
        </div>

        {/* Featured Exhibition Video Slide */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-muted/30 rounded-sm p-6 md:p-10 border border-border/40">
            <div className="overflow-hidden rounded-sm shadow-lg">
              <video
                src="/videos/exhibition-behind-scenes.mp4"
                autoPlay
                controls
                controlsList="nodownload"

                loop
                muted
                playsInline
                className="w-full aspect-video object-cover rounded-sm"
              />

            </div>
            <div className="animate-fade-in flex flex-col justify-center">
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-2">{t("news.featured")}</p>
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3 tracking-tight">
                {t("news.featuredTitle")}
              </h3>
              <p className="text-primary/80 text-sm font-medium mb-4">{t("news.featuredSubtitle")}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t("news.featuredDesc")}</p>
            </div>
          </div>
        </div>

        {/* Featured Read More Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {featuredCards.map((card, i) => {
            const Wrapper: any = card.noLink ? "div" : "a";
            const wrapperProps = card.noLink
              ? {}
              : { href: card.href, target: "_blank", rel: "noopener noreferrer" };
            return (
              <Wrapper
                key={i}
                {...wrapperProps}
                className="group flex flex-col overflow-hidden rounded-sm shadow-lg bg-[#0a1f44]"
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="bg-[#0a1f44] text-primary-foreground px-6 py-8 text-center flex-1 flex flex-col items-center justify-center">
                  <h3 className="font-heading text-xl md:text-2xl text-primary mb-6 leading-snug">{card.title}</h3>
                  {!card.noLink && (
                    <span className="inline-block text-primary-foreground text-base border-b border-primary-foreground/60 pb-1 group-hover:border-primary group-hover:text-primary transition-colors">
                      {t("news.readMore")}
                    </span>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto items-start">
          {newsItems.map((item, i) => (
            <div key={i} className="group cursor-pointer flex h-full flex-col">
              <div className="overflow-hidden mb-4">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent className="-ml-0">
                    {item.images.map((src, j) => (
                      <CarouselItem key={j} className="pl-0">
                        <img
                          src={src}
                          alt={`${item.title} - ${j + 1}`}
                          className="w-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {item.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 border-0" />
                      <CarouselNext className="right-2 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 border-0" />
                    </>
                  )}
                </Carousel>
              </div>
              <h3 className="font-heading text-lg font-normal leading-snug text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyNewsSection;
