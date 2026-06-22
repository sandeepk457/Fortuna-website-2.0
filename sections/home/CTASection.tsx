export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#031B34]">

     {/* Network Grid Background */}
 <div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: "url('/images/network-grid.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.5,
  }}
/>


      {/* Blue Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#005F99]/20 blur-[150px] rounded-full" />

      {/* Red Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#C8102E]/20 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="text-[#C8102E] uppercase tracking-[4px] font-semibold">
          GET STARTED
        </span>

        <h2 className="mt-6 text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Ready to Transform
          <span className="block text-[#C8102E]">
            Your Supply Chain?
          </span>
        </h2>

        <p className="mt-8 text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed">
          Unify planning, procurement, inventory,
          warehousing and transportation through
          one intelligent platform designed for
          modern enterprises.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-5">

          <button
            className="
              px-8 py-4
              rounded-2xl
              bg-[#C8102E]
              text-white
              font-semibold
              hover:scale-105
              hover:shadow-2xl
              transition-all
              duration-300
            "
          >
            Request Demo
          </button>

          <button
            className="
              px-8 py-4
              rounded-2xl
              border border-white/20
              text-white
              font-semibold
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            Explore Products
          </button>

        </div>

      </div>

    </section>
  );
}