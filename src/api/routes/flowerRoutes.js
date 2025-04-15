const express = require("express");
const { getAllFlowers, getFlowerById, createFlower } = require("../controllers/flowerController");

const router = express.Router();

router.get("/", getAllFlowers);
router.get("/:id", getFlowerById);
router.post("/", createFlower);

module.exports = router;