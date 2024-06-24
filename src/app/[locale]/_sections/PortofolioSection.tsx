import { Button, Chip } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SEE_ALL = "See all";

const PortofolioSection = () => {
  return (
    <section
      id="portofolio"
      className="relative grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-3 xl:px-72 lg:px-36 sm:px-16 px-2 mx-auto xl:pt-20 pt-8 max-h-[45rem] w-full overflow-hidden"
    >
      <div className="cursor-pointer flex flex-col gap-3 w-full">
        <div className="relative hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
          <Image
            src="/portofolio-orobuddy-home.png"
            alt="nasium"
            width={480}
            height={960}
            className="min-h-96 object-cover max-h-96 group flex flex-col basis-2/3 gap-1.5 rounded-3xl border border-black border-opacity-25 "
          />
          <Chip variant="yellow" className="absolute top-2 right-2">
            Newest
          </Chip>
        </div>

        <Image
          src="/portofolio-chesspal-home.png"
          alt="nasium"
          width={480}
          height={960}
          className="min-h-60 object-cover object-left-top max-h-60 group flex flex-col basis-2/3 gap-1.5 rounded-3xl border border-black border-opacity-25 hover:-translate-y-2 transition-translate duration-700 ease-in-out "
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <Image
          src="/portofolio-nasium-home.png"
          alt="nasium"
          width={480}
          height={960}
          className="min-h-60 object-cover max-h-60 group flex flex-col basis-2/3 gap-1.5 rounded-3xl border border-black border-opacity-25 hover:-translate-y-2 transition-translate duration-700 ease-in-out "
        />

        <Image
          src="/portofolio-keycaps-home.png"
          alt="nasium"
          width={480}
          height={960}
          className="min-h-96 object-cover object-top max-h-96 group flex flex-col basis-2/3 gap-1.5 rounded-3xl border border-black border-opacity-25 hover:-translate-y-2 transition-translate duration-700 ease-in-out "
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <Image
          src="/portofolio-nasium-app.png"
          alt="nasium"
          width={480}
          height={960}
          className="min-h-96 object-cover object-top max-h-96 group flex flex-col basis-2/3 gap-1.5 rounded-3xl border border-black border-opacity-25 hover:-translate-y-2 transition-translate duration-700 ease-in-out "
        />
        <Image
          src="/portofolio-dorletz-home.png"
          alt="nasium"
          width={480}
          height={960}
          className="min-h-60 object-cover object-bottom max-h-60 group flex flex-col basis-2/3 gap-1.5 rounded-3xl border border-black border-opacity-25 hover:-translate-y-2 transition-translate duration-700 ease-in-out "
        />
      </div>
    </section>
  );
};

export default PortofolioSection;
