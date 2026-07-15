"use client";

import { TANIX_WELCOME } from "./constants";

export default function TanixWelcome() {
  return (
    <section className="px-6 pt-6">

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

        <h2 className="text-lg font-semibold text-slate-900">
          Hi 👋
        </h2>

        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
          {TANIX_WELCOME}
        </p>

      </div>

    </section>
  );
}