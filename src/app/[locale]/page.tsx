import HomeSection from "./_sections/HomeSection";
import PackageSection from "./_sections/PackageSection";
import TechnologySection from "./_sections/TechnologySection";
import BlogSection from "./_sections/BlogSection";
import AboutSection from "./_sections/AboutSection";
import TestimonialsSection from "./_sections/TestimonialsSection";
import FAQSection from "./_sections/FAQSection";
import CTASection from "./_sections/CTASection";
import PortofolioSection from "./_sections/PortofolioSection";
import { useContext, useReducer } from "react";
import { appReducer } from "@/provider/app/reducer";
import { initialAppState } from "@/provider/app/state";
import { AppContext } from "@/provider/app/context";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params }: Props) {
  const { locale } = params;

  return (
      <main className="flex flex-col xl:gap-20 gap-8 snap-start overflow-hidden max-w-screen-2xl scroll-smooth mx-auto overflow-x-hidden">
        <HomeSection locale={locale} />
        <PortofolioSection locale={locale} />
        <PackageSection locale={locale} />
        <TechnologySection locale={locale} />
        {/* <BlogSection locale={locale} /> */}
        <AboutSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <FAQSection locale={locale} />
        <CTASection locale={locale} />
      </main>
  );
}
