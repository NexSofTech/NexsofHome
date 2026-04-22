"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const images = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1552664730-d307ca884978",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9",
].map((url) => `${url}?auto=format&fit=crop&w=800&q=80`);

export function FeatureSection() {
  const t = useTranslations("feature");

  const features = [
    t("item1"),
    t("item2"),
    t("item3"),
  ];

  return (
    <section className="bg-white py-24 px-6 relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2
              className="text-[2.5rem] md:text-[3.25rem] font-bold text-[#18181b] leading-[1.1] font-display"
            >
              {t("title")}
            </h2>

            <p className="text-[1.25rem] font-semibold bg-linear-to-r from-[#d919a4] via-[#7526f2] to-[#1a6bf0] bg-clip-text text-transparent w-fit">
              {t("subtitle")}
            </p>

            <p className="text-[#52525b] text-[0.95rem] leading-[1.7] max-w-[520px]">
              {t("description")}
            </p>

            <div className="space-y-5 pt-2">
              {features.map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-[44px] h-[44px] rounded-xl bg-linear-to-br from-[#df59f2] to-[#3f5cf0] flex items-center justify-center flex-shrink-0">
                    <StarIcon />
                  </div>

                  <p className="text-[#52525b] text-[0.9rem] leading-[1.7]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT GRID */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-3 auto-rows-[140px]"
          >
            {images.map((src, i) => {
              let spanClass = "";

              // Match screenshot layout
              if (i === 0) spanClass = "row-span-2 col-span-1"; // big left
              if (i === 1 || i === 2) spanClass = "row-span-1"; // top right smalls
              if (i === 3) spanClass = "col-span-2 row-span-1"; // wide middle
              if (i === 4) spanClass = "hidden"; // remove extra (not in layout)
              if (i === 5) spanClass = "col-span-1";
              if (i === 6) spanClass = "col-span-1";
              if (i === 7) spanClass = "col-span-1";

              return (
                <div
                  key={i}
                  className={`relative rounded-[1.2rem] overflow-hidden ${spanClass}`}
                >
                  <Image
                    src={src}
                    alt={`feature image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
