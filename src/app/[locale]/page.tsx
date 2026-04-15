import { Navbar } from "@/features/navbar/Navbar";
import { Hero } from "@/features/hero/Hero";
import { TrustedBy } from "@/features/trusted-by/TrustedBy";
import { HeroContent } from "@/features/hero-content/HeroContent";
import { EndToEnd } from "@/features/end-to-end/EndToEnd";
import { Services } from "@/features/services/Services";
import { Team } from "@/features/team/Team";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <HeroContent />
      <EndToEnd />
      <Services />
      <Team />
    </main>
  );
}
