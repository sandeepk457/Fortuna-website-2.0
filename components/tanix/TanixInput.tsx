"use client";

import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import { useTanix } from "./hooks";

export default function TanixInput() {
  const [text, setText] = useState("");

  const { addUserMessage } = useTanix();

  function sendMessage() {
    const value = text.trim();

    if (!value) return;

    addUserMessage(value);

    setText("");
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div className="relative">

      <input
        type="text"
        value={text}
        placeholder="Ask Tanix anything..."
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="
          h-12
          w-full
          rounded-full
          border
          border-slate-200
          bg-white
          px-5
          pr-14
          text-sm
          outline-none
          transition
          focus:border-[#005F99]
          focus:ring-4
          focus:ring-[#005F99]/10
        "
      />

      <button
        onClick={sendMessage}
        className="
          absolute
          right-1.5
          top-1/2
          -translate-y-1/2
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-[#005F99]
          to-[#C8102E]
          text-white
          transition
          hover:scale-105
        "
      >
        <SendHorizontal size={16} />
      </button>

    </div>
  );
}