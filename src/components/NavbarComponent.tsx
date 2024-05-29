import React from "react";

const CTA = "Contacteaza-ma";
const NAME = "DORU DOROS";


const NavbarComponent = () => {
  return (
    <nav className="flex items-center font-semibold text-xs gap-8 fixed top-0 left-0 right-0 mx-48 py-4 bg-white bg-opacity-25 backdrop-blur-md z-50 border-b border-b-black border-opacity-25">
      <a href="/" className="font-black font-display text-lg mb-0.5 mr-4 hover:-translate-y-0.5">
        {NAME}
      </a>
      <a href="/#home">HOME</a>
      <a href="/#about">ABOUT</a>
      <span className="ml-auto">RO</span>

      <a
        href="/contact"
        className="px-7 font-bold text-sm py-2.5 rounded-3xl bg-gray-900 hover:text-white text-gray-200"
      >
        {CTA}
      </a>
    </nav>
  );
};

export default NavbarComponent;
