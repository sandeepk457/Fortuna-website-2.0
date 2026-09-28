"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Cable,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Factory,
  GitBranch,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Pill,
  PlugZap,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Shirt,
  ShipWheel,
  ShoppingCart,
  Ship,
  Sparkles,
  Truck,
  UtensilsCrossed,
  UsersRound,
  Workflow,
} from "lucide-react";
import type { ElementType, ReactNode } from "react";

type Theme = "blue" | "red";

type Capability = {
  number: string;
  icon: ElementType;
  title: string;
  label: string;
  description: string;
  theme: Theme;
};

type Module = {
  number: string;
  icon: ElementType;
  title: string;
  label: string;
  description: string;
  items: string[];
  theme: Theme;
};

type Industry = {
  icon: ElementType;
  title: string;
  description: string;
  theme: Theme;
};

/* =========================================================
   CONNECT HUB CAPABILITIES
========================================================= */

const capabilities: Capability[] = [
  {
    number: "01",
    icon: PlugZap,
    title: "EDI → API Modernization",
    label: "MODERN CONNECTIVITY",
    description:
      "Modernize traditional EDI environments and connect legacy trading-partner exchanges with secure, scalable API ecosystems.",
    theme: "blue",
  },
  {
    number: "02",
    icon: Network,
    title: "Enterprise Integration",
    label: "SYSTEM CONNECTIVITY",
    description:
      "Connect ERP, CRM, WMS, TMS and other enterprise applications through one unified integration framework.",
    theme: "red",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Integration Orchestration",
    label: "PROCESS AUTOMATION",
    description:
      "Coordinate cross-system workflows using event triggers, transformation rules and intelligent exception handling.",
    theme: "blue",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "AI Data Mapping",
    label: "DATA INTELLIGENCE",
    description:
      "Apply intelligent mapping, semantic validation, cleansing and reconciliation to improve data quality across connected systems.",
    theme: "red",
  },
  {
    number: "05",
    icon: UsersRound,
    title: "Partner Collaboration",
    label: "PARTNER NETWORK",
    description:
      "Connect suppliers, distributors and logistics partners through structured onboarding, collaboration and transaction workflows.",
    theme: "blue",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Security & Monitoring",
    label: "TRUSTED INTEGRATION",
    description:
      "Protect integration flows with access control, audit trails, monitoring, alerts and enterprise governance.",
    theme: "red",
  },
];

/* =========================================================
   CONNECT HUB MODULES
========================================================= */

