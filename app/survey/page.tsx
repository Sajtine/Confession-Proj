"use client";

import { MessageSquare } from "lucide-react";
import { useState } from "react";
import SuccessModal from "../components/success-modal/page";
import { useRouter } from "next/navigation";
import AlertModal from "../components/alert-modal/page";

const SurveyPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [feedback, setFeedback] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  setIsModalOpen(true);

  setName("");
  setAge("");
  setFeedback("");
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-24 left-10 w-40 h-40 bg-pink-500 blur-3xl rounded-full" />
        <div className="absolute bottom-24 right-10 w-52 h-52 bg-purple-500 blur-3xl rounded-full" />
      </div>

      {/* Card wrapper */}
      <div className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-white/30 via-white/10 to-transparent">
        {/* Hover glow */}
        <div className="absolute -inset-1 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

        {/* Card */}
        <div className="relative w-[380px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl px-8 py-9 text-center">
          {/* Icon */}
          <div className="bg-white/10 p-3 rounded-xl mb-4 border border-white/20 inline-block">
            <MessageSquare className="text-white w-6 h-6" />
          </div>

          {/* Title */}
          <h1 className="text-white text-2xl font-semibold">Quick Survey</h1>

          <p className="text-gray-300 text-sm mt-2">
            Tell us about your experience
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4 text-left">
            {/* Name */}
            <input
              type="text"
              placeholder="Your name"
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            {/* Select */}
            <select
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setAge(e.target.value)}
            >
              <option className="text-black">Select your age</option>
              <option className="text-black">Under 18</option>
              <option className="text-black">18 – 24</option>
              <option className="text-black">25 – 34</option>
              <option className="text-black">35 – 44</option>
              <option className="text-black">45 – 54</option>
              <option className="text-black">55+</option>
            </select>

            {/* Feedback */}
            <textarea
              placeholder="Your feedback..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 h-24 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>

            {/* Button */}
            <button
              className="w-full bg-white text-black py-2.5 rounded-lg font-medium 
            hover:bg-gray-200 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={handleSubmit}
            >
              Submit Response
            </button>
          </form>
        </div>

        <AlertModal isOpen={isModalOpen} onClose={() => router.push("/main-content")} />
      </div>
    </div>
  );
};

export default SurveyPage;
