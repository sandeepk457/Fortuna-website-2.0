"use client";

import { ArrowLeft, BookOpen, Download } from "lucide-react";
import { brochures } from "@/lib/tanix/brochures";

interface BrochureCenterProps {
  onBack: () => void;
}

export default function BrochureCenter({
  onBack,
}: BrochureCenterProps) {


  return (
  <div className="flex h-full flex-col">

    {/* Header */}
    <div className="border-b border-slate-200 bg-white px-6 py-4">

      <div className="flex items-center gap-3">

        <button
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:border-[#C8102E] hover:text-[#C8102E]"
        >
          <ArrowLeft size={18} />
        </button>

        <div>
          <h2 className="text-lg font-semibold">
            Product Brochures
          </h2>

          <p className="text-sm text-slate-500">
            Download official Fortuna brochures.
          </p>
        </div>

      </div>

    </div>

    {/* Scrollable Cards */}
    <div className="flex-1 overflow-y-auto px-6 py-4">

      <div className="space-y-3">

        {brochures.map((item, index) => {
          const brochure = item as any;
          const title = brochure.title ?? brochure.name ?? `Brochure ${index + 1}`;
          const description = brochure.description ?? brochure.summary ?? "Download the official brochure.";
          const href = brochure.pdf;

          return (
            <div
              key={`${href}-${index}`}
              className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{description}</p>
                </div>

               <button
  onClick={() => {
    const link = document.createElement("a");

    link.href = href;
    link.download = `${title}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
  className="flex items-center gap-2 rounded-full bg-[#C8102E] px-5 py-3 text-white transition hover:bg-[#A50D26]"
>
  <Download size={18} />
  Download
</button>
  
              </div>
            </div>
          );
        })}

      </div>

    </div>

  </div>
);
}
