import { Button, Chip } from "@/components";
import Image from "next/image";
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
      className="group flex gap-4 flex-col xl:mx-72 mx-2 items-center xl:mt-48 md:mt-36 mt-28"
    >
      <div className="text-xs font-bold flex gap-3 xl:-mb-1.5 mb-0 z-10">
        <Chip variant="blue">Development</Chip>
        <Chip variant="yellow">Design</Chip>
        <Chip variant="red">Seo</Chip>
      </div>
      <div className="relative">
        <h1 className="xl:text-6xl text-4xl tracking-wide capitalize font-display font-black max-w-2xl text-center leading-none z-20">
          {HEADING}
        </h1>
        
        <Image
          alt="alarm"
          width={200}
          height={200}
          src="/alarm-illustration.png"
          className="absolute md:block hidden md:-left-24 -left-4 md:-bottom-20 -bottom-12 md:w-32 w-24 group-hover:rotate-6 rotate-[-14deg] transition-transform duration-700 group-hover:scale-110 scale-75 ease-in-out "
        />
        <Image
          alt="microphone"
          width={200}
          height={200}
          src="/microphone-illustration.png"
          className="absolute md:block hidden left-20 -top-32 w-16 group-hover:-rotate-12 transition-transform duration-700 group-hover:scale-75 scale-50 ease-in-out rotate-[14deg]"
        />
        
        <Image
          alt="notes"
          width={200}
          height={200}
          src="/notebook-illustration.png"
          className="absolute md:block hidden md:-right-36 -right-20 -bottom-8 w-52 group-hover:-rotate-6 rotate-[-36deg] transition-transform duration-700 group-hover:scale-100 scale-90 ease-in-out "
        />
        
      </div>
      <p className="leading-relaxed font-medium max-w-xl text-center xl:text-lg text-sm mx-4 opacity-75 mt-2">
        {SUBHEADING}
      </p>

      <div className="flex gap-3 xl:mt-10 mt-2">
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
