"use client";

import { ClipboardList } from "lucide-react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 px-4 py-8 relative overflow-hidden">
      {/* Background glows - Responsive positioning */}
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-16 left-4 md:left-10 w-40 h-40 sm:w-52 sm:h-52 bg-rose-500 blur-[100px] rounded-full animate-pulse" />

        <div className="absolute bottom-24 right-4 md:right-12 w-52 h-52 sm:w-72 sm:h-72 bg-violet-600 blur-[100px] rounded-full animate-pulse" />

        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-cyan-400/40 blur-3xl rounded-full animate-pulse" />
      </div>
      
      {/* Card Wrapper with gradient border */}
      <div className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent w-full max-w-[380px]">
        {/* Hover glow effect */}
        <div className="absolute -inset-1 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

        {/* Main Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl px-6 py-10 sm:px-8 sm:py-12 text-center">
          {/* Icon */}
          <div className="mx-auto bg-white/10 p-4 rounded-2xl border border-white/20 mb-6 w-fit">
            <ClipboardList className="text-white w-7 h-7" />
          </div>

          {/* Title */}
          <h1 className="text-white font-semibold text-3xl sm:text-4xl tracking-tight">
            Survey
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed max-w-[280px] mx-auto">
            Help us improve by completing this quick survey.
          </p>

          {/* Info Cards */}
          <div className="mt-8 w-full space-y-3">
            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/10 text-sm">
              <span className="text-gray-400">Estimated time</span>
              <span className="text-white font-medium">1–2 min</span>
            </div>

            <div className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/10 text-sm">
              <span className="text-gray-400">Responses</span>
              <span className="text-white font-medium">Recorded</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8" />

          {/* Start Button - Fully Responsive */}
          <button
            onClick={() => router.push("/survey")}
            className="w-full bg-white hover:bg-gray-100 active:bg-gray-200 
                       text-black font-semibold py-3.5 rounded-2xl 
                       shadow-lg hover:shadow-xl active:scale-[0.985] 
                       transition-all duration-200 text-base sm:text-lg"
          >
            Start Survey
          </button>
        </div>
      </div>

      {/* Optional subtle footer text */}
      <p className="text-gray-500 text-xs mt-10 text-center">
        Your feedback means a lot to us ❤️
      </p>
    </div>
  );
};

export default HomePage;
