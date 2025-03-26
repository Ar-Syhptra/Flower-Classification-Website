const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db
  .connect()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error!!", err));

module.exports = db;