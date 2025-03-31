const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

router.post("/users", register);
router.post("/auth/login", login);

module.exports = router;