import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useT } from "@/i18n/RegionContext";
import { supabase } from "@/integrations/supabase/client";
import { Users, Stethoscope, Sparkles, FlaskConical, ArrowRight, Check, ChevronDown } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";


const categories = [
  {
    icon: FlaskConical,
    title: "Research & Strategic Partnerships",
    desc: "Collaborating with researchers, longevity experts, and institutions to advance evidence-based nutrition and healthy aging.",
  },
  {
    icon: Stethoscope,
    title: "Clinics & Wellness Centers",
    desc: "Providing science-informed nutritional solutions for functional medicine clinics, wellness centers, healthy aging and senior care organizations, and health professionals.",
  },
  {
    icon: Users,
    title: "Community Health Partnerships",
    desc: "Working with community organizations to promote lifelong wellness and health education.",
  },
  {
    icon: Sparkles,
    title: "Brand & Innovation Partnerships",
    desc: "Partnering with like-minded organizations to create innovative health solutions.",
  },
];

const interestOptions = [
  "Research & Strategic Collaboration",
  "Clinics, Wellness & Senior Care Partnership",
  "Community Health & Education Partnership",
  "Brand & Product Innovation Partnership",
  "Business & Market Collaboration",
  "Other Partnership Inquiries",
];

// Full list of world countries / sovereign territories, alphabetical.
const countryOptions = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria",
  "Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia",
  "Cameroon","Canada","Central African Republic","Chad","Chile","China (Mainland)","Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)",
  "Costa Rica","Côte d'Ivoire","Croatia","Cuba","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic",
  "Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland",
  "France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea",
  "Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong SAR","Hungary","Iceland","India","Indonesia","Iran",
  "Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati",
  "Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania",
  "Luxembourg","Macao SAR","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania",
  "Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar",
  "Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia",
  "Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines",
  "Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa",
  "San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia",
  "Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden",
  "Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago",
  "Tunisia","Türkiye","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay",
  "Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe","Other",
];


