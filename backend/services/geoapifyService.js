const axios = require("axios");

const API_KEY = process.env.GEOAPIFY_API_KEY;

const getNearbyHomestays = async (lat, lon, radius = 5000) => {
  const url = `https://api.geoapify.com/v2/places?categories=accommodation.hotel,accommodation.guest_house&filter=circle:${lon},${lat},${radius}&limit=20&apiKey=${API_KEY}`;

  console.log(url);

  const response = await axios.get(url);

  return response.data.features;
};

module.exports = {
  getNearbyHomestays,
};