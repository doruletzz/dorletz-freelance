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
    <main className="flex flex-col xl:gap-20 gap-8 snap-start overflow-hidden max-w-screen-2xl scroll-smooth mx-auto overflow-x-hidden">
      <HomeSection />
      <PortofolioSection />
      <PackageSection />
      <TechnologySection />
      {/* <BlogSection /> */}
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
