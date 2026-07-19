const API_URL = "http://localhost:5000/api/homestays";

export const getNearbyHomestays = async (lat, lon) => {
  const response = await fetch(
    `${API_URL}/nearby?lat=${lat}&lon=${lon}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch homestays");
  }

  return await response.json();
};