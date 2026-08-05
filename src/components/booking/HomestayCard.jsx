import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Star,
  IndianRupee,
  Heart,
  Wifi,
  Car,
  Users,
} from "lucide-react";

function HomestayCard({
  stay,
  openDirections,
  handleBookNow,
}) {

  const navigate = useNavigate();

  const name =
    stay.properties?.name || "Unnamed Homestay";

  const address =
    stay.properties?.formatted || "Address unavailable";

  const category =
    stay.properties?.categories?.[0]
      ?.replace("accommodation.", "")
      ?.replaceAll("_", " ") || "Homestay";

  return (

    <div className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={stay.image}
          alt={name}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Wishlist */}

        <button className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow hover:scale-110 transition">

          <Heart
            size={18}
            className="text-red-500"
          />

        </button>

        {/* Rating */}

        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow">

          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold">

            4.8

          </span>

        </div>

        {/* Price */}

        <div className="absolute bottom-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full flex items-center shadow-lg">

          <IndianRupee size={16} />

          <span className="font-bold">

            {stay.estimatedPrice}

          </span>

          <span className="text-sm ml-1">

            /night

          </span>

        </div>

      </div>

      {/* Body */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">

          {name}

        </h2>

        <p className="flex items-center gap-2 mt-2 text-gray-500 text-sm">

          <MapPin size={16} />

          {address}

        </p>

        {/* Amenities */}

        <div className="flex gap-4 mt-5 text-gray-600 dark:text-gray-300">

          <div className="flex items-center gap-1">

            <Wifi size={16} />

            <span className="text-sm">

              WiFi

            </span>

          </div>

          <div className="flex items-center gap-1">

            <Car size={16} />

            <span className="text-sm">

              Parking

            </span>

          </div>

          <div className="flex items-center gap-1">

            <Users size={16} />

            <span className="text-sm">

              4 Guests

            </span>

          </div>

        </div>

        {/* Category */}

        <span className="inline-block mt-5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">

          {category}

        </span>

        {/* Buttons */}

        <div className="grid grid-cols-3 gap-3 mt-6">

          <button
            onClick={() =>
              openDirections(
                stay.properties.lat,
                stay.properties.lon
              )
            }
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
          >
            Directions
          </button>

          <button
            onClick={() =>
              navigate("/homestay-details", {
                state: {
                  stay,
                },
              })
            }
            className="bg-gray-700 hover:bg-black text-white py-3 rounded-xl transition"
          >
            Details
          </button>

          <button
            onClick={() => handleBookNow(stay)}
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
          >
            Book Now
          </button>

        </div>

      </div>

    </div>

  );

}

export default HomestayCard;