import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      cta: "Need My Help?",
      subtitle: "About",
      title: "Who Am I?",
      content: ` I&apos;m a developer who loves design and specializes in creating better
        websites. Let me help you build a website that&apos;s both functional and
        visually appealing to enhance your online presence.`,
      cardSubtitle1: "Problem Solver",
      cardTitle1: "What do I do?",
      cardContent1: ` I create stunning designs and build high-performance websites.
                Additionally, I provide market analysis to customize solutions
                specifically for you, ensuring your website stands out without
                using templates.`,
    },
    "ro-RO": {
      cta: "Ai nevoie de ajutor?",
      subtitle: "Despre",
      title: "Cine sunt eu?",
      content: `Sunt un dezvoltator pasionat de design și specializat în crearea de site-uri web mai bune. Permite-mi să te ajut să construiești un site web care să fie atât funcțional, cât și atrăgător vizual pentru a-ți îmbunătăți prezența online.`,
      cardSubtitle1: "Rezolvator de probleme",
      cardTitle1: "Ce fac eu?",
      cardContent1: `Creez design-uri impresionante și dezvolt site-uri web cu performanțe ridicate. De asemenea, ofer analize de piață pentru a personaliza soluțiile special pentru tine, asigurându-mă că site-ul tău se remarcă fără a folosi șabloane.`,
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const AboutSection = ({ locale }: Props) => {
  const {
    cta,
    subtitle,
    title,
    content,
    cardSubtitle1,
    cardTitle1,
    cardContent1,
  } = getContentByLocale(locale);
  return (
    <section
      id="about"
      className="flex flex-col gap-2 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-b border-black border-opacity-10"
    >
      <Chip variant="gray">{subtitle}</Chip>
      <h2 className="xl:text-3xl text-2xl font-display font-black mb-2 max-w-lg">
        {title}
      </h2>
      <p className="leading-normal max-w-lg opacity-75">{content}</p>
      <div className="flex xl:flex-row flex-col gap-3 xl:my-16 my-8">
        <Card
          variant="yellow"
          className="group relative overflow-hidden justify-center w-full group"
        >
          <div className="flex sm:flex-row flex-col gap-4 justify-between sm:pl-12 px-6 z-10 items-center min-h-72">
            <div className="flex flex-col gap-2 items-center md:items-start md:pb-0 pb-96 z-10">
              <Chip variant="indigo">{cardSubtitle1}</Chip>

              <span className="text-xl font-black font-display capitalize">
                {cardTitle1}
              </span>
              <p className="text-sm opacity-90 leading-normal lg:text-left text-center lg:max-w-xs drop-shadow-sm">
                {cardContent1}
              </p>
              <a
                href="/contact"
                className="font-bold text-sm py-1.5 rounded-3xl bg-orange-900 mt-4 text-zinc-100 w-[9.8rem] px-0 text-center"
              >
                {cta}
              </a>
            </div>
            <Image
              className="absolute md:top-24 top-80 group-hover:-translate-y-10 transition-transform duration-[700ms] -z-0 ease-in-out bottom-12 md:right-12 right-1/2 md:translate-x-0 translate-x-1/2 md:h-full h-auto object-cover block md:w-72 w-80 rounded-3xl shadow-2xl shadow-orange-500"
              src="/profile-pic.jpeg"
              width={200}
              height={800}
              alt="develop"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
