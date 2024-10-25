import ChallengeCard from "@/components/challenge/challenge-card";
import React from "react";

export default function Challenge() {
  return (
    <section className="container px-5 mx-auto min-h-screen w-full h-full pt-20 pb-40 font-[500]">
      <h1
        className="font-plus-jakarta-sans text-white text-5xl text-center lg:text-left"
        data-aos="fade-right"
      >
        The <i className="pr-2">Challenge</i> with{" "}
        <span className="text-primary">Bitcoin</span>
      </h1>

      <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <ChallengeCard
          title="Lack of Diversification"
          description="Bitcoin is lack of diversification"
          imageUrl="/images/challenge-1.png"
        />

        <ChallengeCard
          title="High Volatility"
          description="Bitcoin holders face significant price fluctuations"
          imageUrl="/images/challenge-2.png"
        />
      </div>
    </section>
  );
}
