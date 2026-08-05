import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 transition-all duration-300">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-5 py-2 rounded-full text-sm font-semibold shadow-md">
            🌿 AI Powered Eco-Tourism Platform
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-green-700 dark:text-green-400 leading-tight">
            About
            <span className="block">
              StaySense AI
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 dark:text-gray-300">
            StaySense AI is an intelligent homestay and eco-tourism
            platform designed to help hosts improve guest experiences
            through Artificial Intelligence. Our platform analyzes
            guest reviews, provides booking insights, recommends local
            attractions, and promotes sustainable tourism through
            smart technology.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-3 mt-16">

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">

            <div className="text-5xl mb-5">
              🎯
            </div>

            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              To empower homestay owners with AI-driven insights that
              improve service quality, increase guest satisfaction,
              and help grow their business.
            </p>

          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">

            <div className="text-5xl mb-5">
              🤖
            </div>

            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              AI Review Analysis
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Analyze guest reviews using NLP and sentiment analysis to
              identify strengths, weaknesses, and actionable insights.
            </p>

          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8">

            <div className="text-5xl mb-5">
              🌱
            </div>

            <h2 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4">
              Sustainable Tourism
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-8">
              Promote responsible tourism by connecting travelers with
              authentic local experiences and eco-friendly homestays.
            </p>

          </div>

        </div>

        {/* Why Choose Section */}

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-10">
            Why Choose StaySense AI?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="flex items-center gap-4 bg-green-50 dark:bg-gray-700 rounded-xl p-5">
              <span className="text-2xl">✅</span>
              <span className="text-gray-700 dark:text-gray-200">
                AI-powered guest review sentiment analysis
              </span>
            </div>

            <div className="flex items-center gap-4 bg-green-50 dark:bg-gray-700 rounded-xl p-5">
              <span className="text-2xl">🏡</span>
              <span className="text-gray-700 dark:text-gray-200">
                Smart homestay discovery and booking
              </span>
            </div>

            <div className="flex items-center gap-4 bg-green-50 dark:bg-gray-700 rounded-xl p-5">
              <span className="text-2xl">📍</span>
              <span className="text-gray-700 dark:text-gray-200">
                Personalized travel recommendations
              </span>
            </div>

            <div className="flex items-center gap-4 bg-green-50 dark:bg-gray-700 rounded-xl p-5">
              <span className="text-2xl">📊</span>
              <span className="text-gray-700 dark:text-gray-200">
                Host analytics dashboard
              </span>
            </div>

            <div className="flex items-center gap-4 bg-green-50 dark:bg-gray-700 rounded-xl p-5 md:col-span-2">
              <span className="text-2xl">💬</span>
              <span className="text-gray-700 dark:text-gray-200">
                Automated guest support and AI-generated responses
              </span>
            </div>

          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default About;