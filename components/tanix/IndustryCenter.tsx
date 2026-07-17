"use client";

import { industries } from "@/lib/tanix/industries";

interface IndustryCenterProps {
  onSelectIndustry: (industryId: string) => void;
  onBack: () => void;
}

export default function IndustryCenter({
  onSelectIndustry,
  onBack,
}: IndustryCenterProps) {
  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="text-sm text-red-600 hover:underline"
        >
          ← Back
        </button>

        <h2 className="text-xl font-bold text-slate-900">
          Industries
        </h2>
      </div>

      <p className="text-sm text-slate-600">
        Discover how Fortuna solutions help organizations across industries.
      </p>

      {/* Industry Cards */}
      <div className="grid gap-3">

        {industries.map((industry) => (

          <button
            key={industry.id}
            onClick={() => onSelectIndustry(industry.id)}
            className="
              text-left
              rounded-xl
              border
              border-slate-200
              bg-white
              p-4
              transition-all
              hover:border-red-500
              hover:shadow-md
            "
          >

            <div className="flex items-start gap-4">

              <div className="text-3xl">
                {industry.icon}
              </div>

              <div>

                <h3 className="font-semibold text-slate-900">
                  {industry.name}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {industry.description}
                </p>

              </div>

            </div>

          </button>

        ))}

      </div>

    </div>
  );
}