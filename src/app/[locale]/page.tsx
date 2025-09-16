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
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        <HeroSection />
        <AboutSection />
        <BestTracksSection />
        <RecentTracksSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
