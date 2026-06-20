import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto p-8">

        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About StaySense AI
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          StaySense AI is an intelligent homestay and eco-tourism
          platform designed to help hosts improve guest experiences
          through Artificial Intelligence. The platform analyzes
          guest reviews, provides booking insights, and recommends
          local attractions to enhance customer satisfaction and
          promote sustainable tourism.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Our Mission
            </h2>

            <p className="text-gray-600">
              To empower homestay owners with AI-driven insights
              that improve service quality and guest satisfaction.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              AI Review Analysis
            </h2>

            <p className="text-gray-600">
              Automatically analyze guest reviews using sentiment
              analysis and Natural Language Processing to identify
              strengths and improvement areas.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h2 className="text-xl font-bold text-green-700 mb-3">
              Sustainable Tourism
            </h2>

            <p className="text-gray-600">
              Encourage eco-friendly travel by connecting guests
              with authentic local experiences and responsible
              tourism opportunities.
            </p>
          </div>

        </div>

        <div className="mt-10 bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Why Choose StaySense AI?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>✅ AI-powered guest review sentiment analysis</li>
            <li>✅ Smart homestay discovery and booking</li>
            <li>✅ Personalized travel recommendations</li>
            <li>✅ Host analytics dashboard</li>
            <li>✅ Automated guest support and responses</li>
          </ul>
        </div>

      </main>

      <Footer />
    </div>
  );
}

export default About;