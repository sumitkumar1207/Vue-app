const express = require("express");
const mongodb = require("mongodb");
const keys = require("../../config/kyes");
const router = express.Router();

//Get Posts
router.get("/", (req, res) => {
  res.send("hello");
});
//Add posts

//Delete Posts

module.exports = router;
