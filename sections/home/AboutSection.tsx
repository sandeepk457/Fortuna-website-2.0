export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <span className="text-[#C8102E] font-semibold uppercase tracking-wider">
              Fortuna Global Supply Chain Systems
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#005F99]">
              Building The Future Of Supply Chain Intelligence
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Fortuna Global Supply Chain Systems is an AI-powered
              enterprise platform helping organizations transform
              procurement, inventory, warehousing, transportation,
              planning and logistics operations into intelligent,
              connected networks.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Our mission is to empower businesses with real-time
              visibility, predictive intelligence and automation
              across the entire supply chain lifecycle.
            </p>
          </div>

          <div>
            <img
              src="/images/company/41410.jpg"
              alt="Fortuna"
              className="rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}