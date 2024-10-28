import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

export default function ChallengeCard({
  title,
  description,
  imageUrl,
  className,
}: ChallengeCardProps) {
  return (
    <div
      className="flex flex-col rounded-xl overflow-hidden border-gray-600/25 border-[1px] bg-[#18181B]/50"
      data-aos="fade-down"
    >
      <Image
        alt="bitcoin-challenge-1"
        height={1250}
        width={1250}
        src={imageUrl}
        className={cn("object-cover w-full h-full bg-black", className)}
      />
      <div className="p-8 space-y-2">
        <h3 className="text-semiwhite font-plus-jakarta-sans text-3xl">
          {title}
        </h3>
        <h4 className="text-whiteoff font-inter font-light text-xl">
          {description}
        </h4>
      </div>
    </div>
  );
}
