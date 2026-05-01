"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  "home", "service", "expertise", "industries", "technologies", "about", "blog",
] as const;

const LOCALES = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
];

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLocale = pathname.split("/")[1] || "en";

  const [activeSection, setActiveSection] = useState<string>("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [localeDropdownOpen, setLocaleDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
  };

  // Scroll Spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        rootMargin: "-20% 0px -70% 0px", // Trigger when section occupies the top-middle of viewport
        threshold: 0 
      }
    );

    NAV_LINKS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Update indicator position
  useEffect(() => {
    const updatePosition = () => {
      const targetId = hoveredSection || activeSection;
      const targetElement = document.getElementById(`nav-${targetId}`);
      
      if (targetElement && navRef.current) {
        const parentRect = navRef.current.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        
        setIndicatorStyle({
          left: targetRect.left - parentRect.left,
          width: targetRect.width,
          opacity: 1,
        });
      }
    };

    // Small timeout to ensure DOM is ready and translations have rendered
    const timeout = setTimeout(updatePosition, 100);
    window.addEventListener("resize", updatePosition);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updatePosition);
    };
  }, [activeSection, hoveredSection, t]);

  return (
    <header className="relative w-full z-50 px-6 md:px-10 h-[88px] flex items-center bg-transparent">
      <div className="w-full flex items-center gap-16">
        {/* Logo */}
        <motion.a 
          href="#" 
          id="logo" 
          className="flex items-center shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <picture>
            <source media="(max-width: 399px)" srcSet="/logo2.png" />
            <img src="/logo.png" alt="nexsof.tech logo" className="h-[46px] object-contain" />
          </picture>
        </motion.a>

        {/* Desktop nav */}
        <nav 
          ref={navRef}
          className="hidden min-[1460px]:flex items-center gap-4 flex-1 justify-center relative" 
          aria-label="Main navigation"
          onMouseLeave={() => setHoveredSection(null)}
        >
          {NAV_LINKS.map((key, i) => (
            <motion.a
              key={key}
              href={`#${key}`}
              id={`nav-${key}`}
              onMouseEnter={() => setHoveredSection(key)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className={`relative text-[1.2rem] px-3 py-1.5 rounded-md transition-colors duration-300 ${
                activeSection === key || hoveredSection === key
                  ? "text-white font-light"
                  : "text-white/65 font-light hover:text-white"
              }`}
            >
              {t(key)}
            </motion.a>
          ))}

          {/* Sliding Indicator */}
          <span 
            className="absolute bottom-0 h-0.5 bg-linear-to-r from-brand-pink to-brand-purple rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              left: `${indicatorStyle.left + 12}px`, // Account for px-3 padding (approx 12px)
              width: `${indicatorStyle.width - 24}px`, // Account for px-3 padding on both sides
              opacity: indicatorStyle.opacity,
            }}
          />
        </nav>

        {/* Right */}
        <div className="flex items-center gap-8 shrink-0 ml-auto min-[1460px]:ml-0">
          {/* Locale switcher */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setLocaleDropdownOpen(!localeDropdownOpen)}
              className="flex items-center gap-1.5 text-[0.85rem] font-bold tracking-wide px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              {LOCALES.find(l => l.code === currentLocale)?.label || "EN"}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-300 opacity-60 ${localeDropdownOpen ? "rotate-180" : ""}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-[calc(100%+8px)] right-0 py-2 w-28 bg-[#12001e] border border-white/10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] flex flex-col z-50 transition-all duration-300 origin-top-right ${
                localeDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {LOCALES.map(({ code, label }) => (
                <button
                  key={code}
                  id={`locale-${code}`}
                  onClick={() => {
                    switchLocale(code);
                    setLocaleDropdownOpen(false);
                  }}
                  className={`text-left px-5 py-2 text-[0.85rem] font-bold tracking-wide transition-all cursor-pointer ${
                    currentLocale === code
                      ? "bg-linear-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <a
            href="#contact"
            id="nav-cta"
            className="hidden md:inline-flex bg-linear-to-r from-brand-pink to-brand-purple text-white text-[1.2rem] font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.45)] hover:shadow-[0_6px_28px_rgba(168,85,247,0.65)] hover:-translate-y-px transition-all"
          >
            {t("cta")}
          </a>

          {/* Hamburger */}
          <button
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-[1460px]:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[22px] h-0.5 bg-white rounded-full transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-[68px] left-0 right-0 bg-dark-900/98 backdrop-blur-xl flex flex-col items-center overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        {NAV_LINKS.map((key) => (
          <a
            key={key}
            href={`#${key}`}
            id={`mobile-nav-${key}`}
            onClick={() => setMenuOpen(false)}
            className="text-white/65 hover:text-white w-full text-center py-3 px-8 text-[0.95rem] transition-colors"
          >
            {t(key)}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="mt-3 bg-gradient-to-r from-brand-pink to-brand-purple text-white font-semibold px-8 py-2.5 rounded-full text-sm"
        >
          {t("cta")}
        </a>
      </div>
    </header>
  );
}
