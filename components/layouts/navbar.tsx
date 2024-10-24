"use client";

import { navigations } from "@/constants/common";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return activeSection === "/" && pathname === "/";
    }
    return activeSection === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigations.map((item) => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100; // offset
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section === "" ? "/" : `#${section}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex py-10 w-full h-full">
      <div className="flex px-10 py-5 w-full h-full items-center justify-between bg-white/[8%] border border-white/40 rounded-3xl">
        <Link
          href="/"
          className="text-3xl font-orbitron font-semibold uppercase bg-gradient-to-b from-white to-primary text-transparent bg-clip-text"
        >
          Rexus
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <AlignJustify color="white" className="block lg:hidden" size={36} />
          </SheetTrigger>
          <SheetTitle className="hidden">Rexus</SheetTitle>
          <SheetContent
            side="right"
            className="flex flex-col items-start space-y-4 bg-darkbg text-white"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                href="/"
                className="text-3xl font-orbitron font-semibold uppercase bg-gradient-to-b from-white to-primary text-transparent bg-clip-text"
              >
                Rexus
              </Link>

              {navigations.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-lg font-plus-jakarta-sans hover:underline text-white/70"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden lg:flex space-x-10">
          {navigations.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className={cn(
                "text-lg font-plus-jakarta-sans transition-colors",
                isActive(item.href)
                  ? "text-white font-bold"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;