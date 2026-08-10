import {
  Target,
  Workflow,
  BrainCircuit,
  MessageSquareText,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Target,
    title: "Understand",
    description:
      "We understand your current supply chain processes, operational challenges and business priorities.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Explore",
    description:
      "Explore the Fortuna solutions that best align with your procurement, inventory, warehouse and supply chain requirements.",
  },
  {
    number: "03",
    icon: BrainCircuit,
    title: "Experience",
    description:
      "See intelligent workflows, operational visibility and AI-driven capabilities through a personalized product walkthrough.",
  },
  {
    number: "04",
    icon: MessageSquareText,
    title: "Discuss",
    description:
      "Discuss implementation possibilities, integrations, deployment options and the right approach for your organization.",
  },
];

export default function DemoBenefits() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">

      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#005F99]/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#C8102E]/10 blur-[150px]" />

      {/* Master Container */}
      <div className="relative z-10 fortuna-demo-container">
        

        {/* Section Heading */}
        <div className="mx-auto max-w-[760px] text-center">

          <span className="text-sm font-semibold uppercase tracking-[5px] text-[#C8102E]">
            YOUR DEMO EXPERIENCE
          </span>

          <h2 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight md:text-[44px]">

            <span className="text-[#005F99]">
              A Demo Built Around
            </span>

            <span className="block text-[#C8102E]">
              Your Business
            </span>

          </h2>

          {/* Accent */}
          <div className="mx-auto mt-7 h-1 w-32 rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

          <p className="mx-auto mt-8 max-w-[680px] text-lg leading-8 text-slate-600">
            Your Fortuna demonstration is designed around your business
            requirements, operational challenges and the solutions you want
            to explore.
          </p>

        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="
                  group
                  relative
                  flex
                  min-h-[280px]
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-[0_12px_40px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#C8102E]/30
                  hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]
                "
              >

                {/* Top Row */}
                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold tracking-[3px] text-slate-300">
                    {item.number}
                  </span>

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#005F99]
                      to-[#C8102E]
                      text-white
                      shadow-lg
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon size={24} strokeWidth={2} />
                  </div>

                </div>

                {/* Content */}
                <div className="mt-8">

                  <h3 className="text-2xl font-bold leading-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-0
                    bg-gradient-to-r
                    from-[#005F99]
                    to-[#C8102E]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}