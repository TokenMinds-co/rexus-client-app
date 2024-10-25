import React from "react";
import { Button } from "../ui/button";

export default function Jumbotron() {
  return (
    <div
      className="bg-hero-btc w-full bg-cover rounded-b-[100px] bg-center pt-24"
      id="#home"
    >
      <div className="flex flex-col space-y-6 lg:space-y-10 w-full container mx-auto h-full min-h-screen items-start justify-start pt-32 p-5">
        <h3 className="text-5xl md:text-7xl lg:text-8xl font-orbitron tracking-widest font-semibold uppercase bg-gradient-to-b from-white to-primary text-transparent bg-clip-text">
          Rexuz
        </h3>
        <div className="flex flex-col space-y-4">
          <h5 className="text-3xl md:text-4xl lg:text-5xl text-white/70 font-medium font-plus-jakarta-sans">
            Bringing Asset Backed
          </h5>
          <h5 className="text-3xl md:text-4xl lg:text-5xl font-medium font-plus-jakarta-sans bg-gradient-to-b from-white via-gray-200 to-gray-400/50 text-transparent bg-clip-text">
            RWA’s to Bitcoin
          </h5>
        </div>

        <Button className="bg-black/80 rounded-xl border border-white font-plus-jakarta-sans text-sm md:text-base text-white/70 px-6 py-5 md:px-8 md:py-6 hover:bg-black hover:border-primary duration-300">
          Learn More
        </Button>
      </div>
    </div>
  );
}
