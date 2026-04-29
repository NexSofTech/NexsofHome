"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Website Development",
    desc: "Every business needs a home on the internet, and we make sure yours stands out. From slick marketing sites to complex portals, we build fast, beautiful, and conversion-focused websites that your customers will actually enjoy using.",
  },
  {
    title: "Mobile App Development",
    desc: "We build native and cross-platform mobile apps for Android and iOS that feel smooth, load fast, and solve real problems. Whether it's a consumer app or an internal tool for your team, we've shipped it before.",
  },
  {
    title: "Custom Software Development",
    desc: "Off-the-shelf software rarely fits perfectly. We design and build custom applications from the ground up — tailored to your workflows, your team, and your customers. No unnecessary bloat, just what you actually need.",
  },
  {
    title: "ERP Systems",
    desc: "Managing your operations on spreadsheets or disconnected tools? Our ERP solutions bring your inventory, HR, finance, and operations into one unified platform — giving you visibility and control over your entire business.",
  },
  {
    title: "CRM Software",
    desc: "Your customer relationships deserve better than a cluttered inbox. Our CRM solutions help you track leads, manage follow-ups, and close deals faster — built specifically for how your sales and support teams operate.",
  },
  {
    title: "AI-Powered Solutions",
    desc: "AI isn't just a buzzword for us — we've integrated machine learning, natural language processing, and intelligent automation into real products used by real businesses. Let's find where AI can genuinely make your operations smarter.",
  },
  {
    title: "Business Automation",
    desc: "If your team is doing the same repetitive tasks every day, we can automate them. From invoice processing to report generation to customer notifications — we identify the bottlenecks and build systems that run on their own.",
  },
  {
    title: "Digital Marketing Tech",
    desc: "Great software should be discoverable. We build SEO-ready platforms, set up analytics pipelines, and integrate marketing tools that give you real data on what's working — and what isn't.",
  },
  {
    title: "Cloud & DevOps",
    desc: "We deploy your software on modern cloud infrastructure with CI/CD pipelines, monitoring, and auto-scaling built in. Your product will stay online, stay fast, and be ready to grow without manual intervention.",
  },
];

export function EndToEnd() {
  const t = useTranslations("endToEnd");

  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden" id="expertise">
      {/* Background Orbs pinned to max-width container */}
      <div className="absolute inset-0 mx-auto max-w-[1600px] pointer-events-none z-0">
        <div className="absolute top-[60px] -left-[35px] w-16 h-16 rounded-full bg-linear-to-r from-[#d946ef] to-[#8b5cf6] opacity-90"></div>
        <div className="absolute top-[30px] right-[50%] w-24 h-24 rounded-full bg-linear-to-r from-[#8b5cf6] to-[#3b82f6] opacity-80"></div>
        <div className="absolute top-[35%] -left-[300px] w-60 h-60 rounded-full bg-linear-to-tr from-[#ec4899] to-[#8b5cf6] opacity-90"></div>
        <div className="absolute -bottom-[0px] -right-[400px] w-[25rem] h-[25rem] rounded-full bg-linear-to-bl from-[#a855f7] via-[#6366f1] to-transparent opacity-80"></div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Top Module */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
              alt="Team at work" 
              className="w-full h-auto rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start lg:pr-8"
          >
            <div className="inline-block bg-linear-to-r from-[#e1b2e8] to-[#ffffff] px-4 py-2 rounded-md mb-6">
              <span className="text-gray-900 font-extrabold text-[0.8rem] uppercase tracking-wide">End-to-End Software Solutions · Lucknow, India</span>
            </div>
            
            <h2 
              className="text-4xl md:text-[3rem] font-bold text-gray-900 leading-[1.1] mb-6 font-display"
            >
              Everything Your Business<br/>Needs, Under One Roof
            </h2>

            <div className="w-full h-[1px] bg-gray-300 mb-8"></div>

            <p className="text-gray-600 text-[0.95rem] leading-relaxed mb-10">
              Whether you&apos;re a startup looking for your first website or an enterprise needing a full-scale ERP — Nexsof has done it before. We bring the technical depth and real-world experience to make your project work, not just launch.
            </p>

            <button className="bg-linear-to-r from-[#e879f9] to-[#2563eb] text-white font-bold text-[0.95rem] px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Get Started
            </button>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col p-8 rounded-3xl border border-transparent hover:border-[#f0c1f2] hover:bg-white/80 hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer backdrop-blur-sm"
            >
              <div className="mb-6">
                {/* SVG Icon resembling the code + gear from screenshot */}
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 17L4 7C4 5.89543 4.89543 5 6 5L17 5C18.1046 5 19 5.89543 19 7L19 17C19 18.1046 18.1046 19 17 19L6 19C4.89543 19 4 18.1046 4 17Z" stroke="#111" strokeWidth="1.5"/>
                  <path d="M9 10L7 12L9 14" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 10L16 12L14 14" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 9L10.5 15" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                  
                  {/* Gear overlay */}
                  <circle cx="18" cy="6" r="3.5" fill="white" stroke="#111" strokeWidth="1.5"/>
                  <circle cx="18" cy="6" r="1.5" fill="#111"/>
                </svg>
              </div>
              <h3 className="font-extrabold text-gray-900 text-[1.2rem] mb-3 font-display">{service.title}</h3>
              <p className="text-gray-600 text-[0.85rem] leading-[1.7] opacity-90">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
