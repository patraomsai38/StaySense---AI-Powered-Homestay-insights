import {
  FaRobot,
  FaMapMarkedAlt,
  FaChartLine,
  FaLeaf,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRobot size={38} />,
    title: "AI Review Analysis",
    description:
      "Understand guest feedback instantly using AI-powered sentiment analysis.",
  },
  {
    icon: <FaMapMarkedAlt size={38} />,
    title: "Smart Booking",
    description:
      "Find nearby homestays with intelligent location-based recommendations.",
  },
  {
    icon: <FaChartLine size={38} />,
    title: "Analytics Dashboard",
    description:
      "Track bookings, ratings, reviews and occupancy with interactive charts.",
  },
  {
    icon: <FaLeaf size={38} />,
    title: "Eco Tourism",
    description:
      "Promote sustainable travel and discover eco-friendly destinations.",
  },
  {
    icon: <FaShieldAlt size={38} />,
    title: "Secure Platform",
    description:
      "Protected authentication and secure booking experience.",
  },
  {
    icon: <FaClock size={38} />,
    title: "24/7 AI Assistant",
    description:
      "Get travel guidance and booking assistance anytime.",
  },
];

function WhyChoose() {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">
          Why Choose StaySense AI?
        </h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-16">
          AI-powered technology combined with smart travel planning,
          eco-tourism, and intelligent booking recommendations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-transparent hover:border-green-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;