var connection = require("./connection.js");


var orm = {
    selectAll: function selectAll(cb){
        connection.query("SELECT * FROM burgers;", function(err, res){
            if (err) throw err;
            console.log(res)
            cb(res);
        })
    },
    add: function insertOne(name, cb){
        connection.query("INSERT INTO burgers (burger_name) VALUES (?);", name, function(err, res){
            if (err) throw err;
            console.log(res)
            cb(res);
        })
    },
    devour: function updateOne(id, cb){
        console.log("orm");
        connection.query("UPDATE burgers SET devoured = true WHERE id = (?);", id, function(err, res){
            if (err) throw err;
            console.log(res);
            cb(res)
        })
    }
}

module.exports = orm;