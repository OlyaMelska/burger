const express = require("express");
const burger = require("../models/burger");
let router = express.Router();

router.use((req, res, next) => {
  console.log("Inside Router use");
  next();
});

router.get("/", (req, res) => {
  res.render("index", {});
});

module.exports = router;
