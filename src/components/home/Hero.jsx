import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import hero5 from "../../assets/images/hero5.jpg";

function Hero() {
  const navigate = useNavigate();

  const heroImages = [hero1, hero2, hero3, hero4, hero5];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleExplore = () => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      navigate("/booking");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}

      <img
        src={heroImages[currentImage]}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}

      <div className="relative z-10 flex items-center min-h-screen pt-24 lg:pt-28 pb-56">

        <div className="max-w-7xl mx-auto w-full px-6">

          <div className="max-w-4xl">

            <span className="inline-block bg-green-600/90 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              🌿 AI Powered Eco-Tourism Platform
            </span>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-white">

              Discover India's

              <span className="block bg-gradient-to-r from-green-300 to-green-500 bg-clip-text text-transparent">
                Best Homestays
              </span>

              with StaySense AI

            </h1>

            <p className="mt-8 max-w-3xl text-lg md:text-xl leading-9 text-gray-200">
              Experience AI-powered travel planning, smart homestay
              recommendations, eco-tourism adventures, and unforgettable stays
              across India.
            </p>

                        {/* Search Box */}

            <div className="mt-10 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">

              <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_auto]">

                {/* Destination */}

                <div className="flex items-center gap-4 px-6 py-5 border-b lg:border-b-0 lg:border-r border-gray-200">

                  <span className="text-2xl">📍</span>

                  <div className="flex-1">

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Destination
                    </p>

                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="mt-1 w-full bg-transparent outline-none text-gray-800 text-lg font-medium placeholder:text-gray-400"
                    />

                  </div>

                </div>

                {/* Check In */}

                <div className="flex items-center gap-4 px-6 py-5 border-b lg:border-b-0 lg:border-r border-gray-200">

                  <span className="text-2xl">📅</span>

                  <div className="flex-1">

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Check In
                    </p>

                    <input
                      type="date"
                      className="mt-1 w-full bg-transparent outline-none text-gray-800 text-lg font-medium"
                    />

                  </div>

                </div>

                {/* Guests */}

                <div className="flex items-center gap-4 px-6 py-5 border-b lg:border-b-0 lg:border-r border-gray-200">

                  <span className="text-2xl">👥</span>

                  <div className="flex-1">

                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Guests
                    </p>

                    <input
                      type="number"
                      min="1"
                      defaultValue="2"
                      className="mt-1 w-full bg-transparent outline-none text-gray-800 text-lg font-medium"
                    />

                  </div>

                </div>

                {/* Explore Button */}

                <button
                  onClick={handleExplore}
                  className="bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-10 py-6 transition-all duration-300 hover:scale-[1.02]"
                >
                  Explore →
                </button>

              </div>

            </div>

                        {/* Popular Destinations */}

            <div className="mt-10">

              <p className="text-white/80 text-sm font-medium mb-4">
                Popular Destinations
              </p>

              <div className="flex flex-wrap gap-4">

                {[
                  "🏔 Mussoorie",
                  "🧘 Rishikesh",
                  "🌲 Dehradun",
                  "🏕 Auli",
                ].map((place) => (
                  <button
                    key={place}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full hover:bg-green-600 hover:border-green-600 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {place}
                  </button>
                ))}

              </div>

            </div>

            {/* CTA Buttons */}

            <div className="mt-12 flex flex-wrap items-center gap-5">

              <button
                onClick={handleExplore}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Explore Homestays
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white text-green-700 px-10 py-4 rounded-2xl text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>

            {/* Weather Card */}

      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2">

        <div className="w-72 rounded-3xl bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl p-8 text-white">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-bold">
                Dehradun
              </h3>

              <p className="text-sm text-gray-200 mt-1">
                Uttarakhand
              </p>

            </div>

            <span className="text-5xl">
              ☀️
            </span>

          </div>

          <h2 className="text-5xl font-bold mt-8">
            24°C
          </h2>

          <p className="text-gray-200 mt-3">
            Perfect weather for travelling
          </p>

          <div className="mt-6 h-1 rounded-full bg-white/20">

            <div className="w-3/4 h-full rounded-full bg-green-400"></div>

          </div>

        </div>

      </div>

      {/* Bottom Statistics */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full px-6 z-20">

        <div className="max-w-6xl mx-auto rounded-3xl bg-black/30 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden">

          <div className="grid grid-cols-2 md:grid-cols-4">

            {[
              {
                value: "500+",
                label: "Homestays",
              },
              {
                value: "10K+",
                label: "Guests",
              },
              {
                value: "4.9★",
                label: "Average Rating",
              },
              {
                value: "24/7",
                label: "AI Support",
              },
            ].map((item, index) => (

              <div
                key={item.label}
                className={`py-7 text-center ${
                  index !== 3
                    ? "md:border-r border-white/20"
                    : ""
                }`}
              >

                <h3 className="text-4xl font-bold text-green-400">
                  {item.value}
                </h3>

                <p className="mt-2 text-gray-200">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;