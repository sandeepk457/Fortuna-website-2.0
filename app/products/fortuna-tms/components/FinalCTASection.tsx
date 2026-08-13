"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Network,
  Sparkles,
  Truck,
} from "lucide-react";

const capabilities = [
  "Transportation Planning",
  "Real-Time Visibility",
  "Intelligent Execution",
  "Enterprise Integrations",
];

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main Fortuna Gradient */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#001A2E] via-[#003B63] to-[#350711]" />

        {/* Blue Glow */}

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#005F99] blur-[140px]"
        />

        {/* Red Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C8102E] blur-[140px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial Center */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.25)_70%,rgba(2,6,23,0.55)_100%)]" />

      </div>

      {/* =====================================================
          DECORATIVE NETWORK LINES
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 hidden lg:block">

        {/* Horizontal */}

        <motion.div
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] right-[8%] top-[30%] h-px bg-gradient-to-r from-transparent via-[#4DA6FF]/30 to-transparent"
        />

        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[12%] right-[12%] top-[70%] h-px bg-gradient-to-r from-transparent via-[#C8102E]/30 to-transparent"
        />

        {/* Vertical */}

        <div className="absolute bottom-0 left-[18%] top-0 w-px bg-gradient-to-b from-transparent via-[#005F99]/20 to-transparent" />

        <div className="absolute bottom-0 right-[18%] top-0 w-px bg-gradient-to-b from-transparent via-[#C8102E]/20 to-transparent" />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            TOP LABEL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md">

            <Sparkles
              size={15}
              className="text-[#4DA6FF]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">
              Transform Transportation Operations
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E] shadow-[0_0_10px_rgba(200,16,46,0.8)]" />

          </div>

        </motion.div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-8 max-w-5xl text-center"
        >

          {/* Heading */}

          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-7xl">

            Move Your Transportation

            <span className="block bg-gradient-to-r from-[#FF3048] via-[#C8102E] to-[#4DA6FF] bg-clip-text text-transparent">
              Into the Future
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-blue-100/80 sm:text-lg">
            Bring planning, execution, visibility, and transportation
            intelligence together with Fortuna TMS — a connected platform
            designed for modern enterprise transportation operations.
          </p>

        </motion.div>

        {/* =================================================
            CTA BUTTONS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          {/* Primary */}

          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(200,16,46,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A80D26] hover:shadow-[0_20px_50px_rgba(200,16,46,0.4)]"
          >
            Request a TMS Demo

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Secondary */}

          <Link
  href="/request-demo"
  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#4DA6FF]/50 hover:bg-white/10"
>
  Connect With a Our Experts

  <ArrowRight
    size={18}
    className="text-[#4DA6FF] transition-transform duration-300 group-hover:translate-x-1"
  />
</Link>

        </motion.div>

        {/* =================================================
            CAPABILITY PILLS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >

          {capabilities.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2.5 text-xs font-medium text-blue-100/80 backdrop-blur-sm"
            >
              <CheckCircle2
                size={14}
                className={
                  index % 2 === 0
                    ? "text-[#4DA6FF]"
                    : "text-[#FF3048]"
                }
              />

              {item}
            </motion.div>
          ))}

        </motion.div>

        {/* =================================================
            CENTRAL NETWORK VISUAL
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto mt-16 h-40 max-w-3xl"
        >

          {/* Horizontal Network */}

          <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#4DA6FF]/30 to-transparent" />

          {/* Left Node */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(0,95,153,0)",
                "0 0 25px rgba(0,95,153,0.4)",
                "0 0 0 rgba(0,95,153,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[8%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#4DA6FF]/20 bg-slate-900/70 text-[#4DA6FF] backdrop-blur-md"
          >
            <Truck size={21} />
          </motion.div>

          {/* Center Node */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-[0_0_45px_rgba(0,95,153,0.35)]"
          >
            <Globe2
              size={34}
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Center Ring */}

          <motion.div
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-[#4DA6FF]/40"
          />

          {/* Right Node */}

          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 rgba(200,16,46,0)",
                "0 0 25px rgba(200,16,46,0.4)",
                "0 0 0 rgba(200,16,46,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute right-[8%] top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#C8102E]/25 bg-slate-900/70 text-[#FF3048] backdrop-blur-md"
          >
            <Network size={21} />
          </motion.div>

          {/* Data Particles */}

          <motion.span
            animate={{
              x: ["0%", "800%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-[10%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#4DA6FF] shadow-[0_0_10px_rgba(77,166,255,0.9)]"
          />

          <motion.span
            animate={{
              x: ["0%", "-800%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
            className="absolute right-[10%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#FF3048] shadow-[0_0_10px_rgba(255,48,72,0.9)]"
          />

        </motion.div>

        {/* =================================================
            FINAL TRUST STATEMENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-4 flex max-w-2xl items-center justify-center gap-3 text-center"
        >

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/50">
            One Connected Transportation Platform
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />

        </motion.div>

      </div>
    </section>
  );
}