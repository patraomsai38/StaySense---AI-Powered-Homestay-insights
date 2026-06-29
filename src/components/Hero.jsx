import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleExplore = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate("/booking");
    } else {
      alert("Please login first to explore homestays.");
      navigate("/login");
    }
  };

  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          StaySense AI
        </h1>

        <p className="text-xl md:text-2xl mb-8">
          AI-Powered Homestay Insights & Eco-Tourism Platform
        </p>

        <button
          onClick={handleExplore}
          className="bg-white text-green-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
        >
          Explore Homestays
        </button>

      </div>
    </section>
  );
}

export default Hero;