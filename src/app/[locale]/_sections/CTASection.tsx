import { Button, Card, Chip } from "@/components";
import Link from "next/link";
import React from "react";

const CTA = "Contact";

const CTASection = () => {
  return (
    <section id="cta" className="xl:mx-72 lg:mx-36 sm:mx-16 mx-2">
      <Card variant="black" className="group flex-col items-center gap-1.5 p-6 md:py-16 md:px-12 mb-6">
        <span className="xl:text-3xl text-3xl leading-normal font-display text-center text-white max-w-xl font-medium">
          Interested? <br/> Let&apos;s work together!
        </span>
        <Button
          variant="primary"
          component={Link}
          href="/contact"
          className="rounded-full items-center justify-center flex xl:text-sm text-lg tracking-wide mt-4 font-black text-black bg-white hover:bg-white hover:shadow-none"
        >
          {CTA}
        </Button>
      </Card>
    </section>
  );
};

export default CTASection;
