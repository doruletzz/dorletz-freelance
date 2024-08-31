import React from "react";
import PortofolioSection from "../_sections/PortofolioSection";
import { Chip } from "@/components";
import FAQSection from "../_sections/FAQSection";
import CTASection from "../_sections/CTASection";

const PortofolioPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden ">
      <div className=" mt-36 flex flex-col gap-2 items-center text-center px-72 -mb-12">
        <Chip variant="green">Portofolio</Chip>
        <h1 className="text-3xl font-black font-display mb-2 max-w-xs capitalize">
          Check out some of my work!
        </h1>
      </div>
      <PortofolioSection />
      <div className="mb-24" />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default PortofolioPage;
