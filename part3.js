var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click", function(){

var clickedColor = this.style.backgroundColor;

if(clickedColor === pickedColor){
	messageDisplay.textContent = "Correct!";
	changecolors(clickedColor);
	}else{
		this.style.backgroundColor ="#232323";
		messageDisplay.textContent = "Try again";
	
}
});

	function changecolors(color){
		//loop through all squares
		for(var i =0; i<squares.length; i++){
			//change each color to match given color
			squares[i].style.backgroundColor = color;
		}
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}