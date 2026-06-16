// Load environment variables and configured Express app
require("dotenv").config();

const app = require("./app");
const bootstrapDb = require("./db/bootstrapDb");

// Start the API server
const PORT = process.env.PORT || 3001;

bootstrapDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`MuseoHub API running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database bootstrap failed:", error);
    process.exit(1);
  });
