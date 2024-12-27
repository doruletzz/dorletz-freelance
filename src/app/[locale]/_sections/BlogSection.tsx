import { Chip } from "@/components";
import Image from "next/image";
import React from "react";

const CTA = "Contacteaza-ma";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="flex flex-col gap-2 xl:mx-72 lg:mx-36 sm:mx-16 mx-2 border-b border-black border-opacity-10"
    >
      <Chip variant="red">Blog</Chip>
      <h2 className="xl:text-3xl text-2xl font-display font-black mb-2 max-w-lg">
        Latest Articles
      </h2>
      <p className="leading-normal max-w-lg opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
        consectetur id ea, unde cumque, porro quam illum delectus repellendus
        omnis excepturi ducimus quisquam molestiae! Amet vitae placeat eveniet
        ex magnam.
      </p>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-3 xl:my-16 my-8 ">
        <div className="max-h-96 group flex flex-col gap-1.5 p-6 rounded-3xl bg-rose-100 hover:-translate-y-2 transition-translate duration-700 ease-in-out ">
          <span className="w-fit text-xs font-semibold px-4 py-1 bg-red-100 text-red-950 rounded-full mb-1">
            #1
          </span>
          <span className="text-lg font-black text-orange-900">Research</span>
          <p className="text-sm opacity-90 leading-normal text-orange-800">
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
          <p className="text-sm opacity-90 leading-normal text-yellow-900">
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
          <p className="text-sm opacity-90 leading-normal text-indigo-900">
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
          <p className="text-sm opacity-90 leading-normal text-indigo-900">
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
          <p className="text-sm opacity-90 leading-normal text-indigo-900">
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
          <p className="text-sm opacity-90 leading-normal text-indigo-900">
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
  );
};

export default BlogSection;
