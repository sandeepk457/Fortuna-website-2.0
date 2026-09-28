"use client";

import { motion } from "framer-motion";

import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CalendarClock,
  CarFront,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Cloud,
  Container,
  DoorOpen,
  Fence,
  Layers3,
  LayoutDashboard,
  Navigation,
  Network,
  Radar,
  ScanLine,
  Settings2,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  Workflow,
  Wrench,
} from "lucide-react";

import type { ElementType, ReactNode } from "react";

/* =========================================================
   TYPES
========================================================= */

type Theme = "blue" | "red";

type Module = {
  number: string;
  icon: ElementType;
  title: string;
  label: string;
  description: string;
  submodules: string[];
  functionality: string[];
  theme: Theme;
};

type ArchitectureLayer = {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
  theme: Theme;
};

type Industry = {
  icon: ElementType;
  title: string;
  description: string;
  theme: Theme;
};

/* =========================================================
   PRODUCT MODULES
========================================================= */

const modules: Module[] = [
  {
    number: "01",
    icon: Fence,
    title: "Gate Entry & Access Control",
    label: "SMART GATE OPERATIONS",
    description:
      "Digitize vehicle entry, driver validation and security checks before vehicles enter the yard.",
    submodules: [
      "Vehicle Registration & Verification",
      "Driver ID & E-Pass Management",
      "Entry Scheduling & Time Slot Control",
      "Security Validation with QR / License Scan",
    ],
    functionality: [
      "Automated gate check-in using QR or RFID scanning.",
      "Real-time validation of driver credentials and shipment details.",
      "Auto-allocation of gate entry based on scheduled time slot.",
      "Integration with Fortuna TMS for pre-approved trip authentication.",
      "Live dashboard for entry queue management and security supervision.",
    ],
    theme: "blue",
  },
  {
    number: "02",
    icon: Radar,
    title: "Yard Vehicle Tracking & Monitoring",
    label: "REAL-TIME YARD VISIBILITY",
    description:
      "Track vehicle location, movement and operational status across the yard in real time.",
    submodules: [
      "Real-Time Yard Map View",
      "Vehicle Status Tracking",
      "Geo-Fence & IoT Tag Integration",
      "Dock Queue Visualization",
    ],
    functionality: [
      "Interactive yard layout showing vehicle location and movement.",
      "IoT sensors and geo-tags capture truck position within the yard.",
      "Color-coded status indicators for faster identification.",
      "Auto-alerts for overstayed or idle vehicles.",
      "Historical playback of yard activity for audits.",
    ],
    theme: "red",
  },
  {
    number: "03",
    icon: Warehouse,
    title: "Dock & Slot Management",
    label: "INTELLIGENT DOCK UTILIZATION",
    description:
      "Coordinate dock capacity, vehicle assignments, loading and unloading activities.",
    submodules: [
      "Dock Scheduling Engine",
      "Dynamic Slot Assignment",
      "Load / Unload Task Management",
      "Equipment & Crew Coordination",
    ],
    functionality: [
      "AI engine optimizes dock utilization based on load, weight and type.",
      "Real-time dock assignment for inbound and outbound trucks.",
      "Automated alerts for dock availability and delays.",
      "Integration with Fortuna SIMS for material availability and dispatch readiness.",
      "Digital job cards for crew, equipment and task tracking.",
    ],
    theme: "blue",
  },
  {
    number: "04",
    icon: CalendarClock,
    title: "Appointment & Schedule Management",
    label: "SMART APPOINTMENTS",
    description:
      "Enable suppliers and transporters to schedule delivery and pickup appointments through a connected workflow.",
    submodules: [
      "Appointment Booking Portal",
      "AI Slot Recommendation Engine",
      "Reschedule & Approval Workflow",
      "SLA Monitoring Dashboard",
    ],
    functionality: [
      "Web portal for suppliers and transporters to book delivery or pickup slots.",
      "AI recommends optimal slots based on congestion patterns.",
      "Automatic approval and scheduling through cloud integration.",
      "Monitors on-time arrival and departure performance against SLA benchmarks.",
    ],
    theme: "red",
  },
  {
    number: "05",
    icon: Clock3,
    title: "Load, Unload & Turnaround Management",
    label: "CYCLE TIME CONTROL",
    description:
      "Track the complete gate-in to gate-out journey and identify operational delays.",
    submodules: [
      "Loading / Unloading Operation Tracker",
      "Turnaround Time Analytics",
      "Dock Utilization Metrics",
      "Delay Cause Analysis",
    ],
    functionality: [
      "Tracks loading and unloading cycles through mobile or IoT feeds.",
      "AI calculates turnaround time for each trip.",
      "Visual KPIs for dock and operator efficiency.",
      "Auto-escalation for delayed operations.",
    ],
    theme: "blue",
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Control Tower & Command Center",
    label: "CENTRALIZED OPERATIONS",
    description:
      "Provide supervisors and operations teams with a unified view of yard activity, events and exceptions.",
    submodules: [
      "Unified Yard Dashboard",
      "Event Alerts & Notifications",
      "Exception Handling & Escalation",
      "Live Video / IoT Sensor Feed Integration",
    ],
    functionality: [
      "Centralized monitoring for multiple yards and facilities.",
      "Real-time alerts for safety breaches or idle vehicles.",
      "Integration with CCTV and IoT for automated anomaly detection.",
      "Command-based workflows for security and operations staff.",
    ],
    theme: "red",
  },
  {
    number: "07",
    icon: BarChart3,
    title: "Analytics & Reporting",
    label: "YARD INTELLIGENCE",
    description:
      "Convert yard activity into measurable performance intelligence for continuous improvement.",
    submodules: [
      "KPI Performance Dashboards",
      "Yard Utilization Heat Maps",
      "Delay & Exception Reports",
      "Predictive Efficiency Analytics",
    ],
    functionality: [
      "Visual analytics for throughput, dwell time and utilization.",
      "Predictive performance tracking for yards, docks and gates.",
      "Exportable reports for management.",
      "Comparative analysis between multiple sites or regions.",
    ],
    theme: "blue",
  },
];

