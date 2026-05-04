"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export function Conversion() {
  const t = useTranslations("conversion"); // We can use translations if needed later

  const checkItems = [
    "Custom websites and mobile apps built with real users in mind, not just templates.",
    "ERP & CRM systems designed around your actual business processes, not the other way around.",
    "AI-powered automation that eliminates manual, repetitive work from your daily operations.",
    "Transparent timelines and real communication, you'll always know where your project stands."
  ];

  return (
    <section className="bg-white py-24 px-4 relative w-full overflow-hidden flex justify-center m-0">
      {/* Container */}
      <div className="max-w-[1600px] w-full relative">
        
        {/* Background Decorative Images */}
        {/* Top Right Curve */}
        <img 
          src="/Curv.png" 
          alt="Curve decoration" 
          className="absolute -top-34 -right-44 w-64 h-64 object-contain z-0"
        />
        {/* Bottom Left Grid */}
        <img 
          src="/grid.png" 
          alt="Grid decoration" 
          className="absolute -bottom-10 left-12 w-36 h-auto opacity-70 z-0"
        />
        {/* Bottom Right Grid */}
        <img 
          src="/grid.png" 
          alt="Grid decoration" 
          className="absolute -bottom-12 -right-6 w-40 h-auto opacity-70 z-0"
        />

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-[#18181b] rounded-[2.5rem] w-full p-6 md:p-10 relative z-10 flex flex-col lg:flex-row shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden"
        >
          
          {/* Subtle Background Orbs inside the dark card (top center-ish) */}
          <div className="absolute top-10 left-[60%] w-8 h-8 rounded-full bg-linear-to-r from-[#d946ef] to-[#8b5cf6] blur-[2px] opacity-80 pointer-events-none"></div>
          <div className="absolute top-6 left-[70%] w-12 h-12 rounded-full bg-linear-to-br from-[#8b5cf6] to-[#3b82f6] blur-[2px] opacity-80 pointer-events-none"></div>
          <div className="absolute top-16 left-[82%] w-14 h-14 rounded-full bg-linear-to-tr from-[#3b82f6] to-[#ec4899] blur-[2px] opacity-60 pointer-events-none"></div>

          {/* Left Content */}
          <div className="flex-1 text-white lg:pr-12 relative z-10 w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-[2.75rem] font-bold mb-4 leading-tight text-white tracking-tight font-display"
            >
              Let’s Make Something Great Together
            </motion.h2>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-px bg-white/10 mb-8 mt-6"
            ></motion.div>

            <div className="flex flex-col gap-4 text-[1.05rem] text-white/80 mb-10 leading-relaxed">
              {[
                "From your first idea to a fully launched digital product, NEXSOF is your partner at every step. We bring the technology, the strategy, and the team so you can focus on what matters most, growing your business.",
                "We provide technology solutions to organizations and industries across the globe. Significance of blockchain and other IT solutions has been proved for all the domains and it is being implemented to every industry. We provide technology solutions to organizations and industries across the globe. Significance of blockchain and other IT solutions has been proved for all the domains and it is being implemented to every industry.",
                "We provide technology solutions to organizations and industries across the globe. Significance of blockchain and other IT solutions."
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-5"
            >
              <motion.button 
                data-cal-link="nexsof.tech/30min"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-linear-to-r from-[#d946ef] to-[#2563eb] text-white font-bold text-[0.95rem] px-8 py-3.5 rounded-xl shadow-lg hover:shadow-[0_8px_25px_rgba(217,70,239,0.3)] hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </motion.button>
              
              {/* Gradient Border Button */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer inline-block"
              >
                {/* Gradient background serving as border */}
                <div className="absolute inset-0 bg-linear-to-r from-[#d946ef] to-[#2563eb] rounded-xl p-[2px] transition-transform group-hover:scale-[1.02]">
                  {/* Inner dark background */}
                  <div className="w-full h-full bg-[#18181b] rounded-[10px] flex items-center justify-center">
                    <span className="text-white font-bold text-[0.95rem] px-8 py-3.5 whitespace-nowrap">
                      +91-8189010044
                    </span>
                  </div>
                </div>
                {/* Invisible button to maintain sizing and clickability */}
                <button className="relative opacity-0 text-[0.95rem] px-8 py-3.5 border-2 border-transparent">
                  +91-8189010044
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Visual / CSS Art */}
          <div className="flex-1 relative hidden lg:flex items-center justify-end z-10 pt-16 mt-10 lg:mt-0">
            {/* The colorful background rounded square */}
            <div className="w-[400px] h-[360px] rounded-[3rem] bg-linear-to-r from-[#f4b7e8] via-[#c689f8] to-[#4e7bff] relative flex items-center justify-center pointer-events-none">
              
              {/* Phone Mockup */}
              <div className="relative z-30 w-[210px] h-[400px] bg-white rounded-[2.5rem] border-[10px] border-[#1f2023] shadow-2xl translate-y-16 shrink-0 flex justify-center overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center p-3 relative overflow-hidden bg-[#12001e]">
                  {/* Flamboyant Animated Background */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 z-0 opacity-70"
                  >
                    <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#d946ef_360deg)] rounded-full blur-[25px]" />
                    <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[conic-gradient(from_180deg,transparent_0_300deg,#3b82f6_360deg)] rounded-full blur-[25px]" />
                  </motion.div>

                  <div className="relative z-10 flex flex-col gap-6 items-center w-full mt-6">
                    <motion.h4 
                      animate={{ scale: [1, 1.08, 1], filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-center font-black text-transparent bg-clip-text bg-gradient-to-r from-[#f4b7e8] via-[#d946ef] to-[#3b82f6] text-[1.3rem] leading-tight mb-2 font-display drop-shadow-md"
                    >
                      Get your app on
                    </motion.h4>
                    
                    {/* App Store Badge */}
                    <motion.div 
                      animate={{ y: [0, -6, 0], rotateZ: [0, 1.5, -1.5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-[150px] flex items-center bg-black text-white px-3 py-2 rounded-[12px] shadow-[0_10px_35px_rgba(217,70,239,0.5)] border border-[#d946ef]/60 cursor-pointer"
                    >
                      <FaApple className="text-3xl mr-2 pb-1 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                      <div className="flex flex-col items-start">
                        <span className="text-[8px] uppercase leading-[1.2] text-gray-300">Download on the</span>
                        <span className="text-[14px] font-semibold leading-[1.1]">App Store</span>
                      </div>
                    </motion.div>

                    {/* Google Play Badge */}
                    <motion.div 
                      animate={{ y: [0, 6, 0], rotateZ: [0, -1.5, 1.5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="w-[150px] flex items-center bg-black text-white px-3 py-2 rounded-[12px] shadow-[0_10px_35px_rgba(59,130,246,0.5)] border border-[#3b82f6]/60 cursor-pointer"
                    >
                      <FaGooglePlay className="text-2xl mr-2 pb-0.5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                      <div className="flex flex-col items-start">
                        <span className="text-[8px] uppercase leading-[1.2] text-gray-300">GET IT ON</span>
                        <span className="text-[14px] font-semibold leading-[1.1]">Google Play</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Notch */}
                <div className="w-[90px] h-[22px] bg-[#1f2023] rounded-b-[1rem] absolute top-0 z-40"></div>
              </div>

              {/* Floating White Bar 1 */}
              <div className="absolute right-[150px] top-[70px] w-[260px] h-[70px] bg-white rounded-2xl shadow-xl z-20">
                 {/* Orb resting on top left corner */}
                 <div className="absolute -top-5 -left-4 w-12 h-12 bg-linear-to-br from-[#6366f1] to-[#3b82f6] rounded-full shadow-lg"></div>
              </div>
              
              {/* Floating White Bar 2 */}
              <div className="absolute right-[190px] bottom-[110px] w-[180px] h-[54px] bg-white rounded-xl shadow-xl z-20">
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
