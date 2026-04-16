import { Navbar } from "@/components/layout/Navbar";
import {
  Hero,
  EndToEnd,
  Services,
  Team,
} from "@/features/landing";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen pt-4 md:pt-6">
      {/* Framed top section containing Navbar and Hero */}
      <div className="mx-4 md:mx-6 lg:mx-8 rounded-[40px] md:rounded-[50px] overflow-hidden bg-black relative flex flex-col min-h-[90vh] md:min-h-[1100px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
        <Navbar />
        {/* Separator bar at the bottom of the nav bar */}
        <div className="h-px bg-white/60 w-[96%] mx-auto relative z-20" />
        <Hero />
      </div>

      <EndToEnd />
      <Services />
      <Team />
    </main>
  );
}
