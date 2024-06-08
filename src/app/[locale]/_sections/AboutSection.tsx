import { Card, Chip } from "@/components";
import Image from "next/image";
import React from "react";

const CTA = "Contacteaza-ma";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col gap-2 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-b border-black border-opacity-10"
    >
      <Chip variant="gray">Despre</Chip>
      <h2 className="xl:text-3xl text-2xl font-display font-black mb-2 max-w-lg">
        Cine Sunt?
      </h2>
      <p className="leading-normal max-w-lg opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        consectetur id ea, unde cumque, porro quam illum delectus repellendus
        omnis excepturi ducimus quisquam molestiae! Amet vitae placeat eveniet
        ex magnam.
      </p>
      <div className="flex xl:flex-row flex-col gap-3 xl:my-16 my-8">
        <Card
          variant="yellow"
          className="flex flex-row justify-center w-full group"
        >
          <div className="flex sm:flex-row flex-col gap-4 justify-between md:p-12 p-0">
            <div className="flex flex-col">
              <Chip variant="indigo">Developer</Chip>

              <span className="text-xl font-black font-display capitalize">
                Cine sunt si cu ce ma ocup?
              </span>
              <p className="text-sm opacity-75 leading-normal max-w-md">
                Ma numes doros doru si ma ocup cu
              </p>
              <a
                href="/contact"
                className="font-bold text-sm py-1.5 rounded-3xl bg-orange-900 mt-8 text-zinc-100 w-[9.8rem] px-0 text-center"
              >
                {CTA}
              </a>
            </div>
            <Image
              className="h-full object-contain block"
              src="/profile-pic.png"
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