/* =========================================================
   ARCHITECTURE
========================================================= */

const architectureLayers: ArchitectureLayer[] = [
  {
    number: "01",
    icon: Cloud,
    title: "Cloud Infrastructure Layer",
    description:
      "Secure SaaS environment supporting scalable YardSync operations.",
    theme: "blue",
  },
  {
    number: "02",
    icon: Radar,
    title: "IoT & Sensor Integration Layer",
    description:
      "Captures real-time yard, gate, vehicle and equipment information.",
    theme: "red",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "AI Intelligence Layer",
    description:
      "Supports predictive scheduling, event optimization and intelligent alerts.",
    theme: "blue",
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Application Layer",
    description:
      "Interactive dashboards for supervisors, guards, transport and logistics teams.",
    theme: "red",
  },
];

/* =========================================================
   WORKFLOWS
========================================================= */

const workflows = [
  {
    letter: "A",
    title: "Inbound Flow",
    icon: ArrowDown,
    color: "blue" as Theme,
    steps: [
      "Trip Creation via TMS",
      "Gate Check-In",
      "Dock Allocation",
      "Unload Operation",
      "Gate-Out",
      "Performance Record Update",
    ],
  },
  {
    letter: "B",
    title: "Outbound Flow",
    icon: ArrowUpRight,
    color: "red" as Theme,
    steps: [
      "Dock Allocation",
      "Loading & Weight",
      "Gate Clearance",
      "Dispatch",
      "Delivery Confirmation",
      "SLA Evaluation",
    ],
  },
  {
    letter: "C",
    title: "Scheduling Workflow",
    icon: CalendarClock,
    color: "blue" as Theme,
    steps: [
      "Appointment Booking",
      "AI Slot Suggestion",
      "Dock Scheduling",
      "Reschedule or Escalation",
      "Slot Confirmation",
    ],
  },
];

/* =========================================================
   BUSINESS VALUE
========================================================= */

