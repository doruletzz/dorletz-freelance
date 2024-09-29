import Link from "next/link";
import React from "react";
import { Button } from ".";

const CTA = "Contact";
const NAME = "DORU DOROS";

const LINKS = [
  { href: "/home", label: "Home" },
  { href: "/portofolio", label: "Portofolio" },
  { href: "/contact", label: "Contact" },
  { href: "/policy", label: "Policy" },
];

const SOCIALS = [
  { href: "https://x.com/dorletz", label: "Twitter" },
  { href: "https://github.com/doruletzz", label: "Github" },
  { href: "https://home.nasium.coach/", label: "Email" },
  // { href: "/policy", label: "Policy" },
]

const FooterComponent = () => {
  return (
    <footer
      id="footer"
      className="xl:mt-24 md:mt-16 mt-8 xl:pt-16 pt-12 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-700 border border-zinc-300 ease-in-out xl:px-48 px-6 grid grid-cols-3 gap-6 pb-2 rounded-t-3xl xl:mx-24 mx-0"
    >
      <div className="xl:col-span-1 col-span-3 flex flex-col gap-4">
        <a
          href="/"
          className="font-black font-display text-lg mr-4 hover:-translate-y-0.5"
        >
          {NAME}
        </a>

        <Button
          component={Link}
          href="/contact"
          className="w-fit px-7 font-bold text-sm rounded-3xl bg-gray-900 hover:text-white text-gray-200"
        >
          {CTA}
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-black font-display mb-4">Links</span>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            className="transition-transform duration-150 hover:-translate-y-0.5 hover:underline no-underline text-sm font-semibold"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-lg font-black font-display mb-4">Socials</span>
        {SOCIALS.map((link) => (
          <Link
            key={link.href}
            className="transition-transform duration-150 hover:-translate-y-0.5 hover:underline no-underline text-sm font-semibold"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="col-span-3 text-center font-semibold text-xs opacity-75 mt-12">
        Copyright © 2024. All rights reserved. <br/> Made with ☕ & ❤️
      </div>
    </footer>
  );
};

export default FooterComponent;
