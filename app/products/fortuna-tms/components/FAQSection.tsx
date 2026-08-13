"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

const faqs = [
  {
    question: "What is Fortuna TMS?",
    answer:
      "Fortuna TMS is an intelligent, cloud-based transportation management platform designed to streamline transportation planning, execution, dispatch, tracking, delivery coordination, and operational visibility through one connected platform.",
  },
  {
    question: "What transportation operations can Fortuna TMS manage?",
    answer:
      "Fortuna TMS is designed to support transportation planning, route and load coordination, dispatch operations, vehicle and shipment visibility, delivery execution, fleet-related workflows, and transportation performance monitoring.",
  },
  {
    question: "Can Fortuna TMS integrate with existing enterprise systems?",
    answer:
      "Yes. Fortuna TMS is designed with an integration-ready architecture that can connect with systems such as ERP, WMS, fleet platforms, telematics, analytics platforms, and other enterprise applications through appropriate integration interfaces.",
  },
  {
    question: "Does Fortuna TMS support real-time transportation visibility?",
    answer:
      "Fortuna TMS is designed to bring transportation activities, vehicles, routes, shipments, and delivery information into a connected operational view, helping teams improve visibility across transportation execution.",
  },
  {
    question: "Can Fortuna TMS support different industries?",
    answer:
      "Yes. Fortuna TMS is designed to adapt to different transportation environments including logistics and 3PL, manufacturing, retail and distribution, automotive, FMCG, pharmaceuticals and healthcare, construction and infrastructure, and energy and industrial operations.",
  },
  {
    question: "How does Fortuna TMS improve transportation performance?",
    answer:
      "By connecting planning, execution, visibility, and analytics, Fortuna TMS helps transportation teams reduce operational fragmentation, improve coordination, increase visibility, and make better-informed transportation decisions.",
  },
  {
    question: "Is Fortuna TMS suitable for enterprise transportation operations?",
    answer:
      "Fortuna TMS is designed for organizations that need a connected transportation platform across multiple operations, locations, teams, vehicles, shipments, and business systems.",
  },
  {
    question: "How can we evaluate Fortuna TMS for our organization?",
    answer:
      "You can request a Fortuna TMS demonstration to review the platform, understand relevant capabilities, discuss your transportation workflows, and explore how the solution can fit your operational environment.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Blue Glow */}
        <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#005F99]/[0.055] blur-[120px]" />

        {/* Red Glow */}
        <div className="absolute -right-48 bottom-20 h-[500px] w-[500px] rounded-full bg-[#C8102E]/[0.045] blur-[120px]" />

        {/* Enterprise Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#005F99 1px, transparent 1px), linear-gradient(90deg, #005F99 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Label */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#005F99]/15 bg-[#005F99]/5 px-5 py-2.5">

            <HelpCircle
              size={16}
              className="text-[#C8102E]"
            />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#005F99]">
              Frequently Asked Questions
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-bold tracking-tight text-[#005F99] sm:text-4xl lg:text-5xl">

            Everything You Need to Know

            <span className="mt-2 block bg-gradient-to-r from-[#C8102E] to-[#005F99] bg-clip-text text-transparent">
              About Fortuna TMS
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore common questions about Fortuna TMS, its transportation
            capabilities, integrations, operational visibility, and enterprise
            use cases.
          </p>

        </motion.div>

        {/* =================================================
            FAQ CONTENT
        ================================================== */}

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">

          {/* =================================================
              LEFT — ENTERPRISE SUPPORT VISUAL
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-[#005F99]/[0.045] p-8 shadow-sm">

              {/* Decorative Glow */}

              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#005F99]/10 blur-3xl" />

              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-[#C8102E]/10 blur-3xl" />

              {/* Icon */}

              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-xl shadow-[#005F99]/20">

                <MessageCircle
                  size={29}
                  strokeWidth={1.7}
                />

              </div>

              {/* Heading */}

              <h3 className="relative mt-7 text-2xl font-bold leading-tight text-[#005F99]">
                Have questions about
                <span className="block text-[#C8102E]">
                  your transportation operations?
                </span>
              </h3>

              {/* Description */}

              <p className="relative mt-4 text-sm leading-7 text-slate-600">
                Our team can walk you through Fortuna TMS capabilities,
                workflows, integrations, and potential applications for your
                transportation environment.
              </p>

              {/* Capability List */}

              <div className="relative mt-7 space-y-4">

                {/* Transportation Visibility */}

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#005F99]/10 text-[#005F99]">
                    <Truck size={18} />
                  </div>

                  <span className="text-sm font-semibold text-[#005F99]">
                    Transportation Visibility
                  </span>

                </div>

                {/* Intelligent Operations */}

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C8102E]/10 text-[#C8102E]">
                    <Zap size={18} />
                  </div>

                  <span className="text-sm font-semibold text-[#005F99]">
                    Intelligent Operations
                  </span>

                </div>

                {/* Connected Architecture */}

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#005F99]/10 text-[#005F99]">
                    <ShieldCheck size={18} />
                  </div>

                  <span className="text-sm font-semibold text-[#005F99]">
                    Connected Enterprise Architecture
                  </span>

                </div>

              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

              {/* CTA */}

              <a
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#C8102E] transition-colors duration-300 hover:text-[#005F99]"
              >

                Talk to our team

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </a>

            </div>

          </motion.div>

          {/* =================================================
              RIGHT — FAQ ACCORDION
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#005F99]/25 bg-white shadow-lg shadow-[#005F99]/[0.06]"
                      : "border-slate-200 bg-white hover:border-[#C8102E]/20 hover:shadow-md"
                  }`}
                >

                  {/* Question Button */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7 sm:py-6"
                  >

                    <div className="flex items-start gap-4">

                      {/* Number */}

                      <span
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-br from-[#C8102E] to-[#005F99] text-white"
                            : "bg-[#005F99]/[0.08] text-[#005F99] group-hover:bg-[#005F99]/10"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}

                      <span
                        className={`text-sm font-bold leading-6 transition-colors duration-300 sm:text-base ${
                          isOpen
                            ? "text-[#005F99]"
                            : "text-[#005F99] group-hover:text-[#C8102E]"
                        }`}
                      >
                        {faq.question}
                      </span>

                    </div>

                    {/* Chevron */}

                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#005F99]/20 bg-[#005F99]/10 text-[#005F99]"
                          : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-[#C8102E]/20 group-hover:text-[#C8102E]"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </motion.span>

                  </button>

                  {/* Answer */}

                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >

                        <div className="px-6 pb-6 pl-[4.5rem] pr-12 sm:px-7 sm:pb-7 sm:pl-[5.5rem]">

                          <div className="h-px bg-gradient-to-r from-[#005F99]/15 via-[#C8102E]/10 to-transparent" />

                          <p className="pt-5 text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

    {/* =================================================
    BOTTOM CTA STRIP — FORTUNA GRADIENT
================================================== */}

<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, delay: 0.15 }}
  className="
    relative mt-16 overflow-hidden rounded-3xl
    bg-gradient-to-br
    from-[#003B63]
    via-[#005F99]
    to-[#C8102E]
    p-[1px]
    shadow-2xl
    shadow-[#005F99]/15
  "
>
  {/* Inner Gradient Surface */}

  <div
    className="
      relative overflow-hidden rounded-[calc(1.5rem-1px)]
      bg-gradient-to-r
      from-[#00345A]
      via-[#005F99]
      to-[#9F1028]
      px-7 py-9
      sm:px-10 sm:py-10
      lg:px-12 lg:py-11
    "
  >

    {/* =================================================
        DECORATIVE GLOW
    ================================================== */}

    <div
      className="
        pointer-events-none absolute
        -left-24 -top-28
        h-72 w-72
        rounded-full
        bg-[#4DA6FF]/20
        blur-[100px]
      "
    />

    <div
      className="
        pointer-events-none absolute
        -right-24 -bottom-28
        h-72 w-72
        rounded-full
        bg-[#FF3048]/25
        blur-[100px]
      "
    />

    {/* =================================================
        SUBTLE SHINE
    ================================================== */}

    <div
      className="
        pointer-events-none absolute
        inset-y-0 left-1/3
        w-px
        bg-white/10
        blur-sm
      "
    />

    {/* =================================================
        CONTENT
    ================================================== */}

    <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

      {/* TEXT */}

      <div className="max-w-4xl">

        {/* Eyebrow */}

        <div className="mb-3 flex items-center gap-2">

          <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" />

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-100">
            Ready to Explore Fortuna TMS?
          </span>

        </div>

        {/* Heading */}

        <h3
          className="
            text-2xl font-bold
            leading-tight
            text-white
            sm:text-3xl
            lg:text-4xl
          "
        >
          See how connected transportation intelligence can transform your
          operations.
        </h3>

        {/* Supporting Text */}

        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50/85 sm:text-base">
          Discover how Fortuna TMS can connect planning, execution,
          visibility, and transportation performance through one intelligent
          platform.
        </p>

      </div>

      {/* =================================================
          CTA BUTTON
      ================================================== */}

      <div className="shrink-0">

        <a
          href="/contact"
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#C8102E]
            px-7
            py-4
            text-sm
            font-bold
            text-white
            shadow-xl
            shadow-black/20
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#A80D26]
            hover:shadow-2xl
          "
        >

          Request a TMS Demo

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </a>

      </div>

    </div>

  </div>
</motion.div>

      </div>
    </section>
  );
}