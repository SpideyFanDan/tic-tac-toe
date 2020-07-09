let currentPlayer = 'X';
let gameboard;

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