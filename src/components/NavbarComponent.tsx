"use client";

import React, { useState } from "react";
import { Card } from ".";
import { locales } from "@/utils/locales";
import Link from "next/link";
import Image from "next/image";

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
      <button
        onClick={() => setShowLanguage((prev) => !prev)}
        style={{
          background: showLanguage ? "" : "none",
          boxShadow: showLanguage ? "" : "none",
        }}
        className="uppercase ml-auto relative transition-all duration-300 ease-in-out bg-gray-100 shadow-xl bg-opacity-40 backdrop-blur-sm rounded-2xl px-6 py-3.5 -mr-4"
      >
        <span>{locale.split("-")[0]}</span>

        <Card
          style={{
            pointerEvents: showLanguage ? "auto" : "none", 
            opacity: showLanguage ? "" : "0",
            boxShadow: showLanguage ? "" : "none",
          }}
          variant="gray"
          className="hover:-translate-y-0 transition-all mt-6 flex rounded-xl flex-col gap-4 absolute top-full p-3 left-1/2 shadow-2xl -translate-x-1/2 bg-gray-100 bg-opacity-75 backdrop-blur-xl"
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              className="flex gap-2 uppercase hover:underline px-4 py-2 m-1 rounded-lg hover:bg-gray-200"
              href={`${locale}/`}
            >
              <Image
                key={locale}
                src={`/${locale}-flag-icon.png`}
                className="rounded-full"
                width={16}
                height={16}
                alt="flag"
              />

              <span className="mr-4">{locale.split("-")[0]}</span>
            </Link>
          ))}
        </Card>
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
