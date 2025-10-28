import { Link } from "react-router-dom";
// logo
import Logo from "../../assets/shared/desktop/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-[#FFFFFF] px-6 py-12 md:px-10 lg:px-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar with Logo and Navigation */}
        <div className="text-center flex flex-col lg:flex-row lg:justify-between border-b border-[#2C2C2C] pb-8">
          <img
            src={Logo}
            alt="Audiophile logo"
            className="w-36 block mx-auto mb-8 md:mx-0"
          />
          <nav>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-10 uppercase text-sm tracking-widest">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#D87D4A] transition-colors font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/HeadPhone"
                  className="hover:text-[#D87D4A] transition-colors font-semibold"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/Speakers"
                  className="hover:text-[#D87D4A] transition-colors font-semibold"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/Earphones"
                  className="hover:text-[#D87D4A] transition-colors font-semibold"
                >
                  Earphones
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Company Description */}
        <div className="grid  py-8 text-center md:text-left">
          <p className="text-[#878787] leading-relaxed">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
        </div>

        {/* Bottom Bar with Copyright and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pt-8 ">
          <p className="text-[#878787] text-sm mb-8 md:mb-0">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex gap-4 ">
            <a
              href="#"
              className="text-white hover:text-[#D87D4A] transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#D87D4A] transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#D87D4A] transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
