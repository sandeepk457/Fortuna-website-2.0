import {
  Target,
  Eye,
  Globe,
  TrendingUp,
} from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#005F99]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C8102E]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">

            <div className="rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src="/images/company/Fortuna Building2.0.png"
                alt="Fortuna"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="
              absolute
              -bottom-8
              -right-8
              bg-white
              rounded-3xl
              shadow-2xl
              p-6
              border border-slate-200
            ">
              <div className="text-4xl font-bold text-[#C8102E]">
                2030
              </div>

              <p className="text-slate-600">
                Vision to become a Global SCM Technology Leader
              </p>
            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="text-[#C8102E] uppercase tracking-[4px] font-semibold">
              WHO WE ARE
            </span>

            <h2 className="mt-4 text-5xl font-extrabold">
              <span className="text-[#005F99]">
                Building The Future Of
              </span>

              <span className="block text-[#C8102E]">
                Intelligent Supply Chains
              </span>
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">
              Fortuna Global Supply Chain Systems is an AI-powered
              enterprise software company focused on transforming
              supply chains through intelligent planning,
              procurement, inventory management, warehousing,
              transportation and execution solutions.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Our mission is to provide a unified digital platform
              that connects every supply chain function and enables
              organizations to operate with visibility, agility and
              intelligence.
            </p>

            {/* Mission & Vision */}
            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <Target className="text-[#C8102E]" size={28} />

                <div>
                  <h4 className="font-bold text-[#005F99]">
                    Our Mission
                  </h4>

                  <p className="text-slate-600">
                    Deliver intelligent supply chain solutions
                    that improve visibility, efficiency and growth.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Eye className="text-[#C8102E]" size={28} />

                <div>
                  <h4 className="font-bold text-[#005F99]">
                    Our Vision
                  </h4>

                  <p className="text-slate-600">
                    Become a globally recognized leader in
                    supply chain technology by 2030.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="mt-24 grid md:grid-cols-4 gap-8">

          <div className="
group
relative
overflow-hidden
rounded-3xl
p-8
text-center
bg-gradient-to-br
from-[#005F99]/5
via-white
to-[#C8102E]/5
border
border-white
shadow-xl
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
">
            <Globe className="mx-auto text-[#C8102E]" size={36} />
            <h3 className="mt-4 text-4xl font-bold text-[#005F99]">
              8+
            </h3>
            <p className="text-slate-600 mt-3 font-medium">
              Supply Chain Products
            </p>
          </div>

          <div className="
group
relative
overflow-hidden
rounded-3xl
p-8
text-center
bg-gradient-to-br
from-[#005F99]/5
via-white
to-[#C8102E]/5
border
border-white
shadow-xl
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
">
            <TrendingUp className="mx-auto text-[#C8102E]" size={36} />
            <h3
  className="
  text-5xl
  font-extrabold
  bg-gradient-to-r
  from-[#005F99]
  to-[#C8102E]
  bg-clip-text
  text-transparent
  "
>
              AI
            </h3>
            <p className="text-slate-600 mt-2">
              Powered Platform
            </p>
          </div>

          <div className="
group
relative
overflow-hidden
rounded-3xl
p-8
text-center
bg-gradient-to-br
from-[#005F99]/5
via-white
to-[#C8102E]/5
border
border-white
shadow-xl
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
">
            <Globe className="mx-auto text-[#C8102E]" size={36} />
            <h3 className="mt-4 text-4xl font-bold text-[#005F99]">
              Global
            </h3>
            <p className="text-slate-600 mt-2">
              Scalability Vision
            </p>
          </div>

          <div className="
group
relative
overflow-hidden
rounded-3xl
p-8
text-center
bg-gradient-to-br
from-[#005F99]/5
via-white
to-[#C8102E]/5
border
border-white
shadow-xl
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
">
            <TrendingUp className="mx-auto text-[#C8102E]" size={36} />
            <h3 className="mt-4 text-4xl font-bold text-[#005F99]">
              2030
            </h3>
            <p className="text-slate-600 mt-2">
              Growth Roadmap
            </p>
          </div>

        </div>

    <div
  className="
  absolute
  bottom-0
  left-0
  w-full
  h-1
  bg-gradient-to-r
  from-[#005F99]
  via-[#C8102E]
  to-[#005F99]
  opacity-0
  group-hover:opacity-100
  transition-all
  duration-500
  "
/>




      </div>
    </section>
  );
}