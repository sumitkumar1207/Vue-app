const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const posts = require("./routes/api/posts");
const mongoose = require("mongoose");
const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use routes
app.use("/api/posts", posts);
app.use(cors());

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server Started on port: ${port}`));
