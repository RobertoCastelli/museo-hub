const express = require("express");
const openDb = require("../db/database");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { booking_code, rating, comment } = req.body;

    if (!booking_code || !rating) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const ratingValue = Number(rating);

    if (isNaN(ratingValue) || ratingValue < 1 || ratingValue > 5) {
      return res.status(400).json({ error: "Invalid rating (1-5)" });
    }

    let commentText = "";

    if (comment != undefined) {
      if (typeof comment != "string" || comment.trim() == "") {
        return res.status(400).json({ error: "Invalid comment" });
      }
      commentText = comment.trim();
    }

    const db = await openDb();

    const booking = await db.get(
      `
        SELECT event_id, booking_code
        FROM bookings 
        WHERE booking_code = ?
        `,
      [booking_code],
    );

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    await db.run(
      `
        INSERT INTO feedback (event_id, booking_code, rating, comment) VALUES (?, ?, ?, ?)
        `,
      [booking.event_id, booking.booking_code, ratingValue, commentText],
    );

    res.status(201).json({
      message: "Feedback submitted successfully",
      rating: ratingValue,
      comment: commentText,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Feedback submission failed" });
  }
});

module.exports = router;
