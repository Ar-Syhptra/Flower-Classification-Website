const db = require("../config/db");

class Flower {
  static async getAll() {
    const result = await db.query("SELECT * FROM flowers");
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query("SELECT * FROM flowers WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  }

  static async create(data) {
    const {
      name,
      scientific_name,
      description,
      health_uses,
      culture_uses,
      sunlight_tips,
      water_tips,
      soil_tips,
      habitat,
      status,
      wikipedia,
    } = data;

    const result = await db.query(
      `INSERT INTO flowers (name, scientific_name, description, health_uses, culture_uses, sunlight_tips, water_tips, soil_tips, habitat, status, wikipedia) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [name, scientific_name, description, health_uses, culture_uses, sunlight_tips, water_tips, soil_tips, habitat, status, wikipedia]
    );

    return result.rows[0];
  }
}

module.exports = Flower;