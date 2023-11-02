const express = require("express");
const router = express.Router();
const fs = require("fs");
const foodJson = require("../data/food.json");

router.get(`/`, function (req, res) {
  res.status(200).json(foodJson);
});

module.exports = router;
