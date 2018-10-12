const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const posts = require("./routes/api/posts");
const app = express();

// Body-parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Use routes
app.use("/api/posts", posts);
app.use(cors());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server Started on port: ${port}`));
