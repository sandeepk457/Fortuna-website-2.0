import Link from "next/link";
import {
  BookOpen,
  FileText,
  Video,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function ResourcesMegaMenu() {
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

        {/* Knowledge Center */}

        <div>
          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Knowledge Center
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <BookOpen size={20} className="text-[#005F99]" />
              <span>Blogs</span>
            </div>

            <div className="flex gap-3">
              <BookOpen size={20} className="text-[#005F99]" />
              <span>Industry Insights</span>
            </div>

            <div className="flex gap-3">
              <BookOpen size={20} className="text-[#005F99]" />
              <span>Supply Chain Trends</span>
            </div>

          </div>
        </div>

        {/* Product Resources */}

        <div>
          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Product Resources
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <FileText size={20} className="text-[#005F99]" />
              <span>Brochures</span>
            </div>

            <div className="flex gap-3">
              <FileText size={20} className="text-[#005F99]" />
              <span>Datasheets</span>
            </div>

            <div className="flex gap-3">
              <FileText size={20} className="text-[#005F99]" />
              <span>Solution Briefs</span>
            </div>

          </div>
        </div>

        {/* Success Stories */}

        <div>
          <h3 className="text-sm font-bold tracking-[4px] text-[#C8102E] uppercase mb-6">
            Customer Success
          </h3>

          <div className="space-y-5">

            <div className="flex gap-3">
              <Briefcase size={20} className="text-[#005F99]" />
              <span>Case Studies</span>
            </div>

            <div className="flex gap-3">
              <Briefcase size={20} className="text-[#005F99]" />
              <span>Success Stories</span>
            </div>

            <div className="flex gap-3">
              <Video size={20} className="text-[#005F99]" />
              <span>Product Videos</span>
            </div>

          </div>
        </div>

        {/* Featured */}

        <div>
          <div className="h-full rounded-3xl bg-gradient-to-br from-[#005F99] to-[#C8102E] p-8 text-white flex flex-col justify-between">

            <div>
              <div className="uppercase tracking-[4px] text-white/70 text-xs">
                Resource Center
              </div>

              <h3 className="mt-4 text-3xl font-bold">
                Learn & Explore
              </h3>

              <p className="mt-4 text-white/90">
                Discover expert insights, implementation best practices,
                product resources and customer success stories.
              </p>
            </div>

            <Link
              href="/resources"
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
              View Resources
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}