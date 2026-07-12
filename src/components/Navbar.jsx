import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.png";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");

    alert("Logged out successfully!");

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className="bg-green-700 dark:bg-gray-900 text-white shadow-lg sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">

        {/* Logo */}
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

        {/* Navigation */}

        <div className="flex flex-wrap gap-4 items-center font-medium">

          <Link
            to="/"
            className="hover:text-green-200 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-green-200 transition"
          >
            About
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-green-200 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/booking"
            className="hover:text-green-200 transition"
          >
            Book Now
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="hover:text-green-200 transition"
              >
                My Bookings
              </Link>

              <button
                onClick={handleLogout}
                className="text-red-200 hover:text-red-400 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-green-200 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-green-200 transition"
              >
                Register
              </Link>
            </>
          )}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold hover:bg-gray-200 transition"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;