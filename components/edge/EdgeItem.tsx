import Image from "next/image";
import React from "react";

interface EdgeItemProps {
  label: string;
  iconUrl: string;
}

export default function EdgeItem({ label, iconUrl }: EdgeItemProps) {
  return (
    <div className="flex font-plus-jakarta-sans flex-col sm:flex-row text-center gap-5 items-center py-6 px-8 bg-black/70 rounded-2xl border-[1px] border-gray-500/30">
      <div className="bg-primary/20 rounded-md p-2 flex items-center justify-center">
        <Image height={40} width={40} src={iconUrl} alt="diversify-item-icons" />
      </div>
      <div className="text-lg md:text-xl">{label}</div>
    </div>
  );
}
