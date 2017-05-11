// 1. Check-Set up Board.
//2. User should be able to click on a box and mark the square (with users mark.) can put an oncllick directly on the square.
//addeventlistener
//create a marksquare function
//3. If its X turn put X in, if its O turn, put O in. ( keep track of whos turn it is)
//4. now that we know whos turn it is, when markSquare gets called put their symbol in and change whos turn it is. 
//5. We need to check and see if anyone has won.
//initialize whosTurn at player 1/X
var whosTurn = 1;

var squares = document.getElementsByClassName('square');
for(let i = 0; i < squares.length; i++){
	//console.log(squares[i]);
	squares[i].addEventListener('click',function(event){
	console.log("User clicked on a square!")
	markSquare(this)
	});
}
// create a markSquare function

function markSquare(currentSquare){
	if((currentSquare.innerHTML == "X") || (currentSquare.innerHTML == "O")){
		// console.log("This square is taken")
		var messageElement = document.getElementById('message');
		squareResult = "Sorry, this square is taken."
	}else if(whosTurn == 1)
	currentSquare.innerHTML = "X"
	whosTurn = 2;
	squareResult=""
	}else{
		currentSquare.innerHTML = "O"
		whosTurn = 1;
		squareResult=""
	}
	var messageElement
	messageElement.innerHTML = squareResult;
}