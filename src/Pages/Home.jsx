import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const features = [
    {
      title: "AI Review Analysis",
      description:
        "Analyze guest reviews using sentiment analysis and NLP to understand customer satisfaction."
    },
    {
      title: "Smart Booking",
      description:
        "Discover and book homestays based on location, budget, amenities, and ratings."
    },
    {
      title: "Travel Recommendations",
      description:
        "Get personalized recommendations for local attractions, restaurants, and activities."
    }
  ];

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white">
      <Navbar />

      <Hero />

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
          Why Choose StaySense AI?
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Helping homestay owners improve guest experiences through
          Artificial Intelligence and data-driven insights.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      {/* Statistics Section */}
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

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              AI Sentiment Analysis
            </h3>

            <p className="text-gray-600">
              Automatically identify positive, neutral, and negative
              guest feedback to improve service quality.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Host Analytics Dashboard
            </h3>

            <p className="text-gray-600">
              Monitor occupancy rates, booking trends, and guest
              satisfaction through interactive dashboards.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Eco-Tourism Recommendations
            </h3>

            <p className="text-gray-600">
              Recommend local attractions, trekking routes, and
              sustainable travel experiences for guests.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              AI Guest Support
            </h3>

            <p className="text-gray-600">
              Provide instant assistance for bookings, facilities,
              and local travel information through AI chat support.
            </p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Transform Your Homestay Business
          </h2>

          <p className="text-lg mb-6">
            Leverage AI-powered insights to improve guest satisfaction,
            increase bookings, and enhance your digital presence.
          </p>

          <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition">
            Get Started
          </button>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;