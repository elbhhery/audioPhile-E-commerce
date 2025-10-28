import Category from "../shared/category.tsx";
import CategoryHeader from "../shared/categoryHeader";
import Footer from "../shared/footer.tsx";
import Thumbnail from "../shared/thumbnail.tsx";
import CategoryProducts from "../shared/CategoryProducts.jsx";

export default function HeadPhone() {
  return (
    <>
      <CategoryHeader />
      <div className="bg-black text-3xl font-semibold flex items-center justify-center h-[136px] text-white uppercase">
        <h1>Headphones</h1>
      </div>
      <CategoryProducts category={"headphones"} />
      <Category />
      <Thumbnail />
      <Footer />
    </>
  );
}
