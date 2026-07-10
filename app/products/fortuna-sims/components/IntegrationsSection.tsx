"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Database,
  Network,
  Building2,
  Receipt,
  BarChart3,
  PlugZap,
} from "lucide-react";

const integrations = [
  {
    icon: Building2,
    title: "ERP Systems",
    description:
      "Connect with enterprise resource planning applications.",
  },
  {
    icon: Database,
    title: "CRM Platforms",
    description:
      "Synchronize customer and sales information seamlessly.",
  },
  {
    icon: Receipt,
    title: "Finance Systems",
    description:
      "Exchange financial transactions securely in real time.",
  },
  {
    icon: PlugZap,
    title: "REST APIs",
    description:
      "Open APIs enable secure third-party integrations.",
  },
  {
    icon: Network,
    title: "EDI Connectivity",
    description:
      "Integrate suppliers and business partners effortlessly.",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Deliver real-time dashboards and operational insights.",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#005F9908,transparent_35%),radial-gradient(circle_at_bottom_right,#C8102E08,transparent_35%)]" />

      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#005F99]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />

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
            Enterprise Integrations
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
  <span className="text-[#C8102E]">
    Connect with
  </span>
  <span className="text-[#005F99]">
    {" "}Your Enterprise Ecosystem
  </span>
</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Fortuna SIMS integrates seamlessly with enterprise applications,
            APIs, finance systems, CRM platforms, and analytics solutions,
            ensuring secure real-time connectivity across your supply chain.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.2fr_1fr]">
                  {/* Left Side - Integration Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

              <Image
                src="/images/ai/integration.png"
                alt="Fortuna Enterprise Integrations"
                width={1600}
                height={1200}
                className="w-full h-auto object-contain"
                priority
              />

            </div>

            {/* Floating Chip */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-6 top-6 rounded-full bg-[#005F99] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              API First
            </motion.div>

            {/* Floating Chip */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute bottom-6 right-6 rounded-full bg-[#C8102E] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              Real-Time Sync
            </motion.div>

          </motion.div>

          {/* Right Side - Integration Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {integrations.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-3xl border border-[#005F99]/20 bg-[#005F99]/5 p-6 shadow-lg transition-all duration-300 hover:border-[#C8102E]/30 hover:bg-[#C8102E]/5"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#005F99] text-white transition-all duration-300 group-hover:bg-[#C8102E] group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#C8102E]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <span className="text-sm font-semibold text-[#005F99]">
                      Enterprise Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

                {/* Enterprise Integration Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">

            <div className="rounded-full border border-[#005F99]/20 bg-[#005F99]/5 px-6 py-3 text-sm font-semibold text-[#005F99] shadow-sm transition-all duration-300 hover:border-[#C8102E]/30 hover:bg-[#C8102E]/5 hover:text-[#C8102E]">
              🔗 API-First Integration
            </div>

            <div className="rounded-full border border-[#005F99]/20 bg-[#005F99]/5 px-6 py-3 text-sm font-semibold text-[#005F99] shadow-sm transition-all duration-300 hover:border-[#C8102E]/30 hover:bg-[#C8102E]/5 hover:text-[#C8102E]">
              ⚡ Real-Time Data Synchronization
            </div>

            <div className="rounded-full border border-[#005F99]/20 bg-[#005F99]/5 px-6 py-3 text-sm font-semibold text-[#005F99] shadow-sm transition-all duration-300 hover:border-[#C8102E]/30 hover:bg-[#C8102E]/5 hover:text-[#C8102E]">
              🔒 Secure Enterprise Connectivity
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
