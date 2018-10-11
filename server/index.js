const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server Started on port: ${port}`));
