"use client";

import { ArrowLeft, Bot } from "lucide-react";
import { useRouter } from "next/navigation";

interface AISolutionsCenterProps {
  onBack: () => void;
}

export default function AISolutionsCenter({
  onBack,
}: AISolutionsCenterProps) {

    const router = useRouter();

  return (
    <div className="flex h-full flex-col">

      {/* Header */}
      <div className="border-b border-slate-200 bg-white px-6 py-4">

        <div className="flex items-center gap-3">

          <button
            onClick={onBack}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 transition hover:border-[#C8102E] hover:text-[#C8102E]"
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              AI Solutions
            </h2>

            <p className="text-sm text-slate-500">
              Explore intelligent solutions powered by Fortuna.
            </p>
          </div>

        </div>

      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6">

        {/* Intelli AI Featured Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5">

          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white">
              <Bot size={24} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Fortuna Intelli AI
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enterprise AI intelligence designed to help organizations
                transform supply chain data into actionable insights.
              </p>

              <button
                type="button"
                onClick={() => router.push("/ai-platform")}
                className="mt-4 rounded-full bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A50D26]"
            >
                Explore Intelli AI
            </button>
            </div>

          </div>

        </div>

        {/* AI-Powered Products */}
<div className="mt-6">

  <h3 className="mb-3 text-sm font-semibold text-slate-900">
    AI-Powered Products
  </h3>

  <div className="space-y-3">

    {/* DemandSense */}
    <button
      type="button"
      className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:border-[#005F99] hover:shadow-md"
    >
      <h4 className="font-semibold text-slate-900">
        Fortuna DemandSense
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        AI-powered demand forecasting and planning.
      </p>

      <span className="mt-3 inline-block text-xs font-semibold text-[#005F99]">
        Explore Product →
      </span>
    </button>

    {/* LastMile AI */}
    <button
      type="button"
      className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:border-[#005F99] hover:shadow-md"
    >
      <h4 className="font-semibold text-slate-900">
        Fortuna LastMile AI
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        Intelligent last-mile delivery and route optimization.
      </p>

      <span className="mt-3 inline-block text-xs font-semibold text-[#005F99]">
        Explore Product →
      </span>
    </button>

    {/* Plan Copilot */}
    <button
      type="button"
      className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left transition-all duration-300 hover:border-[#005F99] hover:shadow-md"
    >
      <h4 className="font-semibold text-slate-900">
        Fortuna Plan Copilot
      </h4>

      <p className="mt-1 text-sm text-slate-500">
        AI-assisted supply chain planning and decision support.
      </p>

      <span className="mt-3 inline-block text-xs font-semibold text-[#005F99]">
        Explore Product →
      </span>
    </button>

  </div>

</div>

      </div>

    </div>
  );
}