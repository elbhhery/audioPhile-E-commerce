import { useState } from "react";
import Logo from "../../assets/shared/desktop/logo.svg";
// css files
import "../../styles/global.css";
import { Link } from "react-router-dom";
import MobileNav from "./mobilNav";
import Cart from "./cart";
export default function CategoryHeader() {
  const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="bg-black uppercase text-white">
        <div className="my-container flex items-center justify-between px-6 py-8 border-b border-[rgb(41,41,41)] ">
          <MobileNav MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />
          <div className="flex justify-center md:justify-start w-full ml-0 md:ml-4 lg:w-auto">
            <Link to="/">
              <img src={Logo} alt="" className="mx-auto md:mx-0" />
            </Link>
          </div>
          <ul className="gap-6 hidden lg:flex">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/HeadPhone">Headphones</Link>
            </li>
            <li>
              <Link to="/Speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/Earphones">Earphones</Link>
            </li>
          </ul>
          <Cart />
        </div>
      </header>
    </>
  );
}
