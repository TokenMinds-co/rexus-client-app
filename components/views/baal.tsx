import React from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const Baal = () => {
  return (
    <section
      className="flex flex-col space-y-5 lg:space-y-10 w-full container mx-auto h-full min-h-screen items-center justify-start py-20 p-5"
      id="baal"
    >
      <div
        className="flex flex-row space-x-3 items-center justify-center"
        data-aos="fade-down"
      >
        <Separator className="w-10 bg-lime" />
        <p className="font-inter text-2xl text-whiteoff text-center">
          Introducing
        </p>
      </div>
      <h3
        className="flex space-x-5 font-bold font-michroma text-4xl lg:text-6xl text-center"
        data-aos="fade-down"
      >
        <span className="text-lime">BAAL</span>
        <span className="text-white">Coin</span>
      </h3>

      <h3
        className="flex space-x-2 font-semibold font-michroma text-3xl lg:text-5xl text-white text-center"
        data-aos="fade-down"
      >
        First RWA On Rexus
      </h3>

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          className="flex w-full h-full min-h-40 bg-vibrant rounded-3xl p-10 items-center justify-center border-2 border-white/20"
          data-aos="fade-left"
        >
          <p className="font-michroma font-semibold text-4xl text-white py-10 leading-relaxed">
            Projected market size of{" "}
            <span className="bg-black rounded-lg text-lime p-1.5 mr-1.5 whitespace-nowrap">
              {" "}
              $2.8 trillion{" "}
            </span>
            by 2028
          </p>
        </div>
        <div
          className="flex w-full h-full min-h-40 bg-lime bg-wave rounded-3xl p-10 items-center justify-center border-2 border-white/20"
          data-aos="fade-right"
        >
          <p className="font-michroma font-semibold text-4xl text-white py-10 leading-relaxed">
            Backed by the{" "}
            <span className="bg-black rounded-lg text-lime p-1.5 mr-1.5 whitespace-nowrap">
              {" "}
              top 20{" "}
            </span>
            most traded global currencies
          </p>
        </div>

        <div
          className="lg:col-span-2 flex w-full h-full min-h-40 bg-silent rounded-3xl p-10 items-center justify-center border-2 border-white/20"
          data-aos="fade-down"
        >
          <p className="font-michroma font-semibold text-4xl text-white py-10 leading-relaxed">
            Multi-currency stabilization methods for resilience against
            inflation and economic shocks
          </p>
        </div>
      </div>

      <Button
        className="bg-black/80 rounded-xl border border-white font-plus-jakarta-sans text-sm md:text-base text-white/70 px-6 py-5 md:px-8 md:py-6 hover:bg-black hover:border-primary duration-300"
        data-aos="fade-down"
      >
        Learn More
      </Button>
    </section>
  );
};

export default Baal;
