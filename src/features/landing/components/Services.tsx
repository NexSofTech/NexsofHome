"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const NUMBERED_ITEMS = [
  {
    title: "Web & Mobile App Development",
    desc: "We build web and mobile applications that are fast, scalable, and genuinely pleasant to use. Whether it's a customer-facing product or an internal tool, we approach every project with the same attention to detail — clean architecture, thoughtful UX, and code that's built to last. React, Next.js, Flutter, or native — we use what fits best, not just what's trendy.",
  },
  {
    title: "ERP & CRM Software",
    desc: "Generic ERP and CRM products almost never fit exactly how your business operates. We build both from scratch or customize existing platforms to map perfectly to your workflows. From managing purchase orders and employee records to tracking customer journeys and automating follow-ups — we've built these systems for manufacturers, retailers, hospitals, and service businesses across India.",
  },
  {
    title: "AI & Intelligent Automation",
    desc: "We've moved well past chatbots. Our team integrates machine learning models, large language model-based assistants, computer vision, and intelligent document processing into production software. If a task in your business is repetitive and rule-based, it's a candidate for automation. We find those opportunities and build systems that eliminate them from your team's daily workload.",
  },
  {
    title: "Custom Software Solutions",
    desc: "Sometimes what you need doesn't exist on the market. Maybe it's an industry-specific platform, a proprietary tool that gives you a competitive edge, or a legacy system that needs to be rebuilt the right way. We take complex, custom requirements seriously. We spend time understanding the problem before writing a single line of code, and we don't stop until the software actually solves it.",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    desc: "A great product deserves reliable infrastructure. We handle cloud architecture on AWS, GCP, and Azure — including containerization, CI/CD pipelines, database management, monitoring, and auto-scaling. Your software should be online when it matters, fast when it's busy, and maintainable long after launch. We make sure of that.",
  },
];

export function Services() {
  const t = useTranslations("services");

  return (
    <section className="bg-white py-24 px-4 relative" id="industries">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start relative">
          {/* Left: title (Sticky) */}
          <div className="md:col-span-4 relative md:sticky md:top-8 h-fit mb-12 md:mb-0">
            <h2
              className="text-[3.25rem] font-bold text-[#202029] leading-[1.1] mb-6 tracking-tight font-display"
            >
              What We
              <br />
              Build
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
