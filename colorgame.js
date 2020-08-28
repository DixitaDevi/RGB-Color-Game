var colors = generateRandomColors(6);

var sqaures = document.getElementById("container");
var squareItems = sqaures.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn= document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");
var numSquares = 6;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squareItems.length; i++)
    {
        if (colors[i])
        {
            squareItems[i].style.backgroundColor = colors[i];
        }
        else
        {
            squareItems[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i<squareItems.length; i++)
    {
            squareItems[i].style.backgroundColor = colors[i];
            squareItems[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0; i<squareItems.length; i++)
    {
        squareItems[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";

});

for(var i = 0; i < squareItems.length; i++)
{
        squareItems[i].style.backgroundColor = colors[i];
    
    squareItems[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    for(var i = 0; i<squareItems.length; i++)
    {
        squareItems[i].style.backgroundColor = color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random()*colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr = []
    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r +", " + g +", "+ b +")";
}