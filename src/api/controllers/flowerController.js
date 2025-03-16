const Flower = require("../models/Flower");

const getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.getAll();
    res.json({
      status: "success",
      message: "Data bunga berhasil diambil!",
      data: flowers,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan pada server!!",
      error: err.message,
    });
  }
};

const getFlowerById = async (req, res) => {
  try {
    const flower = await Flower.getById(req.params.id);
    if (!flower) {
      return res.status(404).json({
        status: "error",
        message: "Data bunga tidak ditemukan!!",
      });
    }
    res.json({
      status: "success",
      message: "Data bunga berhasil ditemukan!",
      data: flower,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan pada server!!",
      error: err.message,
    });
  }
};

const createFlower = async (req, res) => {
  try {
    const newFlower = await Flower.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Data bunga berhasil ditambahkan!",
      data: newFlower,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan pada server!!",
      error: err.message,
    });
  }
};

module.exports = { getAllFlowers, getFlowerById, createFlower };