"use client";

import { Button, PortofolioCard } from "@/components";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SEE_ALL = "See all";

// Mock function to get content by locale
const getContentByLocale = (locale: string) => {
  const contentData = {
    "en-US": {
      application: "Application",
      presentation: "Presentation",
    },
    "ro-RO": {
      application: "Applicatie",
      presentation: "Prezentare",
    },
  };

  return (
    contentData[locale as keyof typeof contentData] || contentData["en-US"]
  ); // Default to English if locale is not found
};

type Props = {
  locale: string;
};

const PortofolioSection = ({ locale }: Props) => {
  const { application, presentation } = getContentByLocale(locale);

  const ref = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const scrollContainer = ref.current;
    if (scrollContainer) {
      const handleScroll = () => {
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        setShowLeftButton(scrollContainer.scrollLeft > 0);
        setShowRightButton(scrollContainer.scrollLeft < maxScrollLeft);
      };

      scrollContainer.addEventListener("scroll", handleScroll);

      handleScroll();

      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section id="portofolio" className="relative">
      <div
        ref={ref}
        className="flex overflow-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory [&>*]:snap-center xl:px-72 lg:px-36 sm:px-16 px-2 gap-3 xl:pt-20 pt-8 lg:h-[35rem] sm:h-[26rem] h-[20rem] no-scrollbar md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <PortofolioCard
          title="Nasium"
          image={{
            src: "/portofolio-nasium.png",
            alt: "nasium-home",
            variant: "blue",
          }}
          tag={{ variant: "lime", text: application }}
          link={{
            live: "https://home.nasium.coach",
            case: "/case-studies/nasium",
          }}
        />
        <PortofolioCard
          title="ORo Buddy"
          image={{
            src: "/portofolio-orobuddy.png",
            alt: "orobuddy-home",
            variant: "yellow",
          }}
          tag={{ variant: "indigo", text: presentation }}
          link={{
            live: "https://orobuddy.netlify.app",
            case: "/case-studies/orobuddy",
          }}
        />
        <PortofolioCard
          title="Chesspal"
          image={{
            src: "/portofolio-chesspal.png",
            alt: "chesspal-home",
            variant: "lime",
          }}
          tag={{ variant: "yellow", text: application }}
          link={{
            live: "https://chesspal.net",
            case: "/case-studies/chesspal",
          }}
        />
        <Button
          onClick={() => {
            ref.current?.scrollTo({
              left: ref.current?.scrollLeft - 500,
              behavior: "smooth",
            });
          }}
          variant="secondary"
          className={cn(
            "md:flex hidden h-fit absolute left-36 top-1/2 shadow-xl",
            showLeftButton ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <Image
            className="rotate-180"
            alt="arrow"
            src="/icon-arrow.svg"
            width={16}
            height={20}
          />
        </Button>
        <Button
          onClick={() => {
            ref.current?.scrollTo({
              left: ref.current?.scrollLeft + 400,
              behavior: "smooth",
            });
          }}
          variant="secondary"
          className={cn(
            "md:flex hidden h-fit absolute right-36 top-1/2 shadow-xl",
            showRightButton ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <Image
            className=""
            alt="arrow"
            src="/icon-arrow.svg"
            width={16}
            height={20}
          />
        </Button>
      </div>
    </section>
  );
};

export default PortofolioSection;
