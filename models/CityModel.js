var database = require("../config/database");

module.exports.save = function(obj, cb){
    database(function(err, con){
        var db = con.db("select");
        db.collection("city").insertOne(obj, cb);
    })
}

module.exports.find = function(where, cb){
    database(function(err, con){
        var db = con.db("select");
        db.collection("city").find(where).toArray(cb);
    })
}

module.exports.update = function(where, obj, cb){
    database(function(err, con){
        var db = con.db("select");
        db.collection("city").update(where, {$set : obj}, cb);
    });
}

module.exports.delete = function(where, cb){
    database(function(err, con){
        var db = con.db("select");
        db.collection("city").delete(where, cb);
    })
}