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

  const featuresList = [
    {
      title: "Why SaaS Platforms Are the Future of Business Infrastructure",
      desc: "The shift from service-based to product-driven models is accelerating. Discover how SaaS platforms are reshaping how businesses operate, scale, and generate recurring revenue in the digital age."
    },
    {
      title: "How Digital Automation Is Transforming Business Operations",
      desc: "Manual processes are the biggest productivity bottleneck. We explore how intelligent automation platforms help companies cut costs, boost efficiency, and free their teams to focus on growth."
    },
    {
      title: "Building for the Creator Economy: Tools, Platforms and Opportunities",
      desc: "The creator economy is one of the fastest-growing sectors globally. Learn how NEXSOF helps creators and brands build the digital infrastructure they need to monetize, grow, and engage their audiences."
    },
    {
      title: "The Rise of AI-Driven Business Solutions",
      desc: "Artificial intelligence is no longer optional, it is foundational. Explore how AI-powered platforms are helping businesses make smarter decisions, personalize customer experiences, and unlock new levels of efficiency."
    },
    {
      title: "Data as a Growth Engine: Turning Insights into Action",
      desc: "Data is the new currency of innovation. Discover how advanced analytics and real-time insights empower businesses to make informed decisions, optimize performance, and drive sustainable growth."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden" id="industries">
      <div className="max-w-[1600px] mx-auto">
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
              NEXSOF is simply at the forefront of the digital industry.
            </h2>

            <div className="space-y-6 pt-2">
              {featuresList.map((proc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-[44px] h-[44px] mt-1 rounded-xl bg-linear-to-br from-[#df59f2] to-[#3f5cf0] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>

                  <div>
                    <h3 className="text-[#18181b] font-bold text-[1.1rem] mb-1 font-display">{proc.title}</h3>
                    <p className="text-[#52525b] text-[0.9rem] leading-[1.7]">
                      {proc.desc}
                    </p>
                  </div>
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
