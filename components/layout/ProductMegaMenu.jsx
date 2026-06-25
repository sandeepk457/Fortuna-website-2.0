import Link from "next/link";
import {
  Package,
  Truck,
  Brain,
  Bot,
  Wrench,
  Network,
  Warehouse,
  ArrowRight,
} from "lucide-react";

export default function ProductMegaMenu() {
  return (
    <div
      className="
        absolute
        top-full
        left-1/2
        -translate-x-1/2

        mt-6

        w-[1150px]

        bg-white
        rounded-3xl

        border
        border-slate-200

        shadow-[0_30px_80px_rgba(15,23,42,0.18)]

        opacity-0
        invisible

        group-hover:opacity-100
        group-hover:visible

        transition-all
        duration-300

        z-50
      "
    >
      <div className="grid grid-cols-4 gap-12 p-10">

        {/* Column 1 */}

        <div>

          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Supply Chain Execution
          </h3>

          <div className="space-y-5">

            <Link
              href="/products/fortuna-sims"
              className="flex items-start gap-3 group/item"
            >
              <Warehouse
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Fortuna SIMS
                </div>

                <div className="text-sm text-slate-500">
                  Supply & Inventory Management
                </div>
              </div>
            </Link>

            <Link
              href="/products/fortuna-tms"
              className="flex items-start gap-3 group/item"
            >
              <Truck
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Fortuna TMS
                </div>

                <div className="text-sm text-slate-500">
                  Transportation Management
                </div>
              </div>
            </Link>

            <Link
              href="/products/fortuna-lastmile-ai"
              className="flex items-start gap-3 group/item"
            >
              <Package
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Fortuna Lastmile AI
                </div>

                <div className="text-sm text-slate-500">
                  Delivery Optimization Platform
                </div>
              </div>
            </Link>

          </div>

        </div>

        {/* Column 2 */}

        <div>

          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Planning & Intelligence
          </h3>

          <div className="space-y-5">

            <Link
              href="/products/demandsense"
              className="flex items-start gap-3 group/item"
            >
              <Brain
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  DemandSense
                </div>

                <div className="text-sm text-slate-500">
                  AI Demand Forecasting
                </div>
              </div>
            </Link>

            <Link
              href="/products/plan-copilot"
              className="flex items-start gap-3 group/item"
            >
              <Bot
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Plan Copilot
                </div>

                <div className="text-sm text-slate-500">
                  AI Planning Assistant
                </div>
              </div>
            </Link>

            <Link
              href="/ai-platform"
              className="flex items-start gap-3 group/item"
            >
              <Brain
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Fortuna IntelliAI
                </div>

                <div className="text-sm text-slate-500">
                  Enterprise AI Platform
                </div>
              </div>
            </Link>

          </div>

        </div>

        {/* Column 3 */}

        <div>

          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Enterprise Operations
          </h3>

          <div className="space-y-5">

            <Link
              href="/products/fortuna-eam"
              className="flex items-start gap-3 group/item"
            >
              <Wrench
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Fortuna EAM
                </div>

                <div className="text-sm text-slate-500">
                  Enterprise Asset Management
                </div>
              </div>
            </Link>

            <Link
              href="/products/connect-hub"
              className="flex items-start gap-3 group/item"
            >
              <Network
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  Connect Hub
                </div>

                <div className="text-sm text-slate-500">
                  Enterprise Integrations
                </div>
              </div>
            </Link>

            <Link
              href="/products/yardsync"
              className="flex items-start gap-3 group/item"
            >
              <Warehouse
                size={20}
                className="text-[#005F99] mt-1"
              />

              <div>
                <div className="font-semibold text-slate-800 group-hover/item:text-[#C8102E]">
                  YardSync
                </div>

                <div className="text-sm text-slate-500">
                  Yard & Dock Management
                </div>
              </div>
            </Link>

          </div>

        </div>

        {/* Featured Card */}

        <div>

          <div
            className="
              h-full

              rounded-3xl

              bg-gradient-to-br
              from-[#005F99]
              to-[#C8102E]

              p-8

              text-white

              flex
              flex-col
              justify-between
            "
          >

            <div>

              <div className="uppercase tracking-[4px] text-white/70 text-xs font-semibold">
                Featured Product
              </div>

              <h3 className="mt-4 text-3xl font-bold">
                Fortuna SIMS
              </h3>

              <p className="mt-4 text-white/90 leading-relaxed">
                Digitize procurement, inventory,
                warehouse and supply chain operations
                through a single intelligent platform.
              </p>

            </div>

            <Link
              href="/products/fortuna-sims"
              className="
                mt-8

                inline-flex
                items-center
                gap-2

                bg-white
                text-[#005F99]

                px-5
                py-3

                rounded-xl

                font-semibold

                hover:scale-105

                transition-all
                duration-300
              "
            >
              Explore SIMS

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}