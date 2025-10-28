import CategoryHeader from "../shared/categoryHeader";
import CategoryProducts from "../shared/CategoryProducts.jsx";
import Footer from "../shared/footer";
import Thumbnail from "../shared/thumbnail";
export default function EarPhones() {
  return (
    <>
      <CategoryHeader />
      <div className="bg-black text-3xl font-semibold flex items-center justify-center h-[136px] text-white uppercase">
        <h1>EarPhones</h1>
      </div>
      <CategoryProducts category={"earphones"} />
      <Thumbnail />
      <Footer />
    </>
  );
}
