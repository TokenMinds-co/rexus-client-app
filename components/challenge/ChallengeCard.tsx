import React from "react";
import Image from "next/image";

interface ChallengeCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ChallengeCard({
  title,
  description,
  imageUrl,
}: ChallengeCardProps) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden bg-[#18181B]/50">
      <Image
        alt="bitcoin-challenge-1"
        height={500}
        width={500}
        src={imageUrl}
        className="object-cover w-full h-full"
      />
      <div className="p-8 space-y-2">
        <h3 className="text-white font-plus-jakarta-sans text-3xl">{title}</h3>
        <h4 className="text-[#A1A1AA] font-inter font-light text-xl">
          {description}
        </h4>
      </div>
    </div>
  );
}
