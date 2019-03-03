var express = require("express");
var app = express();


app.get("/", function(req,res){
    res.send("This is my home page.");
});

app.listen(3000, function(req,res){
    console.log("SERVER IS LISTENED ON PORT: 3000.")
});