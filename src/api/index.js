const express = require("express");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/flowerRoutes");
const authRoutes = require("./routes/authRoutes");
const { authenticateUser } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORTBE;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/flowers", authenticateUser, routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});