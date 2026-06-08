const express = require("express");
const openDb = require("../db/database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await openDb();

    const totalEvents = await db.get(`
        SELECT COUNT(id) AS totalEvents
        FROM events`);

    const totalBookings = await db.get(`
        SELECT COUNT(id) AS totalBookings 
        FROM bookings`);

    const totalFeedback = await db.get(`
        SELECT COUNT(id) AS totalFeedback
        FROM feedback`);

    const averageRating = await db.get(`
        SELECT AVG(rating)  AS averageRating
        FROM feedback`);

    res.status(200).json({
      totalEvents: totalEvents.totalEvents,
      totalBookings: totalBookings.totalBookings,
      totalFeedback: totalFeedback.totalFeedback,
      averageRating: averageRating.averageRating || 0,
    });
  } catch (error) {
    res.status(500).json({ error: "Fetch stats failed" });
  }
});

module.exports = router;
