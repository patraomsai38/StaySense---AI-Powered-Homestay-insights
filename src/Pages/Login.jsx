import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password.");
      return;
    }

    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("username", username);

    alert("Login Successful!");

    navigate("/booking");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-green-50 to-green-300 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white transition-all duration-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white/95 dark:bg-gray-800 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-green-100 dark:border-gray-700">

          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="StaySense AI"
              className="w-20 h-20 rounded-full shadow-lg"
            />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
            Login to StaySense AI
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">

            {/* Username */}
            <div>
              <label className="block mb-2 font-medium">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm md:text-base text-green-700 dark:text-green-400 hover:text-green-800 hover:underline transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-semibold"
            >
              Login
            </button>

          </form>

          {/* Register Section */}
          <div className="text-center mt-6 border-t border-gray-200 dark:border-gray-600 pt-5">

            <p className="text-gray-600 dark:text-gray-300">
              New to StaySense AI?
            </p>

            <button
              type="button"
              className="mt-3 w-full border-2 border-green-700 text-green-700 dark:text-green-400 dark:border-green-400 py-3 px-4 rounded-lg font-semibold text-sm md:text-base hover:bg-green-700 hover:text-white transition duration-300"
            >
              Create New Account
            </button>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;