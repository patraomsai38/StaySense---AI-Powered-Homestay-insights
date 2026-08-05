import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-green-400">
              StaySense AI
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              AI-powered homestay recommendation platform
              promoting eco-tourism and unforgettable
              travel experiences.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/booking">Bookings</a></li>
              <li><a href="/dashboard">Dashboard</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>📍 Dehradun, Uttarakhand</li>

              <li>📧 support@staysense.ai</li>

              <li>📞 +91 9876543210</li>

            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="font-bold text-xl mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-4">
              Stay updated with travel tips and offers.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl px-4 py-3 text-black"
            />

            <button
              className="mt-4 w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold transition"
            >
              Subscribe
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 StaySense AI. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-2xl mt-5 md:mt-0">

            <FaFacebook className="hover:text-green-400 cursor-pointer transition" />

            <FaInstagram className="hover:text-green-400 cursor-pointer transition" />

            <FaLinkedin className="hover:text-green-400 cursor-pointer transition" />

            <FaGithub className="hover:text-green-400 cursor-pointer transition" />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;