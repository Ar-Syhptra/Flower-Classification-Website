const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db
  .connect()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));

module.exports = db;