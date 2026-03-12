import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollVideoSections from "@/components/ScrollVideoSections";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ScrollVideoSections />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
