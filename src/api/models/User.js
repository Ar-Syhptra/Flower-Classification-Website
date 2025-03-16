const db = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  static async createUser(username, password) {
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await db.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [username, hashPassword]
    );
    return result.rows[0];
  }

  static async findUsername(username) {
    const result = await db.query("SELECT * FROM users WHERE username = $1", [username]);
    return result.rows[0];
  }
}

module.exports = User;