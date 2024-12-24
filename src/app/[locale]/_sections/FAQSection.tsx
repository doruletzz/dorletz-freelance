import { Card, Chip, Collapsable } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  locale: string;
};

const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      subtitle: "FAQ",
      title: "Frequently Asked Questions",
      serviceIncluded: {
        title: "What services are included in your website plans?",
        content:
          "My website packages cover design, development, hosting, regular updates, maintenance, and basic SEO. You can choose between paying monthly or making a one-time payment for the entire project.",
      },
      customizePlan: {
        title: "Can I customize my website plan?",
        content:
          "Absolutely! I can customize both our monthly and one-time payment plans to fit your specific needs. Together, we’ll determine the best features and services for your business.",
      },
      processStart: {
        title: "What is your process for starting a new website project?",
        content:
          "I start with an initial consultation to understand your business and website goals. Based on your preferences, I then create a proposal outlining the project scope and payment options. Once approved, we proceed with design and development.",
      },
      updatesMaintenance: {
        title: "How do you handle updates and maintenance?",
        content:
          "For monthly plan clients, regular updates and maintenance are included. For one-time payment clients, I offer ongoing maintenance and updates through a separate maintenance plan or as needed for an additional fee.",
      },
      supportOffered: {
        title: "What kind of support do you offer?",
        content:
          "I offer comprehensive support, including troubleshooting, technical assistance, and content updates. Monthly plan clients receive continuous support as part of their package, while one-time payment clients can access support through additional service agreements.",
      },
      portfolioExamples: {
        title: "Can I see examples of websites you've built?",
        content: (
          <>
            Yes, we have a{" "}
            <Link className="font-bold underline" href="/portofolio">
              portfolio
            </Link>{" "}
            {"I’ve created for various clients."}
          </>
        ),
      },
    },
    "ro-RO": {
      subtitle: "FAQ",
      title: "Întrebări frecvente",
      serviceIncluded: {
        title: "Ce servicii sunt incluse în planurile tale de site web?",
        content:
          "Pachetele mele de site-uri web includ design, dezvoltare, găzduire, actualizări regulate, întreținere și SEO de bază. Poți alege între a plăti lunar sau a face o plată unică pentru întregul proiect.",
      },
      customizePlan: {
        title: "Pot personaliza planul meu de site web?",
        content:
          "Absolut! Pot personaliza atât planurile lunare, cât și cele cu plată unică pentru a se potrivi nevoilor tale specifice. Împreună, vom stabili cele mai bune caracteristici și servicii pentru afacerea ta.",
      },
      processStart: {
        title:
          "Care este procesul tău pentru a începe un nou proiect de site web?",
        content:
          "Începem cu o consultare inițială pentru a înțelege afacerea și obiectivele tale pentru site. Pe baza preferințelor tale, creez o propunere care detaliază scopul proiectului și opțiunile de plată. Odată aprobată, trecem la design și dezvoltare.",
      },
      updatesMaintenance: {
        title: "Cum gestionezi actualizările și întreținerea?",
        content:
          "Pentru clienții care au plan lunar, actualizările și întreținerea sunt incluse. Pentru clienții cu plată unică, ofer întreținere continuă și actualizări printr-un plan separat de întreținere sau la nevoie, pentru un cost suplimentar.",
      },
      supportOffered: {
        title: "Ce fel de suport oferi?",
        content:
          "Ofer suport complet, inclusiv depanare, asistență tehnică și actualizări de conținut. Clienții cu plan lunar beneficiază de suport continuu ca parte a pachetului lor, în timp ce clienții cu plată unică pot accesa suportul prin acorduri de servicii suplimentare.",
      },
      portfolioExamples: {
        title: "Pot vedea exemple de site-uri web pe care le-ai construit?",
        content: (
          <>
            Da, avem un{" "}
            <Link className="font-bold underline" href="/portofolio">
              portofoliu
            </Link>{" "}
            pe care l-am creat pentru diversi clienți.
          </>
        ),
      },
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  );
};

const FAQSection = ({ locale }: Props) => {
  const {
    subtitle,
    title,
    serviceIncluded,
    customizePlan,
    processStart,
    updatesMaintenance,
    supportOffered,
    portfolioExamples,
  } = getContentByLocale(locale);

  return (
    <section
      id="faq"
      className="xl:mx-72 lg:mx-36 sm:mx-16 mx-2 flex xl:flex-row flex-col gap-3 border-b border-black border-opacity-10 xl:pb-20 pb-8"
    >
      <div className="flex xl:flex-col flex-row basis-1/3 gap-3">
        <Card variant="orange" className="flex-1">
          <Chip variant="blue">{subtitle}</Chip>
          <span className="xl:text-3xl md:text-2xl text-xl leading-normal font-black font-display text-red-900 max-w-lg">
            {title}
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
        <Collapsable title={serviceIncluded.title}>
          {serviceIncluded.content}
        </Collapsable>

        <Collapsable title={customizePlan.title}>
          {customizePlan.content}
        </Collapsable>

        <Collapsable title={processStart.title}>
          {processStart.content}
        </Collapsable>

        <Collapsable title={updatesMaintenance.title}>
          {updatesMaintenance.content}
        </Collapsable>

        <Collapsable title={supportOffered.title}>
          {supportOffered.content}
        </Collapsable>

        <Collapsable title={portfolioExamples.title}>
          {portfolioExamples.content}
        </Collapsable>
      </Card>
    </section>
  );
};

export default FAQSection;
