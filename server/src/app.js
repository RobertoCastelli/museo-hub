// Import Express and global middleware
const express = require("express");
const cors = require("cors");
const openDb = require("./db/database");

// Import API route modules
const eventsRoutes = require("./routes/eventsRoutes");
const bookingsRoutes = require("./routes/bookingsRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Create the Express application instance
const app = express();

// Configure global middleware
app.use(cors());
app.use(express.json());

// Register API route modules
app.use("/api/events", eventsRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Health check endpoint to verify API and database availability
app.get("/api/health", async (req, res) => {
  try {
    const db = await openDb();
    await db.get("SELECT 1");

    res.status(200).json({
      api: "connected",
      database: "connected",
    });
  } catch (error) {
    res.status(500).json({
      api: "connected",
      database: "disconnected",
    });
  }
});

// Export configured Express app
module.exports = app;
