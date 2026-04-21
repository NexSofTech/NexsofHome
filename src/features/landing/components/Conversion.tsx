import { useTranslations } from "next-intl";

export function Conversion() {
  const t = useTranslations("conversion"); // We can use translations if needed later

  const checkItems = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    "Lorem Ipsum is simply dummy text of the printing.",
    "Lorem Ipsum is simply dummy text of the printing end.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting."
  ];

  return (
    <section className="bg-white py-24 px-6 relative w-full overflow-hidden flex justify-center m-0">
      {/* Container */}
      <div className="max-w-[1600px] w-full relative">
        
        {/* Background Decorative Images */}
        {/* Top Right Curve */}
        <img 
          src="/Curv.png" 
          alt="Curve decoration" 
          className="absolute -top-34 -right-44 w-64 h-64 object-contain z-0"
        />
        {/* Bottom Left Grid */}
        <img 
          src="/grid.png" 
          alt="Grid decoration" 
          className="absolute -bottom-10 left-12 w-36 h-auto opacity-70 z-0"
        />
        {/* Bottom Right Grid */}
        <img 
          src="/grid.png" 
          alt="Grid decoration" 
          className="absolute -bottom-12 -right-6 w-40 h-auto opacity-70 z-0"
        />

        {/* Main Card */}
        <div className="bg-[#18181b] rounded-[2.5rem] w-full p-10 md:p-14 relative z-10 flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
          
          {/* Subtle Background Orbs inside the dark card (top center-ish) */}
          <div className="absolute top-10 left-[60%] w-8 h-8 rounded-full bg-linear-to-r from-[#d946ef] to-[#8b5cf6] blur-[2px] opacity-80 pointer-events-none"></div>
          <div className="absolute top-6 left-[70%] w-12 h-12 rounded-full bg-linear-to-br from-[#8b5cf6] to-[#3b82f6] blur-[2px] opacity-80 pointer-events-none"></div>
          <div className="absolute top-16 left-[82%] w-14 h-14 rounded-full bg-linear-to-tr from-[#3b82f6] to-[#ec4899] blur-[2px] opacity-60 pointer-events-none"></div>

          {/* Left Content */}
          <div className="flex-1 text-white lg:pr-12 relative z-10 w-full">
            <h2 
              className="text-4xl md:text-[2.75rem] font-bold mb-4 leading-tight text-white tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Next-Gen Apps & Websites, AI-Powered
            </h2>
            <p className="text-[1.2rem] font-medium mb-10 text-white/90">
              <span className="bg-linear-to-r from-[#e879f9] to-[#3b82f6] bg-clip-text text-transparent font-bold">Nexsof</span>{" "}
              – Custom Software Development Company
            </p>

            <div className="w-full h-px bg-white/10 mb-10"></div>

            <ul className="flex flex-col gap-6 text-[1.05rem] text-white/80 mb-14">
              {checkItems.map((text, i) => (
                <li key={i} className="flex items-center gap-4">
                  {/* Check icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <circle cx="12" cy="12" r="11" fill="transparent" stroke="white" strokeWidth="2" />
                    <path d="M7.5 12L10.5 15L16.5 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-5">
              <button className="bg-linear-to-r from-[#d946ef] to-[#2563eb] text-white font-bold text-[0.95rem] px-8 py-3.5 rounded-xl shadow-lg hover:shadow-[0_8px_25px_rgba(217,70,239,0.3)] hover:-translate-y-0.5 transition-all">
                Get Started
              </button>
              
              {/* Gradient Border Button */}
              <div className="relative group cursor-pointer inline-block">
                {/* Gradient background serving as border */}
                <div className="absolute inset-0 bg-linear-to-r from-[#d946ef] to-[#2563eb] rounded-xl p-[2px] transition-transform group-hover:scale-[1.02]">
                  {/* Inner dark background */}
                  <div className="w-full h-full bg-[#18181b] rounded-[10px] flex items-center justify-center">
                    <span className="text-white font-bold text-[0.95rem] px-8 py-3.5 whitespace-nowrap">
                      +91-8189010044
                    </span>
                  </div>
                </div>
                {/* Invisible button to maintain sizing and clickability */}
                <button className="relative opacity-0 text-[0.95rem] px-8 py-3.5 border-2 border-transparent">
                  +91-8189010044
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual / CSS Art */}
          <div className="flex-1 relative hidden lg:flex items-center justify-end z-10 pt-16 mt-10 lg:mt-0">
            {/* The colorful background rounded square */}
            <div className="w-[400px] h-[360px] rounded-[3rem] bg-linear-to-r from-[#f4b7e8] via-[#c689f8] to-[#4e7bff] relative flex items-center justify-center pointer-events-none">
              
              {/* Phone Mockup */}
              <div className="relative z-30 w-[210px] h-[400px] bg-white rounded-[2.5rem] border-[10px] border-[#1f2023] shadow-2xl translate-y-16 shrink-0 flex justify-center">
                {/* Notch */}
                <div className="w-[90px] h-[22px] bg-[#1f2023] rounded-b-[1rem] absolute top-0"></div>
              </div>

              {/* Floating White Bar 1 */}
              <div className="absolute right-[150px] top-[70px] w-[260px] h-[70px] bg-white rounded-2xl shadow-xl z-20">
                 {/* Orb resting on top left corner */}
                 <div className="absolute -top-5 -left-4 w-12 h-12 bg-linear-to-br from-[#6366f1] to-[#3b82f6] rounded-full shadow-lg"></div>
              </div>
              
              {/* Floating White Bar 2 */}
              <div className="absolute right-[190px] bottom-[110px] w-[180px] h-[54px] bg-white rounded-xl shadow-xl z-20">
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
