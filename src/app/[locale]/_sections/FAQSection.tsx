import { Card, Chip, Collapsable } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="xl:mx-72 lg:mx-36 sm:mx-16 mx-2 flex xl:flex-row flex-col gap-3 border-b border-black border-opacity-10 xl:pb-20 pb-8"
    >
      <div className="flex xl:flex-col flex-row basis-1/3 gap-3">
        <Card variant="orange" className="flex-1">
          <Chip variant="blue">FAQ</Chip>
          <span className="xl:text-3xl md:text-2xl text-xl leading-normal font-black font-display text-red-900 max-w-lg">
            Frequently Asked Questions
          </span>
        </Card>
        <Card
          variant="purple"
          className="group aspect-square md:p-12 p-6 grid place-items-center"
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
        className="group basis-2/3 flex flex-col items-center gap-1.5 text-left"
      >
        <Collapsable title="What services are included in your website plans?">
          My website packages cover design, development, hosting, regular
          updates, maintenance, and basic SEO. You can choose between paying
          monthly or making a one-time payment for the entire project.
        </Collapsable>
        <Collapsable title="Can I customize my website plan?">
          Absolutely! I can customize both our monthly and one-time payment
          plans to fit your specific needs. Together, we&apos;ll determine the best
          features and services for your business.{" "}
        </Collapsable>
        <Collapsable title="What is your process for starting a new website project?">
          I start with an initial consultation to understand your business and
          website goals. Based on your preferences, I then create a proposal
          outlining the project scope and payment options. Once approved, we
          proceed with design and development.
        </Collapsable>
        <Collapsable title="How do you handle updates and maintenance?">
          For monthly plan clients, regular updates and maintenance are
          included. For one-time payment clients, I offer ongoing maintenance
          and updates through a separate maintenance plan or as needed for an
          additional fee.
        </Collapsable>
        <Collapsable title="What kind of support do you offer?">
          I offer comprehensive support, including troubleshooting, technical
          assistance, and content updates. Monthly plan clients receive
          continuous support as part of their package, while one-time payment
          clients can access support through additional service agreements.
        </Collapsable>
        <Collapsable title="Can I see examples of websites you've built?">
          Yes, we have a <Link className="font-bold underline" href="/portofolio">portfolio</Link> I&apos;ve created for various
          clients.
        </Collapsable>
      </Card>
    </section>
  );
};

export default FAQSection;
