import { Button, Chip, PortofolioCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SEE_ALL = "See all";

const PortofolioSection = () => {
  return (
    <section
      id="portofolio"
      className="relative flex overflow-auto scroll-smooth snap-x snap-mandatory [&>*]:snap-center xl:px-72 lg:px-36 sm:px-16 px-2 gap-3 xl:pt-20 pt-8 lg:h-[35rem] sm:h-[26rem] h-[20rem] no-scrollbar md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <PortofolioCard
        title="ORo Buddy"
        image={{ src: "/portofolio-orobuddy.png", alt: "orobuddy-home", variant: "yellow" }}
        tag={{ variant: "indigo", text: "Presentation" }}
      />
      <PortofolioCard
        title="Chesspal"
        image={{ src: "/portofolio-chesspal.png", alt: "chesspal-home", variant: 'lime' }}
        tag={{ variant: "red", text: "Application" }}
      />
      <PortofolioCard
        title="Nasium"
        image={{ src: "/portofolio-nasium.png", alt: "nasium-home", variant: 'red' }}
        tag={{ variant: "yellow", text: "Application" }}
      />
    </section>
  );
};

export default PortofolioSection;
