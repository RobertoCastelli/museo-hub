// Open a connection: Node --> SQLite database
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

// Open the database connection
async function openDb() {
  const db = await open({
    filename: "./src/db/museohub.sqlite",
    driver: sqlite3.Database,
  });
  return db;
}

// Export the openDb function
module.exports = openDb;
