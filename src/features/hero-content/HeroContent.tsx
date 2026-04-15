import { useTranslations } from "next-intl";

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="10" cy="10" r="9" stroke="url(#chk)" strokeWidth="1.5" />
      <path d="M6.5 10.5L9 13L13.5 8" stroke="url(#chk)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="chk" x1="0" y1="0" x2="20" y2="20">
          <stop stopColor="#e040fb" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DeviceMockup() {
  return (
    <div className="relative w-full max-w-[420px] h-[320px] ml-auto">
      {/* Decorative floating circles */}
      <span className="absolute w-4 h-4 rounded-full bg-brand-purple shadow-lg top-2 right-12 opacity-80" />
      <span className="absolute w-6 h-6 rounded-full bg-brand-pink shadow-lg top-8 left-16 opacity-70" />
      <span className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-purple shadow-xl top-12 right-2 opacity-90" />
      <span className="absolute w-5 h-5 rounded-full bg-brand-purple shadow-lg -bottom-2 right-8 opacity-60" />

      {/* Main purple gradient card */}
      <div className="absolute right-0 bottom-0 w-[85%] h-[90%] bg-gradient-to-br from-[#802273] via-[#4d2165] to-[#251b3f] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* White phone mockup */}
        <div className="absolute right-6 bottom-0 w-[140px] h-[85%] bg-white rounded-t-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="absolute top-0 left-[25%] w-[50%] h-4 bg-black rounded-b-xl" />
        </div>

      </div>

      {/* Overlapping white floating bars (input-like) */}
      <div className="absolute left-[-20px] top-[40%] w-[180px] h-[40px] bg-white rounded-lg shadow-xl shadow-black/20" />
      <div className="absolute left-[10px] top-[70%] w-[150px] h-[35px] bg-white rounded-lg shadow-xl shadow-black/20" />
      
      {/* Left side blob */}
      <span className="absolute w-12 h-12 rounded-full bg-brand-purple/50 shadow-[0_0_30px_rgba(168,85,247,0.5)] blur-md top-[35%] left-[-30px] -z-10" />

    </div>
  );
}

export function HeroContent() {
  const t = useTranslations("hero");
  const features = [t("feature1"), t("feature2"), t("feature3"), t("feature4")];

  return (
    <section className="bg-[#f8f9fe] py-20 px-6 relative overflow-hidden" id="service">
      {/* Container for the dark card */}
      <div className="max-w-[1200px] mx-auto relative">
        
        {/* Subtle purple glow behind the card top-left */}
        <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-brand-purple/40 blur-[40px] z-0" />

        {/* The Dark Card */}
        <div className="relative z-10 bg-[#1e1e1e] rounded-[2rem] p-10 md:p-14 shadow-2xl border border-white/5 overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="flex flex-col gap-5">
              <h1
                className="text-3xl md:text-[2.2rem] font-extrabold leading-[1.3] tracking-tight text-white"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {t("title")}{" "}
                <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                  {t("titleHighlight")}
                </span>
              </h1>

              <p className="text-white text-[0.95rem] leading-relaxed">
                <span className="font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                  {t("subtitle")}
                </span>{" "}
                {t("subtitleSuffix")}
              </p>

              {/* Horizontal line */}
              <div className="w-[80%] max-w-[320px] h-px bg-white/20 my-1" />

              <ul className="flex flex-col gap-4">
                {features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-white/80 text-[0.9rem] leading-relaxed font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4 flex-wrap mt-4">
                <a
                  href="#contact"
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-brand-pink to-brand-purple text-white text-[0.9rem] font-bold px-7 py-2.5 rounded-full shadow-[0_4px_24px_rgba(168,85,247,0.5)] hover:shadow-[0_8px_36px_rgba(168,85,247,0.65)] hover:-translate-y-0.5 transition-all"
                >
                  {t("ctaPrimary")}
                </a>
                <a
                  href={`tel:${t("ctaPhone")}`}
                  id="hero-cta-phone"
                  className="inline-flex items-center gap-2 text-white text-[0.9rem] font-semibold px-6 py-2.5 rounded-full border border-[rgba(168,85,247,0.4)] bg-[rgba(168,85,247,0.06)] hover:bg-[rgba(168,85,247,0.14)] hover:border-[rgba(168,85,247,0.65)] hover:-translate-y-0.5 transition-all"
                >
                  {t("ctaPhone")}
                </a>
              </div>
            </div>

            {/* Right: device mockup */}
            <div className="flex items-center justify-center w-full">
              <DeviceMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
