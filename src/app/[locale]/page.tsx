import { Card, Chip, Collapsable } from "@/components";
import Image from "next/image";
import HomeSection from "./_sections/HomeSection";
import PackageSection from "./_sections/PackageSection";
import TechnologySection from "./_sections/TechnologySection";
import BlogSection from "./_sections/BlogSection";
import AboutSection from "./_sections/AboutSection";
import TestimonialsSection from "./_sections/TestimonialsSection";
import FAQSection from "./_sections/FAQSection";
import CTASection from "./_sections/CTASection";
import PortofolioSection from "./_sections/PortofolioSection";

export default function Home() {
  return (
    <main className="flex flex-col xl:gap-20 gap-8 overflow-hidden min-h-screen bg-white scroll-smooth mx-auto w-[100vw]">
      <HomeSection />
      <PortofolioSection />
      <PackageSection />
      <TechnologySection />
      <BlogSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
