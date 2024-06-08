import { Card, Chip } from "@/components";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="border-b border-black border-opacity-10 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 flex flex-col gap-2 items-center text-center xl:pb-20 pb-8"
    >
      <Chip variant="green">Testimoniale</Chip>
      <h2 className="xl:text-3xl text-2xl font-black font-display mb-2 max-w-lg">
        Don&apos;t Take My Word?
      </h2>
      <p className="leading-normal max-w-lg opacity-75">
        Testimonialele ultimor mei clienti.
      </p>
      <div className="text-left flex xl:flex-row flex-col gap-6 w-full mt-12">
        <Card
          variant="yellow"
          className="flex-1 max-h-96 group flex flex-col gap-4"
        >
          <Chip variant="indigo">★ ★ ★ ★ ★</Chip>
          <p className="text-sm font-medium opacity-75 leading-loose text-indigo-900">
            The guys at WebRun are in the middle of a massive project at two of
            my companies to reduce friction in client signups and also chase and
            sell to folks after they fill out my web form (or fill out the first
            part only). It all links with my CRM (Airtable & Salesforce) and has
            already been a massive success. Increasing sales while I sleep!
          </p>
          <span className="text-lg font-black font-display text-sky-800">
            Chesspal
          </span>
        </Card>
        <Card
          variant="blue"
          className="flex-1 max-h-96 group flex flex-col gap-4"
        >
          <Chip variant="lime">★ ★ ★ ★ ★</Chip>
          <p className="text-sm font-medium opacity-75 leading-loose text-yellow-900">
            The guys at WebRun are in the middle of a massive project at two of
            my companies to reduce friction in client signups and also chase and
            sell to folks after they fill out my web form (or fill out the first
            part only). It all links with my CRM (Airtable & Salesforce) and has
            already been a massive success. Increasing sales while I sleep!
          </p>
          <span className="text-lg font-black font-display text-yellow-800">
            Nasium
          </span>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;
