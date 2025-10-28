import { Link } from "react-router-dom";
import Header from "./Header";
import "../../styles/global.css";
import "../../styles/home.css";
import ProductsData from "../../assets/data/data.json";
export default function Intro() {
  const product = ProductsData.find((p) => p.id === 4);
  return (
    <>
      <section className={`h-screen  text-[#ffffff] `}>
        <Header />

        <div className="my-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <h3 className="opacity-50 text-[1rem] tracking-[8px] mb-4">
            New product
          </h3>
          <h3 className="lg:text-[4rem] font-bold mb-7 text-[2.8rem] md:text-4xl lg:leading-16">
            XX99 Mark II <br /> Headphones
          </h3>
          <p className="opacity-75 mb-8 max-w-[379px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to={product ? `/product/${product.slug}` : "/product-not-found"}
            className="hover:bg-[#FBAF85] py-4 px-8 bg-[#D87D4A]"
          >
            See Product
          </Link>
        </div>
      </section>
    </>
  );
}
