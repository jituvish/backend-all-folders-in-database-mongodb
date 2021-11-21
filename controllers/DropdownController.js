var CountryModel = require("../models/CountryModel");
var StateModel = require("../models/StateModel");
var CityModel = require("../models/CityModel");
var arr=[];
exports.index = (req, res)=>{
    CountryModel.find({}, function(err, result){
        // console.log(result);
        var country = result;
        arr[0] = country;
        StateModel.find({}, function(err, result){
            // console.log(result);
            var state = result;
            arr[1] = state;
            CityModel.find({}, function(err, result){
                // console.log(result);
                var city = result;
                arr[2] = city;
                // console.log(arr);
                res.send(arr);
            })
        })
    })

}