"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TanixAvatar() {
  return (
    <motion.div
      animate={{
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      {/* Soft Glow */}
      <div className="absolute inset-0 rounded-full bg-[#005F99]/20 blur-xl" />

      <Image
        src="/images/tanix/tanix-avatar1.png"
        alt="Tanix"
        width={44}
        height={44}
        priority
        className="
          relative
          h-11
          w-11
          rounded-full
          border
          border-white/20
          shadow-lg
          object-cover
        "
      />
    </motion.div>
  );
}