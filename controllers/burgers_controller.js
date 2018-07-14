var express = require("express");
var router = express.Router();

var burger = require("../modals/burger.js");


router.get("/", function(req, res) {
    burger.allBurgers(function(data) {
        var hbarsObj = {
            burger: data
        };
        res.render("index", hbarsObj)
    });
});

router.post("/api/burger", function(req, res){
    burger.addBurger(req.body.burger_name, function(result){
    });
    res.end();
    
})

router.put("/api/burgers/:id", function(req, res){
    burger.removeBurger(req.body.id, function(result){
    });
    res.end();
})

module.exports = router;