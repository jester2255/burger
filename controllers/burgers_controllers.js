/*
  Inside the burgers_controller.js file, import the following:
  Express
  burger.js
  Create the router for the app, and export the router at the end of your file.
*/
var express = require("express");
var router = express.Router();
var connection = require("../config/connection.js");
var burgers = require("../models/burger.js")


router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("Im in the controller")
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

/*router.post("/", function(req, res) {
  burgers.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  cat.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});
*/
// Export routes for server.js to use.
module.exports = router;
