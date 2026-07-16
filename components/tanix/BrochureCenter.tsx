"use client";

import { BookOpen, Download, FileText } from "lucide-react";
import { brochures } from "@/lib/tanix/brochures";

export default function BrochureCenter() {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          Product Brochures
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Download official Fortuna product brochures.
        </p>
      </div>

      <div className="space-y-3">
        {brochures.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#C8102E] hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <div className="rounded-lg bg-red-50 p-3">
                  <BookOpen className="h-6 w-6 text-[#C8102E]" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>

              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#C8102E] px-4 py-2 text-white transition hover:bg-[#A50D26]"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}