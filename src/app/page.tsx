import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Manifesto from "@/components/sections/Manifesto";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import VendorCTA from "@/components/sections/VendorCTA";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Manifesto />
      <Testimonials />
      <Pricing />
      <VendorCTA />
      <ContactForm />
      <Footer />
    </>
  );
}
