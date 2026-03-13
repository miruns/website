import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Team />
      </main>
      <Footer />
    </>
  );
}