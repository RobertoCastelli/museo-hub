// Import Express and middleware modules
const express = require("express");
const cors = require("cors");

// Import route modules
const eventsRoutes = require("./routes/eventsRoutes");

// Create the Express application istance
const app = express();

// Global Middleware configuration
app.use(cors());
app.use(express.json());

// Events API routes
app.use("/api/events", eventsRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MuseoHub API is running",
  });
});

// Export configured Express app
module.exports = app;
