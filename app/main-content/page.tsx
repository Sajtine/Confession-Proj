"use client";

export default function SoftEnvelope() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 p-4">
      <div className="flex flex-col items-center">
        
        {/* Responsive Envelope Container */}
        <div className="relative cursor-pointer active:scale-95 transition-transform duration-200 group">
          <div className="w-[280px] sm:w-[320px] md:w-[360px] 
                          h-[200px] sm:h-[220px] md:h-[250px] 
                          bg-gradient-to-br from-pink-400 via-rose-400 to-pink-500 
                          rounded-3xl shadow-xl relative overflow-hidden border border-pink-300">

            {/* Soft inner shadow for depth */}
            <div className="absolute inset-[8px] bg-gradient-to-br from-black/10 to-transparent rounded-[22px] z-10" />

            {/* Subtle paper texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] bg-[length:4px_4px] rounded-3xl" />

            {/* Gentle fold lines */}
            <div className="absolute bottom-8 left-6 right-6 h-px bg-white/40" />
            <div className="absolute bottom-11 left-6 right-6 h-px bg-white/25" />

            {/* Envelope Flap - Closed */}
            <div
              className="absolute top-0 left-0 right-0 h-[52%] 
                         bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 
                         rounded-t-3xl z-30 shadow-inner overflow-hidden"
              style={{ clipPath: "polygon(0% 0%, 100% 0%, 50% 72%)" }}
            >
              {/* Flap highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
            </div>

            {/* Wax Seal */}
            <div className="absolute top-7 left-1/2 -translate-x-1/2 
                            w-12 h-12 sm:w-14 sm:h-14 
                            bg-gradient-to-br from-rose-100 via-pink-100 to-white 
                            rounded-full flex items-center justify-center shadow-xl z-40 
                            border-[3px] border-white/80">
              <span className="text-3xl sm:text-4xl drop-shadow-sm">❤️</span>
              {/* Seal shine */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/70 to-transparent" />
            </div>
          </div>
        </div>

        {/* Instruction Text */}
        <p className="mt-10 text-pink-400/80 text-xs sm:text-sm font-medium tracking-[3px] sm:tracking-[4px] uppercase text-center">
          TAP TO OPEN THE ENVELOPE
        </p>
      </div>
    </div>
  );
}