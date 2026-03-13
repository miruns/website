import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Roadmap from "@/components/Roadmap";

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Roadmap />
      </main>
      <Footer />
    </>
  );
}