// Import file system utilities and database connection
const fs = require("fs");
const path = require("path");
const openDb = require("./database");

// Initialize the database by executing the SQL schema
async function initDb() {
  const db = await openDb();

  // Read the schema SQL file from the current directory
  const schemaPath = path.join(__dirname, "schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");

  // Execute the schema
  await db.exec(schema);
  console.log("MuseoHub database initialized successfully");
}
// Catch any errors during initialization
if (require.main === module) {
  initDb().catch((error) => {
    console.error("Database initialization failed:", error);
  });
}

module.exports = initDb;
