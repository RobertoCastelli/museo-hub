const express = require("express");
const openDb = require("../db/database");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await openDb();

    const events = await db.all(`
    SELECT id, title, description, date, max_capacity, available_slots, status
      FROM events 
      WHERE status = 'active' 
      ORDER BY date ASC
      `);

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "fetch events failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const db = await openDb();
    const eventId = Number(req.params.id);

    if (isNaN(eventId) || eventId <= 0) {
      return res.status(400).json({ error: "invalid event ID" });
    }

    const event = await db.get(
      `
      SELECT id, title, description, date, max_capacity, available_slots, status
      FROM events 
      WHERE id = ? 
      `,
      [eventId],
    );

    if (!event) {
      return res.status(404).json({ error: "event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "fetch event failed" });
  }
});

module.exports = router;
