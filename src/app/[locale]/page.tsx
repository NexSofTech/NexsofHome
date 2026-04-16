import { Navbar } from "@/components/layout/Navbar";
import {
  Hero,
  TrustedBy,
  HeroContent,
  EndToEnd,
  Services,
  Team,
} from "@/features/landing";

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
