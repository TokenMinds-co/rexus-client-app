"use client";

import React, { useState } from "react";
import Form from "next/form";
import { Button } from "../ui/button";
import { toast } from "sonner";

export default function Mailing() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // TODO: Implement real form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      const email = (e.target as HTMLFormElement).email.value;
      await fetch("/api/mailerlite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      toast("Successfully added to the list", {
        description: "Thank you for subscribing to our newsletter",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="2xl:container 2xl:mx-auto relative w-full pt-16 pb-32"
      id="contact"
    >
      <div className="py-12 px-5 sm:px-16 bg-mailing bg-cover bg-center font-plus-jakarta-sans rounded-3xl">
        <div className="space-y-8 z-10 w-full pt-48 pb-12" data-aos="fade-down">
          <h1 className="text-white text-5xl lg:text-6xl font-medium text-left ">
            Stay Updated
          </h1>
          <p className="text-white/70 text-left font-light text-md lg:text-lg max-w-lg">
            Get the latest updates on Rexus and be the first to know about new
            developments and opportunities.
          </p>
          <Form
            className="bg-white rounded-xl w-full max-w-lg flex flex-row justify-between gap-4 px-2 py-1 pl-6"
            onSubmit={handleSubmit}
            action={"/"}
          >
            <input
              type="email"
              name="email"
              required
              className="outline-none w-full"
              placeholder="Email address"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-darkbg/90 hover:bg-darkbg text-white p-6 rounded-xl font-light"
            >
              {isSubmitting ? "Submitting..." : "Get Updated"}
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
}
