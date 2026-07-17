"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ContactCenterProps {
  onBack: () => void;
}

export default function ContactCenter({
  onBack,
}: ContactCenterProps) {

  const router = useRouter();

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
              Request a Demo
            </h2>

            <p className="text-sm text-slate-500">
              Connect with our product specialists.
            </p>
          </div>

        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-6">

        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <h3 className="text-xl font-semibold">
            Contact
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Click on Contact Form to get in touch with our team.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-6 rounded-xl bg-[#C8102E] px-6 py-3 font-semibold text-white transition hover:bg-[#A50D26]"
          >
            Open Contact Form
          </button>

        </div>

      </div>

    </div>
  );
}