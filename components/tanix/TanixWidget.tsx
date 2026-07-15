"use client";

import { AnimatePresence, motion } from "framer-motion";

import TanixHeader from "./TanixHeader";
import { useTanix } from "./hooks";
import TanixContent from "./TanixContent";
import TanixFooter from "./TanixFooter";

export default function TanixWidget() {

  const { isOpen } = useTanix();

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
            y: 30,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed bottom-24 right-6 z-[100] flex h-[700px] max-h-[85vh] w-[420px] flex-col overflow-hidden rounded-[28px] border border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.25)]"
        >

        <TanixHeader />

        <TanixContent />

        <TanixFooter />

          

        </motion.div>

      )}

    </AnimatePresence>
  );
}