"use client";

import { Button, Card, Checkbox, Chip, Textfield } from "@/components";
import { cn } from "@/utils/cn";
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



const SOCIALS = [
  { href: "https://x.com/dorletz", label: "Twitter" },
  { href: "https://github.com/doruletzz", label: "Github" },
  { href: "https://home.nasium.coach/", label: "Email" },
  // { href: "/policy", label: "Policy" },
]


const Contact = () => {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<{
    type: string | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async (data) => {
      if (step !== 2) {
        setStep((prev) => prev + 1);

        return;
      }
      // setResult("Sending....");

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
        setResult({
          message: "All done! I'll get back to you as soon as possible",
          type: "success",
        });
        setStep((prev) => prev + 1);
      } else {
        setResult({
          message: "Could not send your data, please try again",
          type: "error",
        });
        setStep((prev) => prev + 1);
      }
    },
    [step]
  );

  return (
    <main className="flex flex-col xl:gap-20 gap-8 snap-start overflow-hidden max-w-screen-2xl bg-white scroll-smooth mx-auto overflow-x-hidden">
      <section
        id="contact"
        className="flex gap-4 flex-col xl:mx-40 mx-2 items-center xl:mt-36 mt-24"
      >
        <Chip variant="green">Contact</Chip>
        <h1 className="text-3xl font-black font-display mb-2 max-w-lg">
          Reach Out To Me!
        </h1>

        <div className="text-left xl:flex-row flex-col flex gap-4 xl:mt-4 w-full">
          <Card
            variant={
              result.type === "success"
                ? "green"
                : result.type === "error"
                ? "gray"
                : step === 0
                ? "indigo"
                : step === 1
                ? "orange"
                : "blue"
            }
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
            className="group min-h-[32rem] basis-2/3"
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
                      label="I need a website from scratch"
                      value="Website from scratch"
                    />
                    <Checkbox
                      {...register("goal", { required: "This is Required" })}
                      type="radio"
                      name="goal"
                      id="revamp"
                      label="I need a website revamp"
                      value="Website revamp"
                    />
                    <Checkbox
                      {...register("goal", { required: "This is Required" })}
                      type="radio"
                      name="goal"
                      id="web-application"
                      label="I need a website application"
                      value="Web app"
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
                      id="web-application"
                      label="Web Application"
                      value="Website App"
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
                      label="I need 3 pages (e.g., Home, About, Contact Us)"
                      value="Variant 3 Pages"
                    />
                    <Checkbox
                      type="radio"
                      {...register("scale", { required: true })}
                      name="variant"
                      id="variant-ten-pages"
                      label="I need 10+ pages for products/services"
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
            {step === 3 && (
              <>
                <div>
                  <span className="text-2xl font-black font-display text-indigo-900">
                    {result.message ??
                      "All done! I'll get back as soon as possible"}
                  </span>
                  <Image
                    className="group-hover:scale-110 group-hover:-translate-y-5 group-hover:rotate-0 transition-translate duration-700 ease-in-out mt-12 mb-8 rotate-6"
                    src="/target-illustration.png"
                    alt="calendar"
                    width={270}
                    height={560}
                  />
                </div>
              </>
            )}
            <div className="ml-auto mt-auto flex gap-2">
              {step !== 0 && step <= 2 && (
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
                disabled={step > 2}
                style={{ width: step !== 2 ? "8rem" : "14rem" }}
                className={cn(
                  "text-nowrap text-ellipsis overflow-hidden capitalize",
                  result.type === "success" &&
                    "bg-green-800 hover:bg-green-700",
                  result.type === "error" && "bg-red-800 hover:bg-red-700"
                )}
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  // e.preventDefault();
                  handleSubmit(onSubmit)(e);
                }}
              >
                {step !== 2 ? result.type ?? "Next" : "Let's Work together!"}
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
              <div className="grid grid-cols-3 mb-4 mt-4 text-xs gap-4 text-indigo-700 font-display font-bold">
                {SOCIALS.map(social => (<Link
                  className="opacity-75 w-auto hover:opacity-100 hover:underline hover:-translate-y-0.5"
                  href={social.href}
                  key={social.label}
                >
                  {social.label}
                </Link>))}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Contact;
