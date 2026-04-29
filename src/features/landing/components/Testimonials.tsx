"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    date: "May 8, 2020",
    name: "Priya Sharma",
    role: "CEO, BrightPath Solutions",
    photo: "https://picsum.photos/seed/priya/400/520",
    headline: "A Partner That Truly Understands Your Vision",
    body: "NEXSOF transformed our entire digital infrastructure from the ground up. From the very first discovery call, their team asked the right questions, understood our long-term goals, and delivered a product that exceeded every single expectation we had. Our platform has scaled seamlessly since launch, handling three times the projected user load without a single critical issue. If you're serious about building a digital product, NEXSOF is the only team you need.",
  },
  {
    id: 2,
    date: "May 8, 2020",
    name: "Arjun Mehta",
    role: "Founder, UrbanNest Realty",
    photo: "https://picsum.photos/seed/arjun/400/520",
    headline: "They Didn't Just Build Our App — They Helped Us Think",
    body: "Working with NEXSOF was genuinely the best decision we made during our startup journey. They didn't just write code and hand us a product — they helped us think through the entire product strategy, user experience flow, and go-to-market approach. Their team challenged our assumptions in the best possible way and pushed us to build something far better than what we originally envisioned. We launched on time, within budget, and our early users absolutely love the product.",
  },
  {
    id: 3,
    date: "May 8, 2020",
    name: "Sarah Collins",
    role: "Head of Operations, ZephyrLogistics",
    photo: "https://picsum.photos/seed/sarah/400/520",
    headline: "Technically Outstanding, Deeply Exceptional",
    body: "The team at NEXSOF is everything you'd want in a technical partner — proficient, deeply responsive, and genuinely invested in your success. We brought them a complex SaaS product to build, and they rose to every challenge beautifully. Not only did they deliver exceptional quality, architecture, and documentation, but our in-house team has been able to maintain and extend the codebase ever since go-live.",
  },
  {
    id: 4,
    date: "May 8, 2020",
    name: "Rohan Verma",
    role: "CTO, FinSpark Technologies",
    photo: "https://picsum.photos/seed/rohan/400/520",
    headline: "Best Technical Team We've Engaged With",
    body: "As a CTO, I have high standards for code quality and architecture. Nexsof met every one of them. Their engineers asked the right questions upfront, proposed solutions I hadn't even considered, and delivered a scalable microservices backend that our in-house team now maintains with ease. Their documentation was thorough, handover was smooth, and post-launch support was incredibly responsive.",
  },
  {
    id: 5,
    date: "May 8, 2020",
    name: "Meera Kapoor",
    role: "Director, SkyLearn EdTech",
    photo: "https://picsum.photos/seed/meera/400/520",
    headline: "From Idea to Live Product in 10 Weeks",
    body: "Nexsof built our entire e-learning platform — video hosting, course management, student progress tracking, payments, certificates — in just ten weeks. I was skeptical at first, but they had a working prototype ready in week two and kept improving from there. Our students love the UI and we haven't had a single major bug in production.",
  },
  {
    id: 6,
    date: "May 8, 2020",
    name: "David Okafor",
    role: "Co-Founder, CartBridge",
    photo: "https://picsum.photos/seed/david/400/520",
    headline: "They Solved Our Business Problem, Not Just the Tech",
    body: "Most agencies just take your requirement sheet and ship code. Nexsof challenged us on several assumptions and suggested a simpler architecture that ended up saving significant infrastructure costs. Their UI/UX designer has a brilliant eye — our conversion rate on the new storefront is 2.3× what it was on our old platform.",
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
      <div className="px-[5vw] pb-[52px]">
        <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-black text-[#333] leading-[1.08] tracking-[-0.025em] max-w-[80%] max-[860px]:max-w-full m-0 drop-shadow-[2px_4px_10px_rgba(0,0,0,0.15)]">What Our Clients Say About Us</h2>
      </div>

      {/* ── Card track (position:relative so ornaments anchor here) ── */}
      <div className="flex items-stretch w-full overflow-hidden relative pb-[100px]">

        {/* ── Ornament 1: INVERTED — bottom-left, below left peek card ── */}
        <div className="absolute z-0 pointer-events-none bottom-0 left-[4vw] max-[860px]:hidden" aria-hidden>
          <Image src="/Ornament.png" alt="" width={300} height={242} className="block h-auto opacity-90 -scale-y-100" />
        </div>

        {/* ── Ornament 2: NORMAL — upper-right, between center & right peek ── */}
        <div className="absolute z-0 pointer-events-none top-[16px] left-[70%] max-[860px]:hidden" aria-hidden>
          <Image src="/Ornament.png" alt="" width={180} height={145} className="block h-auto opacity-90" />
        </div>

        {/* LEFT peek */}
        <button className="shrink-0 bg-transparent border-none p-0 text-left font-inherit cursor-pointer relative z-10 w-[22vw] min-w-[200px] max-w-[340px] pl-[5vw] flex items-stretch transition-opacity duration-300 max-[860px]:hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_right,#fff_0%,rgba(255,255,255,0.85)_40%,transparent_100%)] after:pointer-events-none after:z-10 after:rounded-lg" onClick={prev} aria-label="Previous testimonial">
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
          <div className="bg-white border border-[#eee] rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.04)] h-full flex flex-col overflow-hidden w-full flex-row max-[860px]:flex-col">
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
        <button className="shrink-0 bg-transparent border-none p-0 text-left font-inherit cursor-pointer relative z-10 w-[26vw] min-w-[220px] max-w-[400px] pr-[5vw] flex items-stretch transition-opacity duration-300 max-[860px]:hidden after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_left,#fff_0%,rgba(255,255,255,0.85)_40%,transparent_100%)] after:pointer-events-none after:z-10 after:rounded-lg" onClick={next} aria-label="Next testimonial">
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

      </div>

      {/* ── Controls ── */}
      <div className="flex items-center justify-center gap-5 pt-[36px]">
        <button className="bg-transparent border-none text-[2.2rem] leading-none text-[#007a8c] hover:text-[#005f6e] px-2 cursor-pointer transition-colors duration-200 font-inherit" onClick={prev} aria-label="Previous">‹</button>
        <div className="flex gap-2 items-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`w-[11px] h-[11px] rounded-full border-none cursor-pointer p-0 transition-all duration-250 ${i === active ? "bg-[#007a8c] scale-125 hover:bg-[#007a8c]" : "bg-[#ccc] hover:bg-[#888]"}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className="bg-transparent border-none text-[2.2rem] leading-none text-[#007a8c] hover:text-[#005f6e] px-2 cursor-pointer transition-colors duration-200 font-inherit" onClick={next} aria-label="Next">›</button>
      </div>
    </section>
  );
}
