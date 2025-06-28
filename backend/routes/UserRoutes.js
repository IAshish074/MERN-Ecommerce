const express = require("express");
const router = express.Router(); // ✅ CORRECT EXPRESS ROUTER

const User = require("../models/User.js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    res.send({ name, email, password });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
