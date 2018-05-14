require("dotenv").config();

var express = require("express");
var path = require("path");

var app = express();


var HOST = process.env.HOST || "localhost";
var PORT = process.env.PORT || 80;

//Set up express
app.use(express.static('build'))

//Set up express route
app.get("/", (req, res) => {
  console.log("here");
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on ${HOST}:${PORT}`);
});
