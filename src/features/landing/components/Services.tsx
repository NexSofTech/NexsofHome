import { useTranslations } from "next-intl";

const NUMBERED_ITEMS = [
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden" id="industries">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left: title */}
          <div className="md:col-span-5">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Lorem Ipsum{" "}
              <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-gray-500 text-[0.9rem] leading-relaxed max-w-sm">{t("description")}</p>
          </div>

          {/* Right: numbered list */}
          <div className="md:col-span-7 flex flex-col">
            {NUMBERED_ITEMS.map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="flex gap-6 py-6">
                  <span
                    className="text-[2.5rem] font-extrabold bg-gradient-to-br from-brand-pink via-brand-purple to-indigo-500 bg-clip-text text-transparent leading-none shrink-0 w-16 pt-1 tabular-nums"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[1.1rem] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-[0.875rem] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {i < NUMBERED_ITEMS.length - 1 && (
                  <div className="w-full h-[1px] bg-gradient-to-r from-brand-pink via-brand-purple to-transparent opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-20 bg-[#12001e] relative overflow-hidden rounded-[2rem] px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          {/* Subtle background glow inside banner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/30 rounded-full blur-[60px]" />
          
          <div className="flex-1 relative z-10 w-full max-w-2xl">
            <h3
              className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {t("bannerTitle")}
            </h3>
            <p className="text-white/60 text-[0.9rem] leading-relaxed">{t("bannerDesc")}</p>
          </div>
          <a
            href="#contact"
            id="services-cta"
            className="shrink-0 relative z-10 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold text-[0.9rem] px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.45)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.65)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            {t("bannerCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
