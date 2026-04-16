import { FaMicrosoft, FaAmazon, FaGoogle, FaMeta, FaApple } from "react-icons/fa6";

export function Hero() {
  return (
    <section className="relative w-full flex-1 flex flex-col justify-end overflow-hidden" id="home">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat z-0"
      />
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />

      {/* Trusted By Logos */}
      <div className="relative z-20 w-full mt-auto pb-12 pt-[40vh]">
        <p className="text-center text-[0.85rem] font-bold tracking-[0.25em] text-white uppercase mb-8">
          Trusted By +25,000 Businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 opacity-90 pb-4">
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
            <span className="font-bold text-2xl tracking-tighter">coda</span>
          </div>
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
            <span className="font-bold text-2xl tracking-tighter">inter</span>
          </div>
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer flex items-center">
            <span className="font-black text-xl tracking-tighter uppercase"><span className="mr-2 inline-block -translate-y-px opacity-80">▲</span>ATLASSIAN</span>
          </div>
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
            <span className="font-semibold text-xl tracking-tight">ClickTravel</span>
          </div>
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer border border-white/70 p-1 flex items-center justify-center rounded bg-white/5">
            <span className="font-bold text-lg tracking-tighter px-1">N Notion</span>
          </div>
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer">
            <span className="font-bold text-2xl tracking-tighter italic">eToro</span>
          </div>
          <div className="text-white/70 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
            <span className="font-bold text-md tracking-tight uppercase">H&R Block</span>
          </div>
        </div>
      </div>
    </section>
  );
}
