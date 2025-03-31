const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

try {
  db.connect();
  console.log("Database connected!");
} catch (err) {
  console.error("Database connection error!!", err);
}

module.exports = db;