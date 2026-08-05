import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Traveler",
    image: "https://i.pravatar.cc/150?img=11",
    review:
      "StaySense helped me discover an amazing homestay in Mussoorie. The recommendations were perfect!",
  },
  {
    name: "Priya Verma",
    role: "Travel Blogger",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "The AI recommendations and eco-tourism suggestions made my trip unforgettable.",
  },
  {
    name: "Rahul Mehta",
    role: "Backpacker",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Easy booking, beautiful stays, and an excellent user experience. Highly recommended!",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          What Our Users Say
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Trusted by thousands of travelers across India.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((user) => (
            <div
              key={user.name}
              className="bg-green-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-20 h-20 rounded-full mx-auto mb-5"
              />

              <h3 className="text-2xl font-bold text-center">
                {user.name}
              </h3>

              <p className="text-green-600 text-center mb-4">
                {user.role}
              </p>

              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map((i)=>(
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-center text-gray-600 dark:text-gray-300 italic">
                "{user.review}"
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;