import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  Sparkles,
  Workflow,
  BrainCircuit,
} from "lucide-react";

export default function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-24">

      {/* Background Glows */}

      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#005F99]/15 blur-[180px]" />

      <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C8102E]/15 blur-[180px]" />

      {/* Decorative Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(#005F99_1px,transparent_1px),linear-gradient(90deg,#005F99_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-6">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">

          {/* LEFT CONTENT */}

          <div>

            {/* Eyebrow */}

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#C8102E]" />

              <span className="text-sm font-semibold uppercase tracking-[4px] text-[#C8102E]">
                REQUEST A FORTUNA DEMO
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-[64px]">

              <span className="text-[#005F99]">
                See Fortuna
              </span>

              <span className="block text-[#C8102E]">
                In Action
              </span>

            </h1>

            {/* Accent */}

            <div className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Experience how Fortuna connects intelligent planning,
              supply chain execution, enterprise operations and
              AI-driven decision making in one connected platform.
            </p>

            {/* Trust / Value Points */}

            <div className="mt-10 flex flex-wrap gap-3">

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <Sparkles size={17} className="text-[#C8102E]" />
                <span className="text-sm font-semibold text-slate-700">
                  AI-Powered
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <Workflow size={17} className="text-[#005F99]" />
                <span className="text-sm font-semibold text-slate-700">
                  Enterprise Supply Chain
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
                <BrainCircuit size={17} className="text-[#C8102E]" />
                <span className="text-sm font-semibold text-slate-700">
                  Intelligent Operations
                </span>
              </div>

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap items-center gap-5">

              {/* <a
                href="#demo-form"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#C8102E]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-[#C8102E]/20
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#a60d27]
                  hover:shadow-xl
                "
              >
                Request Your Demo
                <ArrowRight size={19} />
              </a> */}

              <Link
                href="/products"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-7
                  py-4
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#005F99]
                  hover:text-[#005F99]
                "
              >
                <PlayCircle size={19} />
                Explore Fortuna
              </Link>

            </div>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative">

            {/* Main Card */}

            <div
              className="
                relative
                overflow-hidden
                w-full max-w-[540px] lg:ml-auto
                rounded-[40px]
                border
                border-white/70
                bg-white/80
                p-8
                shadow-[0_30px_100px_rgba(0,0,0,0.12)]
                backdrop-blur-xl
                md:p-10
              "
            >

              {/* Top Label */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[3px] text-slate-400">
                    FORTUNA ECOSYSTEM
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-[#005F99]">
                    One Connected Platform
                  </h3>

                </div>

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#005F99]
                    to-[#C8102E]
                    text-white
                    shadow-lg
                  "
                >
                  <Sparkles size={25} />
                </div>

              </div>

              {/* Flow */}

              <div className="mt-10 space-y-4">

                {/* Planning */}

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#005F99]/10 text-sm font-bold text-[#005F99]">
                    01
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Intelligent Planning
                    </p>
                    <p className="text-sm text-slate-500">
                      Forecasting & decision intelligence
                    </p>
                  </div>

                </div>

                {/* Procurement */}

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8102E]/10 text-sm font-bold text-[#C8102E]">
                    02
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Procurement & Inventory
                    </p>
                    <p className="text-sm text-slate-500">
                      Connected supply chain execution
                    </p>
                  </div>

                </div>

                {/* Warehouse */}

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#005F99]/10 text-sm font-bold text-[#005F99]">
                    03
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Warehouse & Operations
                    </p>
                    <p className="text-sm text-slate-500">
                      Visibility across operations
                    </p>
                  </div>

                </div>

                {/* AI */}

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#C8102E]/10 text-sm font-bold text-[#C8102E]">
                    AI
                  </div>

                  <div>
                    <p className="font-bold text-slate-900">
                      Intelligent Decision Making
                    </p>
                    <p className="text-sm text-slate-500">
                      AI-powered operational intelligence
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom Accent */}

              <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-[#005F99] via-[#C8102E] to-[#005F99]" />

            </div>

            {/* Floating Badge */}
{/* 
            <div
              className="
                absolute
                -bottom-2
                -left-2
                hidden
                rounded-2xl
                border
                border-white
                bg-white
                px-5
                py-3
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
                md:block
              "
            >

              <p className="text-xs font-bold uppercase tracking-[2px] text-slate-400">
                DEMO
              </p>

              <p className="mt-1 font-bold text-[#005F99]">
                Personalized for your business
              </p>

            </div> */}

          </div>

        </div>

      </div>

    </section>
  );
}