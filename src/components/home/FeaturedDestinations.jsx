import dehradun from "../../assets/images/dehradun.jpg";
import mussoorie from "../../assets/images/mussoorie.jpg";
import rishikesh from "../../assets/images/rishikesh.jpg";

import {
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";

const destinations = [
  {
    name: "Dehradun",
    image: dehradun,
    rating: "4.8",
    stays: "120+ Homestays",
  },
  {
    name: "Mussoorie",
    image: mussoorie,
    rating: "4.9",
    stays: "95+ Homestays",
  },
  {
    name: "Rishikesh",
    image: rishikesh,
    rating: "4.7",
    stays: "150+ Homestays",
  },
];

function FeaturedDestinations() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-5">
          Featured Destinations
        </h2>

        <p className="text-center text-gray-500 mb-16">
          Discover India's most loved eco-tourism destinations.
        </p>

        <div className="grid lg:grid-cols-3 gap-10">

          {destinations.map((place) => (

            <div
              key={place.name}
              className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >

              <div className="overflow-hidden">

                <img
                  src={place.image}
                  alt={place.name}
                  className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <div className="flex justify-between items-center">

                  <h3 className="text-2xl font-bold">
                    {place.name}
                  </h3>

                  <div className="flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full">

                    <Star size={16} fill="currentColor" />

                    {place.rating}

                  </div>

                </div>

                <p className="flex items-center gap-2 text-gray-500 mt-4">

                  <MapPin size={18} />

                  {place.stays}

                </p>

                <button
                  className="mt-6 flex items-center gap-2 text-green-600 font-bold hover:gap-4 transition-all"
                >
                  Explore Destination

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedDestinations;