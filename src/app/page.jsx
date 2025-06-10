import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import LocationsSection from "@/components/LocationsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesPreview />
        <AboutSection />
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
