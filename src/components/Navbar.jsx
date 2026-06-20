import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.png";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="bg-green-700 dark:bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">

        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="StaySense AI Logo"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h1 className="font-bold text-xl">
              StaySense AI
            </h1>

            <p className="text-xs text-green-100">
              Smart Homestay Insights
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-200"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;