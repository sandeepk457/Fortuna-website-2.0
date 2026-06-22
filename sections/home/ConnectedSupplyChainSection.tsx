import {
  ClipboardList,
  ShoppingCart,
  Boxes,
  Warehouse,
  Truck,
  Route,
  BarChart3,
  Building2,
} from "lucide-react";

export default function ConnectedSupplyChainSection() {
 const nodes = [
  { title: "Planning", icon: ClipboardList },
  { title: "Procurement", icon: ShoppingCart },
  { title: "Inventory", icon: Boxes },
  { title: "Warehouse", icon: Warehouse },
  { title: "Transportation", icon: Truck },
  { title: "Last Mile", icon: Route },
  { title: "Analytics", icon: BarChart3 },
  { title: "Suppliers", icon: Building2 },
];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">

     {/* Enterprise Background Pattern */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Diagonal Shapes */}
  <div className="absolute top-0 left-0 w-[40%] h-full bg-[#005F99]/[0.03] skew-x-[-25deg] -translate-x-40" />

  <div className="absolute top-0 right-0 w-[40%] h-full bg-[#C8102E]/[0.03] skew-x-[25deg] translate-x-40" />

  {/* Center Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#005F99]/5 via-transparent to-[#C8102E]/5" />

</div>

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#005F99]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8102E]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-32">

          <span className="text-[#C8102E] uppercase tracking-[4px] font-semibold">
            CONNECTED SUPPLY CHAIN
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            <span className="text-[#005F99]">
              One Intelligent Platform.
            </span>

            <span className="block text-[#C8102E]">
              Complete Supply Chain Visibility.
            </span>
          </h2>

          <p className="mt-8 text-slate-600 text-lg max-w-4xl mx-auto">
            Fortuna connects suppliers, procurement, inventory,
            warehousing, transportation, last-mile delivery and
            analytics through one unified digital ecosystem.
          </p>

        </div>

       {/* Control Tower Layout */}
<div className="relative flex flex-col items-center justify-center min-h-[850px]">

  {/* Horizontal Connector */}
  <div className="absolute w-[80%] h-px bg-slate-300/60 z-0" />

  {/* Vertical Connector */}
  <div className="absolute h-[260px] w-px bg-slate-300/60 z-0" />

  {/* Center Branding */}
  <div className="absolute z-20 text-center">

    <img
      src="/images/logos/favicon.png"
      alt="Fortuna"
      className="w-40 h-40 mx-auto object-contain"
    />

    {/* <h3 className="mt-4 text-5xl font-extrabold text-[#005F99]">
      FORTUNA
    </h3> */}

    {/* <p className="mt-2 text-xl font-semibold text-[#C8102E]">
      Connected Supply Chain
    </p> */}

    {/* <div className="mt-4 flex justify-center gap-2 flex-wrap">

      <span className="px-3 py-1 rounded-full bg-[#005F99]/10 text-[#005F99] text-xs font-medium">
        AI
      </span>

      <span className="px-3 py-1 rounded-full bg-[#C8102E]/10 text-[#C8102E] text-xs font-medium">
        Analytics
      </span>

      <span className="px-3 py-1 rounded-full bg-[#005F99]/10 text-[#005F99] text-xs font-medium">
        Automation
      </span>

    </div> */}

  </div>

  {/* Nodes Layout */}
<div className="w-full max-w-7xl flex flex-col gap-40">

  {/* Top Row */}
  <div className="grid grid-cols-4 gap-10">

    {nodes.slice(0, 4).map((node) => {
      const Icon = node.icon;

      return (
        <div
          key={node.title}
          className="
            bg-white
            border border-slate-200
            rounded-3xl
            h-[140px]
            flex flex-col
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:border-[#C8102E]
            transition-all
            duration-500
          "
        >
          <div className="w-14 h-14 rounded-2xl bg-[#005F99]/10 flex items-center justify-center mb-3">
            <Icon className="w-7 h-7 text-[#005F99]" />
          </div>

          <h4 className="font-semibold text-[#005F99]">
            {node.title}
          </h4>
        </div>
      );
    })}
  </div>

  {/* Bottom Row */}
  <div className="grid grid-cols-4 gap-10">

    {nodes.slice(4).map((node) => {
      const Icon = node.icon;

      return (
        <div
          key={node.title}
          className="
            bg-white
            border border-slate-200
            rounded-3xl
            h-[140px]
            flex flex-col
            items-center
            justify-center
            shadow-lg
            hover:shadow-2xl
            hover:border-[#C8102E]
            transition-all
            duration-500
          "
        >
          <div className="w-14 h-14 rounded-2xl bg-[#005F99]/10 flex items-center justify-center mb-3">
            <Icon className="w-7 h-7 text-[#005F99]" />
          </div>

          <h4 className="font-semibold text-[#005F99]">
            {node.title}
          </h4>
        </div>
      );
    })}
  </div>

</div>

</div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-20" />


        {/* Business Outcomes */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#C8102E]">
              25%
            </h3>
            <p className="text-slate-600 mt-2">
              Inventory Reduction
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#005F99]">
              40%
            </h3>
            <p className="text-slate-600 mt-2">
              Faster Planning
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#C8102E]">
              99.9%
            </h3>
            <p className="text-slate-600 mt-2">
              Platform Availability
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-[#005F99]">
              100%
            </h3>
            <p className="text-slate-600 mt-2">
              Supply Chain Visibility
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}