const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: "error",
        message: "Username dan password wajib diisi!!",
      });
    }

    const checkExistingUser = await User.findUsername(username);
    if (checkExistingUser) {
      return res.status(400).json({
        status: "error",
        message: "Username sudah terdaftar, gunakan username yang lain!!",
      });
    }

    const user = await User.createUser(username, password);

    res.status(201).json({
      status: "success",
      message: "User berhasil didaftarkan!",
      data: { id: user.id, username: user.username },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan pada server!!",
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        status: "error",
        message: "Username dan Password wajib diisi!!",
      });
    }

    const user = await User.findUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "error",
        message: "Username atau password salah!!",
      });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET
    );

    res.json({
      status: "success",
      message: "Login berhasil!",
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan pada server!!",
      error: err.message,
    });
  }
};

module.exports = { register, login };