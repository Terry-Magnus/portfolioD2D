//Imports
const express = require("express");
const path = require("path");

const app = express();

//static files
app.use(express.static("public"));
app.use("css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/images", express.static(__dirname + "public/images"));

//view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "views"));

// const PORT = process.env.PORT || 5000;

// app.listen(5000, () => {
//   console.log("server is running on " + PORT);
// });

module.exports = app;
