import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 to-green-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-md border border-green-100">
          {/* PASTE LOGO HERE */}
          <div className="flex justify-center mb-4">
            <img
              src={logo}
              alt="StaySense AI"
              className="w-20 h-20 rounded-full shadow-lg"
            />
          </div>

          <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mb-6">
            Login to StaySense AI
          </p>

          {/* Username */}
          <div>
            <label className="block mb-2 font-medium">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg p-3"
            />
          </div>
          <p className="text-sm text-green-700 mt-2 cursor-pointer">
  Forgot Password?
</p>

          <button
            className="w-full bg-green-700 text-white py-3 rounded-lg mt-6"
          >
            Login
          </button>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;