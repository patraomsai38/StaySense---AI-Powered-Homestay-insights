import { MapPin, Star, IndianRupee, Heart, Wifi, Car, Users } from "lucide-react";

function NearbyHomestays({ homestays, loading }) {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white">
            Nearby Homestays
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Discover beautiful stays around your current location.
          </p>
        </div>

        {loading ? (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse bg-white dark:bg-gray-800 rounded-3xl h-[470px]"
              ></div>
            ))}

          </div>

        ) : homestays.length === 0 ? (

          <div className="text-center py-20">

            <h3 className="text-2xl font-semibold text-gray-600">
              No nearby homestays found.
            </h3>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

            {homestays.map((place) => {

              const price = Math.floor(Math.random() * 2500 + 1800);

              return (

                <div
                  key={place.properties.place_id}
                  className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                >

                  {/* Image */}

                  <div className="relative overflow-hidden">

                    <img
                      src={
                        place.properties.image ||
                        `https://picsum.photos/600/400?random=${place.properties.place_id}`
                      }
                      alt={place.properties.name}
                      className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* Favourite */}

                    <button className="absolute top-5 left-5 bg-white/90 backdrop-blur-md p-2 rounded-full hover:scale-110 transition">

                      <Heart
                        size={18}
                        className="text-red-500"
                      />

                    </button>

                    {/* Rating */}

                    <div className="absolute top-5 right-5 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">

                      <Star
                        size={15}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="font-semibold">
                        4.8
                      </span>

                    </div>

                    {/* Price */}

                    <div className="absolute bottom-5 left-5 bg-green-600 text-white px-4 py-2 rounded-full shadow-xl flex items-center">

                      <IndianRupee size={16} />

                      <span className="font-bold">
                        {price}
                      </span>

                      <span className="text-sm ml-1">
                        /night
                      </span>

                    </div>

                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">

                      {place.properties.name || "Homestay"}

                    </h3>

                    <p className="flex items-center gap-2 text-gray-500 text-sm">

                      <MapPin size={17} />

                      {place.properties.formatted}

                    </p>

                    {/* Amenities */}

                    <div className="flex gap-4 mt-5 text-gray-600 dark:text-gray-300">

                      <div className="flex items-center gap-1">
                        <Wifi size={16} />
                        <span className="text-sm">WiFi</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Car size={16} />
                        <span className="text-sm">Parking</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span className="text-sm">4 Guests</span>
                      </div>

                    </div>

                    {/* Categories */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {place.properties.categories?.slice(0, 3).map((category) => (

                        <span
                          key={category}
                          className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {category.replace("accommodation.", "")}
                        </span>

                      ))}

                    </div>

                    {/* Buttons */}

                    <div className="mt-7 flex gap-3">

                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300">

                        Book Now

                      </button>

                      <button className="px-5 border border-green-600 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition">

                        View

                      </button>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

    </section>
  );
}

export default NearbyHomestays;