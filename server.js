const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

// create express instance
const app = express();
app.use(express.json());
app.use(cors());

// DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then((con) => console.log(`MongoDB connected : ${con.connection.host}`))
  .catch((err) => console.log(err));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Declare PORT number (process.env.port is for HEROKU)
const port = process.env.port || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));

// routes
app.use("/api", require("./router/router"));
app.use("/api/categories", require("./router/api/category"));
app.use("/api/items", require("./router/api/item"));
app.use("/api/suppliers", require("./router/api/supplier"));
