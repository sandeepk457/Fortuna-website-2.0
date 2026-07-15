"use client";

import { motion } from "framer-motion";
import type { TanixMessage as Message } from "./types";

interface TanixMessageProps {
  message: Message;
}

export default function TanixMessage({
  message,
}: TanixMessageProps) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex w-full ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[82%] rounded-3xl px-4 py-3 shadow-sm ${
          isUser
            ? "rounded-br-md bg-gradient-to-r from-[#005F99] to-[#C8102E] text-white"
            : "rounded-bl-md border border-slate-200 bg-white text-slate-700"
        }`}
      >
        <p className="whitespace-pre-wrap text-sm leading-7">
          {message.text}
        </p>

        <p
          className={`mt-2 text-[10px] ${
            isUser
              ? "text-white/70"
              : "text-slate-400"
          }`}
        >
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </motion.div>
  );
}