const businessValues = [
  {
    icon: BrainCircuit,
    accent: "AI Powered",
    title: "Scheduling",
    description: "Reduce congestion and idle time.",
  },
  {
    icon: Radar,
    accent: "IoT Vehicle",
    title: "Tracking",
    description: "Real-time visibility and yard control.",
  },
  {
    icon: Cloud,
    accent: "Cloud SaaS",
    title: "Platform",
    description: "Accessible, scalable and secure.",
  },
  {
    icon: Workflow,
    accent: "Integrated Dock",
    title: "& Gate Operations",
    description: "Smooth flow between TMS and WMS.",
  },
  {
    icon: LayoutDashboard,
    accent: "Centralized",
    title: "Control Tower",
    description: "Unified view for multi-site operations.",
  },
  {
    icon: BarChart3,
    accent: "Predictive",
    title: "Analytics",
    description: "Proactive performance management.",
  },
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries: Industry[] = [
  {
    icon: CarFront,
    title: "Automotive & Industrial Manufacturing",
    description:
      "Coordinate supplier vehicles, production-yard movement, dock operations and plant logistics.",
    theme: "blue",
  },
  {
    icon: Container,
    title: "Ports & Logistics",
    description:
      "Improve vehicle movement, gate coordination, dock visibility and logistics-network efficiency.",
    theme: "red",
  },
  {
    icon: Truck,
    title: "Food & Beverage Distribution",
    description:
      "Support high-volume inbound and outbound yard operations with connected scheduling and visibility.",
    theme: "blue",
  },
  {
    icon: Warehouse,
    title: "Fashion & Retail",
    description:
      "Coordinate supplier appointments, distribution-center arrivals and loading operations.",
    theme: "red",
  },
  {
    icon: ShieldCheck,
    title: "Pharma & Healthcare",
    description:
      "Support controlled movement, secure access and traceable logistics operations.",
    theme: "blue",
  },
  {
    icon: Navigation,
    title: "E-Commerce & Distribution",
    description:
      "Improve dock scheduling, vehicle turnaround and high-volume distribution-center flow.",
    theme: "red",
  },
];

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-5xl text-center"
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${
          dark
            ? "border-white/10 bg-white/[0.04]"
            : "border-[#005F99]/15 bg-white"
        }`}
      >
        <Sparkles size={14} className="text-[#C8102E]" />

        <span
          className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
            dark ? "text-[#35A9DE]" : "text-[#005F99]"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <h2 className="mt-8 text-[clamp(2.7rem,5vw,5rem)] font-black leading-[1.02] tracking-[-0.045em]">
        {title}
      </h2>

      <div className="mx-auto mt-7 flex items-center justify-center gap-2">
        <span className="h-[4px] w-14 rounded-full bg-[#C8102E]" />
        <span className="h-[4px] w-8 rounded-full bg-[#005F99]" />
      </div>

      <p
        className={`mx-auto mt-7 max-w-4xl text-base font-medium leading-8 sm:text-lg ${
          dark ? "text-white/70" : "text-[#3284B8]"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

/* =========================================================
   HERO VISUAL
========================================================= */

function YardVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px]">

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-[#005F99]/10
          bg-white
          p-6
          shadow-[0_30px_100px_rgba(0,95,153,0.15)]
        "
      >

        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#005F99]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C8102E]/10 blur-3xl" />

        <div className="relative flex items-center justify-between">

          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005F99]">
              YardSync Control
            </div>

            <div className="mt-1 text-xl font-black text-slate-900">
              Intelligent Yard View
            </div>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#005F99]/10 text-[#005F99]">
            <Radar size={23} />
          </div>

        </div>

        <div className="relative mt-6 h-[360px] overflow-hidden rounded-[26px] border border-slate-200 bg-[#F7FAFC]">

          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,95,153,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,.08) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          <div className="absolute left-[8%] right-[8%] top-[44%] h-14 rounded-full bg-slate-200/80" />

          <div className="absolute bottom-[12%] left-[12%] top-[12%] w-14 rounded-full bg-slate-200/70" />

          {[
            { left: "20%", top: "18%", label: "D01" },
            { left: "38%", top: "18%", label: "D02" },
            { left: "56%", top: "18%", label: "D03" },
            { left: "74%", top: "18%", label: "D04" },
          ].map((dock) => (
            <div
              key={dock.label}
              className="absolute flex h-14 w-20 items-center justify-center rounded-xl border border-[#005F99]/15 bg-white shadow-sm"
              style={{
                left: dock.left,
                top: dock.top,
              }}
            >
              <div className="text-center">
                <Warehouse
                  size={17}
                  className="mx-auto text-[#005F99]"
                />

                <div className="mt-1 text-[9px] font-bold text-slate-600">
                  {dock.label}
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-[12%] left-[6%] flex h-16 w-20 items-center justify-center rounded-xl border border-[#C8102E]/20 bg-white shadow-sm">
            <div className="text-center">
              <DoorOpen
                size={19}
                className="mx-auto text-[#C8102E]"
              />

              <div className="mt-1 text-[9px] font-bold text-[#C8102E]">
                GATE
              </div>
            </div>
          </div>

          <motion.div
            animate={{ x: [0, 45, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[20%] top-[42%] flex h-12 w-20 items-center justify-center rounded-xl border border-[#005F99]/20 bg-white shadow-md"
          >
            <Truck size={22} className="text-[#005F99]" />
          </motion.div>

          <motion.div
            animate={{ x: [0, -35, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[14%] top-[48%] flex h-12 w-20 items-center justify-center rounded-xl border border-[#C8102E]/20 bg-white shadow-md"
          >
            <Truck size={22} className="text-[#C8102E]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-5 right-5 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-xs font-bold text-slate-700">
                Yard Status
              </span>
            </div>

            <div className="mt-2 text-lg font-black text-[#005F99]">
              Live
            </div>

            <div className="text-[10px] text-slate-500">
              Real-time monitoring
            </div>
          </motion.div>

        </div>

        <div className="relative mt-5 grid grid-cols-3 gap-3">
          {[
            ["Vehicles", "24"],
            ["Active Docks", "08"],
            ["Alerts", "03"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 text-center"
            >
              <div className="text-xl font-black text-[#005F99]">
                {value}
              </div>

              <div className="mt-1 text-[10px] font-semibold text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>

      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-4 top-20 hidden rounded-2xl border border-[#005F99]/10 bg-white px-4 py-3 shadow-xl lg:flex lg:items-center lg:gap-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#005F99]/10 text-[#005F99]">
          <ScanLine size={18} />
        </div>

        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Gate
          </div>

          <div className="text-xs font-black text-slate-800">
            Vehicle Verified
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-4 bottom-24 hidden rounded-2xl border border-[#C8102E]/10 bg-white px-4 py-3 shadow-xl lg:flex lg:items-center lg:gap-3"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8102E]/10 text-[#C8102E]">
          <BrainCircuit size={18} />
        </div>

        <div>
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            AI
          </div>

          <div className="text-xs font-black text-slate-800">
            Slot Optimized
          </div>
        </div>
      </motion.div>

    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function YardSyncPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-white">

        <div className="pointer-events-none absolute inset-0 -z-10">

          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,95,153,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,.07) 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />

          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -30, 0],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#005F99]/15 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, 35, 0],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-32 h-96 w-96 rounded-full bg-[#C8102E]/10 blur-3xl"
          />

        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 sm:pb-28 lg:px-8 lg:pb-32 lg:pt-20">

          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <div className="inline-flex items-center gap-2 rounded-full border border-[#C8102E]/20 bg-white px-4 py-2 shadow-sm">
                <Sparkles
                  size={14}
                  className="text-[#C8102E]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005F99]">
                  AI-Driven Yard & Dock Management
                </span>
              </div>

              <div className="mt-8 flex items-center">
                <img
                  src="/images/logos/yardsync-logo.png"
                  alt="Fortuna YardSync"
                  className="h-auto w-[260px] object-contain"
                />
              </div>

              <h1 className="mt-8 text-[clamp(3rem,6vw,5.8rem)] font-black leading-[0.98] tracking-[-0.05em]">
                <span className="block text-[#005F99]">
                  Orchestrate
                </span>

                <span className="block text-[#C8102E]">
                  Every Yard.
                </span>

                <span className="block text-[#005F99]">
                  Every Move.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#17466A]">
                Real-time visibility, intelligent scheduling and connected
                yard operations — from gate entry to dock and dispatch.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                Fortuna YardSync transforms industrial yards, warehouses and
                distribution centers into intelligent, orchestrated ecosystems
                where vehicles, gates, docks and teams move in coordination.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#C8102E]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_12px_30px_rgba(200,16,46,0.22)]
                    transition-all
                    hover:-translate-y-1
                    hover:bg-[#a90d27]
                  "
                >
                  Explore YardSync
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#modules"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#005F99]/20
                    bg-white
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-[#005F99]
                    shadow-sm
                    transition-all
                    hover:-translate-y-1
                    hover:border-[#005F99]/40
                    hover:shadow-lg
                  "
                >
                  Explore Capabilities
                  <ChevronRight size={17} />
                </a>

              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">

                {[
                  {
                    value: "Real-Time",
                    label: "Yard Visibility",
                  },
                  {
                    value: "AI",
                    label: "Scheduling",
                  },
                  {
                    value: "IoT",
                    label: "Connected Operations",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <div className="text-lg font-black text-[#C8102E]">
                      {item.value}
                    </div>

                    <div className="mt-1 text-[10px] font-semibold leading-4 text-[#005F99]">
                      {item.label}
                    </div>
                  </div>
                ))}

              </div>

            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
            >
              <YardVisual />
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM INTRO
      ====================================================== */}

      <section className="relative bg-[#F7FAFC] py-24 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="THE INTELLIGENT YARD"
            title={
              <>
                <span className="text-[#005F99]">
                  One Yard. One Connected
                </span>

                <span className="block text-[#C8102E]">
                  Operational View.
                </span>
              </>
            }
            description="Fortuna YardSync synchronizes vehicle entry, docking, loading, unloading and dispatch activities to create a connected operational environment across yards, warehouses and distribution centers."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {[
              {
                icon: Network,
                title: "Connect",
                description:
                  "Bring gates, vehicles, docks, warehouses, transport teams and systems into one connected environment.",
                theme: "blue" as Theme,
              },
              {
                icon: BrainCircuit,
                title: "Orchestrate",
                description:
                  "Coordinate appointments, dock assignments, vehicle movement and operational events intelligently.",
                theme: "red" as Theme,
              },
              {
                icon: BarChart3,
                title: "Optimize",
                description:
                  "Use real-time data, predictive analytics and performance KPIs to continuously improve yard operations.",
                theme: "blue" as Theme,
              },
            ].map((item, index) => {
              const Icon = item.icon;

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
                    y: -7,
                  }}
                  className="
                    group
                    rounded-[26px]
                    border
                    border-slate-200
                    bg-white
                    p-7
                    shadow-sm
                    transition-all
                    duration-300
                    hover:shadow-xl
                  "
                >

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      item.theme === "blue"
                        ? "bg-[#005F99]/10 text-[#005F99]"
                        : "bg-[#C8102E]/10 text-[#C8102E]"
                    } transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-[#C8102E]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#17466A]">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">

        <div className="pointer-events-none absolute inset-0">

          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,95,153,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,95,153,.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="SYSTEM ARCHITECTURE"
            title={
              <>
                <span className="text-[#005F99]">
                  Four Layers of
                </span>

                <span className="block text-[#C8102E]">
                  Intelligent Yard Control.
                </span>
              </>
            }
            description="YardSync operates within the Fortuna Intelligent Cloud Framework, combining secure cloud infrastructure, IoT connectivity, AI intelligence and operational applications."
          />

          <div className="relative mx-auto mt-16 max-w-5xl">

            <div className="absolute left-1/2 top-10 hidden h-[calc(100%-80px)] w-px -translate-x-1/2 bg-gradient-to-b from-[#005F99]/20 via-[#C8102E]/30 to-[#005F99]/20 md:block" />

            <div className="space-y-5">

              {architectureLayers.map((layer, index) => {
                const Icon = layer.icon;
                const isBlue = layer.theme === "blue";

                return (
                  <motion.div
                    key={layer.title}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -30 : 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.65,
                    }}
                    whileHover={{
                      scale: 1.015,
                    }}
                    className={`
                      relative
                      z-10
                      mx-auto
                      max-w-3xl
                      rounded-[26px]
                      border
                      bg-white
                      p-6
                      shadow-[0_15px_50px_rgba(0,60,100,0.08)]
                      ${
                        isBlue
                          ? "border-[#005F99]/15"
                          : "border-[#C8102E]/15"
                      }
                    `}
                  >

                    <div className="flex items-center gap-5">

                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          ${
                            isBlue
                              ? "bg-[#005F99]/10 text-[#005F99]"
                              : "bg-[#C8102E]/10 text-[#C8102E]"
                          }
                        `}
                      >
                        <Icon size={27} />
                      </div>

                      <div className="flex-1">

                        <div
                          className={`text-[10px] font-black tracking-[0.2em] ${
                            isBlue
                              ? "text-[#005F99]"
                              : "text-[#C8102E]"
                          }`}
                        >
                          LAYER {layer.number}
                        </div>

                        <h3 className="mt-1 text-xl font-black text-[#C8102E]">
                          {layer.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-6 text-[#17466A]">
                          {layer.description}
                        </p>

                      </div>

                      <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-50 md:flex">
                        <ArrowRight
                          size={17}
                          className={
                            isBlue
                              ? "text-[#005F99]"
                              : "text-[#C8102E]"
                          }
                        />
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODULES
          FORTUNA GRADIENT HOVER
      ====================================================== */}

      <section
        id="modules"
        className="relative bg-[#F7FAFC] py-24 sm:py-28 lg:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="PRODUCT MODULES"
            title={
              <>
                <span className="text-[#005F99]">
                  From Gate Entry
                </span>

                <span className="block text-[#C8102E]">
                  to Yard Intelligence.
                </span>
              </>
            }
            description="Seven connected operational modules bring visibility, scheduling, control and analytics together across the complete yard journey."
          />

          <div className="mt-16 space-y-7">

            {modules.map((module, index) => {
              const Icon = module.icon;
              const isBlue = module.theme === "blue";

              return (
                <motion.article
                  key={module.number}
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
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.008,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-slate-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-500
                    hover:border-transparent
                    hover:shadow-[0_25px_70px_rgba(0,95,153,0.18)]
                  "
                >

                  {/* =========================================
                      GRADIENT BACKGROUND
                  ========================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className={`
                        absolute
                        inset-0
                        ${
                          isBlue
                            ? "bg-gradient-to-br from-[#005F99]/12 via-white/95 to-[#C8102E]/10"
                            : "bg-gradient-to-br from-[#C8102E]/12 via-white/95 to-[#005F99]/10"
                        }
                      `}
                    />

                    <div
                      className={`
                        absolute
                        -right-24
                        -top-24
                        h-64
                        w-64
                        rounded-full
                        blur-3xl
                        ${
                          isBlue
                            ? "bg-[#005F99]/20"
                            : "bg-[#C8102E]/20"
                        }
                      `}
                    />

                    <div
                      className={`
                        absolute
                        -bottom-24
                        -left-24
                        h-64
                        w-64
                        rounded-full
                        blur-3xl
                        ${
                          isBlue
                            ? "bg-[#C8102E]/15"
                            : "bg-[#005F99]/15"
                        }
                      `}
                    />
                  </div>

                  {/* =========================================
                      GRADIENT TOP LINE
                  ========================================== */}

                  <div
                    className={`
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[4px]
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                      ${
                        isBlue
                          ? "bg-gradient-to-r from-[#005F99] via-[#248CC4] to-[#C8102E]"
                          : "bg-gradient-to-r from-[#C8102E] via-[#E4475C] to-[#005F99]"
                      }
                    `}
                  />

                  {/* =========================================
                      MODULE HEADER
                  ========================================== */}

                  <div
                    className={`
                      relative
                      z-10
                      flex
                      flex-col
                      gap-5
                      border-b
                      p-6
                      transition-colors
                      duration-500
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                      ${
                        isBlue
                          ? "border-[#005F99]/10 bg-[#005F99]/[0.025] group-hover:border-[#005F99]/15 group-hover:bg-transparent"
                          : "border-[#C8102E]/10 bg-[#C8102E]/[0.025] group-hover:border-[#C8102E]/15 group-hover:bg-transparent"
                      }
                    `}
                  >

                    <div className="flex items-center gap-4">

                      {/* ICON */}
                      <motion.div
                        whileHover={{
                          rotate: 5,
                          scale: 1.08,
                        }}
                        className={`
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          transition-all
                          duration-500
                          ${
                            isBlue
                              ? "bg-[#005F99]/10 text-[#005F99] group-hover:bg-gradient-to-br group-hover:from-[#005F99] group-hover:to-[#C8102E] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(0,95,153,0.25)]"
                              : "bg-[#C8102E]/10 text-[#C8102E] group-hover:bg-gradient-to-br group-hover:from-[#C8102E] group-hover:to-[#005F99] group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(200,16,46,0.25)]"
                          }
                        `}
                      >
                        <Icon size={27} />
                      </motion.div>

                      <div>

                        <div
                          className={`
                            text-[10px]
                            font-black
                            tracking-[0.2em]
                            transition-colors
                            duration-300
                            ${
                              isBlue
                                ? "text-[#005F99] group-hover:text-[#005F99]"
                                : "text-[#C8102E] group-hover:text-[#C8102E]"
                            }
                          `}
                        >
                          MODULE {module.number}
                        </div>

                        <h3 className="mt-1 text-xl font-black text-[#C8102E] transition-all duration-300 group-hover:text-[#005F99] sm:text-2xl">
                          {module.title}
                        </h3>

                      </div>
                    </div>

                    {/* LABEL */}
                    <div
                      className={`
                        w-fit
                        rounded-full
                        border
                        px-4
                        py-2
                        text-[9px]
                        font-black
                        tracking-[0.18em]
                        transition-all
                        duration-500
                        ${
                          isBlue
                            ? "border-[#005F99]/15 bg-[#005F99]/5 text-[#005F99] group-hover:border-[#C8102E]/25 group-hover:bg-gradient-to-r group-hover:from-[#005F99]/10 group-hover:to-[#C8102E]/10"
                            : "border-[#C8102E]/15 bg-[#C8102E]/5 text-[#C8102E] group-hover:border-[#005F99]/25 group-hover:bg-gradient-to-r group-hover:from-[#C8102E]/10 group-hover:to-[#005F99]/10"
                        }
                      `}
                    >
                      {module.label}
                    </div>

                  </div>

                  {/* =========================================
                      MODULE CONTENT
                  ========================================== */}

                  <div className="relative z-10 grid gap-8 p-6 lg:grid-cols-[0.85fr_1.15fr] lg:p-8">

                    {/* LEFT */}
                    <div>

                      <p className="text-sm font-medium leading-7 text-[#17466A] transition-colors duration-300 group-hover:text-[#123E5D]">
                        {module.description}
                      </p>

                      <div className="mt-6">

                        <div className="flex items-center gap-2">

                          <Layers3
                            size={16}
                            className="text-[#C8102E]"
                          />

                          <span className="text-xs font-black uppercase tracking-wider text-[#005F99]">
                            Submodules
                          </span>

                        </div>

                        <div className="mt-4 space-y-2">

                          {module.submodules.map((item) => (
                            <div
                              key={item}
                              className="
                                flex
                                items-start
                                gap-3
                                rounded-xl
                                bg-[#F7FAFC]
                                px-4
                                py-3
                                transition-all
                                duration-300
                                group-hover:bg-white/80
                                group-hover:shadow-sm
                              "
                            >

                              <CheckCircle2
                                size={16}
                                className="mt-0.5 shrink-0 text-[#C8102E]"
                              />

                              <span className="text-xs font-semibold leading-5 text-[#17466A]">
                                {item}
                              </span>

                            </div>
                          ))}

                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div>

                      <div className="flex items-center gap-2">

                        <Settings2
                          size={17}
                          className="text-[#C8102E]"
                        />

                        <span className="text-xs font-black uppercase tracking-wider text-[#005F99]">
                          Operational Functionality
                        </span>

                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2">

                        {module.functionality.map((item, itemIndex) => (
                          <motion.div
                            key={item}
                            whileHover={{
                              x: 4,
                              scale: 1.015,
                            }}
                            className="
                              group/item
                              rounded-2xl
                              border
                              border-slate-200
                              bg-white
                              p-4
                              transition-all
                              duration-300
                              hover:border-[#005F99]/25
                              hover:shadow-md
                            "
                          >

                            <div className="flex gap-3">

                              <span
                                className={`
                                  flex
                                  h-7
                                  w-7
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  text-[10px]
                                  font-black
                                  transition-all
                                  duration-300
                                  ${
                                    isBlue
                                      ? "bg-[#005F99]/10 text-[#005F99] group-hover/item:bg-gradient-to-br group-hover/item:from-[#005F99] group-hover/item:to-[#C8102E] group-hover/item:text-white"
                                      : "bg-[#C8102E]/10 text-[#C8102E] group-hover/item:bg-gradient-to-br group-hover/item:from-[#C8102E] group-hover/item:to-[#005F99] group-hover/item:text-white"
                                  }
                                `}
                              >
                                {String(itemIndex + 1).padStart(2, "0")}
                              </span>

                              <p className="text-xs font-medium leading-5 text-[#17466A]">
                                {item}
                              </p>

                            </div>
                          </motion.div>
                        ))}

                      </div>

                    </div>

                  </div>

                  {/* =========================================
                      BOTTOM GRADIENT GLOW
                  ========================================== */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      bottom-0
                      left-1/2
                      h-1
                      w-0
                      -translate-x-1/2
                      rounded-full
                      opacity-0
                      blur-sm
                      transition-all
                      duration-700
                      group-hover:w-[70%]
                      group-hover:opacity-100
                      ${
                        isBlue
                          ? "bg-gradient-to-r from-[#005F99] to-[#C8102E]"
                          : "bg-gradient-to-r from-[#C8102E] to-[#005F99]"
                      }
                    `}
                  />

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          FUNCTIONAL WORKFLOWS
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">

        <div className="pointer-events-none absolute inset-0">

          <motion.div
            animate={{
              x: [0, 50, 0],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[#005F99] blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -40, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-[#C8102E] blur-3xl"
          />

        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="FUNCTIONAL WORKFLOWS"
            title={
              <>
                <span className="text-[#005F99]">
                  Every Movement.
                </span>

                <span className="block text-[#C8102E]">
                  One Connected Workflow.
                </span>
              </>
            }
            description="YardSync connects inbound, outbound and scheduling activities into structured operational workflows that teams can monitor and control."
          />

          <div className="relative mt-16">

            <div className="absolute left-[8%] right-[8%] top-16 hidden h-px bg-gradient-to-r from-[#005F99]/10 via-[#C8102E]/40 to-[#005F99]/10 lg:block" />

            <div className="grid gap-6 lg:grid-cols-3">

              {workflows.map((workflow, index) => {
                const Icon = workflow.icon;
                const isBlue = workflow.color === "blue";

                return (
                  <motion.div
                    key={workflow.title}
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
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -8,
                    }}
                    className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-xl"
                  >

                    <div className="flex items-center justify-between">

                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          transition-all
                          duration-500
                          group-hover:bg-gradient-to-br
                          group-hover:text-white
                          ${
                            isBlue
                              ? "bg-[#005F99]/10 text-[#005F99] group-hover:from-[#005F99] group-hover:to-[#C8102E]"
                              : "bg-[#C8102E]/10 text-[#C8102E] group-hover:from-[#C8102E] group-hover:to-[#005F99]"
                          }
                        `}
                      >
                        <Icon size={27} />
                      </div>

                      <div
                        className={`text-4xl font-black ${
                          isBlue
                            ? "text-[#005F99]/10"
                            : "text-[#C8102E]/10"
                        }`}
                      >
                        {workflow.letter}
                      </div>

                    </div>

                    <h3 className="mt-6 text-xl font-black text-[#C8102E]">
                      {workflow.title}
                    </h3>

                    <div className="mt-6 space-y-3">

                      {workflow.steps.map((step, stepIndex) => (
                        <div
                          key={step}
                          className="flex items-center gap-3"
                        >

                          <div
                            className={`
                              flex
                              h-7
                              w-7
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              text-[9px]
                              font-black
                              ${
                                isBlue
                                  ? "bg-[#005F99]/10 text-[#005F99]"
                                  : "bg-[#C8102E]/10 text-[#C8102E]"
                              }
                            `}
                          >
                            {stepIndex + 1}
                          </div>

                          <span className="text-xs font-semibold text-[#17466A]">
                            {step}
                          </span>

                        </div>
                      ))}

                    </div>

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS IMPACT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061B2B] py-24 sm:py-28 lg:py-32">

        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -30, 0],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#005F99] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 40, 0],
            opacity: [0.06, 0.14, 0.06],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C8102E] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="BUSINESS IMPACT"
            dark
            title={
              <>
                <span className="text-white">
                  Turn Yard Complexity
                </span>

                <span className="block text-[#C8102E]">
                  Into Operational Advantage.
                </span>
              </>
            }
            description="YardSync is designed to reduce waiting, improve asset utilization, accelerate gate-to-gate cycles and create end-to-end operational visibility."
          />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {businessValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={`${item.accent}-${item.title}`}
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
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group rounded-[26px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur-md transition-all hover:border-[#C8102E]/30 hover:bg-white/[0.08]"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.07] text-[#35A9DE] transition-all group-hover:bg-[#C8102E]/10 group-hover:text-[#C8102E]">
                      <Icon size={23} />
                    </div>

                    <ArrowRight
                      size={17}
                      className="text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[#C8102E]"
                    />

                  </div>

                  <div className="mt-6 text-sm font-black text-[#C8102E]">
                    {item.accent}
                  </div>

                  <h3 className="mt-1 text-xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-6 text-white/65">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          OPERATIONAL JOURNEY
      ====================================================== */}

      <section className="relative bg-[#F7FAFC] py-24 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="OPERATIONAL JOURNEY"
            title={
              <>
                <span className="text-[#005F99]">
                  From Gate-In
                </span>

                <span className="block text-[#C8102E]">
                  to Gate-Out.
                </span>
              </>
            }
            description="Every vehicle movement becomes a connected digital event, enabling teams to monitor, coordinate and optimize yard activity."
          />

          <div className="mt-16 grid items-center gap-4 md:grid-cols-5">

            {[
              {
                icon: DoorOpen,
                title: "Gate-In",
                label: "Validate",
              },
              {
                icon: Truck,
                title: "Vehicle",
                label: "Track",
              },
              {
                icon: Warehouse,
                title: "Dock",
                label: "Allocate",
              },
              {
                icon: Wrench,
                title: "Operation",
                label: "Execute",
              },
              {
                icon: CheckCircle2,
                title: "Gate-Out",
                label: "Confirm",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const isRed = index % 2 === 1;

              return (
                <div
                  key={item.title}
                  className="relative flex items-center justify-center"
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -7,
                    }}
                    className="group relative w-full rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-transparent hover:shadow-xl"
                  >

                    <div
                      className={`
                        mx-auto
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        transition-all
                        duration-500
                        group-hover:bg-gradient-to-br
                        group-hover:text-white
                        ${
                          isRed
                            ? "bg-[#C8102E]/10 text-[#C8102E] group-hover:from-[#C8102E] group-hover:to-[#005F99]"
                            : "bg-[#005F99]/10 text-[#005F99] group-hover:from-[#005F99] group-hover:to-[#C8102E]"
                        }
                      `}
                    >
                      <Icon size={26} />
                    </div>

                    <h3 className="mt-5 text-base font-black text-[#C8102E]">
                      {item.title}
                    </h3>

                    <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#005F99]">
                      {item.label}
                    </div>

                  </motion.div>

                  {index < 4 && (
                    <ArrowRight
                      className="absolute -right-5 z-20 hidden text-[#005F99]/40 lg:block"
                      size={20}
                    />
                  )}

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="relative bg-white py-24 sm:py-28 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <SectionHeading
            eyebrow="INDUSTRIES SERVED"
            title={
              <>
                <span className="text-[#005F99]">
                  Built for Complex
                </span>

                <span className="block text-[#C8102E]">
                  Yard Environments.
                </span>
              </>
            }
            description="YardSync supports connected yard, gate, dock and logistics operations across diverse supply-chain environments."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isBlue = industry.theme === "blue";

              return (
                <motion.article
                  key={industry.title}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-transparent hover:shadow-xl"
                >

                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all
                      duration-500
                      group-hover:bg-gradient-to-br
                      group-hover:text-white
                      ${
                        isBlue
                          ? "bg-[#005F99]/10 text-[#005F99] group-hover:from-[#005F99] group-hover:to-[#C8102E]"
                          : "bg-[#C8102E]/10 text-[#C8102E] group-hover:from-[#C8102E] group-hover:to-[#005F99]"
                      }
                    `}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-lg font-black leading-7 text-[#C8102E]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-[#17466A]">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#005F99]">
                    Explore Application
                    <ArrowRight size={13} />
                  </div>

                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#061B2B] py-24 sm:py-28 lg:py-32">

        <div className="pointer-events-none absolute inset-0">

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.08, 0.16, 0.08],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#005F99] blur-3xl"
          />

        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#C8102E]">
            <Radar size={30} />
          </div>

          <h2 className="mt-8 text-[clamp(2.7rem,5vw,4.8rem)] font-black leading-[1.02] tracking-[-0.04em]">

            <span className="text-white">
              Ready to Make Your Yard
            </span>

            <span className="block text-[#C8102E]">
              Intelligent?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-white/70 sm:text-lg">
            Connect gate operations, vehicles, docks, appointments,
            turnaround and analytics through one intelligent YardSync platform.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#C8102E]
                px-8
                py-4
                text-sm
                font-bold
                text-white
                shadow-[0_15px_40px_rgba(200,16,46,0.25)]
                transition-all
                hover:-translate-y-1
                hover:bg-[#a90d27]
              "
            >
              Request a Demo
              <ArrowRight size={17} />
            </a>

            <a
              href="/products"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/15
                bg-white/[0.05]
                px-8
                py-4
                text-sm
                font-bold
                text-white
                backdrop-blur
                transition-all
                hover:-translate-y-1
                hover:bg-white/[0.1]
              "
            >
              Explore Fortuna Products
              <ArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}