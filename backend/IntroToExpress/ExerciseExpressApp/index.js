var express = require("express");
var app = express();



app.get("/", function(req, res){
    res.send("Hi !!!");
});

app.get("/speak/:animal/", function(req, res){
    var pet = req.params.animal;
    if(pet === "pig"){
        res.send("The " + pet + " says 'Oink'");
    }else if(pet === "cow"){
        res.send("The " + pet + " says 'Moo'");
    }else if(pet === "dog"){
        res.send("The " + pet + " says 'Woof Woof!'");
    }
});

app.get("/repeat/:greeting/:num/", function(req, res){
    var greet = req.params.greeting;
    var number = Number(req.params.num);
    var result = "";
    for(var i = 0; i < number; i++ ){
        result += greet + " ";
    }
    res.send(result);
})
 
app.get("*", function(req, res){
    res.send("sorry, page not found...What are you doing with your life?");
})

app.listen(3000,function(){
    console.log("SERVER IS LISTENING ON PORT: 3000");
})