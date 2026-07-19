const axios = require("axios");

const API_KEY = process.env.GEOAPIFY_API_KEY;

// Search City
const searchLocation = async (req, res) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({
        message: "City is required",
      });
    }

    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
      city
    )}&limit=1&apiKey=${API_KEY}`;

    const response = await axios.get(url);

    if (!response.data.features.length) {
      return res.status(404).json({
        message: "Location not found",
      });
    }

    const place = response.data.features[0];

    res.json({
      lat: place.properties.lat,
      lon: place.properties.lon,
      formatted: place.properties.formatted,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to search location",
    });
  }
};

module.exports = {
  searchLocation,
};