"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden bg-[#F8FBFD] px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* subtle grid */}

        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,95,153,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,95,153,0.035) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* blue glow */}

        <motion.div
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#005F99]/[0.055] blur-[120px]"
          animate={{
            x: [0, 35, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* red glow */}

        <motion.div
          className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#C8102E]/[0.045] blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            MAIN CTA PANEL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative overflow-hidden rounded-[32px] border border-[#005F99]/20 bg-[#06364B] shadow-[0_30px_90px_rgba(0,60,95,0.18)]"
        >

          {/* =================================================
              TECHNICAL GRID
          ================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          {/* =================================================
              BLUE LIGHT
          ================================================== */}

          <motion.div
            className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#005F99]/40 blur-[130px]"
            animate={{
              x: [0, 45, 0],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              RED LIGHT
          ================================================== */}

          <motion.div
            className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C8102E]/25 blur-[130px]"
            animate={{
              x: [0, -45, 0],
              opacity: [0.2, 0.38, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* =================================================
              CONNECTING NODES
          ================================================== */}

          <div className="pointer-events-none absolute inset-0 hidden opacity-40 sm:block">

            {/* horizontal connection */}

            <motion.div
              className="absolute left-[8%] right-[8%] top-[30%] h-px bg-gradient-to-r from-transparent via-[#35A9DE]/50 to-transparent"
              animate={{
                opacity: [0.2, 0.7, 0.2],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
            />

            {/* vertical connection */}

            <motion.div
              className="absolute bottom-[10%] left-[72%] top-[18%] w-px bg-gradient-to-b from-transparent via-[#C8102E]/40 to-transparent"
              animate={{
                opacity: [0.15, 0.6, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* nodes */}

            <motion.span
              className="absolute left-[13%] top-[30%] h-2 w-2 rounded-full bg-[#35A9DE]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            />

            <motion.span
              className="absolute right-[17%] top-[30%] h-2 w-2 rounded-full bg-[#C8102E]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                delay: 0.8,
              }}
            />

            <motion.span
              className="absolute bottom-[18%] left-[72%] h-2 w-2 rounded-full bg-[#35A9DE]"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: 0.4,
              }}
            />

          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <div className="mx-auto max-w-4xl text-center">

              {/* eyebrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2"
              >

                <motion.span
                  className="h-2 w-2 rounded-full bg-[#C8102E]"
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#35A9DE]">
                  Ready to Modernize Your Asset Operations?
                </span>

              </motion.div>

              {/* heading */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.1,
                }}
                className="mt-7 text-[clamp(2.15rem,5vw,4.25rem)] font-black leading-[1.04] tracking-[-0.04em]"
              >

                <span className="block text-white">
                  Turn Your Assets Into
                </span>

                <span className="mt-2 block text-[#35A9DE]">
                  A Competitive Advantage.
                </span>

              </motion.h2>

              {/* red accent */}

              <motion.div
                initial={{
                  width: 0,
                }}
                whileInView={{
                  width: 74,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                className="mx-auto mt-7 h-[3px] rounded-full bg-[#C8102E]"
              />

              {/* description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="mx-auto mt-7 max-w-2xl text-sm font-medium leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Bring asset intelligence, maintenance execution, workforce
                coordination and operational performance together with
                Fortuna EAM.
              </motion.p>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >

                {/* Request Demo */}

                <motion.a
                  href="/contact"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C8102E] px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(200,16,46,0.28)] transition-all duration-300 hover:bg-[#B30E29]"
                >

                  Request a Demo

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </motion.a>

                
              </motion.div>

            </div>

            {/* =================================================
                BENEFITS
            ================================================== */}

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
                duration: 0.65,
                delay: 0.45,
              }}
              className="mx-auto mt-12 grid max-w-4xl gap-3 border-t border-white/10 pt-8 sm:grid-cols-3"
            >

              {/* item 1 */}

              <div className="flex items-center justify-center gap-3 sm:justify-start">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#005F99]/25 text-[#35A9DE]">
                  <Network size={16} />
                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#35A9DE]">
                    Connected
                  </p>

                  <p className="mt-1 text-xs font-bold text-white/75">
                    Asset Intelligence
                  </p>

                </div>

              </div>

              {/* item 2 */}

              <div className="flex items-center justify-center gap-3 sm:justify-start">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8102E]/20 text-[#ff7185]">
                  <ShieldCheck size={16} />
                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                    Reliable
                  </p>

                  <p className="mt-1 text-xs font-bold text-white/75">
                    Operational Control
                  </p>

                </div>

              </div>

              {/* item 3 */}

              <div className="flex items-center justify-center gap-3 sm:justify-start">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#005F99]/25 text-[#35A9DE]">
                  <Zap size={16} />
                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#35A9DE]">
                    Intelligent
                  </p>

                  <p className="mt-1 text-xs font-bold text-white/75">
                    Proactive Operations
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

          {/* =================================================
              BOTTOM BRAND BAR
          ================================================== */}

          <div className="relative border-t border-white/10 bg-black/[0.08] px-6 py-5 sm:px-10">

            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">

              <div className="flex items-center gap-2">

                <Sparkles
                  size={14}
                  className="text-[#C8102E]"
                />

                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/65">
                  Fortuna EAM
                </span>

              </div>

              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em]">

                <span className="text-[#35A9DE]">
                  Connect Assets
                </span>

                <span className="text-[#C8102E]">
                  •
                </span>

                <span className="text-[#35A9DE]">
                  Empower Teams
                </span>

                <span className="text-[#C8102E]">
                  •
                </span>

                <span className="text-white/70">
                  Drive Operational Excellence
                </span>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =====================================================
            FINAL MICRO MESSAGE
        ====================================================== */}

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
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-7 flex items-center justify-center gap-2"
        >

          <CheckCircle2
            size={14}
            className="text-[#005F99]"
          />

          <p className="text-xs font-bold text-[#17466A]">
            One platform. Connected assets. Better operational outcomes.
          </p>

        </motion.div>

      </div>
    </section>
  );
}