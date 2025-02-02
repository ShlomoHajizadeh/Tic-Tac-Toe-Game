let currentPlayer = "X";
let gameOver = false;

function playerMove(cell) {
  if (gameOver) return;

  if (cell.innerHTML === "") {
    cell.innerHTML = currentPlayer;
    cell.style.color = currentPlayer === "X" ? "#1e90ff" : "#dc143c";
    checkForWinner();
    switchPlayer();
  }
}

function checkForWinner() {
  const cells = document.getElementsByClassName("cell");
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const cell1 = cells[combo[0]];
    const cell2 = cells[combo[1]];
    const cell3 = cells[combo[2]];
    if (
      cell1.innerHTML !== "" &&
      cell1.innerHTML === cell2.innerHTML &&
      cell2.innerHTML === cell3.innerHTML
    ) {
      gameOver = true;
      cell1.style.backgroundColor = "#90ee90";
      cell2.style.backgroundColor = "#90ee90";
      cell3.style.backgroundColor = "#90ee90";
      alert(currentPlayer + " wins!");
      break;
    }
  }
}

function switchPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
