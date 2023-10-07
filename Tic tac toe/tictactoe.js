const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
  for (let i = 0; i < 3; i++) {
    console.log(board[i].join(' | '));
    if (i < 2) {
      console.log('---------');
    }
  }
}

function checkWin() {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    return true;
  }
  if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    return true;
  }

  return false;
}

function play() {
  console.log(`Player ${currentPlayer}'s turn.`);
  printBoard();

  rl.question('Enter row (0, 1, or 2): ', row => {
    rl.question('Enter column (0, 1, or 2): ', col => {
      if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === ' ') {
        board[row][col] = currentPlayer;
        if (checkWin()) {
          console.log(`Player ${currentPlayer} wins!`);
          printBoard();
          rl.close();
          return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        play();
      } else {
        console.log('Invalid move. Try again.');
        play();
      }
    });
  });
}

console.log('Welcome to Tic Tac Toe!');
play();
