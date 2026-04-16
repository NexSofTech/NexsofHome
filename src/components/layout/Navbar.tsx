"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/") || "/");
  };

  return (
    <header className="relative w-full z-50 px-6 md:px-10 h-[88px] flex items-center bg-transparent">
      <div className="max-w-[1280px] w-full mx-auto flex items-center gap-8">
        {/* Logo */}
        <a href="#" id="logo" className="flex items-center shrink-0">
          <img src="/logo.png" alt="nexsof.tech logo" className="h-[28px] object-contain" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Main navigation">
          {NAV_LINKS.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              id={`nav-${key}`}
              className={`relative text-[0.875rem] px-3 py-1.5 rounded-md transition-all ${
                key === "home"
                  ? "text-white font-semibold"
                  : "text-white/65 font-medium hover:text-white hover:bg-white/5"
              }`}
            >
              {t(key)}
              {key === "home" && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-brand-pink to-brand-purple rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
          {/* Locale switcher */}
          <div className="hidden md:flex bg-white/5 rounded-full p-0.5 gap-px">
            {LOCALES.map(({ code, label }) => (
              <button
                key={code}
                id={`locale-${code}`}
                onClick={() => switchLocale(code)}
                className={`text-[0.72rem] font-bold tracking-wide px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currentLocale === code
                    ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-[0_2px_8px_rgba(224,64,251,0.4)]"
                    : "text-white/40 hover:text-white/60"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            id="nav-cta"
            className="hidden md:inline-flex bg-gradient-to-r from-brand-pink to-brand-purple text-white text-[0.875rem] font-semibold px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(168,85,247,0.45)] hover:shadow-[0_6px_28px_rgba(168,85,247,0.65)] hover:-translate-y-px transition-all"
          >
            {t("cta")}
          </a>

          {/* Hamburger */}
          <button
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-1 cursor-pointer"
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
        className={`absolute top-[68px] left-0 right-0 bg-dark-900/98 backdrop-blur-xl border-b border-white/5 flex flex-col items-center overflow-hidden transition-all duration-300 ${
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
