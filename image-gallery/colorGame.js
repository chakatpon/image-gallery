var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");

colorDisplay.textContent = pickedColor.toUpperCase();

for(var i = 0; i < squares.length; i++){
    //add initial color to square.
    squares[i].style.backgroundColor = colors[i];
    //add click listener to square.
    squares[i].addEventListener("click", function(){
        

        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
        }else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again.";

        }
    });

}