const modules: Module[] = [
  {
    number: "01",
    icon: Code2,
    title: "EDI → API Modernization Engine",
    label: "TRANSLATION & APIs",
    description:
      "Modernize X12, EDIFACT and traditional message exchanges into API-driven connectivity.",
    items: [
      "Legacy EDI Translator",
      "API Gateway Manager",
      "Mapping & Transformation Engine",
      "Event-Driven Integration Engine",
    ],
    theme: "blue",
  },
  {
    number: "02",
    icon: ServerCog,
    title: "Enterprise Application Integration",
    label: "APPLICATION LAYER",
    description:
      "Synchronize business data across ERP, CRM, SCM and operational applications.",
    items: [
      "ERP Integration Framework",
      "CRM & SCM Connector Suite",
      "Database Sync Engine",
      "Workflow Automation Hub",
    ],
    theme: "red",
  },
  {
    number: "03",
    icon: GitBranch,
    title: "Integration Orchestration",
    label: "ORCHESTRATION",
    description:
      "Coordinate end-to-end processes across cloud and on-premise environments.",
    items: [
      "Process Builder Studio",
      "API Event Trigger Engine",
      "AI Exception Manager",
      "Scheduler & Job Orchestrator",
    ],
    theme: "blue",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "AI-Powered Data Mapping",
    label: "DATA INTELLIGENCE",
    description:
      "Improve interoperability and consistency through intelligent data analysis and transformation.",
    items: [
      "Smart Mapping Engine",
      "Semantic Analyzer",
      "Data Cleansing Engine",
      "AI Data Reconciliation",
    ],
    theme: "red",
  },
  {
    number: "05",
    icon: UsersRound,
    title: "Partner Integration Hub",
    label: "PARTNER EXPERIENCE",
    description:
      "Create a connected digital collaboration layer for suppliers and logistics partners.",
    items: [
      "Partner Onboarding Portal",
      "Multi-Tenant Partner Workspace",
      "Real-Time Collaboration Feed",
      "Partner KPI Tracker",
    ],
    theme: "blue",
  },
  {
    number: "06",
    icon: LockKeyhole,
    title: "Security, Compliance & Monitoring",
    label: "SECURITY & GOVERNANCE",
    description:
      "Secure integration activity and provide enterprise-level monitoring and traceability.",
    items: [
      "API Access Control",
      "Audit Trail & Log Management",
      "Compliance Framework",
      "Monitoring & Alert Centre",
    ],
    theme: "red",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries: Industry[] = [
  {
    icon: Factory,
    title: "Automotive & Industrial Manufacturing",
    description:
      "Connect suppliers, production environments, logistics partners and enterprise applications.",
    theme: "blue",
  },
  {
    icon: ShipWheel,
    title: "Ports & Logistics",
    description:
      "Enable connected data exchange between logistics networks, transportation systems and enterprise platforms.",
    theme: "red",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description:
      "Support connected supply-chain visibility, partner collaboration and data exchange.",
    theme: "blue",
  },
  {
    icon: Shirt,
    title: "Fashion & Retail",
    description:
      "Connect retail systems, suppliers and distribution ecosystems for faster information flow.",
    theme: "red",
  },
  {
    icon: Pill,
    title: "Pharma & Healthcare",
    description:
      "Support traceability, compliance-oriented integration and secure enterprise data exchange.",
    theme: "blue",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Distribution",
    description:
      "Connect order, fulfilment, logistics and partner systems across digital commerce networks.",
    theme: "red",
  },
];

/* =========================================================
   ANIMATED ICON
========================================================= */

function AnimatedToolIcon({
  Icon,
  theme,
}: {
  Icon: ElementType;
  theme: Theme;
}) {
  const isBlue = theme === "blue";

  return (
    <div className="relative h-14 w-14">
      <motion.div
        className={`absolute inset-0 rounded-2xl border ${
          isBlue
            ? "border-[#005F99]/20"
            : "border-[#C8102E]/20"
        }`}
        animate={{
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className={`absolute -right-1 top-1 h-2 w-2 rounded-full ${
          isBlue ? "bg-[#35A9DE]" : "bg-[#C8102E]"
        }`}
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
        }}
      />

      <motion.div
        className={`absolute inset-[5px] flex items-center justify-center rounded-xl ${
          isBlue
            ? "bg-[#005F99]/[0.07] text-[#005F99]"
            : "bg-[#C8102E]/[0.07] text-[#C8102E]"
        }`}
        whileHover={{ scale: 1.08 }}
      >
        <motion.div
          animate={{
            rotate: [0, -4, 4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={22} strokeWidth={1.8} />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-4xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white px-4 py-2 shadow-sm">
        <Sparkles size={13} className="text-[#C8102E]" />

        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#005F99] sm:text-[10px]">
          {eyebrow}
        </span>
      </div>

      <h2
        className="mt-6 text-[clamp(2rem,4vw,3.45rem)] font-black leading-[1.08] tracking-[-0.035em]"
        style={{ color: "#C8102E" }}
      >
        {title}
      </h2>

      <div className="mx-auto mt-6 flex items-center justify-center gap-2">
        <span className="h-[3px] w-12 rounded-full bg-[#C8102E]" />
        <span className="h-[3px] w-7 rounded-full bg-[#005F99]" />
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-sm font-medium leading-7 text-[#17466A] sm:text-base sm:leading-8">
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ConnectHubPage() {
  return (
    <main
      className="relative overflow-hidden bg-[#F8FBFD]"
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,95,153,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,95,153,0.035) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="absolute -left-52 top-20 h-[500px] w-[500px] rounded-full bg-[#005F99]/[0.045] blur-[130px]" />

          <div className="absolute -right-52 bottom-10 h-[500px] w-[500px] rounded-full bg-[#C8102E]/[0.035] blur-[130px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-white px-4 py-2 shadow-sm">
              <Network size={14} className="text-[#C8102E]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#005F99] sm:text-[10px]">
                Enterprise Integration Platform
              </span>
            </div>

            <h1 className="mt-7 text-[clamp(2.7rem,5vw,4.8rem)] font-black leading-[1.03] tracking-[-0.045em]">
              <span className="block text-[#005F99]">
                Connect Every
              </span>

              <span className="block text-[#005F99]">
                System.
              </span>

              <span className="mt-2 block text-[#C8102E]">
                Orchestrate Every
              </span>

              <span className="block text-[#C8102E]">
                Flow.
              </span>
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <span className="h-[3px] w-14 rounded-full bg-[#C8102E]" />
              <span className="h-[3px] w-9 rounded-full bg-[#005F99]" />
            </div>

            <p className="mt-6 text-lg font-black text-[#C8102E] sm:text-xl">
              EDI → API Modernization & Integration Hub
            </p>

            <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-[#17466A] sm:text-base sm:leading-8">
              Fortuna Connect Hub is a cloud-based integration and
              modernization platform designed to connect enterprise
              systems, supply-chain partners and digital ecosystems
              through secure, intelligent and orchestrated data exchange.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                ["EDI", "MODERNIZATION"],
                ["API", "CONNECTIVITY"],
                ["AI", "INTELLIGENCE"],
                ["CLOUD", "INTEGRATION"],
              ].map(([value, label], index) => (
                <motion.div
                  key={value}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-[#005F99]/10 bg-white px-4 py-3 shadow-[0_10px_30px_rgba(0,60,100,0.05)]"
                >
                  <p
                    className={`text-sm font-black ${
                      index % 2 === 0
                        ? "text-[#005F99]"
                        : "text-[#C8102E]"
                    }`}
                  >
                    {value}
                  </p>

                  <p className="mt-1 text-[9px] font-bold tracking-[0.13em] text-[#17466A]">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1 }}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-[#005F99]/20 bg-[#06364B] shadow-[0_28px_80px_rgba(0,60,95,0.16)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              <div className="pointer-events-none absolute -left-48 top-0 h-[450px] w-[450px] rounded-full bg-[#005F99]/35 blur-[120px]" />

              <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/25 blur-[120px]" />

              <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#35A9DE]">
                    <Network size={20} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                      Integration Intelligence
                    </p>

                    <h3 className="mt-1 text-lg font-black text-white">
                      Fortuna Connect Hub
                    </h3>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 sm:flex">
                  <motion.span
                    className="h-2 w-2 rounded-full bg-[#35A9DE]"
                    animate={{
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                    }}
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/75">
                    Connected
                  </span>
                </div>
              </div>

              <div className="relative px-6 py-8">
                <div className="relative mx-auto flex h-[330px] max-w-md items-center justify-center">
                  <motion.div
                    className="absolute h-[240px] w-[240px] rounded-full border border-[#005F99]/30"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 24,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <motion.div
                    className="absolute h-[285px] w-[285px] rounded-full border border-[#C8102E]/20"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 flex h-44 w-44 items-center justify-center rounded-full border border-white/15 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
                  >
                    <img
                      src="/images/logos/connecthub-logo.png"
                      alt="Fortuna Connect Hub"
                      className="h-auto w-[88%] object-contain"
                    />
                  </motion.div>

                  {[
                    {
                      title: "ERP",
                      icon: Database,
                      position: "left-0 top-10",
                      theme: "blue",
                    },
                    {
                      title: "APIs",
                      icon: Code2,
                      position: "right-0 top-14",
                      theme: "red",
                    },
                    {
                      title: "WMS",
                      icon: Layers3,
                      position: "bottom-12 left-2",
                      theme: "red",
                    },
                    {
                      title: "TMS",
                      icon: Truck,
                      position: "bottom-8 right-0",
                      theme: "blue",
                    },
                  ].map((node) => {
                    const Icon = node.icon;
                    const isBlue = node.theme === "blue";

                    return (
                      <motion.div
                        key={node.title}
                        whileHover={{
                          scale: 1.08,
                          y: -3,
                        }}
                        className={`absolute ${node.position} flex items-center gap-2 rounded-full border bg-[#06364B]/90 px-3 py-2 text-xs font-bold shadow-xl backdrop-blur-md ${
                          isBlue
                            ? "border-[#35A9DE]/30 text-[#35A9DE]"
                            : "border-[#C8102E]/30 text-[#ff7185]"
                        }`}
                      >
                        <Icon size={14} />
                        {node.title}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    ["CONNECT", "Systems & Partners", Network],
                    ["ORCHESTRATE", "Processes & Events", Workflow],
                    ["INTELLIGENCE", "Mapping & Validation", BrainCircuit],
                  ].map(([title, text, Icon], index) => {
                    const ToolIcon = Icon as ElementType;

                    return (
                      <div
                        key={title as string}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                      >
                        <ToolIcon
                          size={17}
                          className={
                            index === 1
                              ? "text-[#C8102E]"
                              : "text-[#35A9DE]"
                          }
                        />

                        <p className="mt-3 text-[8px] font-bold uppercase tracking-[0.16em] text-white/60">
                          {title as string}
                        </p>

                        <p className="mt-1 text-[10px] font-bold text-white/85">
                          {text as string}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL BACKBONE
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="THE DIGITAL BACKBONE"
            title={
              <>
                <span>
                  One Hub. One Connected
                </span>

                <span className="block text-[#C8102E]">
                  Ecosystem.
                </span>
              </>
            }
            description="Connect Hub transforms disconnected systems into a coordinated digital network, enabling reliable information exchange, automated workflows and connected visibility across enterprise and partner ecosystems."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Network,
                title: "Connect",
                label: "CONNECTED ECOSYSTEM",
                description:
                  "Connect ERP, CRM, WMS, TMS, suppliers, distributors, logistics partners, IoT feeds and external APIs.",
                theme: "blue" as Theme,
              },
              {
                icon: Workflow,
                title: "Orchestrate",
                label: "PROCESS AUTOMATION",
                description:
                  "Coordinate business processes and data flows through event-driven automation and workflow orchestration.",
                theme: "red" as Theme,
              },
              {
                icon: BrainCircuit,
                title: "Intelligent Exchange",
                label: "DATA INTELLIGENCE",
                description:
                  "Apply intelligent mapping, validation, cleansing and reconciliation to improve enterprise data quality.",
                theme: "blue" as Theme,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const isBlue = item.theme === "blue";

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`group relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] ${
                    isBlue
                      ? "border-[#005F99]/10 hover:border-[#005F99]/25"
                      : "border-[#C8102E]/10 hover:border-[#C8102E]/25"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      isBlue
                        ? "bg-[#005F99]/10"
                        : "bg-[#C8102E]/10"
                    }`}
                  />

                  <AnimatedToolIcon
                    Icon={Icon}
                    theme={item.theme}
                  />

                  <p
                    className={`relative mt-5 text-[8px] font-bold uppercase tracking-[0.18em] ${
                      isBlue
                        ? "text-[#005F99]"
                        : "text-[#C8102E]"
                    }`}
                  >
                    {item.label}
                  </p>

                  <h3 className="relative mt-2 text-xl font-black text-[#005F99]">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm font-medium leading-6 text-[#17466A]">
                    {item.description}
                  </p>

                  <div className="relative mt-6 flex items-center gap-2 border-t border-[#005F99]/[0.08] pt-4">
                    <CheckCircle2
                      size={14}
                      className={
                        isBlue
                          ? "text-[#005F99]"
                          : "text-[#C8102E]"
                      }
                    />

                    <span className="text-[10px] font-bold text-[#17466A]">
                      Connected capability
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title={
              <>
                <span>
                  Five Intelligent
                </span>

                <span className="block text-[#C8102E]">
                  Integration Layers.
                </span>
              </>
            }
            description="Connect Hub operates on an integration cloud framework designed to connect systems, orchestrate processes, apply intelligence and provide secure enterprise visibility."
          />

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
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative mt-12 overflow-hidden rounded-[30px] border border-[#005F99]/20 bg-[#06364B] shadow-[0_28px_80px_rgba(0,60,95,0.16)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            <div className="pointer-events-none absolute -left-48 top-0 h-[450px] w-[450px] rounded-full bg-[#005F99]/35 blur-[120px]" />

            <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/25 blur-[120px]" />

            <div className="relative border-b border-white/10 px-6 py-6 sm:px-8">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-[#35A9DE]">
                  <Layers3 size={20} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                    Integration Cloud Framework
                  </p>

                  <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                    Connect • Orchestrate • Understand • Secure
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative grid gap-4 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-5">
              {[
                {
                  number: "01",
                  title: "Connectivity",
                  icon: PlugZap,
                  text: "EDI translators, REST APIs and secure communication protocols.",
                },
                {
                  number: "02",
                  title: "Orchestration",
                  icon: Workflow,
                  text: "Real-time workflow and data transformation engine.",
                },
                {
                  number: "03",
                  title: "Intelligence",
                  icon: BrainCircuit,
                  text: "AI-powered mapping, validation and error correction.",
                },
                {
                  number: "04",
                  title: "Cloud",
                  icon: Cloud,
                  text: "Scalable multi-tenant SaaS infrastructure.",
                },
                {
                  number: "05",
                  title: "Security",
                  icon: ShieldCheck,
                  text: "Monitoring, analytics, encryption and compliance.",
                },
              ].map((layer) => {
                const Icon = layer.icon;

                return (
                  <motion.div
                    key={layer.number}
                    whileHover={{
                      y: -5,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-all duration-300 hover:border-[#35A9DE]/30 hover:bg-white/[0.075]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black tracking-[0.18em] text-[#C8102E]">
                        {layer.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005F99]/20 text-[#35A9DE]">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h4 className="mt-5 text-base font-black text-white">
                      {layer.title}
                    </h4>

                    <p className="mt-2 text-xs font-medium leading-5 text-white/65">
                      {layer.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CORE CAPABILITIES
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                Core Capability Framework
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-[-0.025em] text-[#005F99] sm:text-3xl">
                Everything your connected enterprise needs.
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#005F99]" />

              <span className="text-xs font-bold text-[#17466A]">
                One connected integration platform
              </span>
            </div>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              const isBlue = item.theme === "blue";

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`group relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] transition-all ${
                    isBlue
                      ? "border-[#005F99]/10 hover:border-[#005F99]/25"
                      : "border-[#C8102E]/10 hover:border-[#C8102E]/25"
                  }`}
                >
                  <div className="relative flex items-start justify-between">
                    <AnimatedToolIcon
                      Icon={Icon}
                      theme={item.theme}
                    />

                    <span
                      className={`text-[10px] font-black tracking-[0.18em] ${
                        isBlue
                          ? "text-[#005F99]/25"
                          : "text-[#C8102E]/25"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  <p
                    className={`mt-5 text-[8px] font-bold uppercase tracking-[0.18em] ${
                      isBlue
                        ? "text-[#005F99]"
                        : "text-[#C8102E]"
                    }`}
                  >
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#005F99]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-[#17466A]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-[#005F99]/[0.08] pt-4">
                    <CheckCircle2
                      size={14}
                      className={
                        isBlue
                          ? "text-[#005F99]"
                          : "text-[#C8102E]"
                      }
                    />

                    <span className="text-[10px] font-bold text-[#17466A]">
                      Connected capability
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          MODULES
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="PRODUCT MODULES"
            title={
              <>
                <span>
                  From Data Exchange
                </span>

                <span className="block text-[#C8102E]">
                  to Intelligent Automation.
                </span>
              </>
            }
            description="A modular integration platform supporting modernization, application connectivity, workflow automation, data intelligence, partner collaboration and enterprise security."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((item, index) => {
              const Icon = item.icon;
              const isBlue = item.theme === "blue";

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] ${
                    isBlue
                      ? "border-[#005F99]/10 hover:border-[#005F99]/25"
                      : "border-[#C8102E]/10 hover:border-[#C8102E]/25"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${
                      isBlue
                        ? "bg-[#005F99]"
                        : "bg-[#C8102E]"
                    }`}
                  />

                  <AnimatedToolIcon
                    Icon={Icon}
                    theme={item.theme}
                  />

                  <p
                    className={`mt-5 text-[8px] font-bold uppercase tracking-[0.18em] ${
                      isBlue
                        ? "text-[#005F99]"
                        : "text-[#C8102E]"
                    }`}
                  >
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#005F99]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-[#17466A]">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {item.items.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-xl border border-[#005F99]/[0.07] bg-[#F8FBFD] px-3 py-2.5 transition-all duration-300 hover:border-[#C8102E]/20 hover:bg-white"
                      >
                        <CheckCircle2
                          size={13}
                          className={
                            isBlue
                              ? "text-[#005F99]"
                              : "text-[#C8102E]"
                          }
                        />

                        <span className="text-[10px] font-bold text-[#17466A]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORKFLOWS
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="FUNCTIONAL WORKFLOWS"
            title={
              <>
                <span>
                  Move Information.
                </span>

                <span className="block text-[#C8102E]">
                  Trigger Action. Confirm Results.
                </span>
              </>
            }
            description="Connect Hub supports structured integration cycles and automated order-processing workflows across enterprise systems and supply-chain partners."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {[
              {
                number: "01",
                title: "API Integration Cycle",
                icon: Network,
                theme: "blue" as Theme,
                steps: [
                  "Partner Data Submission (EDI / API)",
                  "Data Mapping & Validation",
                  "Workflow Trigger",
                  "Partner Notification / ERP Update",
                  "Success Confirmation & Analytics",
                ],
              },
              {
                number: "02",
                title: "Automated Order Processing",
                icon: RefreshCw,
                theme: "red" as Theme,
                steps: [
                  "Purchase Order from ERP",
                  "EDI / API Transformation",
                  "Supplier Confirmation",
                  "Dispatch Notification via TMS",
                  "Invoice Synchronization",
                ],
              },
            ].map((workflow, index) => {
              const Icon = workflow.icon;
              const isBlue = workflow.theme === "blue";

              return (
                <motion.article
                  key={workflow.title}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] ${
                    isBlue
                      ? "border-[#005F99]/10 hover:border-[#005F99]/25"
                      : "border-[#C8102E]/10 hover:border-[#C8102E]/25"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isBlue
                          ? "bg-[#005F99]/[0.07] text-[#005F99]"
                          : "bg-[#C8102E]/[0.07] text-[#C8102E]"
                      }`}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <p
                        className={`text-[8px] font-bold uppercase tracking-[0.18em] ${
                          isBlue
                            ? "text-[#005F99]"
                            : "text-[#C8102E]"
                        }`}
                      >
                        Workflow {workflow.number}
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#005F99]">
                        {workflow.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-7 space-y-2.5">
                    {workflow.steps.map((step, stepIndex) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-xl border border-[#005F99]/[0.07] bg-[#F8FBFD] px-4 py-3 transition-all hover:border-[#C8102E]/20 hover:bg-white"
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                            isBlue
                              ? "bg-[#005F99]/10 text-[#005F99]"
                              : "bg-[#C8102E]/10 text-[#C8102E]"
                          }`}
                        >
                          {stepIndex + 1}
                        </span>

                        <span className="text-xs font-bold text-[#17466A]">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS VALUE
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative overflow-hidden rounded-[30px] border border-[#005F99]/20 bg-[#06364B] shadow-[0_28px_80px_rgba(0,60,95,0.16)]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            <div className="pointer-events-none absolute -left-48 top-0 h-[450px] w-[450px] rounded-full bg-[#005F99]/35 blur-[120px]" />

            <div className="pointer-events-none absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C8102E]/25 blur-[120px]" />

            <div className="relative px-6 py-12 sm:px-8 lg:px-10">
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                  <Sparkles size={13} className="text-[#C8102E]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#35A9DE]">
                    Business Value
                  </span>
                </div>

                <h2
                  className="mt-6 text-[clamp(2rem,4vw,3.3rem)] font-black leading-[1.08] tracking-[-0.035em]"
                  style={{
                    color: "#FFFFFF",
                    textShadow: "0 2px 18px rgba(0,0,0,0.25)",
                  }}
                >
                  <span style={{ color: "#FFFFFF" }}>
                    Turn Integration into an
                  </span>

                  <span className="block" style={{ color: "#C8102E" }}>
                    Operational Advantage.
                  </span>
                </h2>

                <p
                  className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-7 sm:text-base"
                  style={{ color: "rgba(255,255,255,0.78)" }}
                >
                  Connect Hub is designed to reduce fragmentation, improve
                  data exchange and accelerate connected collaboration across
                  enterprise and partner ecosystems.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {[
                  [
                    "EDI → API",
                    "Modernization",
                    "Enables real-time, scalable partner connectivity.",
                  ],
                  [
                    "AI",
                    "Data Mapping",
                    "Reduces manual integration effort through intelligent mapping.",
                  ],
                  [
                    "Real-Time",
                    "Automation",
                    "Improves collaboration and operational efficiency.",
                  ],
                  [
                    "Secure",
                    "Cloud Infrastructure",
                    "Supports compliance and enterprise data protection.",
                  ],
                  [
                    "Rapid",
                    "Partner Onboarding",
                    "Accelerates time-to-connect for new suppliers.",
                  ],
                ].map(([value, title, description]) => (
                  <motion.div
                    key={title}
                    whileHover={{
                      y: -6,
                    }}
                    className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5 transition-all duration-300 hover:border-[#C8102E]/35 hover:bg-white/[0.075]"
                  >
                    <p
                      className="text-xl font-black"
                      style={{ color: "#C8102E" }}
                    >
                      {value}
                    </p>

                    <h3
                      className="mt-2 text-sm font-black"
                      style={{ color: "#FFFFFF" }}
                    >
                      {title}
                    </h3>

                    <p
                      className="mt-3 text-[11px] font-medium leading-5"
                      style={{ color: "rgba(255,255,255,0.70)" }}
                    >
                      {description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATION ACROSS CONNECTED SUPPLY CHAINS
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="INDUSTRIES SERVED"
            title={
              <>
                <span>
                  Integration Across Connected
                </span>

                <span className="block text-[#C8102E]">
                  Supply Chains.
                </span>
              </>
            }
            description="Connect Hub supports connected information exchange across the industries and supply-chain environments addressed by the Fortuna ecosystem."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => {
              const Icon = item.icon;
              const isBlue = item.theme === "blue";

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className={`group relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] transition-all duration-300 ${
                    isBlue
                      ? "border-[#005F99]/10 hover:border-[#005F99]/30"
                      : "border-[#C8102E]/10 hover:border-[#C8102E]/30"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 ${
                      isBlue
                        ? "bg-[#005F99]"
                        : "bg-[#C8102E]"
                    }`}
                  />

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${
                      isBlue
                        ? "bg-[#005F99]/[0.09] text-[#005F99] group-hover:bg-[#005F99]/[0.14]"
                        : "bg-[#C8102E]/[0.09] text-[#C8102E] group-hover:bg-[#C8102E]/[0.14]"
                    }`}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <p
                    className={`mt-5 text-[8px] font-bold uppercase tracking-[0.18em] ${
                      isBlue
                        ? "text-[#005F99]"
                        : "text-[#C8102E]"
                    }`}
                  >
                    Connected Industry
                  </p>

                  <h3
                    className="mt-2 text-xl font-black leading-7"
                    style={{ color: "#C8102E" }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-[#17466A]">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#005F99]/[0.08] pt-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={14}
                        className={
                          isBlue
                            ? "text-[#005F99]"
                            : "text-[#C8102E]"
                        }
                      />

                      <span className="text-[10px] font-bold text-[#17466A]">
                        Connected ecosystem
                      </span>
                    </div>

                    <motion.div
                      animate={{
                        x: [0, 3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight
                        size={15}
                        className={
                          isBlue
                            ? "text-[#005F99]"
                            : "text-[#C8102E]"
                        }
                      />
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECTED FORTUNA ECOSYSTEM
      ====================================================== */}

      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="CONNECTED FORTUNA ECOSYSTEM"
            title={
              <>
                <span>
                  One Integration Layer.
                </span>

                <span className="block text-[#C8102E]">
                  Multiple Intelligent Platforms.
                </span>
              </>
            }
            description="Connect Hub provides the integration layer that enables Fortuna applications to exchange data and coordinate connected enterprise workflows."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                icon: ServerCog,
                title: "Enterprise Systems",
                items: [
                  "ERP",
                  "CRM",
                  "Finance Systems",
                  "Legacy Applications",
                ],
                theme: "blue" as Theme,
              },
              {
                icon: Network,
                title: "Fortuna Platforms",
                items: [
                  "Fortuna SIMS",
                  "Fortuna TMS",
                  "DemandSense",
                  "Plan Copilot",
                  "YardSync",
                  "Lastmile AI",
                  "Fortuna EAM",
                  "Fortuna IntelliAI",
                ],
                theme: "red" as Theme,
              },
              {
                icon: Globe2,
                title: "Partner Ecosystem",
                items: [
                  "Suppliers",
                  "Distributors",
                  "Logistics Partners",
                  "IoT Devices",
                  "External APIs",
                ],
                theme: "blue" as Theme,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const isBlue = item.theme === "blue";

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`rounded-[24px] border bg-white p-6 shadow-[0_14px_40px_rgba(0,60,100,0.065)] ${
                    isBlue
                      ? "border-[#005F99]/10 hover:border-[#005F99]/25"
                      : "border-[#C8102E]/10 hover:border-[#C8102E]/25"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        isBlue
                          ? "bg-[#005F99]/[0.07] text-[#005F99]"
                          : "bg-[#C8102E]/[0.07] text-[#C8102E]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <p
                        className={`text-[8px] font-bold uppercase tracking-[0.18em] ${
                          isBlue
                            ? "text-[#005F99]"
                            : "text-[#C8102E]"
                        }`}
                      >
                        Connected Network
                      </p>

                      <h3 className="mt-1 text-lg font-black text-[#005F99]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    {item.items.map((value, itemIndex) => (
                      <div
                        key={value}
                        className="flex items-center gap-3 rounded-xl border border-[#005F99]/[0.07] bg-[#F8FBFD] px-4 py-3 transition-all duration-300 hover:border-[#C8102E]/20 hover:bg-white"
                      >
                        {itemIndex % 2 === 0 ? (
                          <CheckCircle2
                            size={14}
                            className="text-[#005F99]"
                          />
                        ) : (
                          <Cable
                            size={14}
                            className="text-[#C8102E]"
                          />
                        )}

                        <span className="text-xs font-bold text-[#17466A]">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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
            className="relative overflow-hidden rounded-[28px] border border-[#005F99]/15 bg-white px-6 py-10 shadow-[0_18px_55px_rgba(0,60,100,0.07)] sm:px-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#005F99]/[0.035] via-transparent to-[#C8102E]/[0.035]" />

            <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8102E]">
                  The Digital Backbone
                </p>

                <h2 className="mt-2 text-2xl font-black tracking-[-0.025em] text-[#005F99] sm:text-3xl">
                  Connect. Orchestrate. Transform.
                </h2>

                <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-[#17466A]">
                  Build a connected enterprise ecosystem with Fortuna Connect Hub.
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-3 rounded-full border border-[#C8102E]/15 bg-white px-5 py-3 shadow-sm">
                <motion.span
                  className="h-2.5 w-2.5 rounded-full bg-[#C8102E]"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.55, 1, 0.55],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <span className="text-xs font-black text-[#005F99]">
                  FORTUNA CONNECT HUB
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}