import CategoryHeader from "../shared/categoryHeader";
import Footer from "../shared/footer";
import Thumbnail from "../shared/thumbnail";
import CategoryProducts from "../shared/CategoryProducts.jsx";
import Category from "../shared/category.tsx";
export default function Speakers() {
  return (
    <>
      <CategoryHeader />
      <div className="bg-black text-3xl font-semibold flex items-center justify-center h-[136px] text-white uppercase">
        <h1>Speakers</h1>
      </div>
      <CategoryProducts category={"speakers"} />
      <Category />
      <Thumbnail />
      <Footer />
    </>
  );
}
