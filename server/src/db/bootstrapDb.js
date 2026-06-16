const initDb = require("./initDb");
const seedDb = require("./seedDb");

async function bootstrapDb() {
  await initDb();

  if (process.env.NODE_ENV === "production") {
    await seedDb();
  }
}

module.exports = bootstrapDb;
