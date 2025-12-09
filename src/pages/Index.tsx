import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { VerticalCards } from "@/components/home/VerticalCards";
import { LocationSelector } from "@/components/home/LocationSelector";
import { NewsSection } from "@/components/home/NewsSection";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <VerticalCards />
      <LocationSelector />
      <NewsSection />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
