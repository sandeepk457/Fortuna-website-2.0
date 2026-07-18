"use client";

import { ArrowLeft, PhoneCall } from "lucide-react";
import { useRouter } from "next/navigation";

interface SalesCenterProps {
  onBack: () => void;
}

export default function SalesCenter({
  onBack,
}: SalesCenterProps) {
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
              Talk to Sales
            </h2>

            <p className="text-sm text-slate-500">
              Connect with our Fortuna sales team.
            </p>
          </div>

        </div>

      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6">

        <div className="rounded-3xl border border-slate-200 bg-white p-6">

          <div className="flex items-start gap-4">

            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center">
              <PhoneCall
                size={24}
                className="text-[#C8102E]"
              />
            </div>

            {/* Content */}
            <div>

              <h3 className="text-lg font-semibold text-slate-900">
                Connect with Our Sales Team
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Have questions about Fortuna products or solutions?
                Our team is ready to help you find the right solution
                for your business.
              </p>

              <button
  type="button"
  onClick={() => router.push("/contact")}
  className="mt-5 rounded-full bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A50D26]"
>
  Contact Sales
</button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}