import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import React from "react";
import Link from "next/link";

const Team = () => {
  return (
    <section
      className="w-full h-full container mx-auto pb-0 sm:pb-32 pt-32 px-10"
      id="team"
      data-aos="fade-down"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full h-full">
        <div className="flex flex-col space-y-3 w-full h-fit items-start justify-start lg:items-center lg:justify-center p-5">
          <p className="text-6xl text-white font-semibold">Team</p>
        </div>
        <div className="flex flex-col h-fit items-start justify-start p-5">
          <h3 className="text-start text-3xl text-primary">Karim Salha</h3>
          <h3 className="text-start text-xl text-white">(TradeFi Expert)</h3>
          <p className="text-white/70 font-inter text-base pt-3">
            Tech entrepreneur experienced in blockchain and TradFi integration.
          </p>
          <div className="flex flex-row space-x-5 pt-5">
            <Link
              href="https://www.linkedin.com/in/karim-salha-69b30047/"
              passHref
              target="_blank"
            >
              <FaLinkedinIn className="text-3xl text-black bg-primary p-1 rounded-md" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-fit items-start justify-start p-5">
          <h3 className="text-start text-3xl text-primary">TokenMinds</h3>
          <h3 className="text-start text-xl text-white">
            (Web3 Consulting Expert)
          </h3>
          <p className="text-white/70 font-inter text-base pt-3">
            Leading Web3 consulting firm specializing in blockchain development
            and token sales.
          </p>
          <div className="flex flex-row space-x-5 pt-5">
            <Link
              href="https://www.linkedin.com/company/tokenmindsofficial/posts/?feedView=all"
              passHref
              target="_blank"
            >
              <FaLinkedinIn className="text-3xl text-black bg-primary p-1 rounded-md" />
            </Link>
            <Link href="https://x.com/tokenminds_co" passHref target="_blank">
              <FaXTwitter className="text-3xl text-black bg-primary p-1 rounded-md" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
