import { Card, Chip, Collapsable } from "@/components";
import Image from "next/image";
import React from "react";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="mx-72 flex gap-6 border-b border-black border-opacity-10 pb-20"
    >
      <div className="flex flex-col basis-1/3 gap-6">
        <Card variant="orange" className="flex-1">
          <Chip variant="blue">FAQ</Chip>
          <span className="text-3xl leading-normal font-black font-display text-red-900 max-w-lg">
            Intrebari puse frecvent
          </span>
        </Card>
        <Card
          variant="purple"
          className="group aspect-square p-12 grid place-items-center"
        >
          <Image
          className="group-hover:-rotate-12 rotate-12 scale-90 group-hover:scale-100 transition-transform duration-700 ease-in-out "
            src="/research-illustration.png"
            alt="faq"
            width={140}
            height={140}
          />
        </Card>
      </div>

      <Card
        variant="green"
        className="group basis-2/3 flex flex-col items-center gap-1.5"
      >
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
        <Collapsable title="What is your pricing like?">
          Affordable pricing starts at $5,000+. Click here for more information.
        </Collapsable>
      </Card>
    </section>
  );
};

export default FAQSection;
