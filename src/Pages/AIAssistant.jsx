import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import ChatAssistant from "../components/ChatAssistant";

function AIAssistant() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-black p-8">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mb-6 bg-white dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <IoArrowBack className="text-lg" />
          Back to Home
        </button>

        <h1 className="text-5xl font-bold text-center text-green-700 dark:text-green-400 mb-3">
          StaySense AI
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Your intelligent travel companion for homestays, eco-tourism, and personalized itineraries.
        </p>

        <ChatAssistant />

      </div>

    </div>
  );
}

export default AIAssistant;