"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise ERP System",
    description: "A full-scale ERP platform built for a mid-sized manufacturer — covering inventory, procurement, production, HR, and finance in a single unified system.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-linear-to-b from-[#ffc86b] to-[#ff9822]",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A real-time business intelligence dashboard with ML-driven sales forecasting and anomaly detection, built for a logistics company managing 500+ daily shipments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-linear-to-b from-[#9bc5ff] to-[#609fff]",
  },
  {
    title: "Custom CRM Platform",
    description: "A tailored CRM built from scratch for a B2B sales team — with lead scoring, automated follow-up workflows, and deep integration with WhatsApp Business API.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-[#0f0728] shadow-[inset_0_0_40px_rgba(80,40,200,0.3)]",
  },
  {
    title: "Healthcare Management App",
    description: "A cross-platform mobile app for a multi-clinic healthcare provider — handling appointments, prescriptions, patient records, and billing across 12 locations.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    bgClass: "bg-linear-to-br from-[#5338a0] via-[#944093] to-[#d67b55]",
  },
];

export function Portfolio() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative rounded-[2.5rem] bg-[#18181b] overflow-hidden px-6 py-16 lg:px-8 lg:py-16 shadow-2xl">
          
          {/* HEADER */}
          <div className="flex flex-col gap-5 mb-4">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl lg:text-5xl font-bold text-white font-display"
              >
                Our Work & Mock Projects
              </motion.h2>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-[16px] font-bold text-2xl flex items-center gap-3 group transition-all shrink-0"
              >
                See All Projects
                <ArrowUpRight className="text-[#3b82f6] w-7 h-7 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-300 text-[15px] lg:text-base leading-relaxed max-w-3xl"
            >
              Explore our recent work. From enterprise ERP systems and intelligent analytics dashboards to comprehensive healthcare apps, we build scalable digital solutions tailored to solve complex business challenges.
            </motion.p>
          </div>

          {/* TIMELINE DIVIDER */}
          <div className="relative mb-4 hidden md:block px-4">
            <svg width="0" height="0" className="absolute">
              <defs>
                <linearGradient id="star-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#df59f2" />
                  <stop offset="100%" stopColor="#3f5cf0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-white/60 -translate-y-1/2 z-0" />
            <div className="flex justify-between relative z-10 w-full">
              {[...Array(projects.length)].map((_, i) => (
                <div key={i} className="relative group flex items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="w-14 h-14 rounded-full bg-[#18181b] border-[2.5px] border-white/80 flex items-center justify-center relative z-10 overflow-hidden shadow-lg transition-transform hover:scale-110"
                  >
                    <Star size={20} className="relative z-20" style={{ fill: "url(#star-gradient)", stroke: "url(#star-gradient)" }} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS GRID / CAROUSEL */}
          <div className="relative w-full -mr-8 lg:-mr-14 pr-8 lg:pr-14">
            <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="snap-start shrink-0 w-[270px] md:w-[270px] lg:w-[340px] h-[520px] p-[4px] bg-linear-to-b from-[#3f5cf0] to-[#df59f2] rounded-[24px] group transition-all duration-500 hover:shadow-[0_15px_40px_rgba(67,56,202,0.4)] "
                >
                  <div className="bg-white rounded-[20px] overflow-hidden flex flex-col h-full w-full">
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
                        <h3 className="text-[22px] font-bold text-[#18181b] mb-3 font-display">{project.title}</h3>
                        <p className="text-[#52525b] text-[16px] leading-[1.4] line-clamp-4">
                          {project.description}
                        </p>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-[90%] py-3.5 mt-4 rounded-full bg-linear-to-r from-[#df59f2] to-[#3f5cf0] text-white font-bold text-[16px] shadow-[0_8px_20px_rgba(223,89,242,0.3)] hover:shadow-[0_8px_30px_rgba(223,89,242,0.5)] transition-all"
                      >
                        View Case Study
                      </motion.button>
                    </div>
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
