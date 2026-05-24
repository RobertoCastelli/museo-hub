// Import database connection function
const openDb = require("./database");

// Insert initial test data into the database
async function seedDb() {
  const db = await openDb();

  // Remove existing data to make the seed operation repeatable
  await db.run(`DELETE FROM events`);
  await db.run(`DELETE FROM bookings`);
  await db.run(`DELETE FROM feedback`);

  // Insert sample events used for API and frontend testing
  await db.run(
    `
        INSERT INTO events (title, description, date, max_capacity, available_slots, status) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      "Mostra d'Arte Contemporanea",
      "Una mostra che presenta opere di artisti contemporanei di fama internazionale.",
      "2026-07-15",
      100,
      100,
      "active",
    ],
  );
  await db.run(
    `
        INSERT INTO events (title, description, date, max_capacity, available_slots, status) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      "Mostra di Fotografia",
      "Una mostra che presenta una selezione di fotografie di artisti emergenti.",
      "2026-08-01",
      50,
      50,
      "active",
    ],
  );
  await db.run(
    `
        INSERT INTO events (title, description, date, max_capacity, available_slots, status) VALUES (?, ?, ?, ?, ?, ?)`,
    [
      "Mostra di Scultura",
      "Una mostra che presenta una selezione di sculture di artisti contemporanei.",
      "2026-09-10",
      30,
      30,
      "active",
    ],
  );
  console.log("MuseoHub seed data inserted successfully.");
}

// Catch any errors during insertion of seed data
seedDb().catch((error) => {
  console.error("Seed data insertion failed:", error);
});
