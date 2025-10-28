import Category from "../shared/category";
import Intro from "./intro";
import Products from "./products";
import Thumbnail from "../shared/thumbnail";
import Footer from "../shared/footer";
export default function HomePage() {
  return (
    <>
      <title>Audiophile e-commerce</title>
      <Intro />
      <Category />
      <Products />
      <Thumbnail />
      <Footer />
    </>
  );
}
