let currentPlayer = 1;
let totalPlayers = 2;

function startGame() {
  totalPlayers = parseInt(document.getElementById("player-count").value);
  currentPlayer = 1;
  document.getElementById("current-player").innerText = `Current Player: Player ${currentPlayer}`;
}

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-result").innerText = `🎲 You rolled: ${roll}`;

  // Next player's turn
  currentPlayer++;
  if (currentPlayer > totalPlayers) {
    currentPlayer = 1;
  }

  document.getElementById("current-player").innerText = `Current Player: Player ${currentPlayer}`;
}
