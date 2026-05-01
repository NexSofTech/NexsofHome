"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

const heroLogos = [
  { name: "Angular", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" },
  { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
  { name: "React", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Sass", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
  { name: "Tailwindcss", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "TypeScript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Nodejs", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Claude", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg", invert: true },
  { name: "Gemini", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlegemini.svg", invert: true },
  { name: "OpenAI", logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", invert: true },
  { name: "Github", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "VS Code", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
  { name: "Flutter", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Dart", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
  { name: "Kotlin", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" },
  { name: "Swift", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
  { name: "Java", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C++", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  
];

export function Hero() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#050008",
    showAtmosphere: true,
    atmosphereColor: "#a855f7",
    atmosphereAltitude: 0.15,
    emissive: "#050008",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#e040fb",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  const colors = ["#e040fb", "#a855f7", "#ffffff"];
  const sampleArcs = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[0] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[1] },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[2] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[0] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[1] },
    { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[0] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[1] },
    { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[2] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[0] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[1] },
    { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[2] },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[0] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[1] },
    { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[0] },
    { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[1] },
    { order: 7, startLat: 52.52, startLng: 13.405, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[2] },
  ];

  return (
    <section className="w-full h-full flex-1 flex flex-col justify-end overflow-hidden relative" id="home">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat z-0"
      />
      {/* Darker overlay so globe and text are visible */}
      <div className="absolute inset-0 bg-black/70 bg-linear-to-b from-black/50 via-black/80 to-black z-10" />

      {/* Main Content Area */}
      <div className="relative z-20 w-full flex-1 flex flex-col items-center justify-center pt-8 md:pt-16">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-6 px-6 lg:px-12 xl:px-20 h-[50vh] md:h-[60vh] lg:h-auto">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col z-20"
          >
            <h2 className="text-[2.2rem] md:text-[3.2rem] lg:text-[4rem] font-bold text-white font-display leading-[1.1] mb-4 md:mb-6">
              Global Reach,<br />
              <span className="bg-linear-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
                Local Impact
              </span>
            </h2>
            
            <div className="w-16 md:w-24 h-[3px] md:h-[4px] bg-linear-to-r from-brand-pink via-brand-purple to-transparent mb-4 md:mb-6" />

            <p className="text-[1rem] md:text-[1.1rem] text-white/80 max-w-lg mb-6 md:mb-10 leading-relaxed">
              We deliver cutting-edge technology solutions to businesses across the globe. 
              No matter where you are located, our team is ready to scale your digital presence 
              and accelerate your growth.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-linear-to-r from-brand-pink to-brand-purple text-white px-6 py-3 md:px-8 md:py-3.5 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
                Work With Us
              </a>
            </div>
          </motion.div>
          
          {/* Right Side: Globe */}
          <div className="relative h-full min-h-[300px] lg:h-[500px] w-full z-10 flex items-center justify-center lg:translate-x-12">
            <div className="absolute w-[120%] h-[120%] md:w-[150%] md:h-[150%] left-[-10%] md:left-[-25%] top-[-10%] md:top-[-25%]">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By Logos */}
      <div className="relative z-20 w-full mt-auto pb-8 md:pb-12 overflow-hidden shrink-0">
        <p className="text-center text-[0.75rem] md:text-[0.85rem] font-bold tracking-[0.25em] text-white uppercase mb-6 md:mb-10 opacity-60">
          We specialize in...
        </p>
        
        <div className="flex w-full overflow-hidden">
          <div className="hero-ticker-track flex items-center shrink-0">
            {[1, 2, 3, 4].map((setIndex) => (
              <div key={setIndex} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16">  
                {heroLogos.map((logo, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="shrink-0 cursor-pointer group"
                  >
                    <img
                      src={logo.logoUrl}
                      alt={logo.name}
                      className={`h-6 md:h-10 w-auto object-contain transition-all duration-400 hover:scale-110 ${logo.invert ? "brightness-0 invert" : ""}`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
