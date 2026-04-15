import { useTranslations } from "next-intl";

const SERVICES = [
  {
    title: "Web Development",
    desc: "We craft high-performance websites tailored to your brand — from landing pages to complex web platforms.",
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps designed for seamless user experiences on iOS and Android.",
  },
  {
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces backed by user research, ensuring intuitive and beautiful digital products.",
  },
  {
    title: "Cloud Services",
    desc: "Scalable cloud infrastructure setup, migration, and management across AWS, GCP, and Azure.",
  },
  {
    title: "AI & Machine Learning",
    desc: "Smart AI-driven features — chatbots, recommendation engines, and predictive analytics — built into your product.",
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automated pipelines and infrastructure-as-code practices for faster, reliable deployments.",
  },
  {
    title: "Custom Software",
    desc: "Bespoke software solutions engineered from scratch to solve your unique business challenges.",
  },
  {
    title: "E-Commerce Solutions",
    desc: "Full-featured online stores with seamless payment integrations, inventory management, and analytics.",
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven digital marketing strategies that grow your online presence and convert visitors into customers.",
  },
  {
    title: "SEO Optimization",
    desc: "Technical SEO audits and on-page optimization to push your brand to the top of search results.",
  },
  {
    title: "Cybersecurity",
    desc: "Security audits, penetration testing, and compliance consulting to keep your systems secure.",
  },
  {
    title: "IT Consulting",
    desc: "Strategic technology consulting to align your IT roadmap with your business objectives.",
  },
];

export function EndToEnd() {
  const t = useTranslations("endToEnd");

  return (
    <section className="bg-[#f8f9fe] py-16 px-6 relative overflow-hidden" id="expertise">
      {/* Sharp vector bottom-right blob */}
      <div className="absolute right-0 bottom-[-50px] w-64 h-64 rounded-full bg-gradient-to-br from-[#7780df] via-[#9176db] to-[#e47ae2] translate-x-1/2 opacity-90 z-0" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-10 flex gap-2 flex-wrap items-baseline">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {t("eyebrow")}
          </h2>
          <h2
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            {t("heading")}
          </h2>
          <p className="w-full text-gray-500 text-[0.9rem] leading-relaxed max-w-3xl mt-4">
            {t("description")}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-md border-[1.5px] border-[#f0c1f2] p-5 shadow-sm hover:-translate-y-0.5 transition-transform"
            >
              <div className="mb-4">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-70">
                  <rect x="2" y="3" width="20" height="14" rx="2" stroke="#111" strokeWidth="1.5" />
                  <path d="M8 21h8M12 17v4" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-[0.9rem] mb-2 font-sans">{service.title}</h3>
              <p className="text-gray-500 text-[0.8rem] leading-snug">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
