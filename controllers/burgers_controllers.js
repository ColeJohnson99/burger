var express = require('express');

var burger = require("../models/burger.js");

var router = express.Router();

//GET read requests
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };

        res.render("index", handlebarsObject);
    });
});

//POST request
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.json ({  id: result.insertId });
    });
});

module.exports = router;

