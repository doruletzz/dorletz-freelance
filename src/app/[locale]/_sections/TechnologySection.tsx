import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

const CTA = "Reach Out To Me";
const SECTION = "Technology";
const HEADING = "Only State-Of-The-Art Web Technologies";
const CONTENT = `Fie că este vorba despre eFactura, GDPR sau Inteligența Artificială,
soluția aleasă va fi la curent cu ultimele tendințe și reglementări
din domeniu.`;
const CARD_CHIP_1 = "Landing Page";
const CARD_HEADING_1 = "Performant Landing Page";
const CARD_CONTENT_1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id, cupiditate ab eum dolor quisquam ea fuga suscipit ullam`;

const CARD_CHIP_2 = "Customer Research";
const CARD_HEADING_2 = "Organic Marketing";
const CARD_CONTENT_2 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id, cupiditate ab eum dolor quisquam ea fuga suscipit ullam`;

const CARD_CHIP_3 = "Customizable";
const CARD_HEADING_3 = "Organic Marketing";
const CARD_CONTENT_3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id, cupiditate ab eum dolor quisquam ea fuga suscipit ullam`;

const CARD_CHIP_4 = "Maintainance";
const CARD_HEADING_4 = "Hosting & Maintaining your website";
const CARD_CONTENT_4 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id, cupiditate ab eum dolor quisquam ea fuga suscipit ullam`;

const TechnologySection = () => {
  return (
    <section
      id="technology"
      className="flex flex-col items-center gap-3 xl:pt-12 pt-8 xl:pb-24 pb-8 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-y border-black border-opacity-10"
    >
      <Chip variant="blue">{SECTION}</Chip>
      <h2 className="xl:text-3xl text-2xl font-black font-display text-center mb-2 max-w-lg">
        {HEADING}
      </h2>
      <p className="leading-normal max-w-lg opacity-75 text-center">
        {CONTENT}
      </p>

      <div className="grid xl:grid-cols-5 grid-cols-2 gap-3 xl:mt-20 mt-8">
        <Card variant="lime" className="max-h-96 group xl:col-span-3 col-span-2">
          <Chip variant="yellow">{CARD_CHIP_1}</Chip>

          <span className="text-lg font-black font-display text-emerald-900">
            {CARD_HEADING_1}
          </span>
          <p className="text-sm opacity-75 leading-normal text-emerald-900 max-w-md">
            {CARD_CONTENT_1}
          </p>
          <div className="flex justify-between mt-6">
            <Image
              className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto -rotate-12 group-hover:rotate-0"
              src="/mobile-illustration.png"
              width={110}
              height={360}
              alt="research"
            />
            <Image
              className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto rotate-12 group-hover:rotate-0"
              src="/tape-illustration.png"
              width={140}
              height={360}
              alt="research"
            />
          </div>

          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-lime-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {CTA}
          </a>
        </Card>

        <Card variant="purple" className="xl:max-h-96 group xl:col-span-2 col-span-1">
          <Chip variant="green">{CARD_CHIP_2}</Chip>
          <span className="text-lg font-black font-display text-indigo-800">
            {CARD_HEADING_2}
          </span>
          <p className="text-sm opacity-75 leading-normal text-indigo-900">
            {CARD_CONTENT_2}
          </p>
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-14 mb-8 mx-auto -rotate-12 group-hover:rotate-0"
            src="/planet-illustration.png"
            width={148}
            height={360}
            alt="design"
          />

          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {CTA}
          </a>
        </Card>

        <Card variant="emerald" className="xl:max-h-96 group xl:col-span-2 col-span-1">
          <Chip variant="red">{CARD_CHIP_3}</Chip>
          <span className="text-lg font-black font-display text-teal-800">
            {CARD_HEADING_3}
          </span>
          <p className="text-sm opacity-75 leading-normal text-teal-900">
            {CARD_CONTENT_3}
          </p>
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-16 mb-8 mx-auto -rotate-12 group-hover:rotate-12"
            src="/supplies-illustration.png"
            width={80}
            height={360}
            alt="design"
          />

          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-emerald-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {CTA}
          </a>
        </Card>
        <Card variant="yellow" className="max-h-96 group xl:col-span-3 col-span-2">
          <Chip variant="blue">{CARD_CHIP_4}</Chip>

          <span className="text-lg font-black font-display text-yellow-900">
            {CARD_HEADING_4}
          </span>
          <p className="text-sm opacity-75 leading-normal text-yellow-800 max-w-md">
            {CARD_CONTENT_4}
          </p>
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-20 mb-8 mx-auto rotate-6"
            src="/paper-airplane-illustration.png"
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
      </div>

    </section>
  );
};

export default TechnologySection;
