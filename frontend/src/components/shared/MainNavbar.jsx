import { useState } from "react";
import logo from "@/assets/buyNcell_logo.png";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-[36px] w-full bg-blue-500 bg-opacity-10 backdrop-blur-md py-6 px-5 z-[999] transition-all duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img
          src={logo}
          alt=""
          className="text-2xl font-bold text-white"
          height={80}
          width={140}
        />
        <button
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent bg-opacity-90 md:bg-opacity-0 p-5 md:p-0 space-y-4 md:space-y-0`}
        >
          <li>
            <a
              href="/"
              className="text-white text-base hover:text-[#b60c44] transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white text-base hover:text-gray-300 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="text-white text-base hover:text-gray-300 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white text-base hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
