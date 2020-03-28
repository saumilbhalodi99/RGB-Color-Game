var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++){
		if(colors[i])
		{
			square[i].style.backgroundColor = colors[i];
		}
		else
		{
			square[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
})

colorDisplay.textContent = pickedColor; 

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	for(var i = 0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})

for(var i = 0; i < square.length; i++)
{
	//adding colors to squares
	square[i].style.backgroundColor = colors[i];

	//adding listener to squares
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});		
}

function changeColors(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i = 0; i<num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}