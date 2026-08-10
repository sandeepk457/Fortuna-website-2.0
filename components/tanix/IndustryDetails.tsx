"use client";

import Link from "next/link";
import { industryDetails } from "@/lib/tanix/industryDetails";

interface IndustryDetailsProps {
  industryId: string;
  onBack: () => void;
  onOpenProduct: (productName: string) => void;
}

export default function IndustryDetails({
  industryId,
  onBack,
  onOpenProduct,
}: IndustryDetailsProps) {
  const industry =
    industryDetails[industryId as keyof typeof industryDetails];

  if (!industry) {
    return (
      <div className="text-center py-10 text-slate-500">
        Industry not found.
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center gap-3">

        <button
          onClick={onBack}
          className="text-sm text-red-600 hover:underline"
        >
          â† Back
        </button>

        <h2 className="text-xl font-bold text-slate-900">
          Industry Overview
        </h2>

      </div>

      {/* Overview */}

      <div className="rounded-xl border border-slate-200 bg-white p-5">

        <h3 className="font-semibold text-slate-900">
          Overview
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-6">
          {industry.overview}
        </p>

      </div>

      {/* Challenges */}

      <div className="rounded-xl border border-slate-200 bg-white p-5">

        <h3 className="font-semibold text-slate-900">
          Key Business Challenges
        </h3>

        <div className="mt-4 grid gap-2">

          {industry.challenges.map((item) => (

            <div
              key={item}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <span className="text-red-600">âœ“</span>
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* Recommended Products */}

      <div className="rounded-xl border border-slate-200 bg-white p-5">

        <h3 className="font-semibold text-slate-900">
          Recommended Fortuna Solutions
        </h3>

        <div className="mt-4 grid gap-3">

          {industry.products.map((product) => (

  <div
    key={product}
    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
  >

    <div className="flex items-center justify-between">

      <div>

        <h4 className="font-semibold text-slate-900">
          {product}
        </h4>

        <p className="mt-1 text-xs text-slate-500">
          Recommended solution for this industry
        </p>

      </div>

      <button
  onClick={() => onOpenProduct(product)}
  className="rounded-lg bg-[#C8102E] px-3 py-2 text-xs font-medium text-white hover:opacity-90"
>
  Explore Product
</button>

    </div>

  </div>

))}

        </div>

      </div>

      {/* Quick Actions */}

      <div className="rounded-xl border border-red-100 bg-red-50 p-5">

        <h3 className="font-semibold text-red-700">
          Quick Actions
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">

          <button className="rounded-lg bg-[#C8102E] px-4 py-2 text-white hover:opacity-90">
            Explore Products
          </button>

          <Link href="/request-demo" className="rounded-lg border border-[#C8102E] px-4 py-2 text-[#C8102E] hover:bg-red-50">Request Demo</Link>

        </div>

      </div>

    </div>
  );
}


