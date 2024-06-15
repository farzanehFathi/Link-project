// required modules
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const projectRoutes = require("./routes/projects");

// initialize experss app
const app = express();

// define port
const PORT = process.env.PORT || 3500;

// middleware to parse JSON requests
app.use(express.json());

// static files from the React app
app.use("/", express.static(path.join(__dirname, "..", "frontend", "build")));

//routes
app.use("/api/projects", projectRoutes);

// connect to mongoDB & listen for requests
mongoose
  .connect(process.env.dbURI)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected to the db & server running on port ${PORT}`)
    );
  })
  .catch((err) => console.log(err));
