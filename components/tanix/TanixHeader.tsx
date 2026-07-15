"use client";

import { X } from "lucide-react";

import { TANIX_NAME, TANIX_SUBTITLE } from "./constants";
import TanixAvatar from "./TanixAvatar";
import { useTanix } from "./hooks";

export default function TanixHeader() {
  const { close } = useTanix();

  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#005F99] to-[#C8102E] p-4 text-white rounded-t-3xl">

<div className="flex items-center gap-4">
        {/* <TanixAvatar /> */}

        <TanixAvatar />
        <div className="flex flex-col">

  <h2 className="text-base font-semibold tracking-wide">
    {TANIX_NAME}
  </h2>

  <p className="text-xs text-white/80">
    {TANIX_SUBTITLE}
  </p>

  <div className="mt-1 flex items-center gap-1">
    <span className="h-2 w-2 rounded-full bg-emerald-400" />
    <span className="text-[10px] text-white/70">
      Online
    </span>
  </div>

</div>

      </div>

      <button
        onClick={close}
        className="rounded-full p-2 transition hover:bg-white/10"
      >
        <X size={18} />
      </button>

    </header>
  );
}