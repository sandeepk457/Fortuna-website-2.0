"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cloud,
  Boxes,
  Workflow,
  PlugZap,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const architectureItems = [
  {
    icon: Cloud,
    title: "Cloud-Native Platform",
    description:
      "Built on scalable cloud infrastructure to support enterprise workloads with high availability and resilience.",
  },
  {
    icon: Boxes,
    title: "Microservices Architecture",
    description:
      "Independent services accelerate deployments, simplify maintenance, and improve scalability.",
  },
  {
    icon: PlugZap,
    title: "API-First Integration",
    description:
      "REST APIs enable seamless connectivity with ERP, CRM, Finance, WMS, and third-party applications.",
  },
  {
    icon: Workflow,
    title: "Event-Driven Processing",
    description:
      "Real-time business events synchronize inventory, procurement, warehouse, and logistics operations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    description:
      "Fault-tolerant architecture with monitoring, redundancy, and automatic recovery mechanisms.",
  },
  {
    icon: BarChart3,
    title: "Unified Analytics",
    description:
      "Centralized operational data powers dashboards, KPIs, and AI-driven business insights.",
  },
];

const stats = [
  {
    value: "99.9%",
    label: "Platform Availability",
  },
  {
    value: "10M+",
    label: "Transactions Supported",
  },
  {
    value: "Multi",
    label: "Tenant Ready",
  },
  {
    value: "Real-Time",
    label: "Data Synchronization",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#005F9910,transparent_35%),radial-gradient(circle_at_bottom_left,#C8102E10,transparent_35%)]" />

      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#005F99]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[#C8102E]/20 bg-red-50 px-4 py-2 text-sm font-semibold text-[#C8102E]">
            Enterprise Architecture
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#005F99] lg:text-5xl">
  Built for Modern Supply Chains
</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Fortuna SIMS is powered by a scalable cloud-native architecture that
            seamlessly connects procurement, inventory, warehouses, suppliers,
            AI, analytics, and enterprise applications through one intelligent,
            unified platform.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid items-start gap-12 lg:grid-cols-[1.45fr_1fr]">

                      {/* Left Side - Enterprise Architecture */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
           className="relative"
          >
            {/* Architecture Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl p-2">

              <Image
                src="/images/ai/architecture.png"
                alt="Fortuna Enterprise Architecture"
                width={1600}
                height={1200}
                className="w-full"
                priority
              />

              {/* Top Left Badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute left-5 top-5 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Cloud Platform
                </p>

                <h4 className="mt-1 font-bold text-[#005F99]">
                  Enterprise Ready
                </h4>
              </motion.div>

              {/* Top Right Badge */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute right-5 top-5 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  AI Engine
                </p>

                <h4 className="mt-1 font-bold text-[#C8102E]">
                  Predictive Intelligence
                </h4>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-6 left-6 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <h4 className="font-semibold text-slate-900">
                  API Gateway
                </h4>

                <p className="text-sm text-slate-500">
                  ERP • CRM • Finance
                </p>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute bottom-6 right-6 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <h4 className="font-semibold text-slate-900">
                  Analytics
                </h4>

                <p className="text-sm text-slate-500">
                  Live Dashboards
                </p>
              </motion.div>

            </div>


        <div className="mt-2">
  <span className="inline-flex rounded-full bg-[#C8102E]/10 px-4 py-2 text-sm font-semibold text-[#C8102E]">
    End-to-End Workflow
  </span>

  <h3 className="mt-4 text-2xl font-bold text-[#C8102E]">
  Intelligent Supply Chain Execution
</h3>

  <p className="mt-2 text-slate-600">
    From procurement to warehouse operations, inventory management,
    fulfillment, and analytics—Fortuna SIMS orchestrates every process
    through a unified enterprise workflow.
  </p>
</div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
>
  <Image
    src="/images/ai/workflow.png"
    alt="Workflow"
    width={1600}
    height={1200}
    className="w-full h-auto object-contain"
  />
</motion.div>


            {/* Floating Technology Chips */}

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -left-6 top-24 rounded-full bg-[#005F99] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              Microservices
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute -right-6 top-44 rounded-full bg-[#C8102E] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              REST APIs
            </motion.div>

            <motion.div
  animate={{ y: [-8, 8, -8] }}
  transition={{ repeat: Infinity, duration: 5 }}
  className="absolute bottom-12 left-16 rounded-full border border-[#C8102E]/20 bg-[#C8102E] px-5 py-2 text-sm font-semibold text-white shadow-xl"
>
  AI Powered
</motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 7 }}
              className="absolute bottom-0 right-12 rounded-full bg-[#005F99] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              Enterprise Scale
            </motion.div>

          </motion.div>

                    {/* Right Side - Architecture Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {architectureItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-lg backdrop-blur-xl"
                >
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#005F99]/5 via-transparent to-[#C8102E]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Top Border */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#005F99] via-[#C8102E] to-[#005F99] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] p-4 text-white shadow-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#C8102E]">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-[15px] leading-7 text-slate-600">
                      {item.description}
                    </p>

                    {/* Bottom Divider */}
                    <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                    {/* Footer */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#005F99]">
                        Enterprise Ready
                      </span>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-[#C8102E]"
                      >
                        →
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Circle */}
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#005F99]/10 to-[#C8102E]/10 blur-2xl" />
                </motion.div>
              );
            })}
          </motion.div>

        </div>

                {/* Enterprise KPI Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-[#005F99] via-[#0A6CA8] to-[#C8102E] p-10 shadow-2xl lg:p-14"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]" />

          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            {/* Heading */}
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-white lg:text-4xl">
                Built to Scale with Enterprise Growth
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">
                Fortuna SIMS is engineered for high-performance supply chain
                operations, ensuring security, scalability, reliability, and
                real-time visibility across your enterprise ecosystem.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-lg"
                >
                  <h4 className="text-4xl font-extrabold text-white">
                    {item.value}
                  </h4>

                  <p className="mt-3 text-sm font-medium uppercase tracking-widest text-white/75">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-12 border-t border-white/20 pt-8 text-center">
              <p className="text-base text-white/80">
                Cloud-native • API-First • Microservices • AI-Powered •
                Enterprise Secure • Built for Modern Supply Chains
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}