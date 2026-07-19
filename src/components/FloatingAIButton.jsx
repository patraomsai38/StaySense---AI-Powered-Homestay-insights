import { useNavigate } from "react-router-dom";
import { BsStars } from "react-icons/bs";

function FloatingAIButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50 group">

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap shadow-xl">
        Ask StaySense AI
      </div>

      {/* Floating Button */}
      <button
        onClick={() => navigate("/ai")}
        className="relative w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-800 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 animate-bounce"
      >

        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></span>

        {/* Icon */}
        <BsStars className="text-3xl relative z-10" />
        <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-300 border-2 border-white rounded-full"></div>

      </button>

    </div>
  );
}

export default FloatingAIButton;