import { Card, Chip, Collapsable } from "@/components";
import Image from "next/image";
import React from "react";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="xl:mx-72 mx-2 flex xl:flex-row flex-col gap-3 border-b border-black border-opacity-10 xl:pb-20 pb-8"
    >
      <div className="flex xl:flex-col flex-row basis-1/3 gap-3">
        <Card variant="orange" className="flex-1">
          <Chip variant="blue">FAQ</Chip>
          <span className="xl:text-3xl text-2xl leading-normal font-black font-display text-red-900 max-w-lg">
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
