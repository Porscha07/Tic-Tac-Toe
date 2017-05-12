// 1. Check-Set up Board.
//2. User should be able to click on a box and mark the square (with users mark.) can put an oncllick directly on the square.
//addeventlistener is the JS equavilant to onclick.
//create a marksquare function
//3. If its X turn put X in, if its O turn, put O in. ( keep track of whos turn it is)
//4. now that we know whos turn it is, when markSquare gets called put their symbol in and change whos turn it is. 
//5. We need to check and see if anyone has won.

//initialize whosTurn at player 1/X
var whosTurn = 1;
var player1Squares = [];
var player2Squares = [];
var winningCombos = [
	['A1','B1','C1'], //Row1
	['A2','B2','C2'], //Row2
	['A3','B3','C3'],//Row3
	['A1','A2','A3'],//Column 1
	['B1','B2','B3'],//Column 2
	['C1','C2','C3'],//Column 3
	['A1','B2','C3'],//Diag 1
	['A3','B2','C1'] //Diag 2
]
var gameOverBool = false;
var onePlayerGame = true;

// ***************USER IS ABLE TO CLICK ON A BOX & MARK THE SQUARE******************************************************* 
var squares = document.getElementsByClassName('square');
// var britney = document.createElement("britney-icon.jpg");
// let allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
for(let i = 0; i < squares.length; i++){
	//console.log(squares[i]);
	squares[i].addEventListener('click',function(event){
	// console.log("User clicked on a square!")
		if(!gameOverBool){ //if the game over is true. (then will run markSquare function)the user is able to click on a square. then we are going to run the Marskquare funtion and call the paasesd up name- currentSquare.)
			markSquare(this)
		}
	});
}
// ***************************create a markSquare function***********************************************

function markSquare(currentSquare){
	console.log(currentSquare.id);
	var squareResult = ""
	// var britney = document.createElement("britney-icon.jpg");
	// console.log(currentSquare.innerHTML)
	if((currentSquare.innerHTML == "X" || (currentSquare.innerHTML == "O")){
		// console.log("This square is taken")
		squareResult = "Sorry, this square is taken."
	}else if (gameOverBool){
		squareResult ="Someone has won the game!"
	}else if(whosTurn == 1){
		currentSquare.innerHTML = "X"
		whosTurn = 2;
		player1Squares.push(currentSquare.id)
		checkWin(player1Squares,1);
		if(onePlayerGame){
			computerMove();
		}
	}else{
		
		currentSquare.innerHTML = "O"
		whosTurn = 1;
		player2Squares.push(currentSquare.id)
		checkWin(player2Squares,2);
	}
	// console.log(player1Squares);
	// console.log(player2Squares);
	var messageElement = document.getElementById('message');
	messageElement.innerHTML = squareResult;
}

function computerMove(){
	// find a random square( potential while loop)(lab work)
	// see if that square is empty
	// if it is, send it a square,
	// 	if it's not, keep looking
}
// ************************** Check win to see if the current player won/also breaks out of the amain loop*****************************************************

function checkWin(currentPlayersSquares,whoJustWent){
	// outter loop ( winning combos)
	for (let i = 0; i < winningCombos.length; i++){
		//inner loop ( square inside a winning combo)
		var squareCount = 0;
		for(let j = 0; j < winningCombos[i].length; j++){
			var winningSquare = winningCombos[i][j];
			//does the player have this square?
			if(currentPlayersSquares.indexOf(winningSquare)> -1){
				//the index is > -1, which means the player has this square. We dont care when it happened, we just care that it happened.
				squareCount++;

			}
	}
		
		// if squareCount is 3, then the user had all 3 j's in this i. Winning
			if(squareCount == 3){
				console.log("player" + whoJustWent + "won the game!");
				// stop checking i's the game is over....
				gameOver(whoJustWent,winningCombos[i]);
				break;
			}

		}

	}
// /***************************Loop for determining when the game is over and how you won****************************************************

function gameOver(whoJustWon,winningCombo){
	var messageElement = document.getElementById('message');
	var message = "Congratulations to player" + whoJustWon + ".You won with" + winningCombo;
	console.log(winningCombo);
	document.getElementById('message').innerHTML = message;
	// console.log(message);
	// console.dir(messageELement)
	messageElement.innerHTML = message;
	// console.dir(messageELement)
	for(let i = 0; i < winningCombo.length; i++){
		document.getElementById(winningCombo[i]).className += " winning-square";
	}
	gameOverBool = true;
}