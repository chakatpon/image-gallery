var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var header1 = document.querySelector(".header1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("hardBtn");

colorDisplay.textContent = pickedColor.toUpperCase();

reset.addEventListener("click", function(){

    colors = generateRandomColors(6);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor.toUpperCase();

    header1.style.backgroundColor = "#232323";
    reset.textContent = "New Color";

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }

});

for(var i = 0; i < squares.length; i++){
    //add initial color to square.
    squares[i].style.backgroundColor = colors[i];
    //add click listener to square.
    squares[i].addEventListener("click", function(){
        

        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            reset.textContent = "Play Again ?";
            header1.style.backgroundColor = clickedColor;
        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again.";

        }
    });

}

function changeColor(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    var randomIndex = Math.floor(Math.random()*colors.length);
    return colors[randomIndex];
}

function generateRandomColors(length){

    var arrs = [];
    for(var i = 0; i < length; i++){
    var R = Math.floor(Math.random()*256);
    var G = Math.floor(Math.random()*256);
    var B = Math.floor(Math.random()*256);
    
    var randomColor = "rgb(" + R + ", " + G +", " + B +")";
    arrs[i] = randomColor;
    }

    return arrs;
    
}