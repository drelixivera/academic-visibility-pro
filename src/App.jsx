import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TagCloud from "./components/TagCloud";
import Services from "./components/Services";
import HowWeWork from "./components/HowWeWork";
import About from "./components/About";
import TrustImage from "./components/TrustImage";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TagCloud />
        <Services />
        <HowWeWork />
        <About />
        <TrustImage />
        <Founder />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}