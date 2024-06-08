import { Button, Chip } from "@/components";
import Link from "next/link";
import React from "react";

const HEADING = "Are you in need of a Website?";
const SUBHEADING =
  "Unlock your online potential with my custom website and landing page designs that turn visitors into paying customers.";
const CTA = "Contact";
const SECONDARY_CTA = "Portofolio";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="flex gap-4 flex-col xl:px-72 px-2 items-center xl:pt-40 pt-36 w-screen mx-auto"
    >
      <div className="text-xs font-bold flex gap-3 xl:-mb-1.5 mb-0">
        <Chip variant="blue">Development</Chip>
        <Chip variant="yellow">Design</Chip>
        <Chip variant="red">Seo</Chip>
      </div>
      <h1 className="xl:text-6xl text-4xl tracking-wide capitalize font-display font-black max-w-2xl text-center leading-none">
        {HEADING}
      </h1>
      <p className="leading-relaxed font-medium max-w-xl text-center xl:text-lg text-sm mx-4 opacity-75 mt-2">
        {SUBHEADING}
      </p>
      <div className="flex gap-3 xl:mt-10 mt-6">
        <Button
          component={Link}
          href="/contact"
          // className="px-8 font-bold text-sm py-2.5 rounded-3xl bg-gray-900 text-white"
        >
          {CTA}
        </Button>
        <Button component={Link} variant="secondary" href="/portofolio">
          {SECONDARY_CTA}
        </Button>
      </div>
    </section>
  );
};

export default HomeSection;
