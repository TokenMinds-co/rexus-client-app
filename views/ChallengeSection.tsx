import ChallengeCard from "@/components/challenge/ChallengeCard";
import React from "react";

export default function ChallengeSection() {
  return (
    <section className="container mx-auto min-h-screen w-full h-full py-24 px-10 md:px-5 font-[500]">
      <h1 className="font-plus-jakarta-sans text-white text-5xl">
        The <em>Challenge</em> with{" "}
        <span className="text-primary">Bitcoin</span>
      </h1>

      <div className="mt-20 flex flex-col md:flex-row justify-between gap-10 md:gap=5">
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
