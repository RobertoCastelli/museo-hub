// Import Express and middleware modules
const express = require("express");
const cors = require("cors");

// Import route modules
const eventsRoutes = require("./routes/eventsRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

// Create the Express application instance
const app = express();

// Global Middleware configuration to handle CORS and JSON request parsing
app.use(cors());
app.use(express.json());

// Events API routes
app.use("/api/events", eventsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/feedback", feedbackRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MuseoHub API is running",
  });
});

// Export configured Express app
module.exports = app;
