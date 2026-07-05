import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    if (!username || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {

      await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          password,
        }
      );

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {

      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );

    }
  };

  return (

    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-green-50 to-green-300 dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">

      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6">

        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 w-full max-w-md">

          <div className="flex justify-center mb-4">

            <img
              src={logo}
              alt="StaySense AI"
              className="w-20 h-20 rounded-full"
            />

          </div>

          <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">

            Create Account

          </h1>

          <p className="text-center text-gray-500 dark:text-gray-300 mb-6">

            Join StaySense AI

          </p>

          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >

            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded-lg p-3 dark:bg-gray-700"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3 dark:bg-gray-700"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              className="w-full bg-green-700 text-white py-3 rounded-lg"
            >

              Register

            </button>

          </form>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default Register;