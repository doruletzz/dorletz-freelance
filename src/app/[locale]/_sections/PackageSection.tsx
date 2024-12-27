import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      subtitle: "Package",
      title: "Complete & Personalized Experience",
      cta: "Reach Out To Me",
      cardTitle1: "Discover",
      cardText1:
        "I start by gaining a comprehensive understanding of your business, target audience, and objectives to develop a customized strategy that meets your specific needs.",
      cardTitle2: "Design",
      cardText2:
        "My UX and UI design expertise enables me to create visually stunning and user-friendly websites that resonate with your audience and reinforce your brand identity.",
      cardTitle3: "Development",
      cardText3:
        "I then develop your website in NextJS, ensuring it is responsive, secure, and optimized for performance on all devices.",
    },
    "ro-RO": {
      subtitle: "Pachet",
      title: "Experiență completă și personalizată",
      cta: "Contactează-mă",
      cardTitle1: "Descoperire",
      cardText1:
        "Încep prin a înțelege pe deplin afacerea ta, publicul țintă și obiectivele tale pentru a dezvolta o strategie personalizată care să răspundă nevoilor tale specifice.",
      cardTitle2: "Design",
      cardText2:
        "Expertiza mea în design UX și UI îmi permite să creez site-uri web impresionante vizual și ușor de utilizat, care rezonează cu publicul tău și consolidează identitatea mărcii tale.",
      cardTitle3: "Dezvoltare",
      cardText3:
        "Apoi dezvolt site-ul tău în NextJS, asigurându-mă că este responsive, sigur și optimizat pentru performanță pe toate dispozitivele.",
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const PackageSection = ({ locale }: Props) => {
  const {
    subtitle,
    title,
    cta,
    cardTitle1,
    cardText1,
    cardTitle2,
    cardText2,
    cardTitle3,
    cardText3,
  } = getContentByLocale(locale);

  return (
    <section
      id="package"
      className="flex flex-col gap-2 xl:pt-20 pt-8 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-t border-black border-opacity-10"
    >
      <Chip variant="lime">{subtitle}</Chip>
      <h2 className="xl:text-3xl text-2xl font-display font-black mb-2 max-w-lg">
        {title}
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
            {cardTitle1}
          </span>
          <p className="text-sm opacity-90 leading-normal text-orange-800">
            {cardText1}
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
            {cta}
          </a>
        </Card>
        <Card variant="yellow" className="group">
          <Chip variant="blue">#2</Chip>
          <span className="text-lg font-black font-display text-yellow-800">
            {cardTitle2}
          </span>
          <p className="text-sm opacity-90 leading-normal text-yellow-900">
            {cardText2}
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
            {cta}
          </a>
        </Card>
        <Card variant="blue" className="group">
          <Chip variant="red">#3</Chip>
          <span className="text-lg font-black font-display text-sky-800">
            {cardTitle3}
          </span>
          <p className="text-sm opacity-90 leading-normal text-indigo-900">
            {cardText3}
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
            {cta}
          </a>
        </Card>
      </div>
    </section>
  );
};

export default PackageSection;
