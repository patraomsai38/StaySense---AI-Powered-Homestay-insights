const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const homestays = [
  {
    id: 1,
    name: "Mountain Retreat",
    location: "Rishikesh",
    price: 2499,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Riverside Cottage",
    location: "Rishikesh",
    price: 1999,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Forest View Stay",
    location: "Mussoorie",
    price: 1799,
    rating: 4.7,
  },
];

// GET all homestays
app.get("/api/homestays", (req, res) => {
  res.status(200).json(homestays);
});

// GET one homestay
app.get("/api/homestays/:id", (req, res) => {
  const stay = homestays.find(
    (h) => h.id === Number(req.params.id)
  );

  if (!stay) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  res.status(200).json(stay);
});

// POST
app.post("/api/homestays", (req, res) => {
  const newStay = {
    id: homestays.length + 1,
    ...req.body,
  };

  homestays.push(newStay);

  res.status(201).json(newStay);
});

// PUT
app.put("/api/homestays/:id", (req, res) => {
  const index = homestays.findIndex(
    (h) => h.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  homestays[index] = {
    ...homestays[index],
    ...req.body,
  };

  res.status(200).json(homestays[index]);
});

// DELETE
app.delete("/api/homestays/:id", (req, res) => {
  const index = homestays.findIndex(
    (h) => h.id === Number(req.params.id)
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Homestay not found",
    });
  }

  homestays.splice(index, 1);

  res.status(204).send();
});

// SEARCH
app.get("/api/homestays/search/location/:location", (req, res) => {
  const results = homestays.filter((stay) =>
    stay.location
      .toLowerCase()
      .includes(req.params.location.toLowerCase())
  );

  res.status(200).json(results);
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});