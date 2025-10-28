import { Link } from "react-router-dom";
// arrow icon
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
// desktop images
import Dearphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import Dheadphones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Dspeakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";

// css files
import "../../styles/global.css";
export default function Category() {
  return (
    <div className="my-32! my-container flex flex-col md:flex-row gap-16 md:gap-4 px-4 md:px-0">
      <div className="bg-[#F1F1F1] rounded-2xl p-6 flex-1 relative flex flex-col items-center justify-center text-center">
        <img src={Dheadphones} alt="" className="absolute -top-10 w-44" />

        <Link
          to="/HeadPhone"
          className="hover:text-[#D87D4A] mt-24 font-semibold text-2xl mb-4"
        >
          Headphones
        </Link>
        <div className=" flex items-center justify-center gap-2 opacity-70 hover:opacity-100">
          <Link
            to="/HeadPhone"
            className="uppercase text-sm tracking-[2px] hover:text-[#D87D4A]"
          >
            Shop
          </Link>
          <img src={Arrow} alt="" />
        </div>
      </div>

      <div className="bg-[#F1F1F1] rounded-2xl p-6 flex-1 relative flex flex-col items-center justify-center text-center">
        <img src={Dspeakers} alt="" className="absolute -top-10 w-44" />
        <Link
          to="/Speakers"
          className="hover:text-[#D87D4A] mt-24 font-semibold text-2xl mb-4"
        >
          Speakers
        </Link>
        <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100">
          <Link
            to="/Speakers"
            className="uppercase text-sm tracking-[2px] hover:text-[#D87D4A]"
          >
            Shop
          </Link>
          <img src={Arrow} alt="" />
        </div>
      </div>

      <div className="bg-[#F1F1F1] rounded-2xl p-6 flex-1 relative flex flex-col items-center justify-center text-center">
        <img src={Dearphones} alt="" className="absolute -top-10 w-44" />
        <Link
          to="/EarPhones"
          className="mt-24 font-semibold text-2xl mb-4 hover:text-[#D87D4A]"
        >
          Earphones
        </Link>
        <div className="flex items-center justify-center gap-2 opacity-70 hover:opacity-100">
          <Link
            to="/EarPhones"
            className="uppercase text-sm tracking-[2px] hover:text-[#D87D4A]"
          >
            Shop
          </Link>
          <img src={Arrow} alt="" />
        </div>
      </div>
    </div>
  );
}
