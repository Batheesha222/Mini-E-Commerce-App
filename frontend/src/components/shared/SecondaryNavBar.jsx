import React from "react";

const SecondaryNavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 text-white py-2 px-5 flex justify-between items-center text-sm z-[1000]">
      <a href="tel:+1234567890" className="hover:underline">
        +1 (234) 567-890
      </a>
      <a href="mailto:info@example.com" className="hover:underline">
        info@example.com
      </a>
    </nav>
  );
};

export default SecondaryNavBar;
