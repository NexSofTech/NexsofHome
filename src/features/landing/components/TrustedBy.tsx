import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const BRANDS = [
  "Soda", "inter", "Atlassian", "ClickTravel", "Notion", "eToro", "OneBlock", "Cemex",
  "Stripe", "Shopify", "Vercel", "Linear", "Figma", "Loom", "Rippling", "Segment",
];

export function TrustedBy() {
  const t = useTranslations("trusted");

  return (
    <section className="bg-dark-900 overflow-hidden py-8" aria-label="Trusted by">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-center text-[0.68rem] font-bold tracking-[0.2em] text-white/30 uppercase mb-6">
          {t("label")}
        </p>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="ticker-track">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="text-[0.95rem] font-semibold text-white/25 hover:text-white/55 tracking-wide cursor-default transition-colors font-display"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
