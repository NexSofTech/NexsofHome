import { Navbar } from "@/components/layout/Navbar";
import {
  Hero,
  EndToEnd,
  Services,
  Team,
  Conversion,
  Portfolio,
  
} from "@/features/landing";
import { FeatureSection } from "@/features/landing/components/FeatureSection";
import { Technologies } from "@/features/landing/components/Technologies";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen pt-4 md:pt-6">
      {/* Framed top section containing Navbar and Hero */}
      <div className="mx-4 md:mx-6 lg:mx-8 rounded-[40px] md:rounded-[50px] overflow-hidden bg-black relative flex flex-col h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] border border-white/10">
        <Navbar />
        {/* Separator bar at the bottom of the nav bar */}
        <div className="h-px bg-white/60 w-[96%] mx-auto relative z-20" />
        <Hero />
      </div>

      <EndToEnd />
      <Conversion />
      <Services />
      <Team />
      <FeatureSection />
      <Technologies />
      {/* <Portfolio /> */}
      {/* Placeholder sections for navigation testing */}
      <section id="service" className="min-h-[50vh] flex items-center justify-center bg-gray-50 border-t">
        <h2 className="text-2xl text-gray-400 font-bold uppercase tracking-widest">Our Services Section</h2>
      </section>
      <section id="technologies" className="min-h-[50vh] flex items-center justify-center bg-white border-t">
        <h2 className="text-2xl text-gray-400 font-bold uppercase tracking-widest">Technologies Section</h2>
      </section>
      <section id="blog" className="min-h-[50vh] flex items-center justify-center bg-gray-50 border-t">
        <h2 className="text-2xl text-gray-400 font-bold uppercase tracking-widest">Our Blog Section</h2>
      </section>
    </main>
  );
}
