export default function TrustedIntegrationsSection() {
  const integrations = [
  "ERP Platforms",
  "WMS Systems",
  "TMS Systems",
  "Procurement Systems",
  "Planning Platforms",
  "CRM Systems",
  "Cloud Platforms",
  "REST APIs",
  "IoT Devices",
  "Enterprise Data Sources",
  "Business Applications",
  "Analytics Platforms",
];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-[450px] h-[450px] bg-[#005F99]/10 blur-[180px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-[#C8102E]/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-24">

          <span className="uppercase tracking-[4px] text-[#C8102E] font-semibold">
            SEAMLESS CONNECTIVITY
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-extrabold">

            <span className="text-[#005F99]">
              Integrates With
            </span>

            <span className="block text-[#C8102E]">
              Your Existing Ecosystem
            </span>

          </h2>

          <p className="mt-8 max-w-4xl mx-auto text-xl text-slate-600 leading-relaxed">
            Fortuna IntelliAI seamlessly connects with ERP, WMS, TMS,
            procurement, planning and logistics systems, creating a unified
            intelligence layer across your entire supply chain network.
          </p>

        </div>

        {/* Center AI Hub */}

        <div className="flex justify-center mb-20">

          <div
            className="
              relative
              px-12
              py-8
              rounded-3xl
              bg-gradient-to-r
              from-[#005F99]
              to-[#C8102E]
              text-white
              shadow-[0_25px_80px_rgba(0,95,153,0.25)]
            "
          >

            <div className="text-sm tracking-[3px] uppercase opacity-80">
              Intelligence Layer
            </div>

            <div className="mt-2 text-4xl font-extrabold">
              Fortuna IntelliAI
            </div>

          </div>

        </div>

        {/* Integration Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

          {integrations.map((item) => (
            <div
              key={item}
              className="
                group
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-6
                text-center
                shadow-lg

                hover:-translate-y-2
                hover:border-[#005F99]/30
                hover:shadow-[0_20px_50px_rgba(0,95,153,0.15)]

                transition-all
                duration-500
              "
            >

              <div
                className="
                  text-lg
                  font-bold
                  text-slate-700

                  group-hover:text-[#005F99]

                  transition-colors
                  duration-300
                "
              >
                {item}
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}

        <div className="mt-24">

          <div
            className="
              bg-slate-50
              border
              border-slate-200
              rounded-3xl
              p-12
              text-center
              shadow-xl
            "
          >

            <h3 className="text-3xl font-bold text-[#005F99]">
              Connect Once. Intelligence Everywhere.
            </h3>

            <p className="mt-6 text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Fortuna IntelliAI is designed to work alongside your existing
              technology investments, transforming fragmented data into
              predictive insights and actionable recommendations.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}