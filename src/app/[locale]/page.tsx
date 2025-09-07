import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { BestTracksSection } from "@/components/sections/best-tracks";
import { RecentTracksSection } from "@/components/sections/recent-tracks";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BestTracksSection />
      <RecentTracksSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
