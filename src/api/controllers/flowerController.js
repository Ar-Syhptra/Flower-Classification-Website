const Flower = require("../models/Flower");

const getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.getAll();
    res.json(flowers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getFlowerById = async (req, res) => {
  try {
    const flower = await Flower.getById(req.params.id);
    if (!flower) return res.status(404).json({ message: "Flower not found" });
    res.json(flower);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createFlower = async (req, res) => {
  try {
    const newFlower = await Flower.create(req.body);
    res.status(201).json(newFlower);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllFlowers, getFlowerById, createFlower };
