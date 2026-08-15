"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  MapPin,
  Navigation,
  Sparkles,
  Truck,
} from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="request-demo"
      className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 -z-20">

        {/* Main Fortuna gradient */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F9] via-white to-[#F5FAFD]" />

        {/* Fortuna Red glow */}

        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-[#C8102E]/10 blur-[140px]" />

        {/* Fortuna Blue glow */}

        <div className="absolute -right-40 bottom-0 h-[600px] w-[600px] rounded-full bg-[#005F99]/10 blur-[150px]" />

        {/* Fine grid */}

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =======================================================
            MAIN CTA CARD
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[38px] border border-[#005F99]/15 bg-gradient-to-br from-[#FFF0F3] via-white to-[#EAF5FA] shadow-[0_35px_100px_rgba(15,23,42,0.12)] backdrop-blur-xl"
        >

          {/* =====================================================
              FORTUNA CARD ATMOSPHERIC GLOWS
          ====================================================== */}

          {/* Red glow */}

          <motion.div
            animate={{
              opacity: [0.15, 0.28, 0.15],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#C8102E]/15 blur-[100px]"
          />

          {/* Blue glow */}

          <motion.div
            animate={{
              opacity: [0.15, 0.30, 0.15],
              scale: [1, 1.10, 1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#005F99]/15 blur-[110px]"
          />

          {/* =====================================================
              DECORATIVE BACKGROUND ORBITS
          ====================================================== */}

          <div className="pointer-events-none absolute -right-28 -top-28 h-[420px] w-[420px] rounded-full border border-[#005F99]/15" />

          <div className="pointer-events-none absolute -right-14 -top-14 h-[290px] w-[290px] rounded-full border border-[#C8102E]/15" />

          <div className="pointer-events-none absolute -left-28 -bottom-28 h-[380px] w-[380px] rounded-full border border-[#005F99]/15" />

          {/* =====================================================
              RED / BLUE LIGHT EFFECT
          ====================================================== */}

          <motion.div
            animate={{
              opacity: [0.18, 0.32, 0.18],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[15%] top-[15%] h-48 w-48 rounded-full bg-[#005F99]/15 blur-[80px]"
          />

          <motion.div
            animate={{
              opacity: [0.12, 0.25, 0.12],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-[10%] left-[12%] h-48 w-48 rounded-full bg-[#C8102E]/15 blur-[80px]"
          />

          {/* =====================================================
              SUBTLE CARD SHINE
          ====================================================== */}

          <motion.div
            animate={{
              x: ["-120%", "140%"],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-y-0 z-0 w-[22%] skew-x-[-18deg] bg-white/25 blur-2xl"
          />

          {/* =====================================================
              INNER CONTENT
          ====================================================== */}

          <div className="relative z-10 grid items-center gap-12 px-7 py-12 sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-16 lg:py-16">

            {/* ===================================================
                LEFT — CTA CONTENT
            ==================================================== */}

            <div>

              {/* Eyebrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md"
              >

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C8102E] text-white shadow-[0_5px_15px_rgba(200,16,46,0.25)]">
                  <Sparkles size={15} />
                </span>

                <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#005F99] sm:text-xs">
                  Start Your Intelligent Journey
                </span>

              </motion.div>

              {/* Heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                }}
                className="max-w-2xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-[#C8102E] sm:text-5xl lg:text-6xl"
              >

                Make Every Mile

                <span className="block text-[#005F99]">
                  Smarter.
                </span>

              </motion.h2>

              {/* Accent */}

              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                whileInView={{
                  opacity: 1,
                  width: "auto",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="mt-7 flex items-center gap-3"
              >

                <span className="h-1 w-16 rounded-full bg-[#C8102E]" />

                <span className="h-1 w-8 rounded-full bg-[#005F99]" />

              </motion.div>

              {/* Description */}

              <p className="mt-7 max-w-xl text-base leading-8 text-[#C8102E]/90 sm:text-lg">
                Bring AI-powered intelligence to your last-mile operations
                and connect planning, execution and delivery visibility
                through one intelligent platform.
              </p>

              {/* =================================================
                  VALUE POINTS
              ================================================== */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">

                {[
                  "Intelligent route optimization",
                  "Real-time delivery visibility",
                  "Digital proof of delivery",
                  "AI-powered delivery insights",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-2.5"
                  >

                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#005F99]"
                    />

                    <span className="text-sm font-medium text-slate-600">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">

                {/* Primary CTA */}

                <Link
                  href="/request-demo"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-[0_15px_40px_rgba(200,16,46,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A90D27] hover:shadow-[0_20px_50px_rgba(200,16,46,0.32)]"
                >

                  Request a Demo

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

                {/* Secondary CTA */}

                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#005F99]/20 bg-white/75 px-7 py-4 text-sm font-bold text-[#005F99] shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#005F99] hover:bg-white hover:shadow-lg"
                >

                  Explore Fortuna

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

              </div>

            </div>

            {/* ===================================================
                RIGHT — DELIVERY INTELLIGENCE VISUAL
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="relative"
            >

              <div className="relative mx-auto aspect-square max-w-[480px]">

                {/* =================================================
                    OUTER RINGS
                ================================================== */}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[7%] rounded-full border border-dashed border-[#005F99]/25"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[17%] rounded-full border border-dashed border-[#C8102E]/25"
                />

                {/* =================================================
                    CENTER GLOW
                ================================================== */}

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.18, 0.32, 0.18],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005F99]/15 blur-[65px]"
                />

                {/* =================================================
                    ROUTE NETWORK
                ================================================== */}

                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 500 500"
                >

                  {/* Route 1 */}

                  <path
                    d="M75 335 C125 225, 175 310, 245 245 S355 155, 425 210"
                    fill="none"
                    stroke="#005F99"
                    strokeWidth="2.5"
                    strokeDasharray="7 10"
                    opacity="0.35"
                  />

                  {/* Route 2 */}

                  <path
                    d="M95 155 C160 225, 210 170, 250 250 S345 335, 420 330"
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2.5"
                    strokeDasharray="7 11"
                    opacity="0.28"
                  />

                  {/* Route 3 */}

                  <path
                    d="M70 335 C160 390, 300 390, 425 210"
                    fill="none"
                    stroke="#005F99"
                    strokeWidth="1.5"
                    strokeDasharray="4 12"
                    opacity="0.18"
                  />

                </svg>

                {/* =================================================
                    MOVING ROUTE DOT
                ================================================== */}

                <motion.div
                  animate={{
                    left: ["15%", "50%", "83%", "50%", "15%"],
                    top: ["67%", "49%", "42%", "49%", "67%"],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E] shadow-[0_0_20px_rgba(200,16,46,0.7)]"
                />

                {/* =================================================
                    CENTER AI ENGINE
                ================================================== */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.2, 0, 0.2],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                    }}
                    className="absolute -inset-8 rounded-full bg-[#005F99]"
                  />

                  <div className="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-[#005F99] to-[#00466F] text-white shadow-[0_25px_65px_rgba(0,95,153,0.30)]">

                    <BrainCircuit size={31} />

                    <span className="mt-2 text-[10px] font-black uppercase tracking-[0.2em]">
                      Fortuna
                    </span>

                    <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/75">
                      AI Engine
                    </span>

                  </div>

                </div>

                {/* =================================================
                    DELIVERY NODE
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[9%] top-[61%]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-[#C8102E] text-white shadow-[0_12px_30px_rgba(200,16,46,0.25)]">

                    <Truck size={21} />

                  </div>

                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#C8102E] shadow-md backdrop-blur-sm">
                    Delivery
                  </div>

                </motion.div>

                {/* =================================================
                    LOCATION NODE
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute right-[10%] top-[35%]"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-white bg-[#005F99] text-white shadow-[0_12px_30px_rgba(0,95,153,0.25)]">

                    <MapPin size={21} />

                  </div>

                  <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold text-[#005F99] shadow-md backdrop-blur-sm">
                    Customer
                  </div>

                </motion.div>

                {/* =================================================
                    NAVIGATION NODE
                ================================================== */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute left-[18%] top-[27%]"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/90 text-[#005F99] shadow-[0_8px_25px_rgba(0,95,153,0.18)] backdrop-blur-sm">

                    <Navigation size={17} />

                  </div>

                </motion.div>

                {/* =================================================
                    STATUS BADGE
                ================================================== */}

                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 rounded-2xl border border-[#005F99]/10 bg-white/85 px-5 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.10)] backdrop-blur-md">

                  <div className="flex items-center gap-2">

                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

                    <span className="text-xs font-bold text-[#005F99]">
                      Intelligent Delivery Network
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* =======================================================
            BOTTOM TRUST STRIP
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center"
        >

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={17}
              className="text-[#005F99]"
            />

            <span className="text-sm font-medium text-slate-500">
              AI-Powered Optimization
            </span>
          </div>

          <div className="hidden h-4 w-px bg-slate-300 sm:block" />

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={17}
              className="text-[#C8102E]"
            />

            <span className="text-sm font-medium text-slate-500">
              Connected Visibility
            </span>
          </div>

          <div className="hidden h-4 w-px bg-slate-300 sm:block" />

          <div className="flex items-center gap-2">
            <CheckCircle2
              size={17}
              className="text-[#005F99]"
            />

            <span className="text-sm font-medium text-slate-500">
              Smarter Delivery Execution
            </span>
          </div>

        </motion.div>

        {/* =======================================================
            FINAL BRAND LINE
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="mt-14 text-center"
        >

          <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#005F99]">
            Fortuna LastMile AI
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-2">

            <span className="h-1 w-12 rounded-full bg-[#C8102E]" />

            <span className="h-1 w-6 rounded-full bg-[#005F99]" />

          </div>

          <p className="mt-4 text-sm font-medium text-slate-400">
            Optimize Every Mile. Deliver Smarter.
          </p>

        </motion.div>

      </div>
    </section>
  );
}