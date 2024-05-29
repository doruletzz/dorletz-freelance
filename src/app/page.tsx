import { Card, Chip, Collapsable } from "@/components";
import Image from "next/image";

const HEADING = "Ai nevoie de un Site Web?";
const SUBHEADING =
  "Unlock your online potential dorletz designs and develops websites and landing pages, that convert your visitors into paying customers.";
const CTA = "Contacteaza-ma";
const SECONDARY_CTA = "Portofoliu";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 overflow-hidden min-h-screen bg-white scroll-smooth">
      <section
        id="home"
        className="flex gap-4 flex-col px-72 items-center pt-40 w-full"
      >
        <div className="text-xs font-bold flex gap-3 -mb-1.5">
          <Chip variant="blue">Development</Chip>
          <Chip variant="yellow">Design</Chip>
          <Chip variant="red">Seo</Chip>
        </div>
        <h1 className="text-6xl tracking-wide capitalize font-display font-black max-w-2xl text-center leading-none">
          {HEADING}
        </h1>
        <p className="leading-relaxed font-medium max-w-xl text-center text-lg opacity-75 mt-2">
          {SUBHEADING}
        </p>
        <div className="flex gap-3 mt-10">
          <a
            href="/contact"
            className="px-8 font-bold text-sm py-2.5 rounded-3xl bg-gray-900 text-white"
          >
            {CTA}
          </a>
          <a
            href="/portofolio"
            className="px-8 font-bold text-sm py-2.5 rounded-3xl bg-white border border-black"
          >
            {SECONDARY_CTA}
          </a>
        </div>
      </section>
      
      <section id="portofolio" className="relative grid grid-cols-3 gap-3 px-72 mx-auto pt-20 max-h-[42rem] w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-96 flex flex-col items-center justify-end bg-gradient-to-t from-white to-transparent pointer-events-none z-10">
          <a
            href="/portofolio"
            className="px-8 font-bold text-sm py-2.5 rounded-3xl border border-black pointer-events-auto"
          >
            Vezi tot
          </a>
        </div>
        <div className="cursor-pointer flex flex-col gap-3 w-full">
          <div className="max-h-96 group flex flex-col basis-2/3 gap-1.5 p-6 rounded-3xl bg-lime-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            A
          </div>
          <div className="max-h-60 group flex flex-col basis-2/3 gap-1.5 p-6 rounded-3xl bg-green-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            B
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="max-h-60 group flex flex-col basis-2/3 gap-1.5 p-6 rounded-3xl bg-purple-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            B
          </div>
          <div className="max-h-96 group flex flex-col basis-2/3 gap-1.5 p-6 rounded-3xl bg-orange-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            A
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="max-h-96 min-h-96 group flex flex-col basis-2/3 gap-1.5 p-6 rounded-3xl bg-blue-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            A
          </div>
          <div className="max-h-60 min-h-60 group flex flex-col basis-2/3 gap-1.5 p-6 rounded-3xl bg-teal-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            C
          </div>
        </div>
      </section>

      <section id="package" className="flex flex-col gap-2 pt-12 mx-72 border-t border-black border-opacity-10">
        <Chip variant="lime">Pachet</Chip>
        <h2 className="text-3xl font-display font-black mb-2 max-w-lg">
          O Experienta Completa, Personalizata
        </h2>
        <p className="leading-normal max-w-lg opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consectetur id ea, unde cumque, porro quam illum delectus repellendus
          omnis excepturi ducimus quisquam molestiae! Amet vitae placeat eveniet
          ex magnam.
        </p>
        <div className="grid grid-cols-3 gap-3 mt-16">
          <Card variant="red" className="max-h-96 group">
            <Chip variant="red">#1</Chip>
            <span className="text-lg font-display font-black text-orange-900">
              Discover
            </span>
            <p className="text-sm opacity-75 leading-normal text-orange-800">
              With extensive UI & UX knowledge, I create visually stunning and
              user-friendly websites that resonate with your audience and
              reinforce your brand identity.
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto rotate-6"
              src="/research-illustration.png"
              width={140}
              height={360}
              alt="research"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-amber-900 text-amber-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
          <Card variant="yellow" className="max-h-96 group">
            <Chip variant="yellow">#2</Chip>
            <span className="text-lg font-black text-yellow-800">Design</span>
            <p className="text-sm opacity-75 leading-normal text-yellow-900">
              With extensive UI & UX knowledge, I create visually stunning and
              user-friendly websites that resonate with your audience and
              reinforce your brand identity.
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto -rotate-12"
              src="/design-illustration.png"
              width={140}
              height={360}
              alt="design"
            />

            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-lime-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
          <Card variant="blue" className="max-h-96 group">
            <Chip variant="blue">#3</Chip>
            <span className="text-lg font-black text-sky-800">Develop</span>
            <p className="text-sm opacity-75 leading-normal text-indigo-900">
              I then bring your website to life using Next.js, ensuring it is
              responsive, secure, and optimized for performance on all devices.
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-11 mb-8 mx-auto rotate-6"
              src="/develop-illustration.png"
              width={96}
              height={120}
              alt="develop"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
        </div>
      </section>

      <section id="technology" className="flex flex-col items-center gap-3 pt-12 pb-24 mx-72 border-y border-black border-opacity-10">
        <Chip variant="blue">Technologie</Chip>
        <h2 className="text-3xl font-black font-display text-center mb-2 max-w-lg">
          Cea mai noua si moderna Tehnologie Web
        </h2>
        <p className="leading-normal max-w-lg opacity-75 text-center">
          Fie că este vorba despre eFactura, GDPR sau Inteligența Artificială,
          soluția aleasă va fi la curent cu ultimele tendințe și reglementări
          din domeniu.
        </p>

        <div className="flex gap-3 mt-20">
          <Card variant="lime" className="max-h-96 group basis-3/5">
            <Chip variant="orange">Site de prezentare</Chip>

            <span className="text-lg font-black font-display text-emerald-900">
              Web Development Personalizat
            </span>
            <p className="text-sm opacity-75 leading-normal text-emerald-900 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam
            </p>
            <div className="flex justify-between mt-6">
              <Image
                className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto rotate-6"
                src="/mobile-illustration.png"
                width={110}
                height={360}
                alt="research"
              />
              <Image
                className="group-hover:scale-110 object-contain group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto rotate-6"
                src="/tape-illustration.png"
                width={140}
                height={360}
                alt="research"
              />
            </div>

            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-lime-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>

          <Card variant="purple" className="max-h-96 group basis-2/5">
            <Chip variant="green">Seo</Chip>
            <span className="text-lg font-black font-display text-indigo-800">
              Marketing Optimizat
            </span>
            <p className="text-sm opacity-75 leading-normal text-indigo-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam...
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-12 mb-8 mx-auto -rotate-12"
              src="/planet-illustration.png"
              width={130}
              height={360}
              alt="design"
            />

            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
        </div>

        <div className="flex gap-3">
          <Card variant="emerald" className="max-h-96 group basis-2/5">
            <Chip variant="red">Customizabil</Chip>
            <span className="text-lg font-black font-display text-teal-800">
              Design
            </span>
            <p className="text-sm opacity-75 leading-normal text-teal-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor ullam...
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-8 mb-8 mx-auto -rotate-12"
              src="/supplies-illustration.png"
              width={80}
              height={360}
              alt="design"
            />

            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-emerald-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
          <Card variant="yellow" className="max-h-96 group basis-3/5">
            <Chip variant="blue">Site de prezentare</Chip>

            <span className="text-lg font-black font-display text-yellow-900">
              Discover
            </span>
            <p className="text-sm opacity-75 leading-normal text-yellow-800 max-w-md">
              We start by gaining a deep understanding of your business, target
              audience, and goals, allowing us to craft a customized strategy
              that fits your specific needs.
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-20 mb-8 mx-auto rotate-6"
              src="/paper-airplane-illustration.png"
              width={140}
              height={360}
              alt="research"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-amber-900 text-amber-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
        </div>
      </section>

      <section id="blog" className="flex flex-col gap-2 mx-72 border-b border-black border-opacity-10">
        <Chip variant="red">Blog</Chip>
        <h2 className="text-3xl font-display font-black mb-2 max-w-lg">
          Ultimele Articole Create
        </h2>
        <p className="leading-normal max-w-lg opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consectetur id ea, unde cumque, porro quam illum delectus repellendus
          omnis excepturi ducimus quisquam molestiae! Amet vitae placeat eveniet
          ex magnam.
        </p>
        <div className="grid grid-cols-3 gap-3 my-16 ">
          <div className="max-h-96 group flex flex-col gap-1.5 p-6 rounded-3xl bg-rose-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            <span className="w-fit text-xs font-semibold px-4 py-1 bg-red-100 text-red-950 rounded-full mb-1">
              #1
            </span>
            <span className="text-lg font-black text-orange-900">Research</span>
            <p className="text-sm opacity-75 leading-normal text-orange-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto rotate-6"
              src="/research-illustration.png"
              width={140}
              height={360}
              alt="research"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-amber-900 text-amber-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </div>
          <div className="max-h-96 group relative flex flex-col gap-1.5 p-6 rounded-3xl bg-yellow-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            <span className="w-fit text-xs font-semibold px-4 py-1 bg-lime-100 rounded-full mb-1">
              #2
            </span>
            <span className="text-lg font-black text-yellow-800">Design</span>
            <p className="text-sm opacity-75 leading-normal text-yellow-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam...
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-10 mb-8 mx-auto -rotate-12"
              src="/design-illustration.png"
              width={140}
              height={360}
              alt="design"
            />

            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-lime-900 text-lime-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </div>
          <div className="max-h-96 group flex flex-col gap-1.5 p-6 rounded-3xl bg-sky-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            <span className="w-fit text-xs font-semibold px-4 py-1 bg-indigo-100 rounded-full">
              #3
            </span>
            <span className="text-lg font-black text-sky-800">Develop</span>
            <p className="text-sm opacity-75 leading-normal text-indigo-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-11 mb-8 mx-auto rotate-6"
              src="/develop-illustration.png"
              width={96}
              height={120}
              alt="develop"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </div>
          <div className="max-h-96 group flex flex-col gap-1.5 p-6 rounded-3xl bg-sky-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            <span className="w-fit text-xs font-bold px-4 py-1 bg-indigo-100 rounded-full">
              #3
            </span>
            <span className="text-lg font-black text-sky-800">Develop</span>
            <p className="text-sm opacity-75 leading-normal text-indigo-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-11 mb-8 mx-auto rotate-6"
              src="/develop-illustration.png"
              width={96}
              height={120}
              alt="develop"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </div>
          <div className="max-h-96 group flex flex-col gap-1.5 p-6 rounded-3xl bg-sky-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            <span className="w-fit text-xs font-bold px-4 py-1 bg-indigo-100 rounded-full">
              #3
            </span>
            <span className="text-lg font-black text-sky-800">Develop</span>
            <p className="text-sm opacity-75 leading-normal text-indigo-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-11 mb-8 mx-auto rotate-6"
              src="/develop-illustration.png"
              width={96}
              height={120}
              alt="develop"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </div>
          <div className="max-h-96 group flex flex-col gap-1.5 p-6 rounded-3xl bg-sky-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
            <span className="w-fit text-xs font-bold px-4 py-1 bg-indigo-100 rounded-full">
              #3
            </span>
            <span className="text-lg font-black text-sky-800">Develop</span>
            <p className="text-sm opacity-75 leading-normal text-indigo-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta id,
              cupiditate ab eum dolor quisquam ea fuga suscipit ullam
            </p>
            <Image
              className="group-hover:scale-110 group-hover:-translate-y-5 transition-translate duration-700 ease-in-out mt-11 mb-8 mx-auto rotate-6"
              src="/develop-illustration.png"
              width={96}
              height={120}
              alt="develop"
            />
            <a
              href="/contact"
              className="group-hover:px-6 text-ellipsis text-nowrap overflow-hidden hover:-translate-y-0.5 transition-[width_padding] duration-700 font-bold text-sm py-1.5 rounded-3xl bg-indigo-900 text-indigo-100 absolute bottom-6 right-6 w-[0.001px] group-hover:w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex flex-col gap-2 mx-72 border-b border-black border-opacity-10"
      >
        <Chip variant="gray">Despre</Chip>
        <h2 className="text-3xl font-display font-black mb-2 max-w-lg">
          Cine Sunt?
        </h2>
        <p className="leading-normal max-w-lg opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          consectetur id ea, unde cumque, porro quam illum delectus repellendus
          omnis excepturi ducimus quisquam molestiae! Amet vitae placeat eveniet
          ex magnam.
        </p>
        <div className="grid grid-cols-3 gap-3 my-16 h-[32rem]">
          <div className="max-h-[48rem] overflow-hidden relative h-full group flex flex-col gap-1.5 p-6 rounded-3xl bg-zinc-100 ">
            <Image
              className="scale-105 group-hover:scale-125 transition-transform duration-[1700ms] absolute inset-0 ease-in-out"
              src="/profile-pic.png"
              width={720}
              height={1200}
              alt="develop"
            />
            <span className="absolute inset-0 bg-lime-400 bg-opacity-20 mix-blend-screen"></span>
          </div>
          <Card
            variant="yellow"
            className="max-h-[48rem] col-span-2 group flex flex-col"
          >
            <Chip variant="indigo">Developer</Chip>

            <span className="text-xl font-black font-display capitalize">
              Cine sunt si cu ce ma ocup?
            </span>
            <p className="text-sm opacity-75 leading-normal max-w-md">
              Ma numes doros doru si ma ocup cu
            </p>
            <a
              href="/contact"
              className="font-bold text-sm py-1.5 rounded-3xl bg-zinc-900 mt-8 text-zinc-100 w-[9.8rem] px-0 text-center"
            >
              {CTA}
            </a>
          </Card>
        </div>
      </section>

      <section id="testimonials" className="border-b border-black border-opacity-10 mx-72 flex flex-col gap-2 items-center text-center pb-16">
        <Chip variant="green">Testimoniale</Chip>
        <h2 className="text-3xl font-black font-display mb-2 max-w-lg">
          Don&apos;t Take My Word?
        </h2>
        <p className="leading-normal max-w-lg opacity-75">
          Testimonialele ultimor mei clienti.
        </p>
        <div className="text-left flex gap-6 w-full mt-12">
          <Card
            variant="yellow"
            className="flex-1 max-h-96 group flex flex-col gap-4"
          >
            <Chip variant="indigo">★ ★ ★ ★ ★</Chip>
            <p className="text-sm font-medium opacity-75 leading-loose text-indigo-900">
              The guys at WebRun are in the middle of a massive project at two
              of my companies to reduce friction in client signups and also
              chase and sell to folks after they fill out my web form (or fill
              out the first part only). It all links with my CRM (Airtable &
              Salesforce) and has already been a massive success. Increasing
              sales while I sleep!
            </p>
            <span className="text-lg font-black font-display text-sky-800">
              Chesspal
            </span>
          </Card>
          <Card
            variant="blue"
            className="flex-1 max-h-96 group flex flex-col gap-4"
          >
            <Chip variant="orange">★ ★ ★ ★ ★</Chip>
            <p className="text-sm font-medium opacity-75 leading-loose text-yellow-900">
              The guys at WebRun are in the middle of a massive project at two
              of my companies to reduce friction in client signups and also
              chase and sell to folks after they fill out my web form (or fill
              out the first part only). It all links with my CRM (Airtable &
              Salesforce) and has already been a massive success. Increasing
              sales while I sleep!
            </p>
            <span className="text-lg font-black font-display text-yellow-800">
              Nasium
            </span>
          </Card>
        </div>
      </section>

      <section
        id="faq"
        className="mx-72 flex gap-6 border-b border-black border-opacity-10 pb-24"
      >
        <div className="flex flex-col basis-1/3 gap-6">
          <Card variant="orange" className="flex-1">
            <Chip variant="blue">FAQ</Chip>
            <span className="text-3xl leading-normal font-black font-display text-red-900 max-w-lg">
              Intrebari puse frecvent
            </span>
          </Card>
          <Card
            variant="purple"
            className="aspect-square p-12 grid place-items-center"
          >
            <Image
              src="/research-illustration.png"
              alt="faq"
              width={140}
              height={140}
            />
          </Card>
        </div>

        <Card
          variant="green"
          className="group basis-2/3 flex flex-col items-center gap-1.5"
        >
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
          <Collapsable title="What is your pricing like?">
            Affordable pricing starts at $5,000+. Click here for more
            information.
          </Collapsable>
        </Card>
      </section>

      <section id="cta" className="mx-72">
        <Card variant="indigo" className="items-center gap-1.5 p-6 py-10">
          <Chip variant="yellow">Interesat?</Chip>
          <span className="text-5xl font-black font-display text-indigo-900 max-w-lg text-center mt-2">
            Interesat? Hai sa Colaboram
          </span>

          <a
            href="/contact"
            className="px-8 font-bold text-sm font-display py-2.5 rounded-3xl bg-indigo-900 text-white mt-8"
          >
            {CTA}
          </a>
        </Card>
      </section>
    </main>
  );
}
