import { useState } from "react";
// icons
import Logo from "../../assets/shared/desktop/logo.svg";
// css files
import "../../styles/global.css";
import { Link } from "react-router-dom";
import MobileNav from "../shared/mobilNav";
import Cart from "../shared/cart";

export default function Header() {
  const [MenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="my-container border-b border-[rgb(41,41,41)] text-white px-6 py-8">
      <div className=" flex items-center justify-between">
        <MobileNav MenuOpen={MenuOpen} setMenuOpen={setMenuOpen} />

        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 text-lg font-bold md:static md:translate-x-0"
        >
          <img src={Logo} alt="" />
        </Link>

        <nav className="hidden lg:flex md:flex-1 md:justify-center">
          <ul className="flex gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/HeadPhone">Headphones</Link>
            </li>
            <li>
              <Link to="/Speakers">Speakers</Link>
            </li>
            <li>
              <Link to="/EarPhones">Earphones</Link>
            </li>
          </ul>
        </nav>
        <Cart />
      </div>
    </header>
  );
}
