var orm = require("../config/orm.js");

var burger = {
allBurgers: function(cb){ 
    orm.selectAll(function(response) {
        cb(response);
    })
},
addBurger: function(burgData, cb){
    orm.add(burgData, function(res){
        cb(res);
    })
},
removeBurger: function(burgData, cb){
    orm.devour(burgData, function(res){
        cb(res);
    })
}
}

module.exports = burger;