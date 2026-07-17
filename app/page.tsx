import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import WhyChooseUs from "@/components/WhyChooseUs";
import InfoCards from "@/components/InfoCards";
import FeaturedBrands from "@/components/FeaturedBrands";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Departments />
      <FeaturedBrands />
      <WhyChooseUs />
      <InfoCards />
    </main>
  );
}