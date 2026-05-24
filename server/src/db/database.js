// Import SQLite driver and helper library
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

// Open a connection to the MuseoHub SQLite database
async function openDb() {
  const db = await open({
    filename: "./src/db/museohub.sqlite",
    driver: sqlite3.Database,
  });
  return db;
}

// Export the database connection function
module.exports = openDb;
