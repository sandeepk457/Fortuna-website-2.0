"use client";

import { motion } from "framer-motion";

export default function TanixTyping() {
  return (
    <div className="flex justify-start">

      <div className="rounded-3xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">

        <div className="flex gap-1">

          {[0,1,2].map((i)=>(
            <motion.div
              key={i}
              animate={{
                y:[0,-4,0]
              }}
              transition={{
                repeat:Infinity,
                duration:.8,
                delay:i*.15
              }}
              className="h-2 w-2 rounded-full bg-slate-400"
            />
          ))}

        </div>

      </div>

    </div>
  );
}