"use client";

import { motion } from "framer-motion";
import { BotMessageSquare } from "lucide-react";

import { useTanix } from "./hooks";

export default function TanixButton() {

  const { toggle } = useTanix();

  return (

    <motion.button

      whileHover={{
        scale: 1.08,
      }}

      whileTap={{
        scale: 0.95,
      }}

      animate={{
        y: [0, -5, 0],
      }}

      transition={{
        duration: 3,
        repeat: Infinity,
      }}

      onClick={toggle}

      className="fixed bottom-6 right-6 z-[101] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#005F99] to-[#C8102E] text-white shadow-[0_10px_40px_rgba(0,95,153,0.45)]"

    >

      <BotMessageSquare size={28} />

      <motion.span
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full border border-[#005F99]"
      />

    </motion.button>

  );

}