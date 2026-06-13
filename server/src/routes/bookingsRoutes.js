const express = require("express");
const openDb = require("../db/database");

const router = express.Router();

function generateBookingCode(eventId) {
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Get current date in YYYYMMDD format
  const randomNum = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
  return `MH-E${eventId}-${timestamp}-${randomNum}`; // e.g., MH-E1-20240610-1234
}

router.post("/", async (req, res) => {
  try {
    const { event_id, visitor_name, visitor_email, participants } = req.body;

    if (!event_id || !visitor_name || !visitor_email || !participants) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const eventId = Number(event_id);
    const participantsNumber = Number(participants);

    if (isNaN(eventId) || eventId <= 0) {
      return res.status(400).json({ error: "Invalid event ID" });
    }
    if (
      isNaN(participantsNumber) ||
      participantsNumber <= 0 ||
      participantsNumber > 4
    ) {
      return res
        .status(400)
        .json({ error: "Invalid participants number (e.g., 1-4)" });
    }

    const db = await openDb();

    const event = await db.get(
      `
            SELECT id, available_slots, status
            FROM events 
            WHERE id = ?
            `,
      [eventId],
    );

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    if (event.status !== "active") {
      return res.status(400).json({ error: "Event is not active" });
    }
    if (event.available_slots < participantsNumber) {
      return res
        .status(400)
        .json({ error: "Not enough available slots for the event" });
    }

    const bookingCode = generateBookingCode(eventId);

    await db.run(
      `
            INSERT INTO bookings (
            event_id, 
            visitor_name, 
            visitor_email, 
            participants, 
            booking_code
            )
            VALUES (?, ?, ?, ?, ?)
            `,
      [eventId, visitor_name, visitor_email, participantsNumber, bookingCode],
    );

    await db.run(
      `
            UPDATE events
            SET available_slots = available_slots - ?
            WHERE id = ?
            `,
      [participantsNumber, eventId],
    );

    res.status(201).json({
      message: "Booking created successfully",
      booking_code: bookingCode,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Booking creation failed" });
  }
});

module.exports = router;
