const {
  getNearbyHomestays,
} = require("../services/geoapifyService");

const nearbyHomestays = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({
        message: "Latitude and Longitude are required",
      });
    }

    const homestays = await getNearbyHomestays(lat, lon);

    res.json(homestays);
  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);

    res.status(500).json({
      success: false,
      error: error.response?.data || error.message,
    });
  }
};

module.exports = {
  nearbyHomestays,
};