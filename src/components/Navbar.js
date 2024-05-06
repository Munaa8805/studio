import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "About" },
    { id: 2, text: "Careers" },
    { id: 3, text: "Events" },
    { id: 4, text: "Products" },
    { id: 5, text: "Supper" },
  ];

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-bold md:text-white ">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">loopstudios</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-4 py-2 font-bold hover:bg-[#00df9a]  rounded-xl m-2 cursor-pointer duration-300"
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 text-white bg-[#252625] ease-in-out duration-500 z-10"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          loopstudios
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
