export function Hero() {
  return (
    <section
      className="relative w-full h-[520px] overflow-hidden"
      id="home"
      aria-label="Hero section"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,#2d0060_0%,#1a003a_35%,#0a000f_70%)]" />

      {/* Silk animation layers — defined in globals.css */}
      <div className="silk-1" />
      <div className="silk-2" />
      <div className="silk-3" />
      <div className="shimmer-1" />
      <div className="shimmer-2" />
      <div className="orb-1" />
      <div className="orb-2" />
      <div className="orb-3" />
    </section>
  );
}
