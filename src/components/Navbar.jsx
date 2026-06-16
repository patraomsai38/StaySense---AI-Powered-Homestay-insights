import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

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

        <div className="flex gap-6 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;