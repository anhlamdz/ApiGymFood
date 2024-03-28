const express = require("express");
const router = express.Router();
const fs = require("fs");
const exerciseJson = require("../data/exerciseTraining.json");

router.get(`/`, function (req, res) {
  res.status(200).json(exerciseJson);
});

module.exports = router;
