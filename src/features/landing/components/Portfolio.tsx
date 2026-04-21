"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-linear-to-b from-[#ffc86b] to-[#ff9822]",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-linear-to-b from-[#9bc5ff] to-[#609fff]",
  },
  {
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-[#0f0728] shadow-[inset_0_0_40px_rgba(80,40,200,0.3)]",
  },
  {
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-linear-to-br from-[#5338a0] via-[#944093] to-[#d67b55]",
  },
];

export function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="relative rounded-[2.5rem] bg-[#18181b] overflow-hidden px-8 py-16 lg:px-14 lg:py-16 shadow-2xl">
          
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-14">
            <div className="max-w-4xl space-y-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                {t("title")}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300 text-[15px] lg:text-base leading-relaxed max-w-3xl"
              >
                {t("description")}
              </motion.p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-3.5 rounded-[14px] font-bold flex items-center gap-2 group transition-all shrink-0"
            >
              {t("ctaAll")}
              <ArrowUpRight className="text-[#3b82f6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* TIMELINE DIVIDER */}
          <div className="relative mb-14 hidden md:block px-4">
            <div className="absolute top-1/2 left-10 right-10 h-px bg-white/20 -translate-y-1/2 z-0" />
            <div className="flex justify-between relative z-10 w-full">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="relative group flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-full bg-[#18181b] border-[1.5px] border-white/40 flex items-center justify-center relative z-10 overflow-hidden shadow-lg transition-transform hover:scale-110"
                  >
                    <Star size={20} className="fill-[#4f46e5] text-[#4f46e5] relative z-20" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS GRID / CAROUSEL */}
          <div className="relative w-full -mr-8 lg:-mr-14 pr-8 lg:pr-14">
            <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="snap-start shrink-0 w-[300px] md:w-[340px] lg:w-[380px] bg-white rounded-[24px] overflow-hidden group transition-all duration-500 flex flex-col h-[520px] shadow-[0_0_0_2px_#4338ca] hover:shadow-[0_0_0_2px_#6366f1,0_15px_40px_rgba(67,56,202,0.4)]"
                >
                  {/* Image Section - Colored Background */}
                  <div className={`relative h-[48%] w-full flex items-end justify-center pt-6 px-6 pb-0 ${project.bgClass}`}>
                    <div className="relative w-full h-[95%] rounded-t-xl overflow-hidden shadow-2xl border-t border-l border-r border-white/20">
                      <Image
                        src={project.image}
                        alt="Project Preview"
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content Section - White Text Box */}
                  <div className="h-[52%] p-8 flex flex-col justify-between items-center text-center bg-white z-10 relative">
                    {/* Inner glowing edge shadow to cover the transition */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-black/5 to-transparent pointer-events-none" />
                    
                    <div className="w-full pt-2">
                      <h3 className="text-[22px] font-bold text-[#18181b] mb-3">{t(`items.${index}.title`)}</h3>
                      <p className="text-[#52525b] text-[14px] leading-[1.6] line-clamp-4">
                        {t(`items.${index}.description`)}
                      </p>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-[90%] py-3.5 mt-4 rounded-full bg-linear-to-r from-[#df59f2] to-[#3f5cf0] text-white font-bold text-[14px] shadow-[0_8px_20px_rgba(223,89,242,0.3)] hover:shadow-[0_8px_30px_rgba(223,89,242,0.5)] transition-all"
                    >
                      {t("ctaReadMore")}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
