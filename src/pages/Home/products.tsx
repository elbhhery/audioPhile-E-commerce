import ProductsData from "../../data.json";
import { Link } from "react-router-dom";
// mobile
import zx9 from "../../assets/home/mobile/image-speaker-zx9.png";
import yx1 from "../../assets/home/mobile/image-earphones-yx1.jpg";
// tablet
import tabletyx1 from "../../assets/home/tablet/image-earphones-yx1.jpg";
// desktop
import desktopyx1 from "../../assets/home/desktop/image-earphones-yx1.jpg";
export default function products() {
  const zx9Slug = ProductsData.find((p) => p.id === 6);
  const zx7Slug = ProductsData.find((p) => p.id === 5);
  const yx1Slug = ProductsData.find((p) => p.id === 1);
  return (
    <div className="my-container px-6 md:px-0 flex flex-col gap-6 mb-32! text-center">
      <div
        className="product-container text-[#ffff] bg-[#D87D4A] text-center py-4 px-8 rounded-lg 
                       lg:flex lg:items-center lg:justify-around lg:text-left overflow-hidden
                      bg-size-[35rem] bg-position-[center_-132px] md:bg-size-[48rem] lg:bg-size-[50rem] lg:bg-position-[-100px_center]"
      >
        <img
          src={zx9}
          alt=""
          className="speeker-img w-48 block mx-auto md:w-56 pt-6 lg:mx-0 lg:w-72 lg:mb-[-2.4rem]"
        />
        <div>
          <h3 className="text-5xl font-bold my-6 md:my-12">
            ZX9 <br /> speaker
          </h3>
          <p className="max-w-84 block mx-auto">
            {" "}
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            className="inline-block bg-[#000000] px-9 py-3 mt-12 hover:bg-[#4C4C4C]"
            to={zx9Slug ? `/product/${zx9Slug.slug}` : "/product-not-found"}
          >
            {" "}
            See product
          </Link>
        </div>
      </div>

      <div className="zx7-speeker py-32 h-80 rounded-lg px-4 text-left md:pl-18 ">
        <h3 className="text-3xl font-bold mb-6"> ZX7 speaker </h3>
        <Link
          to={zx7Slug ? `/product/${zx7Slug.slug}` : "/product-not-found"}
          className="inline-block border-black border font-semibold uppercase px-9 py-3 hover:text-[#ffffff] hover:bg-black  "
        >
          See product
        </Link>{" "}
      </div>

      <div className="md:flex md:justify-between gap-6">
        <picture className="block md:w-1/2">
          <source media="(max-width:768px)" srcSet={yx1} />
          <source media="(max-width:1040px)" srcSet={tabletyx1} />
          <source media="(min-width:1041px)" srcSet={desktopyx1} />
          <img
            src={desktopyx1}
            alt="YX1 Earphones"
            className="rounded-lg w-full object-cover"
          />
        </picture>
        <div className="bg-[#F1F1F1] mt-6 rounded-lg py-12 px-6 text-left md:w-1/2 md:mt-0 flex flex-col justify-center">
          <div>
            <h3 className=" text-3xl font-bold mb-8">YX1 earphones </h3>
            <Link
              to={yx1Slug ? `/product/${yx1Slug.slug}` : "/product-not-found"}
              className="inline-block border-black border font-semibold uppercase px-9 py-3 hover:text-[#ffffff] hover:bg-black  "
            >
              See product
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
