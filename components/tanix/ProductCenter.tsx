"use client";


import { useState } from "react";
import { ArrowLeft, ArrowRight, Boxes } from "lucide-react";
import { products } from "@/lib/tanix/products";
import ProductDetails from "./ProductDetails";
interface ProductCenterProps {
  onBack: () => void;
  onOpenContact: () => void;
}

export default function ProductCenter({
  onBack,
  onOpenContact,
}: ProductCenterProps) {
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    if (selectedProduct) {
  return (
    <ProductDetails
  productId={selectedProduct}
  onBack={() => setSelectedProduct(null)}
  onRequestDemo={onOpenContact}
/>
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
              Explore Products
            </h2>

            <p className="text-sm text-slate-500">
              Discover Fortuna's complete product portfolio.
            </p>
          </div>

        </div>
      </div>

      {/* Products */}
<div className="flex-1 overflow-y-auto px-6 py-5">

  <div className="space-y-4">

    {products.map((product) => (

      <button
  key={product.id}
  onClick={() => setSelectedProduct(product.id)}
        className="group w-full rounded-3xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#005F99] hover:shadow-xl"
      >

        <div className="flex items-start justify-between">

          <div className="flex gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white">

              <Boxes size={22} />

            </div>

            <div>

              <h3 className="text-lg font-semibold text-slate-900">
                {product.name}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {product.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {product.tags.map((tag) => (

                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 group-hover:border-[#005F99]/30"
                    >
                    {tag}
                    </span>

                ))}

              </div>

            </div>

          </div>

          <ArrowRight
            size={20}
            className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#005F99]"
          />

        </div>

      </button>

    ))}

  </div>

</div>

    </div>
  );
}