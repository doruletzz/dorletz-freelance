"use client";

import { Checkbox } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Contact = () => {
  const [step, setStep] = useState(0);

  return (
    <section
      id="contact"
      className="mt-36 flex flex-col items-center text-center px-72"
    >
      <span className="w-fit text-xs font-semibold px-4 py-1 bg-green-100 text-green-800 rounded-full">
        Contact
      </span>
      <h2 className="text-3xl font-black mb-2 max-w-lg">Trimite-mi un mesaj</h2>
      <p className="leading-normal max-w-lg opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        consectetur id ea..
      </p>

      <div className="text-left flex gap-3 mt-20 w-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="min-h-[32rem] flex flex-col basis-2/3 gap-6 p-6 rounded-3xl bg-lime-50 hover:-translate-y-2 transition-translate duration-700 ease-in-out"
        >
          <div className="col-span-2">
            <span className="w-fit text-xs font-bold px-4 py-1 bg-green-100 text-lime-900 rounded-full mb-1">
              Cum te pot ajuta?
            </span>
          </div>
          {step === 0 && (
            <>
              <div>
                <span className="text-lg font-black text-emerald-900">
                  Ce goaluri ai?
                </span>
                <div className="flex flex-col gap-1 mt-3">
                  <Checkbox
                    id="from-scratch"
                    label="Am nevoie de un website de la zero"
                    value="scratch"
                  />
                  <Checkbox
                    id="revamp"
                    label="Am nevoie de un website revamp"
                    value="revamp"
                  />
                </div>
              </div>

              <div>
                <span className="text-lg font-black text-emerald-900">
                  De ce servicii ai nevoie?
                </span>
                <div className="flex flex-col gap-1 mt-3">
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
                <span className="text-lg font-black text-emerald-900">
                  Pentru ce vor fi serviciile?
                </span>
                <div className="flex flex-col gap-1 mt-3">
                  <Checkbox
                    id="variant-three-pages"
                    label="Am nevoie de 3 pagini (e.g. Home, About, Contact Us)"
                    value="variant-three-pages"
                  />
                  <Checkbox
                    id="variant-ten-pages"
                    label="Am nevoie de 10+ pagini pentru produse/servicii"
                    value="variant-ten-pages"
                  />
                </div>
              </div>

              <div>
                <span className="text-lg font-black text-emerald-900">
                  Care este bugetul tau?
                </span>
                <div className="flex flex-col gap-1 mt-3">
                  <Checkbox
                    id="budget-1-5k"
                    label="€1-5k"
                    value="budget-1-5k"
                  />

                  <Checkbox
                    id="budget-5-10k"
                    label="€5-10k"
                    value="budget-5-10k"
                  />

                  <Checkbox
                    id="budget-10-30k"
                    label="€10-30k"
                    value="budget-10-30k"
                  />
                  <Checkbox
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
                <span className="text-lg font-black text-emerald-900">
                  Cum te pot contacta?
                </span>
                <div className="flex flex-col gap-1 mt-3">
                  <div className="flex gap-2 items-center">
                    <input id="branding" type="text" />
                    <label htmlFor="branding">Full Name</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input id="web-design" type="text" />
                    <label htmlFor="web-design">Email</label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <input id="web-development" type="text" />
                    <label htmlFor="web-development">Domain</label>
                  </div>
                </div>
              </div>
            </>
          )}
          <button className="mt-auto font-bold rounded-full text-sm font-display w-fit ml-auto px-6 py-1.5 bg-black text-white" onClick={() => setStep((prev) => prev + 1)}>Next</button>
        </form>
        <div className="group relative basis-1/3 flex flex-col gap-6 p-6 rounded-3xl bg-purple-50 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
          <span className="w-fit text-xs font-bold px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full mb-1">
            Social
          </span>
          <div className="w-full">
            <span className="text-lg font-black text-indigo-800">
              Alte locuri unde ma poti gasi
            </span>
            <p className="text-sm opacity-75 max-w-xl leading-normal text-indigo-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam...
            </p>
            <div className="grid grid-cols-2 mt-12 text-sm gap-4 text-indigo-700 font-bold">
              <Link
                className="opacity-75 hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                twitter
              </Link>
              <Link
                className="opacity-75 hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                email
              </Link>
              <Link
                className="opacity-75 hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                github{" "}
              </Link>
              <Link
                className="opacity-75 hover:opacity-100 hover:underline hover:-translate-y-0.5"
                href="https://google.com/"
              >
                nasium{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
