"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Fingerprint,
  FileCheck,
  CloudCog,
  DatabaseBackup,
  Activity,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description:
      "Granular user roles and permissions ensure secure access across departments and business functions.",
  },
  {
    icon: KeyRound,
    title: "Single Sign-On (SSO)",
    description:
      "Seamless authentication across enterprise applications with secure identity management.",
  },
  {
    icon: Fingerprint,
    title: "Multi-Factor Authentication",
    description:
      "Strengthen user authentication with an additional verification layer for enhanced security.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Protect sensitive business data using encrypted communication and secure storage mechanisms.",
  },
  {
    icon: FileCheck,
    title: "Audit Trails",
    description:
      "Track every critical transaction with detailed audit logs for complete transparency and compliance.",
  },
  {
    icon: CloudCog,
    title: "Secure Cloud Infrastructure",
    description:
      "Enterprise-grade cloud platform designed for scalability, resilience, and continuous protection.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Disaster Recovery",
    description:
      "Automated backups and rapid recovery capabilities ensure uninterrupted business continuity.",
  },
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Real-time monitoring helps identify anomalies and maintain operational security at all times.",
  },
];

const securityStats = [
  {
    value: "99.9%",
    label: "Platform Availability",
  },
  {
    value: "24×7",
    label: "Security Monitoring",
  },
  {
    value: "Enterprise",
    label: "Access Control",
  },
  {
    value: "Encrypted",
    label: "Data Protection",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#C8102E10,transparent_35%),radial-gradient(circle_at_bottom_right,#005F9910,transparent_35%)]" />

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#005F99]/10 blur-3xl" />

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
            Enterprise-Grade Security
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
  <span className="text-[#C8102E]">
    Security Built for
  </span>
  <span className="text-[#005F99]">
    {" "}Enterprise Trust
  </span>
</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Fortuna SIMS safeguards your supply chain with enterprise-grade
            security, encrypted communications, continuous monitoring,
            intelligent access control, and resilient cloud infrastructure,
            ensuring every transaction remains protected.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid items-start gap-16 lg:grid-cols-[1fr_1.35fr]">
                  {/* Left Side - Security Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.25 }}
className="group relative overflow-hidden rounded-3xl border border-[#005F99]/20 bg-[#005F99]/5 p-6 shadow-lg backdrop-blur-xl transition-all duration-300"
>
                  {/* Left Accent Bar */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#C8102E] to-[#005F99]" />

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C8102E]/5 via-transparent to-[#005F99]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 flex items-start gap-5">

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#C8102E]">
                        {feature.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-7 text-slate-600">
                        {feature.description}
                      </p>

                      {/* Footer */}
                      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">

                        <span className="text-sm font-semibold text-[#005F99]">
                          Enterprise Secure
                        </span>

                        <motion.span
                          whileHover={{ x: 4 }}
                          className="text-lg font-bold text-[#C8102E]"
                        >
                          →
                        </motion.span>

                      </div>
                    </div>

                  </div>

                  {/* Decorative Glow */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#005F99]/10 to-[#C8102E]/10 blur-2xl" />

                </motion.div>
              );
            })}
          </motion.div>

                    {/* Right Side - Security Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Security Image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

              <Image
                src="/images/ai/security.png"
                alt="Fortuna Enterprise Security"
                width={1600}
                height={1200}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Top Left Badge */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 5 }}
className="absolute left-6 top-16 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
>
                

                <h4 className="mt-1 font-bold text-[#005F99]">
                  Enterprise Security
                </h4>
              </motion.div>

              {/* Top Right Badge */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 6 }}
            className="absolute right-6 top-16 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Encryption
                </p>

                <h4 className="mt-1 font-bold text-[#C8102E]">
                  End-to-End
                </h4>
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute bottom-6 left-6 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <h4 className="font-semibold text-slate-900">
                  Secure Cloud
                </h4>

                <p className="text-sm text-slate-500">
                  High Availability
                </p>
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute bottom-6 right-6 rounded-xl border border-white/30 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md"
              >
                <h4 className="font-semibold text-slate-900">
                  Compliance
                </h4>

                <p className="text-sm text-slate-500">
                  Audit Ready
                </p>
              </motion.div>

            </div>



            {/* Identity & Access Management */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="space-y-5"
>

  <div>
    <span className="inline-flex rounded-full bg-[#C8102E]/10 px-4 py-2 text-sm font-semibold text-[#C8102E]">
      Identity & Access
    </span>

    <h3 className="mt-4 text-2xl font-bold text-[#005F99]">
      Identity & Access Management
    </h3>

    <p className="mt-2 text-slate-600">
      Secure user authentication, role-based permissions,
      multi-factor authentication and continuous identity verification
      across the enterprise.
    </p>
  </div>

  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

    <Image
      src="/images/ai/security2.png"
      alt="Identity Security"
      width={1600}
      height={1200}
      className="w-full h-auto object-contain"
    />

  </div>

</motion.div>

            {/* Floating Security Chips */}

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-6 top-28 rounded-full bg-[#005F99] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              Zero Trust
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute right-6 top-48 rounded-full bg-[#C8102E] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              MFA Enabled
            </motion.div>

            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-24 left-8 rounded-full bg-[#C8102E] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              Enterprise Secure
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 7 }}
              className="absolute bottom-8 right-8 rounded-full bg-[#005F99] px-5 py-2 text-sm font-semibold text-white shadow-xl"
            >
              24×7 Monitoring
            </motion.div>


            {/* ================= Identity & Access Image ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
  className="mt-10"
>

  {/* Heading */}

  <div className="mb-6">

    <span className="inline-flex rounded-full bg-[#C8102E]/10 px-4 py-2 text-sm font-semibold text-[#C8102E]">
      Identity & Access
    </span>

    <h3 className="mt-4 text-2xl font-bold text-[#005F99]">
      Identity & Access Management
    </h3>

    <p className="mt-3 text-slate-600 leading-7">
      Protect enterprise users with secure authentication,
      role-based permissions, multi-factor authentication,
      and continuous identity verification.
    </p>

  </div>

  {/* Image */}

  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl hover:shadow-2xl transition-all duration-300">

  <Image
    src="/images/ai/securitysr.png"
    alt="Secure Cloud Infrastructure"
    width={1600}
    height={1200}
    className="w-full h-[420px] object-cover"
  />

</div>

</motion.div>

          </motion.div>


          

        </div>


            


                {/* Enterprise Security KPI Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-3xl bg-gradient-to-r from-[#C8102E] via-[#B70E28] to-[#005F99] p-10 shadow-2xl lg:p-14"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]" />

          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">

            {/* Heading */}
            <div className="mb-12 text-center">
              <h3 className="text-3xl font-bold text-white lg:text-4xl">
                Enterprise Security You Can Trust
              </h3>

              <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">
                Protect every transaction, every user, and every business process
                with enterprise-grade security, continuous monitoring, resilient
                infrastructure, and intelligent access management.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {securityStats.map((item, index) => (
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

            {/* Bottom Highlights */}
            <div className="mt-12 border-t border-white/20 pt-8">
              <div className="flex flex-wrap items-center justify-center gap-4">

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  🔐 Zero Trust Security
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  🛡 Role-Based Access
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  🔒 End-to-End Encryption
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  ☁ Secure Cloud Infrastructure
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                  📋 Audit & Compliance
                </span>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}



     