import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomestayDetails() {

  const navigate = useNavigate();

  const { state } = useLocation();

  const stay = state?.stay;

  // ==========================
  // Homestay Not Found
  // ==========================

  if (!stay) {

    return (

      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-green-50">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-green-700">
              Homestay Not Found
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              The homestay you are looking for doesn't exist or was removed.
            </p>

            <button
              onClick={() => navigate("/booking")}
              className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl transition"
            >
              ← Back to Booking
            </button>

          </div>

        </div>

        <Footer />

      </>

    );

  }

  // ==========================
  // Property Data
  // ==========================

  const name =
    stay.properties?.name || "Unnamed Homestay";

  const address =
    stay.properties?.formatted || "Address unavailable";

  const category =
    stay.properties?.categories?.[0]
      ?.replace("accommodation.", "")
      ?.replaceAll("_", " ") || "Homestay";

  return (

    <div className="min-h-screen bg-green-50">

      <Navbar />

            {/* ================= HERO ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-14">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Property Image */}

          <div>

            <img
              src={stay.image}
              alt={name}
              className="w-full h-[580px] object-cover rounded-3xl shadow-2xl"
            />

          </div>

          {/* Property Details */}

          <div>

            <span className="inline-flex items-center bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
              🌿 Eco Tourism Stay
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
              {name}
            </h1>

            <p className="mt-5 text-xl leading-8 text-gray-600">
              📍 {address}
            </p>

            <div className="flex items-center gap-6 mt-6">

              <span className="text-yellow-500 text-3xl font-bold">
                ⭐ 4.8
              </span>

              <span className="text-gray-500 text-lg">
                Premium {category}
              </span>

            </div>

            <div className="mt-10">

              <h2 className="text-5xl font-extrabold text-green-700">

                ₹ {stay.estimatedPrice}

                <span className="text-2xl font-semibold text-gray-500">
                  {" "} / Night
                </span>

              </h2>

            </div>

            <p className="mt-10 text-lg leading-9 text-gray-600">

              Experience peaceful stays surrounded by nature,
              modern amenities and warm hospitality.

              Perfect for families, couples, solo travellers,
              remote workers and weekend getaways.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                onClick={() => navigate("/booking")}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg transition hover:scale-105"
              >
                Book Now
              </button>

              <button
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${stay.properties.lat},${stay.properties.lon}`,
                    "_blank"
                  )
                }
                className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-10 py-4 rounded-2xl font-semibold transition"
              >
                Get Directions
              </button>

            </div>

          </div>

        </div>

      </section>

            {/* ================= IMAGE GALLERY ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="flex items-center justify-between mb-10">

          <div>

            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Gallery
            </span>

            <h2 className="text-4xl font-extrabold mt-2">
              Explore This Stay
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map((item) => (

            <div
              key={item}
              className="overflow-hidden rounded-3xl shadow-xl group"
            >

              <img
                src={stay.image}
                alt={`Gallery ${item}`}
                className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

      </section>

      {/* ================= AMENITIES ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Facilities
          </span>

          <h2 className="text-4xl font-extrabold mt-2">
            What This Place Offers
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">

          {[
            { icon: "📶", title: "Free WiFi" },
            { icon: "🚗", title: "Free Parking" },
            { icon: "🍽️", title: "Restaurant" },
            { icon: "🏊", title: "Swimming Pool" },
            { icon: "🔥", title: "Bonfire" },
            { icon: "🐶", title: "Pet Friendly" },
            { icon: "🌿", title: "Eco Friendly" },
            { icon: "🧹", title: "Daily Housekeeping" },
            { icon: "☕", title: "Breakfast Included" },
            { icon: "❄️", title: "Air Conditioning" },
            { icon: "🛏️", title: "Luxury Rooms" },
            { icon: "🎮", title: "Indoor Games" },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {item.title}
              </h3>

            </div>

          ))}

        </div>

      </section>

            {/* ================= PROPERTY HIGHLIGHTS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Highlights
          </span>

          <h2 className="text-4xl font-extrabold mt-2">
            Why Guests Love This Stay
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: "⭐",
              title: "Top Rated",
              desc: "Highly rated by guests for comfort, cleanliness and hospitality.",
            },
            {
              icon: "🌄",
              title: "Scenic Views",
              desc: "Enjoy beautiful mountain and nature views right from your room.",
            },
            {
              icon: "🌱",
              title: "Eco Friendly",
              desc: "Supports sustainable tourism with environmentally friendly practices.",
            },
            {
              icon: "🤖",
              title: "AI Recommended",
              desc: "Recommended by StaySense AI based on reviews and guest preferences.",
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
            >

              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= LOCATION & AI TIPS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Google Map */}

          <div className="bg-white rounded-3xl shadow-xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              📍 Location
            </h2>

            <iframe
              title="Google Map"
              src={`https://www.google.com/maps?q=${stay.properties.lat},${stay.properties.lon}&z=15&output=embed`}
              width="100%"
              height="420"
              className="rounded-2xl border-0"
              loading="lazy"
            />

            <button
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/search/?api=1&query=${stay.properties.lat},${stay.properties.lon}`,
                  "_blank"
                )
              }
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
            >
              🧭 Open in Google Maps
            </button>

          </div>

          {/* AI Tips */}

          <div className="rounded-3xl bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-xl p-8">

            <h2 className="text-3xl font-bold">
              🤖 StaySense AI Travel Tips
            </h2>

            <div className="space-y-5 mt-8">

              {[
                {
                  title: "🌤 Best Time to Visit",
                  desc: "October to March offers the most pleasant weather.",
                },
                {
                  title: "🍲 Local Food",
                  desc: "Don't miss authentic Garhwali cuisine and local organic meals.",
                },
                {
                  title: "🌄 Nearby Attractions",
                  desc: "Explore waterfalls, temples, markets and scenic trekking routes.",
                },
                {
                  title: "💡 AI Recommendation",
                  desc: "A stay of at least two nights is recommended for the best experience.",
                },
              ].map((tip, index) => (

                <div
                  key={index}
                  className="rounded-2xl bg-white/10 p-5"
                >

                  <h3 className="text-xl font-bold">
                    {tip.title}
                  </h3>

                  <p className="mt-3">
                    {tip.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= GUEST REVIEWS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            Reviews
          </span>

          <h2 className="text-4xl font-extrabold mt-2">
            Guest Reviews
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                  G
                </div>

                <div>

                  <h3 className="font-bold">
                    Guest {item}
                  </h3>

                  <p className="text-yellow-500">
                    ⭐⭐⭐⭐⭐
                  </p>

                </div>

              </div>

              <p className="mt-6 leading-8 text-gray-600">
                Beautiful location, peaceful environment and excellent hospitality.
                Highly recommended for families and couples.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= SIMILAR STAYS ================= */}

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="text-center mb-12">

          <span className="text-green-600 font-semibold uppercase tracking-widest">
            More Options
          </span>

          <h2 className="text-4xl font-extrabold mt-2">
            Similar Homestays
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >

              <img
                src={stay.image}
                alt="Similar Stay"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {name}
                </h3>

                <p className="mt-3 text-gray-500">
                  📍 {address}
                </p>

                <div className="flex items-center justify-between mt-6">

                  <span className="text-green-700 font-bold text-2xl">
                    ₹ {stay.estimatedPrice}
                  </span>

                  <span className="text-yellow-500 font-semibold">
                    ⭐ 4.8
                  </span>

                </div>

                <button
                  className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
                >
                  View Similar Stay
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      <Footer />

    </div>

  );

}

export default HomestayDetails;