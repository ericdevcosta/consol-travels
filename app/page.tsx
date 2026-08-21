import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Destinations from "@/components/sections/Destinations";
import Advantages from "@/components/sections/Advantages";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-b from-blue-50/40 to-white">
        <Hero />
        <Services />
        <Destinations />
        <Advantages />
        <About />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}