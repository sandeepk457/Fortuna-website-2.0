import {
  Target,
  Eye,
  Gem,
  Sparkles,
} from "lucide-react";

export default function MissionVisionValuesSection() {
  const cards = [
    {
      title: "Our Mission",
      icon: Target,
      color: "#005F99",
      description:
        "Deliver intelligent supply chain solutions that improve visibility, efficiency, agility and growth for modern enterprises.",
    },
    {
      title: "Our Vision",
      icon: Eye,
      color: "#C8102E",
      description:
        "Become a globally recognized leader in AI-powered supply chain technology by 2030.",
    },
    {
      title: "Our Values",
      icon: Gem,
      color: "#005F99",
      description:
        "Innovation, Customer Success, Integrity, Excellence and Collaboration guide everything we build.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">

    {/* World Map */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

  <img
    src="/images/world-map.png"
    alt=""
    className="
      w-[1500px]
      opacity-[0.05]
      object-contain
    "
  />

</div>


      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#005F99]/10 blur-[120px] rounded-full animate-pulse" />

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#C8102E]/10 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <span className="text-[#C8102E] uppercase tracking-[4px] font-semibold">
            OUR FOUNDATION
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-extrabold">
            <span className="text-[#005F99]">
              Mission.
            </span>

            <span className="text-[#C8102E]">
              {" "}Vision.
            </span>

            <span className="block text-[#005F99]">
              Values.
            </span>
          </h2>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border border-slate-200
                p-10
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                "
              >
                {/* Hover Glow */}
                <div className="
                  absolute inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-[#005F99]/5
                  to-[#C8102E]/5
                " />

                <div className="relative z-10">

                  <div className="
                    w-16 h-16
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#005F99]/10
                    to-[#C8102E]/10
                    flex items-center justify-center
                    mb-6
                    group-hover:rotate-6
                    transition-all
                    duration-500
                  ">
                    <Icon
                      size={34}
                      className="text-[#C8102E]"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#005F99]">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-slate-600 leading-relaxed">
                    {card.description}
                  </p>

                </div>

              </div>
            );
          })}
        </div>

        {/* Values Chips */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">

          {[
            "Innovation",
            "Customer Success",
            "Integrity",
            "Excellence",
            "Collaboration",
          ].map((value) => (
            <div
  key={value}
  className="
group

px-6 py-3
rounded-full

bg-white/90
backdrop-blur-xl

border border-slate-200

shadow-lg

hover:bg-gradient-to-r
hover:from-[#005F99]
hover:to-[#C8102E]

hover:text-white
hover:border-transparent

hover:-translate-y-1
hover:shadow-[0_15px_40px_rgba(0,95,153,0.25)]

transition-all
duration-500
cursor-pointer
"
>
              <div className="flex items-center gap-2">
                <Sparkles
  size={16}
  className="
    text-[#C8102E]
    group-hover:text-white
    transition-colors
    duration-500
  "
/>
                <span
  className="
    font-medium
    text-[#005F99]

    group-hover:text-white

    transition-colors
    duration-500
  "
>
                  {value}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}