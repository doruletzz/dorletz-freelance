import Link from "next/link";
import React from "react";

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
      className="xl:mt-24 mt-16 pt-16 bg-zinc-100 hover:bg-zinc-200 transition-colors duration-700 border border-zinc-300 ease-in-out xl:px-48 px-2 grid grid-cols-3 gap-6 pb-2 rounded-t-3xl xl:mx-24 mx-0"
    >
      <div className="flex flex-col gap-2">
        <a
          href="/"
          className="font-black font-display text-lg mb-4 mr-4 hover:-translate-y-0.5"
        >
          {NAME}
        </a>

        <a
          href="/contact"
          className="w-fit px-7 font-bold text-sm py-2.5 rounded-3xl bg-gray-900 hover:text-white text-gray-200"
        >
          {CTA}
        </a>
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
        Copyright © 2024. All rights reserved. Made with ☕ & ❤️
      </div>
    </footer>
  );
};

export default FooterComponent;
