"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "../components/success-modal/page";

const SurveyPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !age || !feedback) {
      alert("Please fill in all fields"); // You can replace this with a better alert later
      return;
    }

    setIsModalOpen(true);
    
    // Clear form
    setName("");
    setAge("");
    setFeedback("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 px-4 py-8 relative overflow-hidden">
      
      {/* Background glows - Responsive */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-4 md:left-10 w-32 h-32 sm:w-40 sm:h-40 bg-pink-500 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-4 md:right-10 w-40 h-40 sm:w-52 sm:h-52 bg-purple-500 blur-3xl rounded-full" />
      </div>

      {/* Card Wrapper */}
      <div className="relative group p-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent w-full max-w-[420px]">
        
        {/* Hover glow effect */}
        <div className="absolute -inset-1 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

        {/* Main Card */}
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl px-5 py-8 sm:px-8 sm:py-10">
          
          {/* Icon */}
          <div className="mx-auto bg-white/10 p-4 rounded-2xl border border-white/20 mb-6 w-fit">
            <MessageSquare className="text-white w-7 h-7" />
          </div>

          {/* Title & Subtitle */}
          <h1 className="text-white text-3xl sm:text-4xl font-semibold text-center tracking-tight">
            Quick Survey
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-2 text-center">
            Tell us about your experience
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            {/* Age Select */}
            <div>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition appearance-none"
                required
              >
                <option value="" className="text-black">Select your age group</option>
                <option value="Under 18" className="text-black">Under 18</option>
                <option value="18 – 24" className="text-black">18 – 24</option>
                <option value="25 – 34" className="text-black">25 – 34</option>
                <option value="35 – 44" className="text-black">35 – 44</option>
                <option value="45 – 54" className="text-black">45 – 54</option>
                <option value="55+" className="text-black">55+</option>
              </select>
            </div>

            {/* Feedback Textarea */}
            <div>
              <textarea
                placeholder="Your feedback..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-28 resize-y min-h-[100px] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white hover:bg-gray-100 active:bg-gray-200 
                         text-black font-semibold py-3.5 rounded-2xl 
                         shadow-lg hover:shadow-xl active:scale-[0.985] 
                         transition-all duration-200 text-base sm:text-lg mt-2"
            >
              Submit Response
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          router.push("/main-content");
        }} 
      />

    </div>
  );
};

export default SurveyPage;