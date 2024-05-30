import { Chip } from '@/components';
import React from 'react'

const HEADING = "Are you in need of a Website?";
const SUBHEADING =
  "Unlock your online potential with my custom website and landing page designs that turn visitors into paying customers.";
  const CTA = "Contact";
  const SECONDARY_CTA = "Portofolio";


const HomeSection = () => {
  return (
    <section
    id="home"
    className="flex gap-4 flex-col px-72 items-center pt-40 w-full"
  >
    <div className="text-xs font-bold flex gap-3 -mb-1.5">
      <Chip variant="blue">Development</Chip>
      <Chip variant="yellow">Design</Chip>
      <Chip variant="red">Seo</Chip>
    </div>
    <h1 className="text-6xl tracking-wide capitalize font-display font-black max-w-2xl text-center leading-none">
      {HEADING}
    </h1>
    <p className="leading-relaxed font-medium max-w-xl text-center text-lg opacity-75 mt-2">
      {SUBHEADING}
    </p>
    <div className="flex gap-3 mt-10">
      <a
        href="/contact"
        className="px-8 font-bold text-sm py-2.5 rounded-3xl bg-gray-900 text-white"
      >
        {CTA}
      </a>
      <a
        href="/portofolio"
        className="px-8 font-bold text-sm py-2.5 rounded-3xl bg-white border border-black"
      >
        {SECONDARY_CTA}
      </a>
    </div>
  </section>
  )
}

export default HomeSection