var numSquares = 6
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var message = document.getElementById("message")
var colorDisplay = document.getElementById("colorDisplay")
var banner = document.getElementById("banner")
var pickedColor = pickColor();
var attempts = document.getElementById("attempts") 
var reset = document.getElementById("reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")
var score = document.getElementById("score")
var counter = 0
var totalScore = 0

colorDisplay.textContent = pickedColor

for(i = 0; i < squares.length; i++){
	//gives squares colors
	squares[i].style.backgroundColor = colors[i]

	//squares do something when clicked
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		counter++
		attempts.textContent = counter

		if(clickedColor === pickedColor){
			banner.style.backgroundColor = pickedColor
			message.textContent = "Correct!"
			reset.textContent = "Play Again"
			changeColors(pickedColor)
			totalScore++
			score.textContent = totalScore
		} else{
			this.classList.add("fadeOut")
			message.textContent = "Try Again"
		}
	})
}

reset.addEventListener("click", function(){

	colors = generateRandomColors(numSquares)

	if(numSquares === 3){
		pickedColor = pickEasy();

		for(i = 0; i < 3; i++){
			squares[i].style.backgroundColor = colors[i]
			squares[i].classList.remove("fadeOut")
	}

	} else{
		pickedColor = pickColor()
	
		for(i = 0; i < 6; i++){
			squares[i].style.backgroundColor = colors[i]
			squares[i].classList.remove("fadeOut")
		}
	}

	colorDisplay.textContent = pickedColor
	banner.style.background = "steelblue"
	message.textContent = "Your Turn"


	if(reset.textContent = "Play Again"){
		reset.textContent = "New Colors"
	}

	message.textContent = "Your Turn"
	counter = 0
	attempts.textContent = ""

})


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("activeBtn");
	hardBtn.classList.remove("activeBtn");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickEasy();
	message.textContent = "Your Turn"
	attempts.textContent = ""
	counter = 0;
	colorDisplay.textContent = pickedColor;
	banner.style.background = "steelblue"	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].classList.remove("fadeOut")
		} else{
			squares[i].classList.add("fadeOut")
		}
	}

})


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("activeBtn");
	easyBtn.classList.remove("activeBtn");
	numSquares = 6
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	message.textContent = "Your Turn";
	attempts.textContent = "";
	counter = 0;
	colorDisplay.textContent = pickedColor
	banner.style.background = "steelblue"
	for(i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i]	
		squares[i].classList.remove("fadeOut")
	}
})



function changeColors(color){
	for(i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * 6);
	return colors[random];
}

function pickEasy(){
	var random = Math.floor(Math.random() * 3);
	return colors[random];
}

function generateRandomColors(num){
	//Make an empty array
	var arr = [];
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//This will be pushed to our colors variable, turning it into an array
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}