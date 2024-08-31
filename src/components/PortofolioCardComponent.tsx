import Image from "next/image";
import React from "react";
import { Button, Card, Chip } from ".";
import Link from "next/link";

type Props = {
  image: {
    src: string;
    alt: string;
    variant?:
      | "red"
      | "green"
      | "blue"
      | "gray"
      | "indigo"
      | "lime"
      | "yellow"
      | "orange";
  };
  tag: {
    variant:
      | "red"
      | "green"
      | "blue"
      | "gray"
      | "indigo"
      | "lime"
      | "yellow"
      | "orange";
    text: string;
  };
  title: string;
};

const PortofolioCardComponent = ({ image, tag, title }: Props) => {
  return (
    <Card variant={image.variant ?? 'yellow'} className="overflow-hidden sm:p-0 p-0 relative rounded-3xl min-w-[83%]">
      <Image
        src={image.src}
        alt={image.alt}
        width={880}
        height={960}
        className="w-full h-full object-cover rounded-3xl hover:scale-105 hover:translate-x-4 transition-transform duration-1000"
      />

      <Chip variant={tag.variant} className="absolute top-4 right-4">
        {tag.text}
      </Chip>

      
      <div className="flex absolute left-4 bottom-4">
        <p className="text-2xl font-display font-black">{title}  </p>
      </div>
      <div className="flex gap-2 absolute bottom-4 right-4">
      <Button href="" component={Link} variant="secondary">Live</Button>
      <Button>Case Study</Button>
      </div>
    </Card>
  );
};

export default PortofolioCardComponent;
