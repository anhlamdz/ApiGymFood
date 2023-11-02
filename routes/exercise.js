const express = require("express");
const router = express.Router();
const fs = require("fs");
const exerciseJson = require("../data/exercise.json");

router.get(`/`, function (req, res) {
  res.status(200).json(exerciseJson);
});

module.exports = router;
