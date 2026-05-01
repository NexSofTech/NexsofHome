"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const technologies = [
  { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
  { name: "Vue", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "HTML5", logoUrl: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png" },
  { name: "CSS3", logoUrl: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png", invert: true },
  { name: "JavaScript", logoUrl: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" },
  { name: "Tailwind", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Claude", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg", invert: true},
  { name: "Gemini", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg", invert: true },
  { name: "OpenAI", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", invert: true },
  { name: "Github", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "VS Code", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Typescript", logoUrl: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png" },
  { name: "Python", logoUrl: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png" },
  { name: "Docker", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" } 
];

export function Technologies() {
  const t = useTranslations("technologies");

  const columns = 4;
  
  // Distribute technologies into columns
  const grid = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * 4;
    return technologies.slice(start, start + 4);
  });

  return (
    <section className="px-4 py-20 bg-[#f5f5f5]" id="technologies">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative rounded-[28px] bg-[#0b0b0f] overflow-hidden px-6 py-24 lg:px-10 lg:py-32">
          {/* Solid Spheres */}
          <div className="absolute -top-24 left-[22%] w-[200px] h-[200px] bg-linear-to-b from-[#ff4ecd] to-[#7b5cff] rounded-full opacity-90 text-white" />
          <div className="absolute -bottom-32 -left-16 w-[300px] h-[300px] bg-linear-to-tr from-[#3b82f6] to-[#7c3aed] rounded-full opacity-80" />

          <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] items-center">
            {/* LEFT TEXT */}
            <div>
              <h2 className="text-[2.2rem] md:text-[3rem] font-bold leading-[1.1] bg-linear-to-r from-[#d919a4] via-[#7b5cff] to-[#1a6bf0] bg-clip-text text-transparent mb-4 font-display">
                {t("title")}
              </h2>

              <div className="w-full h-[4px] bg-linear-to-r from-[#d919a4] via-[#7b5cff] to-transparent mb-2 md:-ml-16" />

              <p className="text-white/90 text-[1.8rem] md:text-[2.6rem] font-semibold font-display">
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
                      duration: 30 + colIndex * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[...col, ...col].map((tech, i) => (
                      <div
                        key={i}
                        className="w-full aspect-square rounded-[16px] bg-[#1c1c21] border border-white/5 relative overflow-hidden flex items-center justify-center group"
                      >
                        <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent opacity-30" />
                        <img 
                          src={tech.logoUrl} 
                          alt={tech.name} 
                          className={`w-20 h-20 object-contain transition-transform group-hover:scale-110 opacity-90 group-hover:opacity-100 duration-300 ${tech.invert ? "brightness-0 invert" : ""}`} 
                        />
                      </div>
                    ))}
                  </motion.div>
                );
              })}
            </div>

            {/* MARQUEE GRID (Mobile Horizontal) */}
            <div className="lg:hidden flex flex-col gap-8 mt-12">
              {[...Array(4)].map((_, rowIndex) => {
                const isReverse = rowIndex % 2 !== 0;
                const rowTechs = technologies.slice(rowIndex * 4, (rowIndex + 1) * 4);
                
                return (
                  <div key={rowIndex} className="w-full overflow-hidden">
                    <motion.div
                      className="flex gap-4 w-fit"
                      animate={{
                        x: isReverse ? ["-50%", "0%"] : ["0%", "-50%"],
                      }}
                      transition={{
                        duration: 25 + rowIndex * 5,  
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {[...rowTechs, ...rowTechs].map((tech, i) => (
                        <div
                          key={i}
                          className="w-[100px] h-[100px] rounded-[12px] bg-[#1c1c21] border border-white/5 relative flex-shrink-0 overflow-hidden flex items-center justify-center"
                        >
                          <div className="absolute inset-0 bg-linear-to-b from-white/5 via-transparent to-transparent opacity-30" />
                          <img 
                            src={tech.logoUrl} 
                            alt={tech.name} 
                            className={`w-14 h-14 object-contain opacity-100 ${tech.invert ? "brightness-0 invert" : ""}`} 
                          />
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
