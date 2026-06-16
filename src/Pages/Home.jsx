import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const features = [
    {
      title: "AI Review Analysis",
      description:
        "Analyze guest reviews using sentiment analysis and NLP."
    },
    {
      title: "Smart Booking",
      description:
        "Discover and book homestays based on preferences and ratings."
    },
    {
      title: "Travel Recommendations",
      description:
        "Get personalized recommendations for attractions and activities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
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
          <div className="grid md:grid-cols-4 gap-8 text-center">

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

          </div>
        </div>
      </section>

      {/* Popular Features */}
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
              Automatically identify positive, negative, and neutral
              guest feedback to improve services.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Host Analytics Dashboard
            </h3>

            <p className="text-gray-600">
              Visualize occupancy rates, booking trends, and guest
              satisfaction metrics in one place.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Eco-Tourism Recommendations
            </h3>

            <p className="text-gray-600">
              Recommend local attractions, trekking routes, and
              sustainable travel experiences.
            </p>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6">
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              AI Chat Support
            </h3>

            <p className="text-gray-600">
              Help guests instantly with booking information,
              facilities, and travel guidance.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Transform Your Homestay Business
        </h2>

        <p className="text-lg mb-6">
          Leverage AI-powered insights to improve guest satisfaction.
        </p>

        <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
}

export default Home;