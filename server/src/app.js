// Import Express and global middleware
const express = require("express");
const cors = require("cors");

// Import API route modules
const eventsRoutes = require("./routes/eventsRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

// Create the Express application instance
const app = express();

// Configure global middleware
app.use(cors());
app.use(express.json());

// Register API route modules
app.use("/api/events", eventsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/feedback", feedbackRoutes);

// Health check endpoint to verify that the API server is running
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MuseoHub API is running",
  });
});

// Export configured Express app
module.exports = app;
