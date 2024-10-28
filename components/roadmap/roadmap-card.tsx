import Image from "next/image";
import React from "react";

interface RoadmapCardProps {
  step: number;
  iconUrl: string;
  title: string;
  content: JSX.Element;
}

export default function RoadmapCard({
  step,
  iconUrl,
  title,
  content,
}: RoadmapCardProps) {
  return (
    <div
      className={`absolute rounded-3xl bg-gradient-to-r from-white/10 text-white p-8 bottom-[-75px] z-20 lg:w-[400px] xl:w-[500px] ${
        step % 2 === 0 ? "left-[100px]" : "right-[100px]"
      }`}
    >
      <div className="bg-primary/20 rounded-md p-2 w-fit flex items-center justify-center">
        <Image
          height={35}
          width={35}
          src={iconUrl}
          alt="diversify-item-icons"
        />
      </div>
      <div className="text-2xl text-primary font-semibold my-2">{title}</div>
      {content}
    </div>
  );
}
