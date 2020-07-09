let currentPlayer = 'X';
let gameBoard = 0;
let gameScore = 0;

let boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
	box.addEventListener('click', turnSequence);
});
function switchPlayers() {
	if (currentPlayer === 'X') {
		currentPlayer = 'O';
	} else {
		currentPlayer = 'X';
	}
	/* ternary operator code
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
*/
}

// function checkWinCondition() {
// 	// checks for win conditions
// }
// function checkTieCondition() {
// 	// check if there is a tie
// }
// function checkBoxNotOccupied(event) {
// 	if ((event.target.innerText = null)) {
// 		turnSequence();
// 	} else 

// 	// determine if the game box that is clicked is empty!
// }

// function startGame() {
// 	gameScore = 0;
// 	tieScore = 0;
// 	for (let i = 0; i < boardSquare.length; i++) {
// 		boardSquare[i].dataset.used = 0;
// 		boardSquare[i].innerHTML = '';
// 		boardSquare[i].classList.remove('clicked');
// 	}
// }
// board.addEventListener('click', placePiece);
// function placePiece(event) {
// 	if (event.target.dataset.used === '0') {
// 		const tic = document.createElement('p');
// 		tic.innerText = currentPlayer;
// 		tic.setAttribute('class', 'tic');
// 		event.target.appendChild(tic);
// 		event.target.dataset.used = 1;
// 		event.target.classList.add('clicked');
// 		tieScore += 1;
//     }
//     startGame();
//     switchPlayers();
// }
function turnSequence(event) {
	event.target.innerText = currentPlayer;
	//  all the things that happen when a user takes a turn
	// 1.
	// 2.
	switchPlayers();
}
function writeMessage(message) {
	// update the gameboard message with the message passed to it
}
