import React from "react";

const Baal = () => {
  return (
    <div className="flex w-full h-full min-h-screen bg-gold rounded-[80px] bg-top bg-cover">
      <div className="flex flex-col space-y-3 lg:space-y-10 w-full container mx-auto h-full min-h-screen items-center justify-start py-20 p-5">
        <p className="font-plus-jakarta-sans text-2xl text-white font-semibold">
          Introducing
        </p>
        <h3 className="flex space-x-2 font-bold font-plus-jakarta-sans italic text-6xl">
          <span className="text-primary">BAAL</span>
          <span className="text-white">Coin</span>
        </h3>

        <h3 className="flex space-x-2 font-semibold font-plus-jakarta-sans text-5xl text-white">
          First RWA On Rexus
        </h3>

        <div className="w-full h-full grid grid-cols-2 gap-10">
          <div className="flex w-full h-full min-h-40 bg-vibrant rounded-3xl p-10 items-center justify-center">
            <p className="font-plus-jakarta-sans font-semibold text-4xl text-white py-10">
              Projected market size of{" "}
              <span className="bg-black rounded-lg text-primary p-1.5">
                {" "}
                $2.8 trillion{" "}
              </span>
              by 2028
            </p>
          </div>
          <div className="flex w-full h-full min-h-40 bg-violet rounded-3xl p-10 items-center justify-center">
            <p className="font-plus-jakarta-sans font-semibold text-4xl text-white py-10">
              Backed by the{" "}
              <span className="bg-black rounded-lg text-primary p-1.5">
                {" "}
                top 20{" "}
              </span>
              most traded global currencies
            </p>
          </div>

          <div className="col-span-2 flex w-full h-full min-h-40 bg-beige rounded-3xl p-10 items-center justify-center">
            <p className="font-plus-jakarta-sans font-semibold text-4xl text-black py-10">
              Multi-currency stabilization methods for resilience against
              inflation and economic shocks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baal;
