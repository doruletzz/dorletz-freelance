import React from "react";

const SEE_ALL = "See all"

const PortofolioSection = () => {
  return (
    <section
      id="portofolio"
      className="relative grid grid-cols-3 gap-3 px-72 mx-auto pt-20 max-h-[42rem] w-full overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 right-0 h-96 flex flex-col items-center justify-end bg-gradient-to-t from-white to-transparent pointer-events-none z-10">
        <a
          href="/portofolio"
          className="px-8 font-bold text-sm py-2.5 rounded-3xl border border-black pointer-events-auto"
        >
          {SEE_ALL}
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
  );
};

export default PortofolioSection;
