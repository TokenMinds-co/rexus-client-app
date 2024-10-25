import Image from "next/image";
import React from "react";
import EdgeItem from "../edge/EdgeItem";

export default function EdgeSection() {
  return (
    <section
      className="container mx-auto w-full h-full grid grid-cols-1 lg:grid-cols-2 justify-between g pt-24 pb-44 gap-10 px-5"
      id="whyus"
    >
      <div className="flex flex-col justify-between items-center lg:items-start">
        <h1 className="text-white text-center lg:text-left font-plus-jakarta-sans text-5xl lg:text-6xl leading-[60px] lg:leading-[75px] w-4/5">
          The Edge That Powers{" "}
          <span className="font-semibold text-primary">Rexus</span>
        </h1>
        <Image
          alt="edge-image"
          width={500}
          height={500}
          className="bg-cover rounded-xl mt-12 border-gray-500/30 border-[1px]"
          src="/images/edge.png"
        />
      </div>

      <div className="flex flex-col gap-5 text-white justify-between">
        <EdgeItem
          label="Direct access to Bitcoin’s liquidity."
          iconUrl="/icons/edge-item-1.svg"
        />
        <EdgeItem
          label="A team that understands the Bitcoin narrative."
          iconUrl="/icons/edge-item-2.svg"
        />
        <EdgeItem
          label="Expertise in building RWA platforms"
          iconUrl="/icons/edge-item-3.svg"
        />
        <EdgeItem
          label="Advanced BTC tech enabled for this platform."
          iconUrl="/icons/edge-item-4.svg"
        />
        <EdgeItem
          label="Both permissioned and permissionless models."
          iconUrl="/icons/edge-item-5.svg"
        />
      </div>
    </section>
  );
}
