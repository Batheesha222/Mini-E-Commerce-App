import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-green-400 border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-2.5 lg:px-6">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white text-align-center">
              Mini E-Commerce
            </span>
          </a>

          {/* Search Bar (hidden on mobile, shown on larger screens) */}
          <div className="hidden lg:block lg:ml-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-3 py-1 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
          </div>

          {/* Right Buttons */}
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-800 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Log in
            </a>
            <a
              href="#"
              className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
            >
              Get started
            </a>

            {/* Hamburger Button */}
            <button
              id="menu-toggle"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-green-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 5h14M3 10h14M3 15h14"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-500 hover:text-white lg:hover:text-blue-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-100 hover:text-white lg:hover:text-blue-400"
                >
                  Products
                </a>
              </li>

              {/* Categories Dropdown */}
              <li className="relative group">
                <button className="block py-2 px-4 text-gray-100 hover:text-white lg:hover:text-blue-400 focus:outline-none">
                  Categories
                </button>
                <ul className="absolute hidden text-sm bg-white shadow-md rounded mt-1 group-hover:block z-10">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Electronics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Accessories
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-gray-100 hover:text-white lg:hover:text-blue-400"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Search bar visible only on mobile */}
            <div className="mt-3 px-4 block lg:hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
