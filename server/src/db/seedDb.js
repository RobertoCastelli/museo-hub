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
      "Contemporary Art Open Exhibition",
      "A free exhibition presenting selected contemporary artworks from emerging artists, with a focus on visual experimentation and new forms of cultural expression.",
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
      "Photography and Urban Memory",
      "A free photography exhibition exploring urban spaces, local memory and everyday cultural heritage through a curated selection of documentary images.",
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
      "Sculpture Gallery Guided Visit",
      "A free guided visit through the sculpture gallery, introducing visitors to materials, techniques and selected works from the museum collection.",
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
