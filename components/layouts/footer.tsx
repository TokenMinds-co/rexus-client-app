import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-primary w-full">
      <div className="flex container mx-auto flex-col space-y-2 lg:flex-row lg:space-y-0 items-center justify-between p-5 w-full h-full">
        <Link
          href="/"
          className="text-3xl font-orbitron font-semibold uppercase bg-gradient-to-b from-black via-black to-primary text-transparent bg-clip-text"
        >
          Rexus
        </Link>

        <p className="text-base font-plus-jakarta-sans tracking-wider text-center">
          &copy; 2024 Rexus. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
