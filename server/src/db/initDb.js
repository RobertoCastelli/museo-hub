const fs = require("fs");
const path = require("path");
const openDb = require("./database");

// Initialize the database by executing the schema SQL file
async function initDb() {
  const db = await openDb();

  // Read the schema SQL file
  const schemaPath = path.join(__dirname, "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  // Execute the schema
  await db.exec(schema);
  console.log("MuseoHub database initialized successfully");
}

initDb().catch((error) => {
  console.error("Database initialization failed:", error);
});
