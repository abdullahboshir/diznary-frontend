"use client";
import Image from "next/image";
import Header from "../layout/Header";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="w-full relative">
      <div className="z-50 relative">
        <Header />
      </div>

      <div className="mt-10">
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="scroll-m-20 text-center text-8xl font-extrabold tracking-tight text-balance">
            Transforming Ideas
          </h1>
          <h2 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance">
            into Stunning Visual
          </h2>
          <h3 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance">
            We create exceptional designs that captivate engage, and inspire.
            lets bring your vision to life.
          </h3>

          <div className="flex gap-x-4">
            <Button
              variant={"secondary"}
              className="px-6! bg-black text-chart-4 font-bold flex justify-center items-center rounded-full border border-primary"
            >
              Get Started
            </Button>

            <Button
              variant={"outline"}
              className="px-6! font-bold flex justify-center items-center rounded-full border border-primary"
            >
              Consultation free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
