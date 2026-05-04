"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const ABOUT_HEADING = "We are not an agency, we are your Tech Team.";
const ABOUT_SUMMARY = "We are a diverse group of innovators, technical thinkers, and software problem-solvers united by a shared mission. Our goal is to deliver exceptional digital products, enterprise software solutions, and mobile applications that drive measurable business growth.";
const ABOUT_LEFT_CARD = "Our software development specialists bring deep technical knowledge from top-tier companies and leading academic institutions. We are committed to ensuring every custom application, SaaS platform, and digital transformation project is handled with the highest standards of code quality, robust security, and professional excellence.";

const FEATURE_CARDS = [
  "We believe the best technological innovations emerge from open dialogue and cross-functional teamwork. Our dedicated developers collaborate closely with clients to build scalable software solutions.",
  "Every voice is valued throughout our agile software development lifecycle. Each unique perspective actively shapes our strategic path forward, ensuring we deliver intuitive user experiences and high-performance applications.",
  "We consistently invest in our talented engineering team and our robust deployment processes. Our IT professionals are continuously learning and evolving with modern programming frameworks to build future-proof platforms.",
  "We stay ahead of digital industry trends in a rapidly changing technology landscape. Our primary focus is to deliver lasting value, intelligent business automation, and comprehensive IT services to our global clients.",
];

export function Team() {
  const t = useTranslations("team");

  return (
    <section className="bg-white py-24 px-4 relative" id="team">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2
            className="text-[2.5rem] md:text-[3.25rem] font-bold bg-gradient-to-r from-[#d919a4] via-[#7526f2] to-[#1a6bf0] bg-clip-text text-transparent mb-4 leading-[1.1] w-fit font-display"
          >
            {ABOUT_HEADING}
          </h2>
          <p className="text-[#3f3f46] font-semibold text-[1.05rem] leading-[1.65] max-w-[850px]">
            {ABOUT_SUMMARY}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 border-t-0">

          {/* Left Panel - Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2.1rem] p-[5px] bg-gradient-to-br from-[#d919a4] via-[#201540] to-[#042e6f] min-h-[500px]"
          >
            <div className="relative w-full h-full rounded-[1.85rem] overflow-hidden flex flex-col justify-end bg-black">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Team feature"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/90 to-transparent h-[70%]" />

              {/* Text Content */}
              <div className="relative z-10 px-8 pb-10">
                <p className="text-white text-[1.05rem] leading-[1.6] font-medium">
                  {ABOUT_LEFT_CARD}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#2e2e35] rounded-[1.8rem] px-8 py-10 flex flex-col items-start border border-[#b3b3b3]"
              >
                {/* Icon Container */}
                <div className="w-[52px] h-[52px] rounded-2xl bg-gradient-to-br from-[#df59f2] to-[#3f5cf0] flex items-center justify-center mb-6">
                  <StarIcon />
                </div>
                {/* Text */}
                <p className="text-white text-[0.95rem] leading-[1.65] font-medium">
                  {FEATURE_CARDS[i - 1]}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

