import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check all fields
    if (!username || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    // Check minimum password length
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          username,
          email,
          password,
        }
      );

      alert(
        response.data.message || "Registration Successful!"
      );

      navigate("/login");

    } catch (error) {
      console.error("Registration error:", error);

      // Handle express-validator errors
      if (
        error.response?.data?.errors &&
        error.response.data.errors.length > 0
      ) {
        alert(error.response.data.errors[0].msg);
        return;
      }

      // Handle normal backend error messages
      alert(
        error.response?.data?.message ||
        "Registration Failed"
      );

    } finally {
      setLoading(false);
    }
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
            Create Account
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
            Join StaySense AI
          </p>

          {/* Registration Form */}
          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            {/* Username */}
            <div>
              <label className="block mb-2 font-medium">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Minimum 8 characters"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full border rounded-lg p-3 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                minLength={8}
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Register"}
            </button>

          </form>

          {/* Login Link */}
          <div className="text-center mt-6 border-t border-gray-200 dark:border-gray-600 pt-5">

            <p className="text-gray-600 dark:text-gray-300">
              Already have an account?
            </p>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="mt-3 w-full border-2 border-green-700 text-green-700 dark:text-green-400 dark:border-green-400 py-3 px-4 rounded-lg font-semibold hover:bg-green-700 hover:text-white transition duration-300"
            >
              Login to Your Account
            </button>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Register;