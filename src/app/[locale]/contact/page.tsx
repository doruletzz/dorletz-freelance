"use client";

import { Button, Card, Checkbox, Chip, Textfield } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useState } from "react";

const Contact = () => {
  const [step, setStep] = useState(2);

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    alert("submit");
  };

  return (
    <section
      id="contact"
      className="mt-36 flex flex-col gap-2 items-center text-center px-72"
    >
      <Chip variant="green">Contact</Chip>
      <h1 className="text-3xl font-black font-display mb-2 max-w-lg">
        Reach Out To Me!
      </h1>
      <p className="leading-normal max-w-lg opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        consectetur id ea..
      </p>

      <div className="text-left flex gap-3 mt-20 w-full">
        <Card
          variant="blue"
          component={"form"}
          onSubmit={(e) => e.preventDefault()}
          className="min-h-[32rem] basis-2/3"
        >
          <div className="col-span-2">
            <Chip variant="red">Tell Me More</Chip>
          </div>
          {step === 0 && (
            <>
              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  What are your goals?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Checkbox
                    type="radio"
                    name="goal"
                    id="from-scratch"
                    label="Am nevoie de un website de la zero"
                    value="scratch"
                  />
                  <Checkbox
                    type="radio"
                    name="goal"
                    id="revamp"
                    label="Am nevoie de un website revamp"
                    value="revamp"
                  />
                </div>
              </div>

              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  What Services do you need?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Checkbox id="branding" label="Branding" value="branding" />
                  <Checkbox
                    id="web-design"
                    label="Web Design"
                    value="web-design"
                  />
                  <Checkbox
                    id="web-dev"
                    label="Web Development"
                    value="web-dev"
                  />
                  <Checkbox
                    id="seo"
                    label="SEO / Content Writing"
                    value="seo"
                  />
                </div>
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  What do you need in your new Website?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Checkbox
                    type="radio"
                    name="variant"
                    id="variant-three-pages"
                    label="Am nevoie de 3 pagini (e.g. Home, About, Contact Us)"
                    value="variant-three-pages"
                  />
                  <Checkbox
                    type="radio"
                    name="variant"
                    id="variant-ten-pages"
                    label="Am nevoie de 10+ pagini pentru produse/servicii"
                    value="variant-ten-pages"
                  />
                </div>
              </div>

              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  What is your 2024 budget for digital spend?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Checkbox
                    type="radio"
                    name="budget"
                    id="budget-1-5k"
                    label="€1-5k"
                    value="budget-1-5k"
                  />

                  <Checkbox
                    type="radio"
                    name="budget"
                    id="budget-5-10k"
                    label="€5-10k"
                    value="budget-5-10k"
                  />

                  <Checkbox
                    type="radio"
                    name="budget"
                    id="budget-10-30k"
                    label="€10-30k"
                    value="budget-10-30k"
                  />
                  <Checkbox
                    type="radio"
                    name="budget"
                    id="budget-30k+"
                    label="€30k+"
                    value="budget-30k+"
                  />
                </div>
              </div>
            </>
          )}
          {step == 2 && (
            <>
              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  How can I get in touch with you?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Textfield id="fullname" label="Full Name" />
                  <Textfield id="email" label="Email" />
                  <Textfield id="domain" label="Domain" />
                </div>
              </div>
            </>
          )}
          <div className="ml-auto mt-auto flex gap-2">
            {step !== 0 && (
              <Button
                variant="text"
                onClick={() => setStep((prev) => prev - 1)}
                className=""
              >
                Back
              </Button>
            )}
            <Button
              variant="primary"
              style={{ width: step !== 2 ? "8rem" : "14rem" }}
              className="text-nowrap text-ellipsis overflow-hidden"
              onClick={(e: MouseEvent<HTMLButtonElement>) => {
                step !== 2 ? setStep((prev) => prev + 1) : handleSubmit(e);
              }}
            >
              {step !== 2 ? "Next" : "Let's Work together!"}
            </Button>
          </div>
        </Card>
        <Card className="group relative basis-1/3" variant="yellow">
          <Chip variant="indigo">Social</Chip>
          <div className="w-full">
            <span className="text-lg font-black capitalize font-display leading-none text-indigo-900">
              You can Also find me on Social Media!
            </span>
            <div className="grid grid-cols-3 mt-4 text-xs gap-4 text-indigo-700 font-display font-bold">
              <Link
                className="opacity-75 w-auto hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                twitter
              </Link>
              <Link
                className="opacity-75 w-auto hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                email
              </Link>
              <Link
                className="opacity-75 w-auto hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                github{" "}
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
