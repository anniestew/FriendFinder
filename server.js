var express = require("express");

var htmlRoutes = require("./html-routes.js");

var app = express();

// load routes into app by passing app into route functions
htmlRoutes(app);

// ---------------------------------------------------
// html-routes.js
// ---------------------------------------------------
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
}