"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

function MapPinIcon() {
  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <i className="hgi-stroke hgi-location-01 text-2xl bg-linear-to-b from-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent" />
    </div>
  );
}

const LINK_COLUMNS = [
  {
    heading: "Lorem Ipsum",
    links: [
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Web Lorem Ipsum Text",
    ],
  },
  {
    heading: "Lorem Ipsum",
    links: [
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Web Lorem Ipsum Text",
    ],
  },
  {
    heading: "Lorem Ipsum",
    links: [
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Lorem Ipsum Text",
      "Web Lorem Ipsum Text",
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#0d0a0d] text-white rounded-t-[50px] md:rounded-t-[70px] overflow-hidden relative">

      {/* ── MAGENTA-PURPLE RADIAL GRADIENT ────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-[380px] pointer-events-none"
        style={{
          background: [
            "radial-gradient(ellipse 100% 55% at 50% 0%, #9b0090 0%, #7a0075 18%, #4d0050 40%, #1f0a1f 65%, transparent 100%)",
            "radial-gradient(ellipse 60% 35% at 50% 0%, #b000a0 0%, transparent 60%)",
          ].join(", "),
        }}
      />

      {/* ── CONCENTRIC RING DECORATIONS ───────────────────────────────── */}
      {[300, 480, 660, 840].map((size, i) => (
        <div
          key={i}
          className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/[0.055] pointer-events-none"
          style={{
            top: `-${size / 2 - 20}px`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full">

        {/* HERO TEXT */}
        <div className="text-center pt-20 pb-24 px-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-tight mb-7 font-display tracking-tight">
            Let's make something<br />great together.
          </h2>
          <p className="text-gray-300 text-[14px] md:text-[15px] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.
            Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue
            sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt.
          </p>
        </div>

        {/* MIDDLE ROW: Text + Locations */}
        <div className="px-8 md:px-16 lg:px-24 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Text */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <p className="text-gray-300 text-[13.5px] leading-relaxed">
              From your first idea to a fully launched digital product, NEXSOF is your partner at every step. We bring the technology, the strategy, and the team so you can focus on what matters most, growing your business.
            </p>
            <p className="text-gray-300 text-[13.5px] leading-relaxed">
              We provide technology solutions to organizations and industries across the globe. Significance of blockchain and other IT solutions has been proved for all the domains and it is being implemented to every industry. We provide technology solutions to organizations and industries across the globe. Significance of blockchain and other IT solutions has been proved for all the domains and it is being implemented to every industry.
            </p>
            <p className="text-gray-300 text-[13.5px] leading-relaxed">
              We provide technology solutions to organizations and industries across the globe. Significance of blockchain and other IT solutions.
            </p>
          </div>

          {/* Right Locations */}
          <div className="lg:col-span-5 lg:col-start-8 flex flex-row gap-12 pt-2">
            <div className="flex flex-col gap-3">
              <MapPinIcon />
              <p className="text-gray-300 text-[13px] leading-relaxed">
                1st Floor, CP/140, Viraj Khand-4,<br />
                Gomti Nagar Lucknow, Uttar Pradesh<br />
                226010
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <MapPinIcon />
              <p className="text-gray-300 text-[13px] leading-relaxed">
                105, 1ST Floor Apricot Tower Silicon<br />
                Oasis, Dubai
              </p>
            </div>
          </div>
        </div>

        {/* GRADIENT DIVIDER + LET'S TALK BUTTON */}
        <div className="relative w-full flex items-center px-8 md:px-16 lg:px-24 mb-14">
          <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#3b82f6] opacity-70" />
          <button className="relative z-10 bg-gradient-to-r from-[#c026d3] to-[#4f46e5] text-white text-sm font-bold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_28px_rgba(168,85,247,0.65)] transition-all">
            Let's Talk
          </button>
        </div>

        {/* LINKS GRID */}
        <div className="px-8 md:px-16 lg:px-24 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">

            {/* Vertical dividers */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="hidden lg:block absolute top-0 bottom-0 w-[1px] bg-gray-700/40"
                style={{ left: `${(i + 1) * 25}%` }}
              />
            ))}

            {/* 3 link columns */}
            {LINK_COLUMNS.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-5">
                <h4 className="text-[15px] font-bold text-white">{col.heading}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link, li) => (
                    <li key={li}>
                      <Link href="#" className="flex items-center gap-2 text-gray-400 hover:text-white text-[13px] transition-colors">
                        <span className="text-[9px] text-gray-500">▶</span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Connect column */}
            <div className="flex flex-col gap-5">
              <h4 className="text-[15px] font-bold text-white">Let's Connect With Us</h4>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "hr@softfix.in", href: "mailto:hr@softfix.in", icon: "hgi-mail-01" },
                  { label: "sales@softfix.in", href: "mailto:sales@softfix.in", icon: "hgi-mail-01" },
                  { label: "+91 00000 00000", href: "tel:+910000000000", icon: "hgi-call" },
                  { label: "+91 00000 00000", href: "tel:+910000000000", icon: "hgi-call" },
                ].map((item, i) => (
                  <li key={i}>
                    <a href={item.href} className="flex items-center gap-3 text-gray-300 hover:text-white text-[13px] transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#a855f7] to-[#3b82f6] flex items-center justify-center shrink-0">
                        <i className={`hgi-stroke ${item.icon} text-white text-base`} />
                      </div>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 mt-2">
                <button className="bg-gradient-to-r from-[#c026d3] to-[#4f46e5] text-white text-[12px] font-bold px-6 py-2 rounded-full hover:opacity-90 transition-all">
                  Call now
                </button>
                {[
                  { icon: <FaInstagram size={13} />, href: "#" },
                  { icon: <FaLinkedinIn size={13} />, href: "#" },
                  { icon: <FaFacebookF size={13} />, href: "#" },
                  { icon: <FaTwitter size={13} />, href: "#" },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="w-8 h-8 rounded-full bg-white text-[#18181b] flex items-center justify-center hover:bg-gray-200 transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="mx-6 md:mx-10 mb-6 bg-[#27272a] rounded-[30px] px-6 py-4 text-center">
          <p className="text-gray-400 text-[12.5px]">
            Copyright © 2020 Softfix. All Rights Reserved. An ISO 27001:2022, ISO 9001:2015 Certified
          </p>
        </div>

      </div>
    </footer>
  );
}
