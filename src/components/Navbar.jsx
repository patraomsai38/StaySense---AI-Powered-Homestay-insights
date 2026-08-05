import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import logo from "../assets/logo.png";
import { Menu, X, Moon, Sun } from "lucide-react";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
        >
          <img
            src={logo}
            alt="StaySense"
            className="w-12 h-12 rounded-full transition duration-500 group-hover:rotate-12"
          />

          <div>
            <h1 className="font-extrabold text-2xl text-green-600">
              StaySense AI
            </h1>

            <p className="text-xs text-gray-500">
              Smart Homestay Platform
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">

          <Link to="/" className="hover:text-green-600 transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-green-600 transition">
            About
          </Link>

          <Link to="/booking" className="hover:text-green-600 transition">
            Bookings
          </Link>

          <Link to="/dashboard" className="hover:text-green-600 transition">
            Dashboard
          </Link>

          {isLoggedIn && (
            <Link
              to="/my-bookings"
              className="hover:text-green-600 transition"
            >
              My Bookings
            </Link>
          )}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition"
          >
            {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
          </button>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-white font-semibold transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-xl border border-green-600 hover:bg-green-50 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28}/> : <Menu size={28}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-xl px-6 py-6 space-y-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>

          <Link to="/booking" onClick={() => setMenuOpen(false)}>Bookings</Link>

          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>

          {isLoggedIn && (
            <Link
              to="/my-bookings"
              onClick={() => setMenuOpen(false)}
            >
              My Bookings
            </Link>
          )}

        </div>
      )}
    </nav>
  );
}

export default Navbar;