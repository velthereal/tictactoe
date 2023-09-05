class TicTacToe{
	constructor(){
		this.board = [];
		for(let row = 0; row < 3; row++){
			this.board[row] = [];
			for(let col = 0; col < 3; col++){
				this.board[row][col] = null;
			}
		}
		this.currentPlayer = 'X';
		this.isGameFinished = false;
	}
	makeMove(row, col){
		if(this.board[row][col] === null && !this.isGameFinished){
			this.board[row][col] = this.currentPlayer;
			this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
			this.checkWinner();
			this.updateBoard();
		}
	}
	checkWinner(){
		let winningCombos = [
			[[0, 0], [0, 1], [0, 2]],
			[[1, 0], [1, 1], [1, 2]],
			[[2, 0], [2, 1], [2, 2]],
			[[0, 0], [1, 0], [2, 0]],
			[[0, 1], [1, 1], [2, 1]],
			[[0, 2], [1, 2], [2, 2]],
			[[0, 0], [1, 1], [2, 2]],
			[[0, 2], [1, 1], [2, 0]],
		 ];

		 for (const combo of winningCombos) {
			const [a, b, c] = combo;
			const [rowA, colA] = a;
			const [rowB, colB] = b;
			const [rowC, colC] = c;

			if (
			  this.board[rowA][colA] &&
			  this.board[rowA][colA] === this.board[rowB][colB] &&
			  this.board[rowA][colA] === this.board[rowC][colC]
			) {
			  this.isGameFinished = true;
			  document.getElementById('winner').innerText = `Гравець ${this.board[rowA][colA]} переміг!`;
			}
		 }

	}
	updateBoard(){
		let boardElement = document.getElementById('board');
		boardElement.innerHTML = '';

		for(let row = 0; row < 3; row++){
			for(let col = 0; col < 3; col++){
				let cell = document.createElement('div');
				cell.className = 'cell';

				cell.classList.add(this.board[row][col]);
				
				cell.innerText = this.board[row][col] || '';
				cell.addEventListener('click', () => {
					this.makeMove(row, col);
				})
				boardElement.appendChild(cell);
			}
		}
	}
}
let game = new TicTacToe();

game.updateBoard();