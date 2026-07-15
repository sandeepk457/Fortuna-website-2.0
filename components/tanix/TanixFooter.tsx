"use client";

import TanixInput from "./TanixInput";

export default function TanixFooter() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-t
from-slate-50
to-white/90 backdrop-blur-xl">

      <div className="px-5 py-4">

        <p className="mb-3 text-center text-xs font-medium tracking-wide text-slate-500">
          Ask Tanix ?
        </p>

    <TanixInput />

        <p className="mt-3 text-center text-[11px] text-slate-400">
          Powered by <span className="font-semibold">Fortuna Global Supply Chain Systems</span>
        </p>

      </div>

    </footer>
  );
}