import DiversifyItem from "@/components/diversify/Diversifyitem";
import Image from "next/image";
import React from "react";

export default function DiversifySection() {
  return (
    <section className="container px-5 mx-auto min-h-screen w-full h-full py-16 font-[500]">
      <div className="relative text-white font-plus-jakarta-sans">
        <Image
          alt="bg-gradient"
          width={1000}
          height={1000}
          className="absolute w-full h-full"
          src="/backgrounds/diversify-bg.png"
        />

        <div className="p-8 lg:p-16">
          {/* TYPOGRAPHY */}
          <div className="space-y-5 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl">
              Diversify Your <i className="pr-2">Bitcoin</i> Holdings
            </h1>
            <h4 className="text-md md:text-lg lg:text-xl">
              Rexuz offers TradFi players the tools to diversify Bitcoin
              holdings
            </h4>
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            <div className="flex flex-col justify-between w-full h-full gap-8">
              <DiversifyItem
                label="Commodities"
                iconUrl="/icons/diversify-item-1.svg"
              />
              <DiversifyItem
                label="Precious metals"
                iconUrl="/icons/diversify-item-2.svg"
              />
              <DiversifyItem
                label="Fiat currencies"
                iconUrl="/icons/diversify-item-3.svg"
              />
            </div>

            <Image
              src="/images/holdings.png"
              width={500}
              height={500}
              alt="holdings-image"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
