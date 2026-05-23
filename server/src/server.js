// Load enviroment variables
require("dotenv").config();
const app = require("./app");

// Start the server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`MuseoHub API running on port ${PORT}`);
});
