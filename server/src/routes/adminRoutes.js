const express = require("express");
const openDb = require("../db/database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await openDb();

    const events = await db.all(`
      SELECT id, title, description, date, max_capacity, available_slots, status, image_key
      FROM events 
      ORDER BY date ASC
      `);

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "fetch admin failed" });
  }
});

router.post("/events", async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      max_capacity,
      available_slots,
      status,
      image_key = "art-exhibition",
    } = req.body;

    const db = await openDb();
    await db.run(
      `
      INSERT INTO events (
        title,
        description,
        date,
        max_capacity,
        available_slots,
        status,
        image_key
      )
      VALUES (?, ?, ?, ?, ?, ?, ?) `,
      [
        title,
        description,
        date,
        max_capacity,
        available_slots,
        status,
        image_key,
      ],
    );

    res.status(200).json({ message: "event created successfully" });
  } catch (error) {
    res.status(500).json({ error: "event creation failed" });
  }
});

router.put("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      date,
      max_capacity,
      available_slots,
      status,
      image_key = "art-exhibition",
    } = req.body;

    const db = await openDb();

    await db.run(
      `
      UPDATE events
      SET 
        title = ?,
        description = ?,
        date = ?,
        max_capacity = ?,
        available_slots = ?,
        status= ?,
        image_key = ?
      WHERE id = ?
    `,
      [
        title,
        description,
        date,
        max_capacity,
        available_slots,
        status,
        image_key,
        id,
      ],
    );
    res.status(200).json({ message: "event editing successfully" });
  } catch (error) {
    res.status(500).json({ error: "event editing failed" });
  }
});

router.delete("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const db = await openDb();

    await db.run(
      `
      DELETE FROM events
      WHERE id = ?
      `,
      [id],
    );

    res.status(200).json({ message: "event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "event deletion failed" });
  }
});

router.get("/bookings", async (req, res) => {
  try {
    const db = await openDb();

    const bookings = await db.all(`
      SELECT
        bookings.id,
        bookings.booking_code,
        events.title AS event_title,
        bookings.visitor_name,
        bookings.visitor_email,
        bookings.participants,
        bookings.created_at
      FROM bookings
      JOIN events
        ON bookings.event_id = events.id
      ORDER BY bookings.id ASC
    `);

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "fetch bookings failed" });
  }
});

module.exports = router;
