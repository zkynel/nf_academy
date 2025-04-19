import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Heroes from "../components/shared/Heroes";
import ProductList from "../components/shared/ProductList";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Heroes */}
      <Heroes />

      {/* Product List */}
      <ProductList />

      {/* Footer */}
      <Footer />
    </>
  );
}
