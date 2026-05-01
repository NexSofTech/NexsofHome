"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    date: "May 8, 2020",
    name: "Priya Sharma",
    role: "CEO",
    photo: "https://picsum.photos/seed/priya/400/520",
    headline: "A Partner That Truly Understands Your Vision",
    body: "NEXSOF transformed our entire digital infrastructure from the ground up. From our very first discovery call, their team asked the right questions, understood our long-term goals, and delivered a product that exceeded every single expectation we had. Our platform has scaled seamlessly since launch, handling three times the projected user load without a single critical issue. If you are serious about building a real digital product, NEXSOF is the only team you need.",
  },
  {
    id: 2,
    date: "May 8, 2020",
    name: "Arjun Mehta",
    role: "Founder",
    photo: "https://picsum.photos/seed/arjun/400/520",
    headline: "They Did Not Just Build Our App, They Helped Us Think",
    body: "Working with NEXSOF was genuinely the best decision we made during our startup journey. They did not just write code and hand us a product, they helped us think through the entire product strategy, user experience flow, and go-to-market approach. Their team challenged our assumptions in the best possible way and pushed us to build something far better than what we originally envisioned. We launched on time, within budget, and our early users absolutely love the product.",
  },
  {
    id: 3,
    date: "May 8, 2020",
    name: "Sarah Collins",
    role: "Head of Operations",
    photo: "https://picsum.photos/seed/sarah/400/520",
    headline: "Technically Outstanding, Professionally Exceptional",
    body: "The team at NEXSOF is everything you could want in a technology partner, professional, deeply responsive, and technically outstanding at every level. We brought them a complex SaaS product with a tight timeline and high performance requirements. Not only did they deliver the platform on schedule, but the code quality, architecture, and documentation they handed over were among the best our in-house team has ever reviewed. Our platform has been running flawlessly ever since go-live.",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = useCallback(
    () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length),
    []
  );
  const next = useCallback(
    () => setActive((a) => (a + 1) % testimonials.length),
    []
  );

  const leftIdx = (active - 1 + testimonials.length) % testimonials.length;
  const rightIdx = (active + 1) % testimonials.length;
  const tLeft = testimonials[leftIdx];
  const tActive = testimonials[active];
  const tRight = testimonials[rightIdx];

  return (
    <section className="bg-white pt-[72px] pb-[64px] overflow-hidden relative">
      {/* ── Header ── */}
      <motion.div 
        className="px-[5vw] pb-[52px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-black text-[#333] leading-[1.08] tracking-[-0.025em] max-w-[80%] max-[860px]:max-w-full m-0 drop-shadow-[2px_4px_10px_rgba(0,0,0,0.15)]">What Our Clients Say About Us</h2>
      </motion.div>

      {/* ── Card track ── */}
      <motion.div 
        className="flex items-stretch w-full overflow-hidden relative pb-[100px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Ornaments */}
        <div className="absolute z-0 pointer-events-none bottom-0 left-[4vw] max-[860px]:hidden" aria-hidden>
          <Image src="/Ornament.png" alt="" width={300} height={242} className="block h-auto opacity-90 -scale-y-100" />
        </div>
        <div className="absolute z-0 pointer-events-none top-[16px] left-[70%] max-[860px]:hidden" aria-hidden>
          <Image src="/Ornament.png" alt="" width={180} height={145} className="block h-auto opacity-90" />
        </div>

        {/* LEFT peek */}
        <button className="shrink-0 bg-transparent border-none p-0 text-left font-inherit cursor-pointer relative z-10 w-[22vw] min-w-[200px] max-w-[340px] pl-[5vw] flex items-stretch transition-all duration-300 max-[860px]:hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.85)_40%,transparent_100%)] after:pointer-events-none after:z-10 after:rounded-lg hover:opacity-80" onClick={prev} aria-label="Previous testimonial">
          <div className="bg-white border border-[#eee] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)] h-full flex flex-col overflow-hidden w-full">
            <div className="px-5 pt-6 pb-7 flex flex-col gap-[10px] flex-1">
              <span className="block text-[0.72rem] text-[#888] tracking-[0.03em]">{tLeft.date}</span>
              <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-[#0d0d0d] leading-[1.3] m-0">{tLeft.headline}</h3>
              <p className="text-[0.84rem] text-[#444] leading-[1.72] m-0 line-clamp-9">{tLeft.body}</p>
            </div>
          </div>
        </button>

        {/* CENTER active */}
        <div className="flex-1 min-w-0 flex items-stretch px-[2vw] relative z-10 max-[860px]:px-[5vw]">
          <div className="bg-white border border-[#eee] rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] h-full flex flex-col overflow-hidden w-full flex-row max-[860px]:flex-col">
            <div className="relative shrink-0 w-[38%] max-w-[300px] overflow-hidden bg-[#c8c8c8] max-[860px]:w-full max-[860px]:max-w-full max-[860px]:h-[260px]">
              <Image
                src={tActive.photo}
                alt={tActive.name}
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0 px-6 py-7 flex flex-col gap-[10px]">
              <span className="block text-[0.72rem] text-[#888] tracking-[0.03em]">{tActive.date}</span>
              <h3 className="font-display text-[clamp(1.15rem,2vw,1.55rem)] font-bold text-[#0d0d0d] leading-[1.3] m-0">{tActive.headline}</h3>
              <p className="text-[0.84rem] text-[#444] leading-[1.72] m-0 line-clamp-[11]">{tActive.body}</p>
            </div>
          </div>
        </div>

        {/* RIGHT peek */}
        <button className="shrink-0 bg-transparent border-none p-0 text-left font-inherit cursor-pointer relative z-10 w-[26vw] min-w-[220px] max-w-[400px] pr-[5vw] flex items-stretch transition-all duration-300 max-[860px]:hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_left,#fff_0%,rgba(255,255,255,0.85)_40%,transparent_100%)] after:pointer-events-none after:z-10 after:rounded-lg hover:opacity-80" onClick={next} aria-label="Next testimonial">
          <div className="bg-white border border-[#eee] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)] h-full flex flex-col overflow-hidden w-full flex-row gap-0">
            <div className="relative shrink-0 w-[130px] min-h-[220px] overflow-hidden bg-[#c8c8c8]">
              <Image
                src={tRight.photo}
                alt=""
                fill
                sizes="160px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0 px-4 py-5 flex flex-col gap-2">
              <span className="block text-[0.72rem] text-[#888] tracking-[0.03em]">{tRight.date}</span>
              <h3 className="font-display text-[clamp(0.95rem,1.5vw,1.2rem)] font-bold text-[#0d0d0d] leading-[1.3] m-0">{tRight.headline}</h3>
              <p className="text-[0.84rem] text-[#444] leading-[1.72] m-0 line-clamp-9">{tRight.body}</p>
            </div>
          </div>
        </button>
      </motion.div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-5 pt-[36px]">
        <motion.button whileHover={{ scale: 1.2 }} className="bg-transparent border-none text-[2.2rem] leading-none text-[#007a8c] hover:text-[#005f6e] px-2 cursor-pointer transition-colors duration-200 font-inherit" onClick={prev} aria-label="Previous">‹</motion.button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.2 }}
              className={`w-[11px] h-[11px] rounded-full border-none cursor-pointer p-0 transition-all duration-250 ${i === active ? "bg-[#007a8c] scale-125 hover:bg-[#007a8c]" : "bg-[#ccc] hover:bg-[#888]"}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <motion.button whileHover={{ scale: 1.2 }} className="bg-transparent border-none text-[2.2rem] leading-none text-[#007a8c] hover:text-[#005f6e] px-2 cursor-pointer transition-colors duration-200 font-inherit" onClick={next} aria-label="Next">›</motion.button>
      </div>
    </section>
  );
}
