import { Card, Chip } from "@/components";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="border-b border-black border-opacity-10 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 flex flex-col gap-2 items-center text-center xl:pb-20 pb-8"
    >
      <Chip variant="green">Testimoniale</Chip>
      <h2 className="xl:text-3xl text-2xl font-black font-display max-w-lg">
        Don&apos;t Take My Word?
      </h2>
      <div className="text-left flex xl:flex-row flex-col gap-6 w-full mt-12">
        <Card
          variant="yellow"
          className="flex-1 max-h-96 group flex flex-col gap-4 min-h-72"
        >
          <Chip variant="indigo">★ ★ ★ ★ ★</Chip>
          <p className="text-lg font-medium opacity-75 leading-loose text-indigo-900 mb-auto max-w-lg">
          &quot;The design process was swift, and the development process was
            efficient, with feedback given right away.&quot;
          </p>
          <span className="text-2xl font-black font-display text-sky-800">
            Chesspal
          </span>
        </Card>
        <Card
          variant="blue"
          className="flex-1 max-h-96 group flex flex-col gap-4 min-h-72"
        >
          <Chip variant="lime">★ ★ ★ ★ ★</Chip>
          <p className="text-lg font-medium opacity-75 leading-loose text-yellow-900 mb-auto max-w-lg">
          &quot;Even though the project was big, the app and landing page were
            designed and developed quickly and efficiently.&quot;
          </p>
          <span className="text-2xl font-black font-display text-yellow-800">
            Nasium
          </span>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialsSection;
