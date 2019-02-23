var game = {};

var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var header1 = document.querySelector(".header1");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

game.init = function(){
    setupModeButton();
    setupSquares();
    reset();
}

game.init();



resetBtn.addEventListener("click", function(){
    reset();
});


function setupModeButton(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function(){
            for(var j = 0; j < modeBtns.length; j++){
                modeBtns[j].classList.remove("selected");
            }
    
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquare = 3 : numSquare = 6;
            reset();
        });
    }

}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add initial color to square.
        squares[i].style.backgroundColor = colors[i];
        //add click listener to square.
        squares[i].addEventListener("click", function(){
            
    
            var clickedColor = this.style.backgroundColor;
    
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct !";
                changeColor(clickedColor);
                reset.textContent = "PLAY AGAIN ?";
                header1.style.backgroundColor = clickedColor;
            }else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again.";
    
            }
        });
    
    }
};

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

function reset(){

    colors = generateRandomColors(numSquare);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor.toUpperCase();

    header1.style.backgroundColor = "steelblue";
    reset.textContent = "NEW COLOR";
    messageDisplay.textContent = "";

    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];           
        }else{
            squares[i].style.display = "none";
        }
        
    }
}