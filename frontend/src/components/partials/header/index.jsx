import React from 'react'

const Header = () => {
  return (
    <header>
    <nav class="bg-green-400 border-b border-gray-200">
  <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 py-2.5 lg:px-6">
    <a href="#" class="flex items-center">
      <span class="self-center text-xl font-semibold whitespace-nowrap text-white text-align-center">Mini E-Commerce App</span>
    </a>

    {/* <!-- Search Bar (hidden on mobile, shown on larger screens) --> */}
    <div class="hidden lg:block lg:ml-4">
      <input type="text" placeholder="Search products..." class="px-3 py-1 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-300"/>
    </div>

    {/* <!-- Right Buttons --> */}
    <div class="flex items-center lg:order-2">
      <a href="#" class="text-gray-800 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 mr-2">Log in</a>
      <a href="#" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2">Get started</a>
      {/* <!-- Hamburger Button --> */}
      <button id="menu-toggle" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:ring-2 focus:ring-green-200">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M3 5h14M3 10h14M3 15h14" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>

    {/* <!-- Navigation Links --> */}
    <div class="hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
      <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        <li>
          <a href="#" class="block py-2 px-4 text-gray-500 hover:text-white lg:hover:text-blue-400">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-4 text-gray-100 hover:text-white lg:hover:text-blue-400">Products</a>
        </li>

        {/* <!-- Categories Dropdown --> */}
        <li class="relative group">
          <button class="block py-2 px-4 text-gray-100 hover:text-white lg:hover:text-blue-400 focus:outline-none">
            Categories
          </button>
          <ul class="absolute hidden text-sm bg-white shadow-md rounded mt-1 group-hover:block z-10">
            <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Electronics</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Clothing</a></li>
            <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Accessories</a></li>
          </ul>
        </li>

        <li>
          <a href="#" class="block py-2 px-4 text-gray-100 hover:text-white lg:hover:text-blue-400">Contact</a>
        </li>
      </ul>

      {/* <!-- Search bar visible only on mobile --> */}
      <div class="mt-3 px-4 block lg:hidden">
        <input type="text" placeholder="Search products..." class="w-full px-3 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-300"/>
      </div>
    </div>
  </div>
</nav>

</header>
  )
}

export default Header