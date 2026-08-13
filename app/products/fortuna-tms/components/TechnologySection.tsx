"use client";

import {
  Cloud,
  RadioTower,
  ShieldCheck,
  GitBranch,
  BarChart3,
  Smartphone,
  Boxes,
  Database,
  Server,
  Globe2,
  BrainCircuit,
} from "lucide-react";

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud-native architecture designed for high availability, performance and reliable transportation operations.",
    accent: "red",
  },
  {
    icon: RadioTower,
    title: "IoT & Telematics",
    description:
      "Real-time data from connected vehicles, telematics and IoT devices delivers continuous transportation visibility.",
    accent: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Enterprise-grade security, controlled access and protected data environments support secure transportation operations.",
    accent: "red",
  },
  {
    icon: GitBranch,
    title: "API & Integrations",
    description:
      "Open APIs and integration capabilities connect Fortuna TMS with enterprise systems and third-party platforms.",
    accent: "blue",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Advanced analytics transform transportation data into actionable insights for performance and continuous improvement.",
    accent: "red",
  },
  {
    icon: Smartphone,
    title: "Mobile & Driver Connectivity",
    description:
      "Mobile and driver connectivity enables real-time communication, operational updates and digital proof of delivery.",
    accent: "blue",
  },
];

export default function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-[#C8102E]/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-72 h-[500px] w-[500px] rounded-full bg-[#005F99]/5 blur-[150px]" />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-[#C8102E]/20 bg-[#C8102E]/5 px-5 py-2">

            <span className="h-2 w-2 rounded-full bg-[#C8102E]" />

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
              Technology & Infrastructure
            </span>

            <span className="h-2 w-2 rounded-full bg-[#005F99]" />

          </div>

          <h2 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight text-[#005F99] md:text-5xl lg:text-6xl">

            Built on Modern Technology.

            <span className="block text-[#C8102E]">
              Engineered for Transportation Excellence.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-600">
            Fortuna TMS is built on a secure, scalable and intelligent
            technology foundation that powers connected transportation
            operations across the enterprise.
          </p>

        </div>

        {/* =====================================================
            TECHNOLOGY EXPERIENCE
        ====================================================== */}

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_420px_1fr]">

          {/* ===================================================
              LEFT TECHNOLOGY CARDS
          ==================================================== */}

          <div className="space-y-5">

            {technologies.slice(0, 3).map((item) => {

              const Icon = item.icon;

              const isRed = item.accent === "red";

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[24px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_55px_rgba(0,95,153,0.12)]
                  "
                >

                  <div className="flex items-start gap-5">

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${
                          isRed
                            ? "from-[#C8102E]/15 to-[#C8102E]/5"
                            : "from-[#005F99]/15 to-[#005F99]/5"
                        }
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon
                        className={`h-7 w-7 ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      />
                    </div>

                    {/* Content */}

                    <div>

                      <h3
                        className={`text-xl font-bold ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* ===================================================
              CENTER TECHNOLOGY IMAGE
          ==================================================== */}

          <div className="relative flex items-center justify-center">

            {/* Glow */}

            <div className="absolute h-[360px] w-[360px] rounded-full bg-gradient-to-br from-[#C8102E]/10 via-white to-[#005F99]/10 blur-3xl" />

            {/* Image */}

            <div className="relative w-full max-w-[420px] overflow-hidden rounded-full">

              <img
                src="/images/products/tms-technology.png"
                alt="Fortuna TMS Technology and Infrastructure"
                className="
                  relative
                  z-10
                  h-auto
                  w-full
                  object-contain
                  drop-shadow-[0_25px_50px_rgba(0,95,153,0.20)]
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

            </div>

          </div>

          {/* ===================================================
              RIGHT TECHNOLOGY CARDS
          ==================================================== */}

          <div className="space-y-5">

            {technologies.slice(3, 6).map((item) => {

              const Icon = item.icon;

              const isRed = item.accent === "red";

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-[24px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-[0_15px_45px_rgba(15,23,42,0.06)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_20px_55px_rgba(0,95,153,0.12)]
                  "
                >

                  <div className="flex items-start gap-5">

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${
                          isRed
                            ? "from-[#C8102E]/15 to-[#C8102E]/5"
                            : "from-[#005F99]/15 to-[#005F99]/5"
                        }
                        shadow-sm
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon
                        className={`h-7 w-7 ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      />
                    </div>

                    {/* Content */}

                    <div>

                      <h3
                        className={`text-xl font-bold ${
                          isRed
                            ? "text-[#C8102E]"
                            : "text-[#005F99]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            ENTERPRISE TECHNOLOGY STRIP
        ====================================================== */}

        <div
          className="
            mt-16
            overflow-hidden
            rounded-[24px]
            border
            border-slate-200
            bg-white
            shadow-[0_15px_50px_rgba(0,95,153,0.08)]
          "
        >

          <div className="border-b border-slate-100 px-6 py-5 text-center">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#005F99]">
              Enterprise Grade. Future Ready.
            </p>

          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6">

            {[
              {
                icon: Cloud,
                label: "Cloud Native",
              },
              {
                icon: Boxes,
                label: "Scalable Architecture",
              },
              {
                icon: Server,
                label: "High Availability",
              },
              {
                icon: ShieldCheck,
                label: "Secure Infrastructure",
              },
              {
                icon: Globe2,
                label: "Global Connectivity",
              },
              {
                icon: BrainCircuit,
                label: "AI Powered Intelligence",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`
                    flex
                    items-center
                    justify-center
                    gap-3
                    px-5
                    py-5
                    ${
                      index !== 0
                        ? "border-t border-slate-100 md:border-l md:border-t-0"
                        : ""
                    }
                  `}
                >

                  <Icon className="h-5 w-5 text-[#005F99]" />

                  <span className="text-sm font-semibold text-slate-700">
                    {item.label}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-14 max-w-4xl text-center">

          <p className="text-lg font-bold leading-8 text-[#005F99]">

            Secure. Connected. Intelligent.

            <span className="text-[#C8102E]">
              {" "}
              The technology backbone of modern transportation.
            </span>

          </p>

        </div>

      </div>

    </section>
  );
}