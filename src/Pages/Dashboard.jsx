import { useEffect, useState } from "react";
import CountUp from "react-countup";

import {
  Calendar,
  Star,
  Download,
  Settings,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Dashboard() {

  const [loading, setLoading] = useState(true);

  const [dashboard, setDashboard] = useState({
    totalBookings: 0,
    confirmedBookings: 0,
    upcomingBookings: 0,
    averageRating: 0,
    recentBookings: [],
    recentReviews: [],
  });

  const [bookingData, setBookingData] = useState([]);
const [revenueData, setRevenueData] = useState([]);
const [statusData, setStatusData] = useState([]);
  useEffect(() => {

    fetchDashboard();

  }, []);

  async function fetchDashboard() {

  try {

    const res = await fetch(`${import.meta.env.VITE_API_URL}/dashboard`)

    const data = await res.json();

    if (data.success) {

      setDashboard(data);

      // =============================
      // Generate chart data
      // =============================

      const monthlyBookings = {};
      const monthlyRevenue = {};
      const bookingStatus = {
  Completed: 0,
  "In Progress": 0,
  Upcoming: 0,
};

      data.recentBookings.forEach((booking) => {

        const month = new Date(
  booking.checkIn
).toLocaleString("default", {
  month: "short",
});

        if (!monthlyBookings[month]) {

  monthlyBookings[month] = {
    bookings: 0,
    revenue: 0,
  };

}

monthlyBookings[month].bookings++;

monthlyBookings[month].revenue +=
  booking.estimatedPrice;

       const today = new Date();

const checkIn = new Date(booking.checkIn);
const checkOut = new Date(booking.checkOut);

if (today < checkIn) {

  bookingStatus.Upcoming++;

} else if (today >= checkIn && today <= checkOut) {

  bookingStatus["In Progress"]++;

} else {

  bookingStatus.Completed++;

}

      });

      const monthOrder = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setBookingData(
  Object.keys(monthlyBookings)
    .sort(
      (a, b) =>
        monthOrder.indexOf(a) - monthOrder.indexOf(b)
    )
    .map((month) => ({
      month,
      bookings: monthlyBookings[month].bookings,
    }))
);
      setRevenueData(
  Object.keys(monthlyBookings)
    .sort(
      (a, b) =>
        monthOrder.indexOf(a) - monthOrder.indexOf(b)
    )
    .map((month) => ({
      month,
      revenue: monthlyBookings[month].revenue,
    }))
);


     setStatusData([
  {
    name: "Completed",
    value: bookingStatus.Completed,
  },
  {
    name: "In Progress",
    value: bookingStatus["In Progress"],
  },
  {
    name: "Upcoming",
    value: bookingStatus.Upcoming,
  },
]);

    }

  }

  catch (err) {

    console.log(err);

  }

  finally {

    setLoading(false);

  }

}

  return (

    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      {/* Header */}

      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white rounded-b-[40px] shadow-xl">

        <div className="max-w-7xl mx-auto px-8 py-16 flex justify-between items-center">

          <div>

            <p className="text-green-100 text-lg">

              Welcome Back 👋

            </p>

            <h1 className="text-5xl font-bold mt-3">

              StaySense Dashboard

            </h1>

            <p className="mt-5 text-green-100 max-w-2xl">

              Monitor bookings, AI insights,
              guest reviews and business growth.

            </p>

          </div>

          <div className="flex gap-4">

            <button className="bg-white text-green-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2">

              <Download size={20}/>

              Export

            </button>

            <button className="bg-white/20 px-6 py-3 rounded-xl flex items-center gap-2">

              <Settings size={20}/>

              Settings

            </button>

          </div>

        </div>

      </div>
            {/* ================= KPI CARDS ================= */}

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Total Bookings */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">

                  Total Bookings

                </p>

                <h2 className="text-5xl font-bold text-green-700 mt-5">

  {dashboard.totalBookings}

</h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex justify-center items-center">

                <Calendar
                  size={32}
                  className="text-green-700"
                />

              </div>

            </div>

          </div>

          {/* Confirmed */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">

                  Confirmed

                </p>

                <h2 className="text-5xl font-bold text-blue-700 mt-5">

                  {dashboard.confirmedBookings}

                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex justify-center items-center text-3xl">

                ✅

              </div>

            </div>

          </div>

          {/* Upcoming */}

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">

                  Upcoming

                </p>

                <h2 className="text-5xl font-bold text-orange-600 mt-5">

                  {dashboard.upcomingBookings}

                </h2>

              </div>

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex justify-center items-center text-3xl">

                ⏳

              </div>

            </div>

          </div>

          {/* Rating */}

          <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-3xl shadow-xl p-8 text-white hover:-translate-y-2 transition duration-300">

            <div className="flex justify-between items-center">

              <div>

                <p>

                  Average Rating

                </p>

                <h2 className="text-5xl font-bold mt-5">

                  {dashboard.averageRating}

                </h2>

              </div>

              <Star
                size={42}
                className="fill-white"
              />

            </div>

          </div>

        </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}

      <div className="max-w-7xl mx-auto px-8 pb-14">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold">

              ➕ Add Homestay

            </h2>

            <p className="mt-4 text-green-100">

              Register a new homestay and start receiving bookings.

            </p>

          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold">

              📊 Analytics

            </h2>

            <p className="mt-4 text-blue-100">

              Monitor booking trends and guest engagement.

            </p>

          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 text-white shadow-xl hover:scale-105 transition">

            <h2 className="text-2xl font-bold">

              🤖 AI Assistant

            </h2>

            <p className="mt-4 text-purple-100">

              Get AI-powered recommendations to improve your homestay.

            </p>

          </div>

        </div>

      </div>
            {/* ================= ANALYTICS ================= */}

<div className="max-w-7xl mx-auto px-8 pb-14">

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Booking Trend */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        📈 Booking Trend

      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={bookingData}>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip/>

          <Line
  type="monotone"
  dataKey="bookings"
  stroke="#10B981"
  strokeWidth={5}
  dot={{
    r: 7,
    fill: "#10B981",
  }}
  activeDot={{
    r: 10,
  }}
/>

        </LineChart>

      </ResponsiveContainer>

    </div>

    {/* Revenue */}

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-3xl font-bold mb-8">

        💰 Monthly Revenue

      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={revenueData}>

          <CartesianGrid strokeDasharray="3 3"/>

          <XAxis dataKey="month"/>

          <YAxis/>

          <Tooltip/>

          <Bar
  dataKey="revenue"
  fill="#3B82F6"
  radius={[12,12,0,0]}
/>

        </BarChart>

      </ResponsiveContainer>

    </div>

  </div>

  {/* Booking Status */}

  <div className="mt-10 bg-white rounded-3xl shadow-xl p-8">

    <h2 className="text-3xl font-bold mb-8">

      🥧 Booking Status

    </h2>

    <ResponsiveContainer width="100%" height={350}>

      <PieChart>

        <Pie
          data={statusData}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
          label
        >

          {statusData.map((entry, index) => {

            const colors = [
  "#10B981", // Completed (Green)
  "#F59E0B", // In Progress (Orange)
  "#3B82F6", // Upcoming (Blue)
];

            return (

              <Cell
                key={index}
                fill={colors[index % colors.length]}
              />

            );

          })}

        </Pie>

        <Tooltip/>

        <Legend/>

      </PieChart>

    </ResponsiveContainer>

  </div>

</div>
{/* ================= ANALYTICS SUMMARY ================= */}

<div className="grid md:grid-cols-3 gap-8 mt-10">

  {/* Highest Booking Month */}

  <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-3xl p-8 shadow-xl">

    <h3 className="text-xl font-bold">

      📈 Highest Booking Month

    </h3>

    <p className="text-5xl font-bold mt-5">

      {bookingData.length > 0
        ? bookingData.reduce((a, b) =>
            a.bookings > b.bookings ? a : b
          ).month
        : "-"}

    </p>

    <p className="mt-4 text-green-100">

      Month with maximum bookings

    </p>

  </div>

  {/* Total Revenue */}

  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-3xl p-8 shadow-xl">

    <h3 className="text-xl font-bold">

      💰 Total Revenue

    </h3>

    <p className="text-5xl font-bold mt-5">

      ₹
      {revenueData.reduce(
        (sum, item) => sum + item.revenue,
        0
      )}

    </p>

    <p className="mt-4 text-blue-100">

      Estimated booking revenue

    </p>

  </div>

  {/* Total Reviews */}

  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl p-8 shadow-xl">

    <h3 className="text-xl font-bold">

      ⭐ Total Reviews

    </h3>

    <p className="text-5xl font-bold mt-5">

      {dashboard.recentReviews.length}

    </p>

    <p className="mt-4 text-yellow-100">

      Reviews submitted by guests

    </p>

  </div>

</div>
            {/* ================= RECENT BOOKINGS ================= */}

<div className="max-w-7xl mx-auto px-8 pb-16">

  <div className="flex justify-between items-center mb-8">

    <h2 className="text-3xl font-bold">

      🏡 Recent Bookings

    </h2>

    <span className="text-gray-500">

      {dashboard.recentBookings.length} Booking(s)

    </span>

  </div>

  {dashboard.recentBookings.length === 0 ? (

    <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

      <h3 className="text-2xl font-semibold text-gray-500">

        No bookings yet

      </h3>

    </div>

  ) : (

    <div className="grid lg:grid-cols-2 gap-8">

      {dashboard.recentBookings.map((booking) => (

        <div
          key={booking.id}
          className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 hover:-translate-y-2"
        >

          <img
            src={booking.image}
            alt={booking.homestayName}
            className="w-full h-56 object-cover"
          />

          <div className="p-7">

            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-2xl font-bold">

                  {booking.homestayName}

                </h3>

                <p className="text-gray-500 mt-2">

                  📍 {booking.address}

                </p>

              </div>

              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  booking.status === "Confirmed"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {booking.status}
              </span>

            </div>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div>

                <p className="text-gray-400 text-sm">

                  Check In

                </p>

                <h4 className="font-semibold mt-1">

                  {new Date(
                    booking.checkIn
                  ).toLocaleDateString()}

                </h4>

              </div>

              <div>

                <p className="text-gray-400 text-sm">

                  Check Out

                </p>

                <h4 className="font-semibold mt-1">

                  {new Date(
                    booking.checkOut
                  ).toLocaleDateString()}

                </h4>

              </div>

              <div>

                <p className="text-gray-400 text-sm">

                  Guests

                </p>

                <h4 className="font-semibold mt-1">

                  👥 {booking.guests}

                </h4>

              </div>

              <div>

                <p className="text-gray-400 text-sm">

                  Estimated Price

                </p>

                <h4 className="font-semibold text-green-700 mt-1">

                  ₹ {booking.estimatedPrice}

                </h4>

              </div>

            </div>

            <button className="mt-8 w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition">

              View Booking

            </button>

          </div>

        </div>

      ))}

    </div>

  )}

</div>

      {/* ================= RECENT REVIEWS ================= */}

<div className="max-w-7xl mx-auto px-8 pb-20">

  <div className="flex justify-between items-center mb-8">

    <h2 className="text-3xl font-bold">

      ⭐ Guest Reviews

    </h2>

    <span className="text-gray-500">

      {dashboard.recentReviews.length} Review(s)

    </span>

  </div>

  {dashboard.recentReviews.length === 0 ? (

    <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

      <h3 className="text-2xl text-gray-500">

        No Reviews Yet

      </h3>

    </div>

  ) : (

    <div className="grid lg:grid-cols-2 gap-8">

      {dashboard.recentReviews.map((review) => (

        <div
          key={review.id}
          className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300"
        >

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">

                {review.user?.username
                  ?.charAt(0)
                  ?.toUpperCase()}

              </div>

              <div>

                <h3 className="text-xl font-bold">

                  {review.user?.username}

                </h3>

                <p className="text-gray-500 text-sm">

                  {new Date(review.createdAt).toLocaleDateString()}

                </p>

              </div>

            </div>

            <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">

              ⭐ {review.rating}/5

            </div>

          </div>

          <p className="mt-6 text-gray-600 leading-8">

            "{review.feedback}"

          </p>

          <div className="mt-8 space-y-5">

            <div>

              <div className="flex justify-between">

                <span>Cleanliness</span>

                <span>{review.cleanliness || 0}/5</span>

              </div>

              <div className="h-2 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{
                    width: `${((review.cleanliness || 0) / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Hospitality</span>

                <span>{review.hospitality || 0}/5</span>

              </div>

              <div className="h-2 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-2 bg-blue-500 rounded-full"
                  style={{
                    width: `${((review.hospitality || 0) / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Food Quality</span>

                <span>{review.foodQuality || 0}/5</span>

              </div>

              <div className="h-2 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-2 bg-yellow-500 rounded-full"
                  style={{
                    width: `${((review.foodQuality || 0) / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Location</span>

                <span>{review.locationRating || 0}/5</span>

              </div>

              <div className="h-2 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-2 bg-purple-500 rounded-full"
                  style={{
                    width: `${((review.locationRating || 0) / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

            <div>

              <div className="flex justify-between">

                <span>Value for Money</span>

                <span>{review.valueForMoney || 0}/5</span>

              </div>

              <div className="h-2 bg-gray-200 rounded-full mt-2">

                <div
                  className="h-2 bg-pink-500 rounded-full"
                  style={{
                    width: `${((review.valueForMoney || 0) / 5) * 100}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  )}

</div>

{/* ================= AI SUMMARY ================= */}

<div className="max-w-7xl mx-auto px-8 pb-20">

  <div className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 rounded-3xl text-white p-12 shadow-2xl">

    <h2 className="text-4xl font-bold">

      🤖 StaySense AI Insights

    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-10">

      <div>

        <h3 className="text-2xl font-bold">

          {dashboard.totalBookings}

        </h3>

        <p className="text-green-100 mt-2">

          Total Bookings Managed

        </p>

      </div>

      <div>

        <h3 className="text-2xl font-bold">

          {dashboard.averageRating} ⭐

        </h3>

        <p className="text-green-100 mt-2">

          Average Guest Rating

        </p>

      </div>

      <div>

        <h3 className="text-2xl font-bold">

          ₹ {revenueData.reduce((a,b)=>a+b.revenue,0)}

        </h3>

        <p className="text-green-100 mt-2">

          Estimated Revenue

        </p>

      </div>

    </div>

    <div className="mt-10 bg-white/10 rounded-2xl p-8">

      <h3 className="text-2xl font-bold mb-4">

        AI Recommendation

      </h3>

      <p className="leading-8 text-green-100">

        Based on your booking history and guest reviews,
        your homestays have maintained a strong rating.
        Continue improving cleanliness and hospitality to
        increase repeat bookings. Consider offering seasonal
        discounts to boost occupancy.

      </p>

    </div>

  </div>

</div>

{/* ================= FOOTER ================= */}

<footer className="bg-gray-900 text-white">

  <div className="max-w-7xl mx-auto px-8 py-10 text-center">

    <h2 className="text-3xl font-bold">

      StaySense AI Dashboard

    </h2>

    <p className="mt-4 text-gray-400">

      Smart Homestay Management • AI Powered Insights • Eco Tourism

    </p>

    <p className="mt-6 text-sm text-gray-500">

      © 2026 StaySense. Built with React, Node.js, Prisma & AI.

    </p>

  </div>

</footer>

</div>

);

}

export default Dashboard;