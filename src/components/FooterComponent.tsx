import React from "react";

const CTA = "Contacteaza-ma";
const NAME = "DORU DOROS";

const FooterComponent = () => {
  return (
    <footer
      id="footer"
      className="xl:mt-24 mt-16 pt-16 bg-zinc-100 xl:px-48 px-2 grid grid-cols-3 gap-6 pb-2 rounded-t-3xl xl:mx-24 mx-0"
    >
      <div className="flex flex-col gap-2">
        <a
          href="/"
          className="font-black font-display text-lg mb-0.5 mr-4 hover:-translate-y-0.5"
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
        <span className="text-lg font-black font-display">Links</span>
        <a
          href="/#home"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          HOME
        </a>
        <a
          href="/portofolio"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          PORTOFOLIO
        </a>
        <a
          href="/contact"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          CONTACT
        </a>
        <a
          href="/policy"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          POLICIES
        </a>
      </div>

      
      <div className="flex flex-col gap-2">
        <span className="text-lg font-black font-display">Socials</span>
        <a
          href="https://github.com/doruletzz"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          GITHUB
        </a>
        <a
          href="https://x.com/dorletz"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          TWITTER
        </a>
        <a
          href="https://home.nasium.coach/"
          className="w-fit text-xs font-semibold mb-0.5 mr-4 hover:-translate-y-0.5 opacity-75 hover:opacity-100"
        >
          NASIUM
        </a>
      </div>

      <div className="col-span-3 text-center font-semibold text-xs opacity-75 mt-12">Copyright © 2024. All rights reserved. Made with ☕ & ❤️</div>
    </footer>
  );
};

export default FooterComponent;
