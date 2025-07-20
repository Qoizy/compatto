import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-12 md:py-16">
      <div className="w-full max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-5xl mx-auto px-4 py-2 flex justify-between items-center bg-white rounded-full shadow-lg relative">
        <div className="text-xl font-semibold text-gray-800">
          <img src={logo} alt="compatto" className="w-[50%]" />
        </div>

        <ul className="hidden lg:flex space-x-8 text-sm font-semibold">
          <li className="cursor-pointer hover:text-[#a0784e]">Who we are</li>
          <li className="cursor-pointer hover:text-[#a0784e]">
            The challenges
          </li>
          <li className="cursor-pointer hover:text-[#a0784e]">Our process</li>
          <li className="cursor-pointer hover:text-[#a0784e]">Why choose us</li>
        </ul>

        <button className="hidden lg:block bg-[#c0a57d] text-white px-5 py-2 rounded-full shadow-md text-sm hover:bg-[#a0784e] transition">
          Contact us
        </button>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-[#a0784e]">
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full mt-4 left-0 w-full bg-white rounded-xl shadow-lg px-6 py-4 flex flex-col space-y-4 text-gray-700 text-sm lg:hidden">
            <a href="#" className="hover:text-[#a0784e]">
              Who we are
            </a>
            <a href="#" className="hover:text-[#a0784e]">
              The challenges
            </a>
            <a href="#" className="hover:text-[#a0784e]">
              Our process
            </a>
            <a href="#" className="hover:text-[#a0784e]">
              Why choose us
            </a>
            <button className="bg-[#c0a57d] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#a0784e] transition">
              Contact us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
