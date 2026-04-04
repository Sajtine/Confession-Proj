"use client";

import { ClipboardList } from "lucide-react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-24 left-10 w-40 h-40 bg-pink-500 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-24 right-10 w-52 h-52 bg-purple-500 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Card Wrapper (gradient border effect) */}
      <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent">
        {/* Glow on hover */}
        <div className="absolute -inset-1 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

        {/* Card */}
        <div className="relative flex flex-col items-center w-[360px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl px-8 py-9 text-center">
          {/* Icon */}
          <div className="bg-white/10 p-3 rounded-xl mb-4 border border-white/20">
            <ClipboardList className="text-white w-6 h-6" />
          </div>

          {/* Title */}
          <h1 className="text-white font-semibold text-3xl tracking-tight">
            Survey
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-[260px]">
            Help us improve by completing this quick survey.
          </p>

          {/* Info cards */}
          <div className="mt-6 w-full text-xs text-gray-400 space-y-2">
            <div className="flex items-center justify-between bg-white/5 px-3 py-2 rounded-lg border border-white/10">
              <span>Estimated time</span>
              <span className="text-white">1–2 min</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 px-3 py-2 rounded-lg border border-white/10">
              <span>Responses</span>
              <span className="text-white">Recorded</span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

          {/* Button */}
          <button
            className="w-full bg-white text-black py-2.5 rounded-lg font-medium 
          hover:bg-gray-200 active:scale-95 transition-all duration-200
          shadow-md hover:shadow-lg"
            onClick={() => router.push("/survey")}
          >
            Start Survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
