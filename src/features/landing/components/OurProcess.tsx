"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const NUMBERED_ITEMS = [
  {
    title: "Discovery and Strategy",
    desc: "We begin by understanding your business goals, target audience, and technical requirements. Our team conducts thorough research to map out the right technology stack and project roadmap.",
  },
  {
    title: "Design and Prototyping",
    desc: "Our designers craft intuitive, visually compelling UI and UX prototypes that reflect your brand identity. Every screen is reviewed and approved before a single line of code is written.",
  },
  {
    title: "Development and Engineering",
    desc: "Our engineers bring your product to life using modern frameworks, clean architecture, and agile development sprints, ensuring quality at every stage of the build.",
  },
  {
    title: "Quality Assurance and Testing",
    desc: "Every product goes through rigorous testing, including functional, performance, security, and cross-device checks, so you launch with full confidence in your product's stability.",
  },
  {
    title: "Launch, Scale and Support",
    desc: "We handle deployment, performance monitoring, and ongoing technical support. As your business grows, we help you scale your product infrastructure without disruption.",
  },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section className="bg-white py-24 px-4 relative" id="process">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative">
          {/* Left: title (Sticky) */}
          <div className="md:col-span-4 relative md:sticky md:top-24 h-fit mb-12 md:mb-0">
            <h2
              className="text-[3.25rem] font-bold text-[#202029] leading-[1.1] mb-6 tracking-tight font-display"
            >
              Our
              <br />
              Process
            </h2>
            <p className="text-[#4b5563] text-[0.95rem] leading-[1.7] max-w-[320px]">
              From the first line of code to the final deployment, we handle every step. Our team in Lucknow has delivered software solutions across industries — and we treat every client&apos;s problem as our own.
            </p>
          </div>

          {/* Right: numbered list */}
          <div className="md:col-span-8 flex flex-col pt-4 md:pt-0">
            {NUMBERED_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex gap-8 py-10">
                  <span
                    className="text-5xl font-bold text-[#202029] leading-none shrink-0 w-16 tabular-nums font-display"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 mt-1">
                    <h3 className="font-bold text-[#202029] text-[1.25rem] mb-3 font-display">{item.title}</h3>
                    <p className="text-[#52525b] text-[0.9rem] leading-[1.8] pr-4">{item.desc}</p>
                  </div>
                </div>
                {i < NUMBERED_ITEMS.length - 1 && (
                  <div className="w-full h-[1px] bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 opacity-60" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-32 bg-[#12001e] relative overflow-hidden rounded-[2rem] px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
          {/* Subtle background glow inside banner */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/30 rounded-full blur-[60px]" />

          <div className="flex-1 relative z-10 w-full max-w-2xl">
            <h3
              className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug font-display"
            >
              {t("bannerTitle")}
            </h3>
            <p className="text-white/60 text-[0.9rem] leading-relaxed">{t("bannerDesc")}</p>
          </div>
          <button
            data-cal-link="nexsof.tech/30min"
            id="services-cta"
            className="cursor-pointer mr-20 shrink-0 relative z-10 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold text-[0.9rem] px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.45)] hover:shadow-[0_8px_30px_rgba(168,85,247,0.65)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            {t("bannerCta")}
          </button>
        </div>
      </div>
    </section>
  );
}
