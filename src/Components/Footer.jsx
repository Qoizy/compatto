import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-white px-6 md:px-12 lg:px-20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="compatto" className="w-[50%]" />
          {/* <p className="text-sm text-white-400">
            Designing comfort, delivering style.
          </p> */}
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white-400">
            <li>
              <a href="#" className="hover:text-[#a0784e] transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a0784e] transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a0784e] transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#a0784e] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white-400 hover:text-[#a0784e] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-white-400 hover:text-[#a0784e] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-white-400 hover:text-[#a0784e] transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-white-400 hover:text-[#a0784e] transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black text-sm"
            />
            <button
              type="submit"
              className="bg-[#a0784e] hover:bg-[#8a623d] text-white py-2 rounded-md text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-xs text-white-500 mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Compatto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
