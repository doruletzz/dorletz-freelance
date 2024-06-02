"use client";

import React, { useState } from "react";
import { Card } from ".";
import { locales } from "@/utils/locales";
import Link from "next/link";

const CTA = "Contacteaza-ma";
const NAME = "DORU DOROS";

type Props = {
  locale: string;
};

const NavbarComponent = ({ locale }: Props) => {
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <nav className="flex items-center font-semibold text-xs gap-8 fixed top-0 left-0 right-0 mx-48 py-4 bg-white bg-opacity-25 backdrop-blur-md z-50 border-b border-b-black border-opacity-25">
      <a
        href="/"
        className="font-black font-display text-lg mb-0.5 mr-4 hover:-translate-y-0.5"
      >
        {NAME}
      </a>
      <a href="/#home">HOME</a>
      <a href="/#about">ABOUT</a>
      <button style={{background: showLanguage ? '' : 'none'}} onClick={() => setShowLanguage(prev => !prev)} className="uppercase ml-auto relative transition-colors duration-300 ease-in-out bg-gray-200 bg-opacity-40 backdrop-blur-sm rounded-2xl px-6 py-3.5 -mr-4">
        <span>{locale}</span>

        {showLanguage && (
          <Card
            variant="gray"
            className="hover:-translate-y-0.5 mt-6 flex rounded-2xl flex-col gap-4 absolute top-full p-4 w-24 left-1/2 -translate-x-1/2 bg-gray-200 bg-opacity-40 backdrop-blur-xl border border-black border-opacity-10"
          >
            {locales.map((locale) => (
              <Link className="uppercase hover:underline" href={`${locale}/`}>
                {locale}
              </Link>
            ))}
          </Card>
        )}
      </button>

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
