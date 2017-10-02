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

//get the burgers
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
//Post a new burger
router.post("/", function(req, res) {
  burgers.insertOne([
    "burger_name", "devoured" 
    ], [
    req.body.name, req.body.Devoured
  ], function() {
    res.redirect("/");
  });
});
//devour burger
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

    burgers.updateOne({
      devoured: req.body.eaten
   }, condition, function() {
      res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
