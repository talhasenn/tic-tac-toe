// Tic-Tac-Toe Game in JavaScript

// Game variables
let board;
let currentPlayer;
let gameWon;
let moveCount;

// Initialize the game
function initGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  gameWon = false;
  moveCount = 0;
  renderBoard();
}

// Render the game board
function renderBoard() {
  const boardContainer = document.getElementById('board');
  boardContainer.innerHTML = '';

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', handleCellClick);
      cell.innerText = board[row][col];
      boardContainer.appendChild(cell);
    }
  }
}

// Handle a cell click
function handleCellClick(event) {
  if (gameWon) {
    return;
  }

  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);

  if (board[row][col] === '') {
    board[row][col] = currentPlayer;
    event.target.innerText = currentPlayer;
    moveCount++;

    if (checkWin(row, col)) {
      gameWon = true;
      alert('Player ' + currentPlayer + ' wins!');
    } else if (moveCount === 9) {
      gameWon = true;
      alert('It\'s a tie!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Check if a player has won
function checkWin(row, col) {
  const symbol = board[row][col];

  // Check row
  if (
    board[row][0] === symbol &&
    board[row][1] === symbol &&
    board[row][2] === symbol
  ) {
    return true;
  }

  // Check column
  if (
    board[0][col] === symbol &&
    board[1][col] === symbol &&
    board[2][col] === symbol
  ) {
    return true;
  }

  // Check diagonal
  if (row === col) {
    if (
      board[0][0] === symbol &&
      board[1][1] === symbol &&
      board[2][2] === symbol
    ) {
      return true;
    }
  }

  // Check anti-diagonal
  if (row + col === 2) {
    if (
      board[0][2] === symbol &&
      board[1][1] === symbol &&
      board[2][0] === symbol
    ) {
      return true;
    }
  }

  return false;
}

// Start the game
initGame();