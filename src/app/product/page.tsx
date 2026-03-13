import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Product from "@/components/Product";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main>
        <Product />
      </main>
      <Footer />
    </>
  );
}