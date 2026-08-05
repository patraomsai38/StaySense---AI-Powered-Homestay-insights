import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import WhyChoose from "../components/home/WhyChoose";
import FeaturedDestinations from "../components/home/FeaturedDestinations";
import NearbyHomestays from "../components/home/NearbyHomestays";
import Footer from "../components/Footer";
import FloatingAIButton from "../components/FloatingAIButton";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";

import { getNearbyHomestays } from "../services/homestayService";

function Home() {
  const [homestays, setHomestays] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await getNearbyHomestays(latitude, longitude);
          setHomestays(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white">

      <Navbar />

      <Hero />

      <WhyChoose />

      <FeaturedDestinations />

      {/* Statistics */}
      <section className="bg-green-700 text-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-bold">500+</h3>
              <p>Homestays Listed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">10K+</h3>
              <p>Guest Reviews</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">95%</h3>
              <p>Customer Satisfaction</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p>AI Assistance</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p>Eco Tourism Partners</p>
            </div>

          </div>
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
          Platform Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              AI Sentiment Analysis
            </h3>

            <p className="text-gray-600">
              Automatically identify positive, neutral and negative guest
              feedback to improve service quality.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Host Analytics Dashboard
            </h3>

            <p className="text-gray-600">
              Monitor occupancy rates, booking trends and guest satisfaction
              using beautiful dashboards.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Eco-Tourism Recommendations
            </h3>

            <p className="text-gray-600">
              Recommend sustainable travel experiences and nearby attractions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition duration-300">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              AI Guest Support
            </h3>

            <p className="text-gray-600">
              Get instant AI assistance for bookings, facilities and travel
              planning.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-5">
            Transform Your Homestay Business
          </h2>

          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Leverage AI-powered insights to improve guest satisfaction,
            increase bookings and enhance your digital presence.
          </p>

          <button className="bg-white text-green-700 px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition">
            Get Started
          </button>

        </div>

      </section>

      <NearbyHomestays
        homestays={homestays}
        loading={loading}
      />
      <Testimonials />
      <FAQ />
      <FloatingAIButton />

      <Footer />

    </div>
  );
}

export default Home;