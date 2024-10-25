import React from "react";

export default function MailingSection() {
  return (
    <section className="container relative mx-auto pt-16 pb-32" id="contact">
      <div className="py-12 px-5 sm:px-16 bg-mailing bg-cover bg-center font-plus-jakarta-sans rounded-3xl">
        <div className="space-y-8 z-10 w-full lg:w-3/4 xl:w-2/3 2xl:w-1/3 pt-48 pb-12">
          <h1 className="text-white text-5xl lg:text-6xl font-medium text-center">
            Stay Updated
          </h1>
          <p className="text-white/70 text-center font-light text-md lg:text-lg">
            Get the latest updates on REXUZ and be the first to know about new
            developments and opportunities.
          </p>
          <div className="bg-white rounded-xl w-full flex flex-row justify-between gap-4 p-4 px-6">
            <input
              type="text"
              className="outline-none w-[70%]"
              placeholder="Email address"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
