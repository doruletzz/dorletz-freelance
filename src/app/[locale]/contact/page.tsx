"use client";

import { Button, Card, Checkbox, Chip, Textfield } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  goal: string;
  service: string[];
  scale: string;
  budget: string;
  fullName: string;
  email: string;
  domain: string;
};

const Contact = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async (data) => {
      if (step !== 2) {
        console.log(data, errors);
        setStep((prev) => prev + 1);

        return;
      }
      setResult("Sending....");

      const formData = new FormData();
      Object.keys(data).forEach((key) =>
        formData.append(key, data[key as keyof Inputs] as string)
      );

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          access_key: "76cf8183-8cb5-4fc1-9f9a-4d04b0887406",
        }),
      });

      const res = await response.json();

      if (res.success) {
        setResult("Form Submitted Successfully");
        // event.target.reset();
      } else {
        console.log("Error", data);
      }
      // alert(JSON.stringify(data));
    },
    [step, errors]
  );

  console.log(JSON.stringify({ ...errors }));

  return (
    <section
      id="contact"
      className="mt-36 flex flex-col gap-2 items-center text-center px-72"
    >
      <Chip variant="green">Contact</Chip>
      <h1 className="text-3xl font-black font-display mb-2 max-w-lg">
        Reach Out To Me!
      </h1>

      <div className="text-left flex gap-3 mt-8 w-full">
        <Card
          variant="blue"
          component={"form"}
          onSubmit={handleSubmit(onSubmit)}
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
                    {...register("goal", { required: "This is Required" })}
                    type="radio"
                    name="goal"
                    id="from-scratch"
                    label="Am nevoie de un website de la zero"
                    value="Website from scratch"
                  />

                  <Checkbox
                    {...register("goal", { required: "This is Required" })}
                    type="radio"
                    name="goal"
                    id="revamp"
                    label="Am nevoie de un website revamp"
                    value="Website revamp"
                  />
                </div>
                {errors?.goal && (
                  <span role="alert">{errors.goal?.message}</span>
                )}
              </div>

              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  What Services do you need?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Checkbox
                    {...register("service", { required: true })}
                    id="branding"
                    label="Branding"
                    value="branding"
                  />
                  <Checkbox
                    {...register("service", { required: true })}
                    id="web-design"
                    label="Web Design"
                    value="Website Design"
                  />
                  <Checkbox
                    {...register("service", { required: true })}
                    id="web-dev"
                    label="Web Development"
                    value="Website Development"
                  />
                  <Checkbox
                    {...register("service", { required: true })}
                    id="seo"
                    label="SEO / Content Writing"
                    value="SEO"
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
                    {...register("scale", { required: true })}
                    name="variant"
                    id="variant-three-pages"
                    label="Am nevoie de 3 pagini (e.g. Home, About, Contact Us)"
                    value="Variant 3 Pages"
                  />
                  <Checkbox
                    type="radio"
                    {...register("scale", { required: true })}
                    name="variant"
                    id="variant-ten-pages"
                    label="Am nevoie de 10+ pagini pentru produse/servicii"
                    value="Variant 10+ Pages"
                  />
                </div>
              </div>

              <div>
                <span className="text-lg font-black font-display text-indigo-900">
                  What is your 2024 budget for digital spend?
                </span>
                <div className="flex flex-col gap-1 mt-1 mb-4">
                  <Checkbox
                    {...register("budget", { required: true })}
                    type="radio"
                    name="budget"
                    id="budget-1-5k"
                    label="€1-5k"
                    value="Budget of 1-5k"
                  />

                  <Checkbox
                    {...register("budget", { required: true })}
                    type="radio"
                    name="budget"
                    id="budget-5-10k"
                    label="€5-10k"
                    value="Budget of 5-10k"
                  />

                  <Checkbox
                    {...register("budget", { required: true })}
                    type="radio"
                    name="budget"
                    id="budget-10-30k"
                    label="€10-30k"
                    value="Budget of 10-30k"
                  />
                  <Checkbox
                    {...register("budget", { required: true })}
                    type="radio"
                    name="budget"
                    id="budget-30k+"
                    label="€30k+"
                    value="Budget of 30k+"
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
                  <Textfield
                    {...register("fullName", { required: true })}
                    id="fullname"
                    label="Full Name"
                  />
                  <Textfield
                    {...register("email", { required: true })}
                    id="email"
                    label="Email"
                  />
                  <Textfield
                    {...register("domain", { required: true })}
                    id="domain"
                    label="Domain"
                  />
                </div>
              </div>
            </>
          )}
          <div className="ml-auto mt-auto flex gap-2">
            {step !== 0 && (
              <Button
                variant="text"
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  setStep((prev) => prev - 1);
                }}
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
                // e.preventDefault();
                handleSubmit(onSubmit)(e);
              }}
            >
              {step !== 2 ? "Next" : "Let's Work together!"}
            </Button>
          </div>
        </Card>
        <Card className="group relative basis-1/3" variant="red">
          {" "}
          <Image
            className="group-hover:scale-110 group-hover:-translate-y-5 group-hover:rotate-0 transition-translate duration-700 ease-in-out mt-12 mb-8 mx-auto rotate-6"
            src="/envelope-illustration.png"
            alt="illustration"
            width={170}
            height={360}
          />
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
                className="opacity-75 w-auto hover:opacity-100 hover:underline hover:-translate-y-0.5 text-center"
                href="https://google.com/"
              >
                email
              </Link>
              <Link
                className="opacity-75 w-auto hover:opacity-100 hover:underline hover:-translate-y-0.5 text-right"
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
