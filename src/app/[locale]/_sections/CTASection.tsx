import { Button, Card, Chip } from "@/components";
import Link from "next/link";
import React from "react";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      cta: "Contact",
      title: (
        <>
          Interested? <br /> Let&apos;s work together!
        </>
      ),
    },
    "ro-RO": {
      cta: "Contacteaza-ma",
      title: (
        <>
          Interesat? <br /> Hai sa lucram impreuna!
        </>
      ),
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const CTASection = ({ locale }: Props) => {
  const { cta, title } = getContentByLocale(locale);

  return (
    <section id="cta" className="xl:mx-72 lg:mx-36 sm:mx-16 mx-2">
      <Card
        variant="black"
        className="group flex-col items-center gap-1.5 p-6 md:py-12 md:px-12 mb-6"
      >
        <span className="xl:text-4xl text-3xl leading-loose font-display font-black text-center text-white max-w-xl">
          {title}
        </span>
        <Button
          variant="primary"
          component={Link}
          href="/contact"
          className="rounded-full items-center justify-center flex xl:text-sm text-lg tracking-wide mt-4 font-black text-black bg-white hover:bg-white hover:shadow-none"
        >
          {cta}
        </Button>
      </Card>
    </section>
  );
};

export default CTASection;
