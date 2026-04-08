"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoveLetter from "../components/letter/page";

export default function SoftEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4 relative overflow-hidden">

      <div className="flex flex-col items-center w-full max-w-md mx-auto">

        {/* ENVELOPE */}
        <div
          className="relative cursor-pointer active:scale-95 transition-transform duration-200 [perspective:1200px] w-full max-w-[360px]"
          onClick={() => {
            if (!isOpen) {
              setIsOpen(true);
              setTimeout(() => {
                setShowLetter(true);
              }, 120);
            }
          }}
        >

          {/* OUTER ENVELOPE with smooth pulsing */}
          <motion.div
            animate={{
              scale: isOpen ? 1.04 : [1, 1.055, 1],
              rotateX: isOpen ? 10 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.9,
              scale: {
                duration: 3.4,
                repeat: isOpen ? 0 : Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <div
              className="w-full aspect-[1.44] max-w-[360px] min-w-[280px]
                         bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 
                         rounded-3xl shadow-2xl relative overflow-hidden border border-pink-300"
            >

              {/* INNER GLOW - pulses gently */}
              <motion.div
                className="absolute inset-0 bg-pink-200/30 blur-xl z-0"
                animate={{ 
                  opacity: isOpen ? 1 : [0.5, 0.85, 0.5] 
                }}
                transition={{
                  duration: 3.2,
                  repeat: isOpen ? 0 : Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />

              {/* INNER SHADOW */}
              <div className="absolute inset-[8px] bg-gradient-to-br from-black/10 to-transparent rounded-[22px] z-10" />

              {/* TEXTURE */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[length:4px_4px] rounded-3xl" />

              {/* FOLD LINES */}
              <div className="absolute bottom-8 left-6 right-6 h-px bg-white/40" />
              <div className="absolute bottom-11 left-6 right-6 h-px bg-white/25" />

              {/* FLAP */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[52%] 
                           bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 
                           rounded-t-3xl z-30 shadow-inner overflow-hidden"
                style={{ transformOrigin: "top", clipPath: "polygon(0% 0%, 100% 0%, 50% 72%)" }}
                animate={{
                  rotateX: isOpen ? 180 : 0,
                  y: isOpen ? -10 : 0,
                  scaleY: isOpen ? 0.98 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 16,
                  mass: 1,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/10 to-transparent"
                  animate={{ opacity: isOpen ? 0.25 : 0.7 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>

              {/* SEAL */}
              <motion.div
                className="absolute top-[22%] left-1/2 -translate-x-1/2 
                           w-12 h-12 sm:w-14 sm:h-14 
                           bg-gradient-to-br from-rose-100 via-pink-100 to-white 
                           rounded-full flex items-center justify-center shadow-xl z-40 
                           border-[3px] border-white/80"
                animate={{
                  scale: isOpen ? 0.3 : [1, 1.13, 1],
                  rotate: isOpen ? 25 : 0,
                  opacity: isOpen ? 0 : 1,
                  y: isOpen ? -10 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 15,
                  scale: {
                    duration: 2.9,
                    repeat: isOpen ? 0 : Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                }}
              >
                <span className="text-3xl sm:text-4xl drop-shadow-sm">❤️</span>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* INSTRUCTION */}
        <p className="mt-8 text-pink-400/80 text-xs sm:text-sm font-medium tracking-widest uppercase text-center px-4">
          {isOpen ? "OPENING..." : "TAP THE ENVELOPE TO OPEN"}
        </p>
      </div>

      {/* LETTER VIEW */}
      <AnimatePresence>
        {showLetter && (
          <LoveLetter
            onClose={() => {
              setShowLetter(false);
              setIsOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}