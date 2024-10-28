import React from "react";
import BgOverlayBottom from "../bottom-overlay";
import RoadmapCard from "../roadmap/roadmap-card";
import RoadmapCardSmall from "../roadmap/roadmap-card-small";

export default function Roadmap() {
  const roadmapStep = [
    {
      step: 1,
      iconUrl: "/icons/roadmap-item-1.svg",
      title: "Phase 1",
      content: (
        <ul className="list-disc ml-5 text-whiteoff font-light text-sm sm:text-base">
          <li>Launch RWA platform on Bitcoin</li>
          <li>Complete legal setup</li>
          <li>Introduce first token: BAAL</li>
          <li>Target marketing towards Bitcoin holders</li>
        </ul>
      ),
    },
    {
      step: 2,
      iconUrl: "/icons/roadmap-item-2.svg",
      title: "Phase 2",
      content: (
        <ul className="list-disc ml-5 text-whiteoff font-light text-sm sm:text-base">
          <li>Launch more asset-backed tokens</li>
          <li>Introduce institutional, permissioned product</li>
          <li>Expand marketing to traditional investors</li>
        </ul>
      ),
    },
    {
      step: 3,
      iconUrl: "/icons/roadmap-item-3.svg",
      title: "Phase 3",
      content: (
        <ul className="list-disc ml-5 text-whiteoff font-light text-sm sm:text-base">
          <li>Expand to additional Layer 1 blockchains</li>
          <li>Add permissioned assets to the platform</li>
        </ul>
      ),
    },
  ];

  return (
    <section
      className="container relative mx-auto w-full h-full min-h-screen py-40 overflow-hidden px-10"
      id="roadmap"
    >
      <h1
        className="text-white text-4xl lg:text-6xl text-center font-plus-jakarta-sans font-semibold"
        data-aos="fade-down"
      >
        <span className="text-primary italic font-bold pr-1">REXUS</span>{" "}
        Roadmap
      </h1>

      {/* BIG SCREEN ROADMAP */}
      <div className="hidden lg:flex font-plus-jakarta-sans flex-col justify-center items-center mt-64 gap-[225px]">
        {roadmapStep.map((roadmap, index) => (
          <div
            key={index}
            className="relative w-5 h-5 rounded-full border-2 border-primary bg-primary"
            data-aos="fade-down"
            style={{
              top: `calc(${(index / roadmapStep.length) * 100}%)`,
            }}
          >
            <div className="absolute bg-primary w-[4px] h-[250px] left-[6px]" />
            <RoadmapCard {...roadmap} />
          </div>
        ))}
      </div>

      {/* SMALL SCREEN ROADMAP */}
      <div className="lg:hidden relative font-plus-jakarta-sans flex flex-col space-y-10 items-center justify-center mt-10">
        {roadmapStep.map((roadmap, index) => (
          <RoadmapCardSmall key={index} {...roadmap} />
        ))}
      </div>

      <BgOverlayBottom />
    </section>
  );
}
