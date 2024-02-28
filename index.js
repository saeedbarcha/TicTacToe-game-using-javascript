class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.playerScores = {
      X: "",
      O: "",
      tie: "",
    };
    this.cells = document.querySelectorAll(".cellCont");
    this.infoElements = {
      X: document.querySelector(".infoCont .infoInnerCont:nth-child(1) h3"),
      O: document.querySelector(".infoCont .infoInnerCont:nth-child(3) h3"),
      tie: document.querySelector(".infoCont .infoInnerCont:nth-child(2) h3"),
    };
    this.cells.forEach((cell, index) => {
      cell.addEventListener("click", () => this.handleClick(index));
    });
  }

  handleClick(index) {
    if(this.board[index] == null && !this.checkWinner()){
     
      if (this.currentPlayer == "X") {
        this.cells[
          index
        ].innerHTML = `<i class="fa fa-times"  style="font-size: 70px"></i>`;
      } else {
        this.cells[
          index
        ].innerHTML = `<i class="fa fa-circle-o" style="font-size: 70px"></i>`;
      }

      this.board[index] = this.currentPlayer;

      if (this.checkWinner()) {
        this.playerScores[this.currentPlayer] = "win";
      } else if (!this.board.includes(null)) {
        this.playerScores.tie = "tie";
      }

      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      this.render();
    }
   
  }

  checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;


      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return true;
      }
    }
    return false;
  }

  render() {
    for (let player in this.infoElements) {
      this.infoElements[player].textContent = this.playerScores[player];
    }
  }
}

// Initialize the game
const playGame = new TicTacToe();
