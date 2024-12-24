"use client";

import React, { useEffect, useState } from "react";
import { Button, Card } from ".";
import { locales } from "@/utils/locales";
import Link from "next/link";
import Image from "next/image";
import useScrollPosition from "@/hooks/useScrollPostition";
import { usePathname } from "next/navigation";

const NAME = "DORU DOROS";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      cta: "Contact",
    },
    "ro-RO": {
      cta: "Contacteaza-ma",
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const NavbarComponent = ({ locale }: Props) => {
  const pathName = usePathname();
  const pathWithoutLocale = pathName.split("/").slice(2).join("/");
  const { cta } = getContentByLocale(locale);

  const { scrollPosition, isScrolling } = useScrollPosition();
  const [showLanguage, setShowLanguage] = useState(false);

  return (
    <nav
      style={{
        transform: `translateY(${
          isScrolling && scrollPosition > 320 ? -100 : -0
        }%`,
      }}
      className="flex items-center justify-between sm:justify-start transition-transform duration-700 ease-in-out font-semibold text-xs gap-8 fixed top-0 left-0 right-0 bg-white bg-opacity-25 backdrop-blur-md z-50"
    >
      <div className="flex  border-b border-b-black border-opacity-25 w-full justify-between xl:mx-48 xl:px-4 px-2 py-2 md:py-3 items-center">
        <Link
          href="/"
          locale={locale}
          className="font-black font-display text-lg mb-0.5 mr-4 transition-transform duration-500 ease-in-out hover:-translate-y-0.5 text-nowrap"
        >
          {NAME}
        </Link>

        <div className="flex gap-6">
          <button
            onClick={() => setShowLanguage((prev) => !prev)}
            style={{
              backdropFilter: showLanguage ? "" : "none",
              background: showLanguage ? "" : "none",
              boxShadow: showLanguage ? "" : "none",
            }}
            className="hover:-translate-y-0.5 gap-2 items-center sm:flex hidden uppercase ml-auto relative transition-all duration-300 ease-in-out bg-gray-100 shadow-xl bg-opacity-40 backdrop-blur-sm font-black rounded-full px-6 py-2.5 -mr-4"
          >
            <Image
              key={locale}
              src={`/${locale}-flag-icon.png`}
              className="rounded-full"
              width={16}
              height={16}
              alt="flag"
            />
            <p className="my-auto h-full translate-y-[0.15rem]">
              {locale.split("-")[0]}
            </p>

            <Card
              style={{
                pointerEvents: showLanguage ? "auto" : "none",
                opacity: showLanguage ? "" : "0",
                boxShadow: showLanguage ? "" : "none",
              }}
              variant="gray"
              className="hover:-translate-y-0 transition-all mt-6 flex rounded-3xl flex-col gap-4 absolute top-full p-2 left-1/2 shadow-2xl -translate-x-1/2 bg-gray-100 bg-opacity-75 backdrop-blur-xl"
            >
              {locales.map((locale) => (
                <Link
                  key={locale}
                  className="flex gap-2 uppercase hover:underline px-4 py-2 m-1 rounded-lg hover:bg-gray-200"
                  href={`/${locale}/${pathWithoutLocale}`}
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

          <Button component={"a"} href="/contact" className="ml-auto">
            {cta}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
