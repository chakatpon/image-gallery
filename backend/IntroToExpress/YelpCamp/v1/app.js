var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

var campgrounds = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e830b90b2ef71c22d2524518b7444795ea76e5d004b0144494f5c771a1e4b7_340.png"},
    {name: "Granite Hill", image: "https://pixabay.com/get/e03db50f2af41c22d2524518b7444795ea76e5d004b0144494f5c771a1e4b7_340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104490f1c47fafebbcba_340.jpg"}
]

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    
    
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
    
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(3000, function(req, res){
    console.log("SEVER IS RUNNING ON PORT: 3000");
});