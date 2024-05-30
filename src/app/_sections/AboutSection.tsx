import { Card, Chip } from '@/components'
import Image from 'next/image'
import React from 'react'

const CTA = "Contacteaza-ma";

const AboutSection = () => {
  return (
    

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
    <div className="grid grid-cols-3 gap-3 my-16 h-[24rem]">
      <div className="max-h-[24rem] overflow-hidden relative h-full group flex flex-col gap-1.5 p-6 rounded-3xl bg-blue-100 ">
        <Image
          className="scale-100 group-hover:scale-110 transition-transform duration-500 absolute inset-0 p-12 ease-in-out grayscale"
          src="/profile-pic.png"
          width={400}
          height={1200}
          alt="develop"
        />
      </div>
      <Card
        variant="yellow"
        className="max-h-[24rem] col-span-2 group flex flex-col py-12"
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
          className="font-bold text-sm py-1.5 rounded-3xl bg-orange-900 mt-8 text-zinc-100 w-[9.8rem] px-0 text-center"
        >
          {CTA}
        </a>
      </Card>
    </div>
  </section>
  )
}

export default AboutSection