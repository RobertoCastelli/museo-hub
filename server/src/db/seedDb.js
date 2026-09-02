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
        INSERT INTO events (title, description, date, max_capacity, available_slots, status, image_key) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      "Contemporary Art Open Exhibition",
      "A free exhibition presenting selected contemporary artworks from emerging artists, with a focus on visual experimentation and new forms of cultural expression.",
      "2026-07-15",
      100,
      100,
      "active",
      "art-exhibition",
    ],
  );

  await db.run(
    `
        INSERT INTO events (title, description, date, max_capacity, available_slots, status, image_key) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      "Photography and Urban Memory",
      "A free photography exhibition exploring urban spaces, local memory and everyday cultural heritage through a curated selection of documentary images.",
      "2026-08-01",
      50,
      50,
      "active",
      "photography",
    ],
  );

  await db.run(
    `
        INSERT INTO events (title, description, date, max_capacity, available_slots, status, image_key) VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      "Sculpture Gallery Guided Visit",
      "A free guided visit through the sculpture gallery, introducing visitors to materials, techniques and selected works from the museum collection.",
      "2026-09-10",
      30,
      30,
      "active",
      "guided-visit",
    ],
  );
  console.log("MuseoHub seed data inserted successfully.");
}

// Catch any errors during insertion of seed data
if (require.main === module) {
  seedDb().catch((error) => {
    console.error("Seed data insertion failed:", error);
  });
}

module.exports = seedDb;
