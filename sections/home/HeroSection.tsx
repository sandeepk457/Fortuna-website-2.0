"use client";

import { useEffect, useState } from "react";
import { heroSlides } from "@/data/heroSlides";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 2000
);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Images */}

{heroSlides.map((image, index) => (

  <div
    key={index}
    className={`
      absolute
      inset-0
      bg-cover
      bg-center

      transition-opacity
      duration-1000
      ease-in-out

      ${
        index === current
          ? "opacity-100"
          : "opacity-0"
      }
    `}
    style={{
      backgroundImage: `url(${image})`,
    }}
  />

))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div>

          <p className="text-[#4DA6FF] font-semibold mb-6 text-lg">
            AI-Powered Supply Chain Platform
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Transforming Supply Chains
            <br />
            Into Intelligent Networks
          </h1>

          <p className="max-w-4xl mx-auto text-xl text-slate-200 mb-10">
            Fortuna delivers intelligent planning,
            procurement, inventory, warehousing,
            transportation and AI-driven decision making.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-[#C8102E] hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold">
              Request Demo
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Explore Products
            </button>

          </div>

        </div>
      </div>

    </section>
  );
}