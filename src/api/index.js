const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./routes/flowerRoutes");

const app = express();
const PORT = process.env.PORTBE;

app.use(cors());
app.use(express.json());

app.use("/api/flowers", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});