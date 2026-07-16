"use client";

import { AnimatePresence, motion } from "framer-motion";

import TanixHeader from "./TanixHeader";
import TanixContent from "./TanixContent";
import TanixFooter from "./TanixFooter";
import { useTanix } from "./hooks";

export default function TanixWidget() {
  const { isOpen } = useTanix();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 40,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            inset-0
            z-[100]

            flex
            flex-col

            bg-white/95
            backdrop-blur-2xl

            sm:inset-auto
            sm:bottom-24
            sm:right-6

            sm:h-[700px]
            sm:max-h-[85vh]
            sm:w-[420px]

            sm:rounded-[28px]

            border
            border-white/20

            overflow-hidden

            shadow-[0_25px_80px_rgba(0,0,0,0.25)]
          "
        >
          <TanixHeader />

          <TanixContent />

          <TanixFooter />
        </motion.div>
      )}
    </AnimatePresence>
  );
}