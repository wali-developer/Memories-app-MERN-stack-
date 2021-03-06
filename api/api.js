const express = require("express");
const app = express();
const PORT = 3001 || process.env.PORT;
const postRoute = require("./routes/post");
const mongoose = require("mongoose");
require("dotenv/config");
const cors = require("cors");
const bodyParser = require("body-parser");

// middlewars
// app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// posts end point
app.use("/posts", postRoute);

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to Database!")
);

// app listening on port 3001
app.listen(PORT, () => console.log("Api Running on PORT: " + PORT));
