"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Technologies() {
  const t = useTranslations("technologies");

  const columns = 4;
  const rows = 6; // extra for smooth loop

  const grid = Array.from({ length: columns }, (_, colIndex) =>
    Array.from({ length: rows })
  );

  return (
    <section className="px-6 py-20 bg-[#f5f5f5]">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-[28px] bg-[#0b0b0f] overflow-hidden px-10 py-24 lg:px-16 lg:py-32">
          {/* Solid Spheres */}
          <div className="absolute -top-24 left-[22%] w-[200px] h-[200px] bg-linear-to-b from-[#ff4ecd] to-[#7b5cff] rounded-full opacity-90 text-white" />
          <div className="absolute -bottom-32 -left-16 w-[300px] h-[300px] bg-linear-to-tr from-[#3b82f6] to-[#7c3aed] rounded-full opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-[3rem] font-bold leading-[1.1] bg-linear-to-r from-[#d919a4] via-[#7b5cff] to-[#1a6bf0] bg-clip-text text-transparent mb-4">
                {t("title")}
              </h2>

              <div className="w-full h-[4px] bg-linear-to-r from-[#d919a4] via-[#7b5cff] to-transparent mb-2 -ml-16" />

              <p className="text-white/90 text-[2.6rem] font-semibold">
                {t("subtitle")}
              </p>
            </div>

            {/* MARQUEE GRID (Desktop Vertical) */}
            <div className="hidden lg:grid grid-cols-4 gap-6 lg:gap-12 h-[580px] overflow-hidden">
              {grid.map((col, colIndex) => {
                const isReverse = colIndex % 2 !== 0;

                return (
                  <motion.div
                    key={colIndex}
                    className="flex flex-col gap-6"
                    animate={{
                      y: isReverse ? ["-50%", "0%"] : ["0%", "-50%"],
                    }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...col, ...col].map((_, i) => (
                      <div
                        key={i}
                        className="w-full aspect-square rounded-[16px] bg-[#6b6b6b]/60 relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-transparent opacity-30" />
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* MARQUEE GRID (Mobile Horizontal) */}
            <div className="lg:hidden flex flex-col gap-8 mt-8">
              {[...Array(4)].map((_, rowIndex) => {
                const isReverse = rowIndex % 2 !== 0;
                return (
                  <div key={rowIndex} className="w-full overflow-hidden">
                    <motion.div
                      className="flex gap-4 w-fit"
                      animate={{
                        x: isReverse ? ["-50%", "0%"] : ["0%", "-50%"],
                      }}
                      transition={{
                        duration: 35 + rowIndex * 5,  
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* 16 items (8 unique x 2) for seamless horizontal loop */}
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className="w-[85px] h-[85px] rounded-[12px] bg-[#6b6b6b]/60 relative flex-shrink-0 overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-transparent opacity-30" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
