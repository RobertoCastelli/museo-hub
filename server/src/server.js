// Load environment variables and configured Express app
require("dotenv").config();
const app = require("./app");

// Start the API server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`MuseoHub API running on port ${PORT}`);
});
