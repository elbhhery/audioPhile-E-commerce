import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
// import type { Dispatch, SetStateAction } from "react";

// header images
import headerHeadphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import headerSpeakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import headerEarphones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
// arrow
import Arrow from "../../assets/shared/desktop/icon-arrow-right.svg";
import hamburger from "../../assets/shared/tablet/icon-hamburger.svg";
interface MobilNavProps {
  MenuOpen: boolean;
  setMenuOpen: (value: boolean | ((prevState: boolean) => boolean)) => void;
}
export default function MobileNav({ MenuOpen, setMenuOpen }: MobilNavProps) {
  return (
    <>
      <button
        aria-label="Open menu"
        onClick={() => setMenuOpen((prev) => !prev)}
        className="lg:hidden p-1 "
      >
        <img src={hamburger} alt="" className="h-6" />
      </button>
      <AnimatePresence>
        {MenuOpen && (
          <>
            {/* sliding panel */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-10 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="absolute top-0 left-0 right-0 z-20 lg:hidden"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="mt-24 rounded-b-lg bg-[#ffffff] p-6 pb-12 text-black shadow-lg">
                <div className="flex justify-end m-2">
                  <button
                    aria-label="Close menu"
                    onClick={() => setMenuOpen(false)}
                    className="text-2xl mb-6"
                  >
                    ✕
                  </button>
                </div>

                <nav>
                  <ul className="flex flex-col md:flex-row items-center md:gap-4 gap-14 w-full">
                    <li className="bg-[#f1f1f1] py-6 rounded-2xl flex-1 w-full md:w-auto relative flex flex-col justify-center items-center">
                      <img
                        src={headerHeadphone}
                        alt=""
                        className="absolute -top-10 w-28"
                      />
                      <Link
                        to="/HeadPhone"
                        onClick={() => setMenuOpen(false)}
                        className="block px-2 pt-4 hover:text-[#D87D4A] font-semibold md:pt-12 mt-4 md:mb-2 uppercase"
                      >
                        Headphones
                      </Link>
                      <a className="flex flex-row items-center">
                        <Link
                          to="/HeadPhone"
                          className="text-[#B5B5B5] mr-2 hover:text-[#D87D4A]"
                        >
                          Shop
                        </Link>
                        <img src={Arrow} alt="" />
                      </a>
                    </li>
                    <li className="bg-[#f1f1f1] p-8 rounded-2xl flex-1 w-full md:w-auto relative flex flex-col justify-center items-center">
                      <img
                        src={headerSpeakers}
                        alt=""
                        className="absolute -top-10 w-28"
                      />
                      <Link
                        to="/Speakers"
                        onClick={() => setMenuOpen(false)}
                        className="block px-2 pt-4 hover:text-[#D87D4A] font-semibold md:pt-6 mt-4 md:mb-2 uppercase"
                      >
                        speakers
                      </Link>
                      <a className="flex flex-row items-center">
                        <Link
                          to="/Speakers"
                          className="text-[#B5B5B5] mr-2 hover:text-[#D87D4A]"
                        >
                          Shop
                        </Link>
                        <img src={Arrow} alt="" />
                      </a>
                    </li>
                    <li className="bg-[#f1f1f1] p-8 rounded-2xl flex-1 w-full md:w-auto relative flex flex-col justify-center items-center">
                      <img
                        src={headerEarphones}
                        alt=""
                        className="absolute -top-10 w-28"
                      />
                      <Link
                        to="/EarPhones"
                        onClick={() => setMenuOpen(false)}
                        className="block px-2 pt-4 font-semibold md:pt-6 mt-4 md:mb-2 uppercase hover:text-[#D87D4A]"
                      >
                        earphones
                      </Link>
                      <a className="flex flex-row items-center">
                        <Link
                          to="/EarPhones"
                          className="text-[#B5B5B5] mr-2 hover:text-[#D87D4A]"
                        >
                          Shop
                        </Link>
                        <img src={Arrow} alt="" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
