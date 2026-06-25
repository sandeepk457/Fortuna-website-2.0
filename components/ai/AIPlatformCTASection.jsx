import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AIPlatformCTASection() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Image */}

      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/network-grid.png')",
  }}
/>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Fortuna Brand Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#005F99]/40 via-black/20 to-[#C8102E]/40" />

      {/* Extra Glow */}

      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#005F99]/20 blur-[180px] rounded-full" />

      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#C8102E]/20 blur-[180px] rounded-full" />

      {/* Content */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">

          <Sparkles
            size={18}
            className="text-[#C8102E]"
          />

          <span className="text-white font-semibold tracking-[2px] uppercase">
            Fortuna IntelliAI
          </span>

        </div>

        {/* Heading */}

        <h2 className="mt-10 text-5xl md:text-7xl font-extrabold leading-tight">

          <span className="text-white">
            The Future of Supply Chain
          </span>

          <span className="block text-[#C8102E]">
            Intelligence Starts Here
          </span>

        </h2>

        {/* Divider */}

        <div className="mt-8 flex justify-center">

          <div className="w-32 h-[3px] rounded-full bg-gradient-to-r from-[#005F99] to-[#C8102E]" />

        </div>

        {/* Description */}

        <p className="mt-10 max-w-4xl mx-auto text-xl md:text-2xl text-white/90 leading-relaxed">

          Move beyond dashboards and reports.

          Empower every supply chain decision with predictive intelligence,
          automation and AI-driven recommendations designed for modern enterprises.

        </p>

        {/* Feature Pills */}

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <span className="px-5 py-2 rounded-full bg-[#005F99]/20 border border-[#005F99]/40 text-white">
            AI Powered
          </span>

          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white">
            Cloud Native
          </span>

          <span className="px-5 py-2 rounded-full bg-[#C8102E]/20 border border-[#C8102E]/40 text-white">
            Enterprise Ready
          </span>

        </div>

        {/* CTA Buttons */}

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Primary Button */}

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3

              px-10
              py-4

              rounded-full

              bg-[#C8102E]
              text-white

              font-bold

              hover:bg-[#a50d25]
              hover:scale-105
              hover:shadow-[0_20px_50px_rgba(200,16,46,0.45)]

              transition-all
              duration-300
            "
          >
            Request AI Demo

            <ArrowRight size={20} />
          </Link>

          {/* Secondary Button */}

          <Link
            href="/products"
            className="
              inline-flex
              items-center
              gap-3

              px-10
              py-4

              rounded-full

              bg-[#005F99]
              text-white

              font-bold

              hover:bg-[#004b79]
              hover:scale-105
              hover:shadow-[0_20px_50px_rgba(0,95,153,0.45)]

              transition-all
              duration-300
            "
          >
            Explore Products

            <ArrowRight size={20} />
          </Link>

        </div>

        {/* Bottom Line */}

        <div className="mt-20">

          <p className="text-white/75 text-lg">

            Trusted by forward-thinking organizations to build
            intelligent, resilient and future-ready supply chains.

          </p>

        </div>

      </div>

    </section>
  );
}