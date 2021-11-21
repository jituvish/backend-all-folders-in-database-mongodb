var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var routes = require("./config/routes");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());


app.use(routes);

app.listen(2000, ()=>{
    console.log("Server Running Port On ....");
});