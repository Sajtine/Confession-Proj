import { useEffect, useState } from "react";

const AlertModal = ({
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

      // delay so transition triggers (IMPORTANT for fade-in)
      setTimeout(() => {
        setAnimate(true);
      }, 30);
    } else {
      setAnimate(false);

      setTimeout(() => {
        setShow(false);
      }, 300); // wait fade-out
    }
  }, [isOpen]);

  if (!show) return null;

  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50
        transition-opacity duration-300 ease-out
        ${animate ? "opacity-100" : "opacity-0"}
      `}
    >
      {/* Modal box */}
      <div
        className={`
          bg-white/10 backdrop-blur-2xl border border-white/20 text-center p-8 rounded-2xl shadow-2xl w-[320px]
          transform transition-all duration-300 ease-out
          ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        `}
      >
        {/* Icon */}
        <div className="text-5xl mb-3">⚠️</div>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold">Alert</h2>

        {/* Message */}
        <p className="text-gray-300 text-sm mt-2">
          Please fill in all the required fields.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="mt-6 w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 active:scale-95 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertModal;