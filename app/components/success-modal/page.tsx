"use client";

import { useEffect, useState } from "react";

const SuccessModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      setTimeout(() => setAnimate(true), 30);
    } else {
      setAnimate(false);
      setTimeout(() => setShow(false), 300);
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center 
        bg-black/70 backdrop-blur-sm px-4
        transition-opacity duration-300
        ${animate ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Modal Box - Responsive Width */}
      <div
        className={`
          w-full max-w-[340px] sm:max-w-[380px]
          bg-white/10 backdrop-blur-2xl border border-white/20 
          rounded-3xl shadow-2xl p-8 sm:p-10 text-center
          transform transition-all duration-300 ease-out
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      >
        {/* Celebration Icon */}
        <div className="text-6xl sm:text-7xl mb-4">🎉</div>

        {/* Title */}
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
          Success!
        </h2>

        {/* Message */}
        <p className="text-gray-300 text-base sm:text-lg mt-3 leading-relaxed">
          Your response has been submitted.<br />
          Thank you for your feedback!
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-8 w-full bg-white hover:bg-gray-100 active:bg-gray-200 
                     text-black font-semibold py-3.5 rounded-2xl 
                     shadow-lg active:scale-95 transition-all duration-200
                     text-base sm:text-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;