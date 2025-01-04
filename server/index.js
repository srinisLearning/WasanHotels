const express = require("express");
const app = express();
const PORT = process.env.PORT || 6066;
app.listen(PORT, () => {
  console.log(`The Server is also running on port ${PORT}`);
});

const dbConfig = require("./db");
