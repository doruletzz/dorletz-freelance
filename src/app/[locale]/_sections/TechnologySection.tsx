import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      cta: "Reach Out To Me",
      subtitle: "Technology",
      title: "Only State-Of-The-Art Web Technologies",
      description:
        "Discover advanced web technologies tailored to boost your online presence. I specialize in modern frameworks and stunning design solutions for high-performing websites that engage users effectively.",
      cardSubtitle1: "Landing Page",
      cardTitle1: "Performant Landing Page",
      cardContent1:
        "Fast loading times, mobile responsiveness, and smooth navigation to enhance user experience and maximize conversion rate.",
      cardSubtitle2: "Customer Research",
      cardTitle2: "Organic Marketing",
      cardContent2:
        "Analysis of market trends, competitors, and industry dynamics to identify opportunities and challenges.",
      cardSubtitle3: "Customizable",
      cardTitle3: "Tailored Changes",
      cardContent3:
        "Iterative approach by implementing changes, monitoring results and adapting based on given feedback to achieve sustainable growth.",
      cardSubtitle4: "Maintenance",
      cardTitle4: "Hosting",
      cardContent4:
        "Reliable hosting services that ensure website security, uptime, and performance.",
    },
    "ro-RO": {
      cta: "Contactează-mă",
      subtitle: "Tehnologie",
      title: "Doar cele mai moderne tehnologii web",
      description:
        "Descoperă tehnologii web avansate adaptate pentru a-ți îmbunătăți prezența online. Sunt specializat în framework-uri moderne și soluții de design impresionante pentru site-uri web performante care atrag utilizatorii în mod eficient.",
      cardSubtitle1: "Pagină de destinație",
      cardTitle1: "Pagină de destinație performantă",
      cardContent1:
        "Timpuri de încărcare rapide, responsivitate pe mobil și navigare fluidă pentru a îmbunătăți experiența utilizatorului și a maximiza rata de conversie.",
      cardSubtitle2: "Cercetare clienți",
      cardTitle2: "Marketing organic",
      cardContent2:
        "Analiza tendințelor pieței, a competitorilor și a dinamicii industriei pentru a identifica oportunități și provocări.",
      cardSubtitle3: "Personalizabil",
      cardTitle3: "Modificări adaptate",
      cardContent3:
        "Abordare iterativă prin implementarea modificărilor, monitorizarea rezultatelor și adaptarea pe baza feedback-ului primit pentru a obține creștere sustenabilă.",
      cardSubtitle4: "Mentenanță",
      cardTitle4: "Găzduire",
      cardContent4:
        "Servicii de găzduire fiabile care asigură securitatea, disponibilitatea și performanța site-ului web.",
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const TechnologySection = ({ locale }: Props) => {
  const {
    cta,
    subtitle,
    title,
    description,
    cardSubtitle1,
    cardTitle1,
    cardContent1,
    cardSubtitle2,
    cardTitle2,
    cardContent2,
    cardSubtitle3,
    cardTitle3,
    cardContent3,
    cardSubtitle4,
    cardTitle4,
    cardContent4,
  } = getContentByLocale(locale);

  return (
    <section
      id="technology"
      className="flex flex-col items-center gap-3 xl:pt-20 pt-8 xl:pb-24 pb-8 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-y border-black border-opacity-10"
    >
      <Chip variant="blue">{subtitle}</Chip>
      <h2 className="xl:text-3xl text-2xl font-black font-display text-center mb-2 max-w-lg">
        {title}
      </h2>
      <p className="leading-normal max-w-lg opacity-75 text-center">
        {description}
      </p>

      <div className="grid xl:grid-cols-5 grid-cols-2 gap-3 xl:mt-20 mt-8">
        <Card
          variant="lime"
          className="max-h-96 group xl:col-span-3 col-span-2"
        >
          <Chip variant="yellow">{cardSubtitle1}</Chip>

          <span className="text-lg font-black font-display text-emerald-900">
            {cardTitle1}
          </span>
          <p className="text-sm opacity-90 leading-normal text-emerald-900 max-w-md">
            {cardContent1}
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
            {cta}
          </a>
        </Card>

        <Card
          variant="purple"
          className="xl:max-h-96 group xl:col-span-2 col-span-2"
        >
          <Chip variant="green">{cardSubtitle2}</Chip>
          <span className="text-lg font-black font-display text-indigo-800">
            {cardTitle2}
          </span>
          <p className="text-sm opacity-90 leading-normal text-indigo-900">
            {cardContent2}
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
            {cta}
          </a>
        </Card>

        <Card
          variant="emerald"
          className="xl:max-h-96 group xl:col-span-2 col-span-2"
        >
          <Chip variant="red">{cardSubtitle3}</Chip>
          <span className="text-lg font-black font-display text-teal-800">
            {cardTitle3}
          </span>
          <p className="text-sm opacity-90 leading-normal text-teal-900">
            {cardContent3}
          </p>

          <Image
            className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto -rotate-12 group-hover:rotate-0"
            src="/cactus-illustration.png"
            width={80}
            height={260}
            alt="research"
          />

          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-emerald-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {cta}
          </a>
        </Card>
        <Card
          variant="yellow"
          className="max-h-96 group xl:col-span-3 col-span-2"
        >
          <Chip variant="blue">{cardSubtitle4}</Chip>

          <span className="text-lg font-black font-display text-yellow-900">
            {cardTitle4}
          </span>
          <p className="text-sm opacity-90 leading-normal text-yellow-800 max-w-md">
            {cardContent4}
          </p>

          <div className="flex justify-between mr-12 mt-10">
            <Image
              className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto -rotate-12 group-hover:rotate-0"
              src="/paper-airplane-illustration.png"
              width={140}
              height={360}
              alt="research"
            />
            <Image
              className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto rotate-12 group-hover:rotate-6"
              src="/alarm-illustration.png"
              width={100}
              height={260}
              alt="research"
            />
          </div>
          <a
            href="/contact"
            className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-amber-900 text-amber-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
          >
            {cta}
          </a>
        </Card>
      </div>
    </section>
  );
};

export default TechnologySection;
