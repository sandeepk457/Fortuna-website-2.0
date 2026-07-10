"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] via-[#B5122B] to-[#005F99]" />

      {/* Glow Effects */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              Ready to Get Started?
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Transform Your
              <span className="block text-white/90">
                Supply Chain with
              </span>

              <span className="block text-white">
                Fortuna SIMS
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              Modernize procurement, inventory, warehouse operations,
              and enterprise execution with one intelligent supply
              chain platform built for growing businesses.
            </p>

                        {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* Primary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#C8102E] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Request a Demo
              </Link>

              {/* Secondary Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
              >
                Talk to Our Experts
              </Link>

            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* CTA Illustration */}
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">

              <Image
                src="/images/ai/cta.png"
                alt="Fortuna SIMS Enterprise Platform"
                width={1600}
                height={1200}
                className="w-full h-auto object-contain"
                priority
              />

            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-6 top-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#C8102E] shadow-xl"
            >
              Enterprise Ready
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute bottom-6 right-6 rounded-full bg-[#005F99] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              AI Powered
            </motion.div>

          </motion.div>

        </div>

                {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-white/20 pt-10"
        >

          <div className="flex flex-wrap items-center justify-center gap-4">

            <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              ✓ Enterprise Ready
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              ✓ AI Powered
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              ✓ Secure Platform
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              ✓ API First
            </div>

            <div className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20">
              ✓ Built for Enterprise Scale
            </div>

          </div>

          {/* Closing Note */}
          <div className="mt-10 text-center">

            <p className="text-lg text-white/80">
              Join organizations transforming procurement, inventory,
              warehouse execution, and supply chain operations with
              <span className="font-semibold text-white">
                {" "}Fortuna SIMS.
              </span>
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}