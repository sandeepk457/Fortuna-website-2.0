import Link from "next/link";
import {
  Factory,
  Truck,
  ShoppingBag,
  Pill,
  ArrowRight,
} from "lucide-react";

export default function IndustriesMegaMenu() {
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

        {/* Manufacturing */}

        <div>
          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Manufacturing
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <Factory size={20} className="text-[#005F99]" />
              <span>Discrete Manufacturing</span>
            </div>

            <div className="flex gap-3">
              <Factory size={20} className="text-[#005F99]" />
              <span>Process Manufacturing</span>
            </div>

            <div className="flex gap-3">
              <Factory size={20} className="text-[#005F99]" />
              <span>Automotive</span>
            </div>

            <div className="flex gap-3">
              <Factory size={20} className="text-[#005F99]" />
              <span>Industrial Equipment</span>
            </div>

          </div>
        </div>

        {/* Logistics */}

        <div>
          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Logistics
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <Truck size={20} className="text-[#005F99]" />
              <span>3PL & Logistics</span>
            </div>

            <div className="flex gap-3">
              <Truck size={20} className="text-[#005F99]" />
              <span>Warehousing</span>
            </div>

            <div className="flex gap-3">
              <Truck size={20} className="text-[#005F99]" />
              <span>Transportation</span>
            </div>

            <div className="flex gap-3">
              <Truck size={20} className="text-[#005F99]" />
              <span>Ports & Terminals</span>
            </div>

          </div>
        </div>

        {/* Retail */}

        <div>
          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Retail & Consumer
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <ShoppingBag size={20} className="text-[#005F99]" />
              <span>Retail</span>
            </div>

            <div className="flex gap-3">
              <ShoppingBag size={20} className="text-[#005F99]" />
              <span>E-Commerce</span>
            </div>

            <div className="flex gap-3">
              <ShoppingBag size={20} className="text-[#005F99]" />
              <span>Consumer Goods</span>
            </div>

            <div className="flex gap-3">
              <Pill size={20} className="text-[#005F99]" />
              <span>Pharmaceuticals</span>
            </div>

          </div>
        </div>

        {/* Featured */}

        <div>
          <div className="h-full rounded-3xl bg-gradient-to-br from-[#005F99] to-[#C8102E] p-8 text-white flex flex-col justify-between">

            <div>
              <div className="uppercase tracking-[4px] text-white/70 text-xs">
                Industry Solutions
              </div>

              <h3 className="mt-4 text-3xl font-bold">
                Built For Every Industry
              </h3>

              <p className="mt-4 text-white/90">
                Purpose-built supply chain solutions for manufacturing,
                logistics, retail and distribution enterprises.
              </p>
            </div>

            <Link
              href="/industries"
              className="
inline-flex
items-center
gap-2

bg-white
text-[#005F99]

px-4
py-2.5

rounded-full

text-sm
font-semibold

hover:scale-105
transition-all
duration-300
"
            >
              Explore Industries
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}