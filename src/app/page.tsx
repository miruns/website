import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import WhoBenefits from "@/components/WhoBenefits";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <WhoBenefits />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
