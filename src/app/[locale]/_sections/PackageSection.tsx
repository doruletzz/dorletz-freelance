import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

const SECTION = "Package";
const HEADING = "Complete & Personalized Experience";
const CTA = "Reach Out To Me";

const CARD_HEADING_1 = "Discover";
const CARD_CONTENT_1 = `I start by gaining a comprehensive understanding of your business, target audience, and objectives to develop a customized strategy that meets your specific needs.`;

const CARD_HEADING_2 = "Design";
const CARD_CONTENT_2 = `My UX and UI design expertise enables me to create visually stunning and user-friendly websites that resonate with your audience and reinforce your brand identity.`;

const CARD_HEADING_3 = "Development";
const CARD_CONTENT_3 = `I then develop your website in NextJS, ensuring it is responsive, secure, and optimized for performance on all devices.`;

const PackageSection = () => {
  return (
    <section
      id="package"
      className="flex flex-col gap-2 xl:pt-20 pt-8 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-t border-black border-opacity-10"
    >
      <Chip variant="lime">{SECTION}</Chip>
      <h2 className="xl:text-3xl text-2xl font-display font-black mb-2 max-w-lg">
        {HEADING}
      </h2>
      <p className="leading-normal max-w-lg opacity-75">
        Providing expertly crafted web solutions designed to drive engagement,
        boost conversions, and foster business growth. My approach ensures your
        online presence is both effective and impactful.
      </p>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-3 mt-16">
        <Card variant="red" className="group">
          <Chip variant="yellow">#1</Chip>
          <span className="text-lg font-display font-black text-orange-900">
            {CARD_HEADING_1}
          </span>
          <p className="text-sm opacity-75 leading-normal text-orange-800">
            {CARD_CONTENT_1}
          </p>
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 group-hover:rotate-0 transition-translate duration-700 ease-in-out mt-12 mb-8 mx-auto rotate-6"
            src="/research-illustration.png"
            width={140}
            height={360}
            alt="research"
          />
          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-amber-900 text-amber-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {CTA}
          </a>
        </Card>
        <Card variant="yellow" className="group">
          <Chip variant="blue">#2</Chip>
          <span className="text-lg font-black font-display text-yellow-800">
            {CARD_HEADING_2}
          </span>
          <p className="text-sm opacity-75 leading-normal text-yellow-900">
            {CARD_CONTENT_2}
          </p>
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 group-hover:rotate-0 transition-translate duration-700 ease-in-out mt-12 mb-8 mx-auto -rotate-12"
            src="/design-illustration.png"
            width={140}
            height={360}
            alt="design"
          />

          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-lime-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {CTA}
          </a>
        </Card>
        <Card variant="blue" className="group">
          <Chip variant="red">#3</Chip>
          <span className="text-lg font-black font-display text-sky-800">
            {CARD_HEADING_3}
          </span>
          <p className="text-sm opacity-75 leading-normal text-indigo-900">
            {CARD_CONTENT_3}
          </p>
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 group-hover:rotate-0 transition-translate duration-700 ease-in-out mt-12 mb-8 mx-auto rotate-6"
            src="/develop-illustration.png"
            width={96}
            height={120}
            alt="develop"
          />
          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {CTA}
          </a>
        </Card>
      </div>
    </section>
  );
};

export default PackageSection;
