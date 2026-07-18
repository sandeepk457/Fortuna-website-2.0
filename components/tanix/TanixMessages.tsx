"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";

import TanixMessage from "./TanixMessage";
import { useTanix } from "./hooks";
import TanixTyping from "./TanixTyping";

export default function TanixMessages() {
  const { messages, isTyping, clearMessages } = useTanix();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-1 flex-col gap-4 px-6 py-6">

      {/* Back to Home */}
      {messages.length > 0 && (
        <button
          type="button"
          onClick={clearMessages}
          className="flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-[#C8102E] hover:text-[#C8102E]"
        >
          <ArrowLeft size={15} />
          Back to Home
        </button>
      )}

      {/* Messages */}
      {messages.map((message) => (
        <TanixMessage
          key={message.id}
          message={message}
        />
      ))}

      {/* Typing Indicator */}
      {isTyping && <TanixTyping />}

      {/* Auto-scroll Target */}
      <div ref={messagesEndRef} />

    </div>
  );
}