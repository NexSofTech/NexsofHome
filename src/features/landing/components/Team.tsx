import { useTranslations } from "next-intl";

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#a855f7]">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const TEAM_FEATURES = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
];

const GALLERY = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80",
];

export function Team() {
  const t = useTranslations("team");

  return (
    <section className="bg-[#f8f9fe] py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        
        {/* ── Top part ─── */}
        <div className="mb-14">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-end mb-10">
            <h2
              className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight flex-1 max-w-2xl"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Lorem Ipsum is simply <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">dummy text of the printing</span>
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed max-w-sm md:text-right">
              {t("descriptionA")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch border-b pb-14 border-gray-200">
            {/* Arched Photo */}
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="nexsof.tech team"
                className="w-full h-full min-h-[300px] object-cover rounded-tl-[6rem] rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-lg"
              />
            </div>

            {/* Dark Feature cards */}
            <div className="flex flex-col gap-5 justify-center">
              {[t("featureA1"), t("featureA2")].map((text, i) => (
                <div key={i} className="bg-[#1a1b1f] rounded-[1.5rem] p-8 flex gap-5 items-start shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <StarIcon />
                  </div>
                  <p className="text-white/80 text-[0.95rem] leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Middle separator line ─── */}
        <div className="w-full relative py-6">
          <div className="w-full h-[2px] bg-gradient-to-r from-brand-pink via-brand-purple to-indigo-500 opacity-60 rounded-full" />
        </div>

        {/* ── Bottom part ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-10">
          
          {/* Left Text */}
          <div>
            <h3
              className="text-3xl font-extrabold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent mb-2 leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Lorem Ipsum
            </h3>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Lorem Ipsum Lorem Ipsum
            </h2>
            <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-8">
              {t("descriptionB")}
            </p>

            <ul className="flex flex-col gap-6">
              {TEAM_FEATURES.map((f, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1a1b1f] flex items-center justify-center shrink-0">
                    <StarIcon />
                  </div>
                  <p className="text-gray-600 text-[0.9rem] leading-relaxed font-medium">{f}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Grid (7 images) */}
          <div className="grid grid-cols-3 gap-3 h-[450px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 h-full">
              <img src={GALLERY[0]} className="w-full h-1/2 object-cover rounded-xl" alt="" />
              <img src={GALLERY[1]} className="w-full h-1/2 object-cover rounded-xl" alt="" />
            </div>
            {/* Column 2 */}
            <div className="flex flex-col gap-3 h-full">
              <img src={GALLERY[2]} className="w-full h-1/3 object-cover rounded-xl" alt="" />
              <img src={GALLERY[3]} className="w-full h-2/3 object-cover rounded-xl" alt="" />
            </div>
            {/* Column 3 */}
            <div className="flex flex-col gap-3 h-full">
              <img src={GALLERY[4]} className="w-full h-[40%] object-cover rounded-xl" alt="" />
              <img src={GALLERY[5]} className="w-full h-[30%] object-cover rounded-xl" alt="" />
              <img src={GALLERY[6]} className="w-full h-[30%] object-cover rounded-xl" alt="" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

