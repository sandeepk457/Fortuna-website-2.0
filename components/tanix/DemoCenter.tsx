"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
interface DemoCenterProps {
  onBack: () => void;
}

export default function DemoCenter({
  onBack,
}: DemoCenterProps) {
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
              Request a Demo
            </h2>

            <p className="text-sm text-slate-500">
              Connect with our Fortuna product specialists.
            </p>
          </div>

        </div>

      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6">

        <div className="rounded-2xl border border-slate-200 bg-white p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center">
  <span className="text-2xl">📅</span>
</div>

            <div>
  <h3 className="font-semibold text-slate-900">
    Schedule a Product Demo
  </h3>

  <p className="mt-1 text-sm text-slate-500">
    Tell us about your requirements and our team will get in touch.
  </p>

  <button
    onClick={() => router.push("/contact")}
    className="mt-4 rounded-full bg-[#C8102E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A50D26]"
  >
    Go to Contact Form
  </button>
</div>

          </div>

        </div>

      </div>

    </div>
  );
}