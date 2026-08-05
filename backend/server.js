require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const reviewRoutes = require("./routes/review");
require("./config/passport");

const prisma = require("./prismaClient");

// Routes
const authRoutes = require("./routes/auth");
const googleAuthRoutes = require("./routes/googleAuth");
const bookingRoutes = require("./routes/booking");
const aiRoutes = require("./routes/ai");
const homestayRoutes = require("./routes/homestays");
const locationRoutes = require("./routes/location.routes");
const dashboardRoutes = require("./routes/dashboard");

const app = express();

/* ===========================
   MIDDLEWARE
=========================== */

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://stay-sense-ai-powered-homestay-insi.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* ===========================
   ROUTES
=========================== */

app.use("/api/auth", authRoutes);
app.use("/auth", googleAuthRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/homestays", homestayRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/dashboard", dashboardRoutes);

/* ===========================
   GET ALL HOMESTAYS
=========================== */

app.get("/api/homestays", async (req, res) => {
  try {
    const homestays = await prisma.homestay.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json(homestays);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch homestays",
    });
  }
});

/* ===========================
   GET HOMESTAY BY ID
=========================== */

app.get("/api/homestays/:id", async (req, res) => {
  try {
    const stay = await prisma.homestay.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!stay) {
      return res.status(404).json({
        message: "Homestay not found",
      });
    }

    res.status(200).json(stay);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

/* ===========================
   CREATE HOMESTAY
=========================== */

app.post("/api/homestays", async (req, res) => {
  try {
    const {
      name,
      location,
      price,
      rating,
      description,
      image,
    } = req.body;

    const newStay = await prisma.homestay.create({
      data: {
        name,
        location,
        price: Number(price),
        rating: Number(rating),
        description,
        image,
      },
    });

    res.status(201).json(newStay);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Unable to create homestay",
    });
  }
});

/* ===========================
   UPDATE HOMESTAY
=========================== */

app.put("/api/homestays/:id", async (req, res) => {
  try {
    const {
      name,
      location,
      price,
      rating,
      description,
      image,
    } = req.body;

    const updatedStay = await prisma.homestay.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name,
        location,
        price: Number(price),
        rating: Number(rating),
        description,
        image,
      },
    });

    res.status(200).json(updatedStay);
  } catch (error) {
    console.error(error);

    res.status(404).json({
      message: "Homestay not found",
    });
  }
});

/* ===========================
   DELETE HOMESTAY
=========================== */

app.delete("/api/homestays/:id", async (req, res) => {
  try {
    await prisma.homestay.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error(error);

    res.status(404).json({
      message: "Homestay not found",
    });
  }
});

/* ===========================
   SEARCH HOMESTAY BY LOCATION
=========================== */

app.get("/api/homestays/search/location/:location", async (req, res) => {
  try {
    const homestays = await prisma.homestay.findMany({
      where: {
        location: {
          contains: req.params.location,
          mode: "insensitive",
        },
      },
      orderBy: {
        rating: "desc",
      },
    });

    res.status(200).json(homestays);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Search failed",
    });
  }
});

/* ===========================
   ERROR HANDLER
=========================== */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal Server Error",
  });
});

/* ===========================
   START SERVER
=========================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});