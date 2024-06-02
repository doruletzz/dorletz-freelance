import { Card, Chip } from "@/components";
import React from "react";

const CTA = "Contacteaza-ma";

const CTASection = () => {
  return (
    <section id="cta" className="mx-72">
      <Card variant="indigo" className="items-center gap-1.5 p-6 py-10">
        <Chip variant="yellow">Interesat?</Chip>
        <span className="text-5xl font-black font-display text-indigo-900 max-w-lg text-center mt-2">
          Interesat? Hai sa Colaboram
        </span>

        <a
          href="/contact"
          className="px-8 font-bold text-sm font-display py-2.5 rounded-3xl bg-indigo-900 text-white mt-8"
        >
          {CTA}
        </a>
      </Card>
    </section>
  );
};

export default CTASection;
