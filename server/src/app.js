// Import required modules
const express = require("express");
const cors = require("cors");

// Create the Express application
const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());

// Health check routes
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "MuseoHub API is running",
  });
});

// Export the Express app
module.exports = app;
