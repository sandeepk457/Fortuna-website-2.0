"use client";

import { ArrowLeft } from "lucide-react";
import { products } from "@/lib/tanix/products";

interface ProductDetailsProps {
  productId: string;
  onBack: () => void;
  onRequestDemo: () => void;
}
export default function ProductDetails({
  productId,
  onBack,
  onRequestDemo,
}: ProductDetailsProps) {
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-6">
        <p>Product not found.</p>
      </div>
    );
  }

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
              {product.name}
            </h2>

            <p className="text-sm text-slate-500">
              {product.description}
            </p>
          </div>

        </div>

      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">

        {/* Overview */}
        <section>
          <h3 className="text-lg font-semibold text-slate-900">
            Overview
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {product.overview}
          </p>
        </section>

        {/* Modules */}
        <section>
          <h3 className="text-lg font-semibold text-slate-900">
            Modules
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">

            {product.modules?.map((item) => (

              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm"
              >
                {item}
              </span>

            ))}

          </div>
        </section>

        {/* Features */}
        <div className="mt-4 space-y-3">

  {product.features?.map((feature) => (

    <div
      key={feature}
      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3"
    >
      <div className="h-2 w-2 rounded-full bg-[#C8102E]" />

      <span className="text-sm text-slate-700">
        {feature}
      </span>

    </div>

  ))}

</div>

        {/* Industries */}
        <section>

          <h3 className="text-lg font-semibold text-slate-900">
            Industries
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">

            {product.industries?.map((industry) => (

              <span
                key={industry}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm"
              >
                {industry}
              </span>

            ))}

          </div>

        </section>


            {/* Actions */}
<section>

  <h3 className="text-lg font-semibold text-slate-900">
    Quick Actions
  </h3>

  <div className="mt-4 grid gap-3">

    {/* Download Brochure */}

    <button
      onClick={() => {
        if (!product.brochure) return;

        const link = document.createElement("a");
        link.href = product.brochure;
        link.download = `${product.name}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }}
      className="flex items-center justify-center rounded-2xl bg-[#C8102E] px-5 py-4 font-semibold text-white transition hover:bg-[#A50D26]"
    >
      📄 Download Brochure
    </button>

    {/* Request Demo */}

    <button
  onClick={onRequestDemo}
  className="flex items-center justify-center rounded-2xl border border-[#005F99] px-5 py-4 font-semibold text-[#005F99] transition hover:bg-[#005F99] hover:text-white"
>
  📅 Request Demo
</button>

  </div>

</section>


      </div>

    </div>
  );
}