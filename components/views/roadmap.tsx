import React from "react";
import BgOverlayBottom from "../bottom-overlay";

export default function Roadmap() {
  const roadmapStep = [
    {
      step: 1,
      time: "Q1 2024",
      title: "Founding of Bichon",
      content: (
        <ul className="list-disc ml-5 text-white/75 font-light text-sm sm:text-base">
          <li>Launch RWA platform on Bitcoin</li>
          <li>Complete legal setup</li>
          <li>Introduce first token: BAAL</li>
          <li>Target marketing towards Bitcoin holders</li>
        </ul>
      ),
    },
    {
      step: 2,
      time: "Q2 2024",
      title: "Presale Start",
      content: (
        <ul className="list-disc ml-5 text-white/75 font-light text-sm sm:text-base">
          <li>Launch more asset-backed tokens</li>
          <li>Introduce institutional, permissioned product</li>
          <li>Expand marketing to traditional investors</li>
        </ul>
      ),
    },
    {
      step: 3,
      time: "Q3 2024",
      title: "Partnership Start",
      content: (
        <ul className="list-disc ml-5 text-white/75 font-light text-sm sm:text-base">
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
      <h1 className="text-white text-6xl text-center">
        <i className="text-primary pr-1">REXUS</i> Roadmap
      </h1>

      {/* BIG SCREEN ROADMAP */}
      <div className="hidden lg:flex font-plus-jakarta-sans  flex-col justify-center items-center mt-60 gap-[225px]">
        {roadmapStep.map((roadmap, index) => (
          <div
            key={index}
            className="relative w-5 h-5 rounded-full border-2 border-primary bg-primary"
            style={{
              top: `calc(${(index / roadmapStep.length) * 100}%)`,
            }}
          >
            <div className="absolute bg-primary w-[4px] h-[250px] left-[6px]" />

            <div
              className={`absolute rounded-lg bg-gray-500/30 text-white p-8 bottom-[-75px] z-20 lg:w-[400px] xl:w-[500px] ${
                roadmap.step % 2 === 0 ? "left-[100px]" : "right-[100px]"
              }`}
            >
              <div className="text-2xl text-primary mb-2">{roadmap.title}</div>
              {roadmap.content}
            </div>
          </div>
        ))}
      </div>

      {/* SMALL SCREEN ROADMAP */}
      <div className="lg:hidden relative font-plus-jakarta-sans flex flex-col  mt-60 gap-[225px]">
        {roadmapStep.map((roadmap, index) => (
          <div
            key={index}
            className="relative w-5 h-5 rounded-full border-2 border-primary bg-primary"
            style={{
              top: `calc(${(index / roadmapStep.length) * 100}%)`,
            }}
          >
            <div className="absolute bg-primary w-[4px] h-[250px] left-[6px]" />

            <div
              className={`absolute rounded-lg bg-gray-500/30 text-white p-8 bottom-[-75px] z-20 w-[300px] sm:w-[500px] left-[50px] sm:left-[50px]
              }`}
            >
              <div className="text-xl sm:text-2xl text-primary mb-2">
                {roadmap.title}
              </div>
              {roadmap.content}
            </div>
          </div>
        ))}
      </div>

      <BgOverlayBottom />
    </section>
  );
}