const PartnershipsSection = () => {
  const { toast } = useToast();
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    country: "",
    interest: "",
    message: "",
  });

  const update =
    (k: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.country || !form.interest) {
      toast({
        title: t("Missing information"),
        description: t("Please complete all required fields before submitting."),
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("submit-partnership-inquiry", {
        body: form,
      });
      if (error || !data?.success) {
        throw new Error(error?.message || "Submission failed");
      }

      setSubmitted(true);
      toast({
        title: t("Inquiry received"),
        description: t(
          "Thank you. Your partnership inquiry has been received. Our team will review your message and get back to you shortly."
        ),
      });
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        website: "",
        phone: "",
        country: "",
        interest: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      console.error("[PartnershipInquiry] submit failed", err);
      toast({
        title: t("Submission failed"),
        description: t(
          "We could not submit your inquiry. Please try again in a moment or email info@vavitas-health.com directly."
        ),
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };


  const scrollToForm = () => {
    document.getElementById("partnership-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="partnerships"
      className="py-24 md:py-28 bg-background border-t border-border scroll-mt-32"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            {t("Partnership Opportunities")}
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 tracking-tight">
            {t("Partner with VAVITAS — Building a Future of Science-Driven Health Together")}
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            {t(
              "We connect science, healthcare, and community to advance evidence-based nutrition solutions that support long-term health and quality of life."
            )}
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {categories.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col p-8 bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg h-full"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-3 leading-snug min-h-[3.25rem]">
                {t(title)}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{t(desc)}</p>
            </div>
          ))}
        </div>

        {/* Two-column: intro + form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-32">
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              {t("Let's Build Together")}
            </p>
            <h3 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              {t("Start a Partnership Conversation")}
            </h3>
            <p className="text-foreground/70 text-base leading-relaxed mb-8">
              {t(
                "Whether you are seeking business partnerships, professional wellness collaborations, or strategic alliances, VAVITAS looks forward to becoming your trusted long-term partner."
              )}
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Science-driven formulas with premium ingredients",
                "US-manufactured to rigorous quality standards",
                "Flexible and efficient global partnership models",
                "End-to-end support from a dedicated team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-0.5 w-5 h-5 flex items-center justify-center bg-primary/10 text-primary shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {t(item)}
                </li>
              ))}
            </ul>
            <button
              onClick={scrollToForm}
              className="lg:hidden inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-accent transition-colors"
            >
              {t("Start a Partnership Conversation")} <ArrowRight size={14} />
            </button>
          </div>

          {/* Right - form */}
          <form
            id="partnership-form"
            onSubmit={handleSubmit}
            className="bg-card border border-border p-8 md:p-10 space-y-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label={t("First Name")} required>
                <input required value={form.firstName} onChange={update("firstName")} className={inputCls} />
              </Field>
              <Field label={t("Last Name")} required>
                <input required value={form.lastName} onChange={update("lastName")} className={inputCls} />
              </Field>
            </div>
            <Field label={t("Business Email")} required>
              <input type="email" required value={form.email} onChange={update("email")} className={inputCls} />
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label={t("Company / Organization")} required>
                <input required value={form.company} onChange={update("company")} className={inputCls} />
              </Field>
              <Field label={t("Website")}>
                <input
                  type="url"
                  value={form.website}
                  onChange={update("website")}
                  placeholder="https://yourcompany.com"
                  className={inputCls}
                />
              </Field>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label={t("Phone Number")}>
                <input type="tel" value={form.phone} onChange={update("phone")} className={inputCls} />
              </Field>
              <Field label={t("Country / Region")} required>
                <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      role="combobox"
                      aria-expanded={countryOpen}
                      className={`${inputCls} flex items-center justify-between text-left`}
                    >
                      <span className={cn("truncate", !form.country && "text-foreground/40")}>
                        {form.country || t("Select country / region…")}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    side="bottom"
                    sideOffset={4}
                    avoidCollisions={false}
                    className="z-50 p-0 w-[var(--radix-popover-trigger-width)]"
                  >
                    <Command>
                      <CommandInput placeholder={t("Search country…")} className="h-10" />
                      <CommandList className="max-h-64">
                        <CommandEmpty>{t("No country found.")}</CommandEmpty>
                        <CommandGroup>
                          {countryOptions.map((c) => (
                            <CommandItem
                              key={c}
                              value={c}
                              onSelect={(v) => {
                                setForm((f) => ({ ...f, country: v }));
                                setCountryOpen(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  form.country === c ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {c}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </Field>

            </div>
            <Field label={t("Partnership Interest")} required>
              <Select value={form.interest} onValueChange={(v) => setForm((f) => ({ ...f, interest: v }))}>
                <SelectTrigger className={`${inputCls} h-auto`}>
                  <SelectValue placeholder={t("Select an option…")} />
                </SelectTrigger>
                <SelectContent className="z-50">
                  {interestOptions.map((o) => (
                    <SelectItem key={o} value={o}>
                      {t(o)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label={t("Message")} required>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                className={`${inputCls} resize-y min-h-[120px]`}
                placeholder={t(
                  "Tell us about your organization, target market, and the type of partnership you are interested in."
                )}
              />
            </Field>
            <button
              type="submit"
              disabled={submitted || submitting}
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-wider hover:bg-accent transition-colors disabled:opacity-70"
            >
              {submitting
                ? t("Submitting…")
                : submitted
                ? t("Submitted — Thank You")
                : t("Submit Partnership Inquiry")}
              {!submitted && !submitting && <ArrowRight size={14} />}
            </button>

            <p className="text-xs text-foreground/50 leading-relaxed">
              {t(
                "By submitting, you agree to be contacted by the VAVITAS partnerships team regarding your inquiry."
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputCls =
  "w-full px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors";

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">
      {label} {required && <span className="text-primary">*</span>}
    </span>
    {children}
  </label>
);

export default PartnershipsSection;
