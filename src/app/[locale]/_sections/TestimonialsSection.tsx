import { Card, Chip } from "@/components";
import React from "react";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      subtitle: "Testimonials",
      title: `Don't Take My Word?`,
      cardTitle1: "Chesspal",
      cardContent1: `"The design process was swift, and the development process was efficient, with feedback given right away."`,
      cardTitle2: "Nasium",
      cardContent2: `"Even though the project was big, the app and landing page were designed and developed quickly and efficiently."`,
    },
    "ro-RO": {
      subtitle: "Testimoniale",
      title: "Nu mă crezi pe cuvânt?",
      cardTitle1: "Chesspal",
      cardContent1: `"Procesul de design a fost rapid, iar dezvoltarea a fost eficientă, cu feedback oferit imediat."`,
      cardTitle2: "Nasium",
      cardContent2: `"Deși proiectul a fost mare, aplicația și pagina de destinație au fost proiectate și dezvoltate rapid și eficient."`,
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const TestimonialsSection = ({ locale }: Props) => {
  const {
    subtitle,
    title,
    cardTitle1,
    cardContent1,
    cardTitle2,
    cardContent2,
  } = getContentByLocale(locale);

  return (
    <section
      id="testimonials"
      className="border-b border-black border-opacity-10 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 flex flex-col gap-2 items-center text-center xl:pb-20 pb-8"
    >
      <Chip variant="green">{subtitle}</Chip>
      <h2 className="xl:text-3xl text-2xl font-black font-display max-w-lg">
        {title}
      </h2>
      <div className="text-left flex xl:flex-row flex-col gap-6 w-full mt-12">
        <Card
          variant="yellow"
          className="flex-1 max-h-96 group flex flex-col gap-4 min-h-72"
        >
          <Chip variant="indigo">★ ★ ★ ★ ★</Chip>
          <p className="text-lg font-medium opacity-75 leading-loose text-indigo-900 mb-auto max-w-lg">
            {cardContent1}
          </p>
          <span className="text-2xl font-black font-display text-sky-800">
            {cardTitle1}
          </span>
        </Card>
        <Card
          variant="blue"
          className="flex-1 max-h-96 group flex flex-col gap-4 min-h-72"
        >
          <Chip variant="lime">★ ★ ★ ★ ★</Chip>
          <p className="text-lg font-medium opacity-75 leading-loose text-yellow-900 mb-auto max-w-lg">
            {cardContent2}
          </p>
          <span className="text-2xl font-black font-display text-yellow-800">
            {cardTitle2}
          </span>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;
