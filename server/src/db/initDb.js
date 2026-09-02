// Import file system utilities and database connection
const fs = require("fs");
const path = require("path");
const openDb = require("./database");

// Ensure that existing prototype databases are aligned with the current schema
async function ensureEventsImageKeyColumn(db) {
  const columns = await db.all("PRAGMA table_info(events)");
  const hasImageKey = columns.some((column) => column.name === "image_key");

  if (!hasImageKey) {
    await db.exec(
      "ALTER TABLE events ADD COLUMN image_key TEXT NOT NULL DEFAULT 'art-exhibition'",
    );
  }
}

// Initialize the database by executing the SQL schema
async function initDb() {
  const db = await openDb();

  // Read the schema SQL file from the current directory
  const schemaPath = path.join(__dirname, "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  // Execute the schema
  await db.exec(schema);
  await ensureEventsImageKeyColumn(db);
  console.log("MuseoHub database initialized successfully");
}
// Catch any errors during initialization
if (require.main === module) {
  initDb().catch((error) => {
    console.error("Database initialization failed:", error);
  });
}

module.exports = initDb;
