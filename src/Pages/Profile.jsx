import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      <Navbar />

      {/* ================= PROFILE HEADER ================= */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

            {/* Left Side */}

            <div className="flex items-center gap-8">

              <img
                src="https://ui-avatars.com/api/?name=User&background=16a34a&color=fff&size=256"
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-green-200 shadow-xl"
              />

              <div>

                <h1 className="text-5xl font-bold">

                  Welcome Back 👋

                </h1>

                <h2 className="text-3xl font-semibold text-green-700 mt-4">

                  Himani

                </h2>

                <p className="text-gray-500 mt-2">

                  himani@gmail.com

                </p>

                <p className="text-gray-400 mt-2">

                  Member Since • August 2026

                </p>

              </div>

            </div>

            {/* Right Side */}

            <div className="flex flex-col gap-4">

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition">

                ✏ Edit Profile

              </button>

              <button className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-2xl font-semibold transition">

                📷 Change Photo

              </button>

            </div>

          </div>

        </div>

      </section>
            {/* ================= PROFILE STATISTICS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Total Bookings */}

          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl shadow-xl p-8 text-white hover:-translate-y-2 transition duration-300">

            <div className="text-5xl">

              🏡

            </div>

            <h2 className="text-5xl font-bold mt-6">

              12

            </h2>

            <p className="mt-4 text-green-100">

              Total Bookings

            </p>

          </div>

          {/* Reviews */}

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl shadow-xl p-8 text-white hover:-translate-y-2 transition duration-300">

            <div className="text-5xl">

              ⭐

            </div>

            <h2 className="text-5xl font-bold mt-6">

              8

            </h2>

            <p className="mt-4 text-yellow-100">

              Reviews Given

            </p>

          </div>

          {/* Upcoming Trips */}

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-xl p-8 text-white hover:-translate-y-2 transition duration-300">

            <div className="text-5xl">

              📅

            </div>

            <h2 className="text-5xl font-bold mt-6">

              3

            </h2>

            <p className="mt-4 text-blue-100">

              Upcoming Trips

            </p>

          </div>

          {/* Completed Trips */}

          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl shadow-xl p-8 text-white hover:-translate-y-2 transition duration-300">

            <div className="text-5xl">

              ✔

            </div>

            <h2 className="text-5xl font-bold mt-6">

              9

            </h2>

            <p className="mt-4 text-purple-100">

              Completed Trips

            </p>

          </div>

        </div>

      </section>
            {/* ================= QUICK ACTIONS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-12">

        <h2 className="text-4xl font-bold mb-10">

          ⚡ Quick Actions

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* My Bookings */}

          <div
            onClick={() => window.location.href="/my-bookings"}
            className="bg-white rounded-3xl shadow-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="text-5xl">

              📋

            </div>

            <h3 className="text-2xl font-bold mt-6">

              My Bookings

            </h3>

            <p className="text-gray-600 mt-4">

              View all your current and previous bookings.

            </p>

          </div>

          {/* Dashboard */}

          <div
            onClick={() => window.location.href="/dashboard"}
            className="bg-white rounded-3xl shadow-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="text-5xl">

              📊

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Dashboard

            </h3>

            <p className="text-gray-600 mt-4">

              View analytics, revenue and booking insights.

            </p>

          </div>

          {/* AI Assistant */}

          <div
            onClick={() => window.location.href="/ai"}
            className="bg-white rounded-3xl shadow-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="text-5xl">

              🤖

            </div>

            <h3 className="text-2xl font-bold mt-6">

              AI Assistant

            </h3>

            <p className="text-gray-600 mt-4">

              Get travel suggestions and AI recommendations.

            </p>

          </div>

          {/* Wishlist */}

          <div
            className="bg-white rounded-3xl shadow-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="text-5xl">

              ❤️

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Wishlist

            </h3>

            <p className="text-gray-600 mt-4">

              Save your favourite destinations for future trips.

            </p>

          </div>

          {/* Settings */}

          <div
            className="bg-white rounded-3xl shadow-xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="text-5xl">

              ⚙️

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Settings

            </h3>

            <p className="text-gray-600 mt-4">

              Manage account preferences and security.

            </p>

          </div>

          {/* Logout */}

          <div
            className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl shadow-xl p-8 text-white cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <div className="text-5xl">

              🚪

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Logout

            </h3>

            <p className="mt-4 text-red-100">

              Securely sign out from your StaySense account.

            </p>

          </div>

        </div>

      </section>
            {/* ================= RECENT ACTIVITY ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-12">

        <h2 className="text-4xl font-bold mb-10">

          📜 Recent Activity

        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <div className="space-y-8">

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl">

                🏡

              </div>

              <div>

                <h3 className="font-bold text-xl">

                  Booking Confirmed

                </h3>

                <p className="text-gray-600 mt-2">

                  Your booking at Hotel Grand Legacy Prime has been confirmed.

                </p>

                <p className="text-gray-400 text-sm mt-2">

                  Today • 10:30 AM

                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl">

                ⭐

              </div>

              <div>

                <h3 className="font-bold text-xl">

                  Review Submitted

                </h3>

                <p className="text-gray-600 mt-2">

                  Thanks for reviewing your recent stay.

                </p>

                <p className="text-gray-400 text-sm mt-2">

                  Yesterday

                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">

                🤖

              </div>

              <div>

                <h3 className="font-bold text-xl">

                  AI Recommendation

                </h3>

                <p className="text-gray-600 mt-2">

                  StaySense found 5 eco-tourism destinations you may like.

                </p>

                <p className="text-gray-400 text-sm mt-2">

                  2 Days Ago

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ACHIEVEMENTS ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-12">

        <h2 className="text-4xl font-bold mb-10">

          🏆 Achievements

        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl text-white p-8 shadow-xl">

            <div className="text-5xl">

              🌍

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Explorer

            </h3>

            <p className="mt-4">

              Completed your first eco-tourism trip.

            </p>

          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl text-white p-8 shadow-xl">

            <div className="text-5xl">

              ⭐

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Reviewer

            </h3>

            <p className="mt-4">

              Shared helpful reviews with the community.

            </p>

          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl text-white p-8 shadow-xl">

            <div className="text-5xl">

              🏡

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Frequent Traveler

            </h3>

            <p className="mt-4">

              Booked multiple stays using StaySense.

            </p>

          </div>

        </div>

      </section>

      {/* ================= TRAVEL SUMMARY ================= */}

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 rounded-3xl shadow-2xl p-10 text-white">

          <h2 className="text-4xl font-bold">

            ✈ Travel Summary

          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">

            <div>

              <h3 className="text-4xl font-bold">

                12

              </h3>

              <p className="text-green-100 mt-3">

                Total Trips

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">

                ₹48,000

              </h3>

              <p className="text-green-100 mt-3">

                Total Spent

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold">

                4.9 ⭐

              </h3>

              <p className="text-green-100 mt-3">

                Average Rating Given

              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default Profile;