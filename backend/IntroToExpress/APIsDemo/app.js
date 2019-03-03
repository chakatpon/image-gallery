var express = require("express");
var app = express();
var request = require("request");


app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("search");
    
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=8a9a2a7b";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
            // console.log(parsedData.query.results.channel);
        }

    });

});

app.listen(3000, function(req,res){
    console.log("SERVER IS LISTENED ON PORT: 3000.")
});