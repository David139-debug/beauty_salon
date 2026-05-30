import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import MainPrices from "@/components/MainPrices";
import Styling from "@/components/Styling";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Styling />
      <MainPrices />
      <Testimonials />
      <Benefits />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
