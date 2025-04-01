const express = require("express");
const cors = require("cors");
require("dotenv").config();

const flowerRoutes = require("./routes/flowerRoutes");
const authRoutes = require("./routes/authRoutes");
const { authenticateUser } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORTBE;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api/flowers", authenticateUser, flowerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});