// desktop
import thumbnailDesktop from "../../assets/shared/desktop/image-best-gear.jpg";
// tablet
import thumbnailTablet from "../../assets/shared/tablet/image-best-gear.jpg";
// mobile
import thumbnailMobile from "../../assets/shared/mobile/image-best-gear.jpg";
export default function Thumbnail() {
  return (
    <div className="my-container px-6 md:px-0 flex flex-col lg:flex-row-reverse items-center gap-12 py-16 mb-34! text-center lg:text-left">
      <picture>
        <source media="(max-width:768px)" srcSet={thumbnailMobile} />
        <source media="(max-width:1040px)" srcSet={thumbnailTablet} />
        <source media="(min-width:1041px)" srcSet={thumbnailDesktop} />
        <img src={thumbnailDesktop} alt="Best gear" className="rounded-lg " />
      </picture>
      <div>
        <h4 className="text-[2rem] font-bold uppercase mb-8">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h4>{" "}
        <p className="opacity-70 lg:max-w-md mx-auto lg:mx-0">
          {" "}
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
