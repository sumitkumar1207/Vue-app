const express = require("express");
const mongodb = require("mongodb");
const keys = require("../../config/kyes");
const router = express.Router();

//test route
router.get("/test", (req, res) => {
  res.status(200).json({ msg: "Test route working!" });
});

//Get Posts
router.get("/", async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});

//Add posts
router.post("/", async (req, res) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send({ msg: "Your post created successfully!" });
});

//Delete Posts
router.delete("/:id", async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  });
  res.status(200).send({ msg: "Your post have deleted successfully" });
});

async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect(
    keys.mongoURI,
    {
      useNewUrlParser: true
    }
  );
  return client.db("vue-app").collection("posts");
}
module.exports = router;
