const express = require("express");
const app = express();
const PORT = process.env.PORT || 6066;
app.use(express.json());
const dbConfig = require("./db");

const roomsRoutes = require("./routes/roomsRoute");

app.use("/api/rooms", roomsRoutes);
const roomsRoute = require("./routes/roomsRoute");

app.listen(PORT, () => {
  console.log(`The Server is also running on port ${PORT}`);
});
