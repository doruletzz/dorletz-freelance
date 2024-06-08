import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

const SECTION = "Package";
const HEADING = "Complete & Personalized Experience";
const CTA = "Reach Out To Me";

const CARD_HEADING_1 = "Discover";
const CARD_CONTENT_1 = `With extensive UI & UX knowledge, I create visually stunning and
user-friendly websites that resonate with your audience and
reinforce your brand identity.`;

const CARD_HEADING_2 = "Design";
const CARD_CONTENT_2 = `With extensive UI & UX knowledge, I create visually stunning and
user-friendly websites that resonate with your audience and
reinforce your brand identity.`;

const CARD_HEADING_3 = "Development";
const CARD_CONTENT_3 = `With extensive UI & UX knowledge, I create visually stunning and
user-friendly websites that resonate with your audience and
reinforce your brand identity.`;

const PackageSection = () => {
  return (
    <section
      id="package"
      className="flex flex-col gap-2 xl:pt-12 pt-8 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-t border-black border-opacity-10"
    >
      <Chip variant="lime">{SECTION}</Chip>
      <h2 className="xl:text-3xl text-2xl font-display font-black mb-2 max-w-lg">
        {HEADING}
      </h2>
      <p className="leading-normal max-w-lg opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        consectetur id ea, unde cumque, porro quam illum delectus repellendus
        omnis excepturi ducimus quisquam molestiae! Amet vitae placeat eveniet
        ex magnam.
      </p>
      <div className="grid xl:grid-cols-3 grid-cols-1 gap-3 mt-16">
        <Card variant="red" className="group">
          <Chip variant="red">#1</Chip>
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
          <Chip variant="yellow">#2</Chip>
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
          <Chip variant="blue">#3</Chip>
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
