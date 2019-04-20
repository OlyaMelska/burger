const express = require("express");
const burger = require("../models/burger");

let router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get("/", (req, res) => {
  burger.selectAll(data => {
    let obj = {
      burger_name: data,
      devoured: false
    };
    console.log("object: ", obj);
    res.render("index", obj);
  });
});

router.put("/api/burgers/:id", (req, res) => {
  burger.updateOne("id = " + req.params.id, result => {
    res.status(200).end();
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne("burger_name", req.body.burger_name, result => {
    console.log(`Result ${result}`);
    res.json(result);
  });
});

module.exports = router;
