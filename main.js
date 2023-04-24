class TicTacToe {
    constructor(maxPieces = 4) {
      this.currentPlayer = 'X';
      this.maxPieces = maxPieces;
      this.placedPieces = { X: [], O: [] };
      this.scores = { X: 0, O: 0 };
      this.playerTimer = null;
      this.totalGameTimer = null;
      this.timerElement = document.getElementById('timer');
  
      this.gameBoard = document.getElementsByClassName('game_board')[0];
      this.gameBoard.addEventListener('click', (event) => this.handleClick(event));
  
      this.displayPlayerSpans = document.getElementsByClassName('display_player');
      this.updateDisplayPlayer();
    }

    startTimers() {
      let countdown = 500; // Initialize countdown to 500 milliseconds
    
      // Clear any existing player timer
      if (this.playerTimer) {
        clearTimeout(this.playerTimer);
        console.log("Existing player timer cleared.");
      }
    
      // Update the timer element
      this.timerElement.textContent = (countdown / 1000).toFixed(3);
      console.log(`Timer element updated to ${this.timerElement.textContent}`);
    
      // Set up a 100-millisecond interval to update the countdown
      const countdownInterval = setInterval(() => {
        countdown -= 100;
        this.timerElement.textContent = (countdown / 1000).toFixed(3);
        console.log(`Countdown updated to ${this.timerElement.textContent}`);
    
        if (countdown <= 0) {
          clearInterval(countdownInterval); // Clear the countdown interval when countdown reaches 0
          console.log("Countdown interval cleared.");
        }
      }, 100);
    
      // Set up the player's 2-second timer
      this.playerTimer = setTimeout(() => {
        clearInterval(countdownInterval); // Clear the countdown interval
        console.log("Countdown interval cleared due to player timeout.");
        alert(`Player ${this.currentPlayer} ran out of time. Skipping their turn.`);
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.updateDisplayPlayer();
        console.log(`Player changed to ${this.currentPlayer}.`);
        this.startTimers();
        console.log("Timers restarted.");
      }, 500);
    
      // Set up the total game timer if it hasn't been started yet
      if (!this.totalGameTimer) {
        this.totalGameTimer = setTimeout(() => {
          clearTimeout(this.playerTimer);
          clearInterval(countdownInterval);
          console.log("All timers cleared due to total game time reached.");
          alert('Total game time reached. The game is a tie.');
          this.newGame();
          console.log("New game started.");
        }, 120000);
      }
    }

    updateDisplayPlayer() {
      for (let i = 0; i < this.displayPlayerSpans.length; i++) {
        this.displayPlayerSpans[i].textContent = this.currentPlayer;
        console.log(`Display player span ${i} updated to ${this.currentPlayer}.`);
      }
    }
    
    updateScores() {
      const scoreX = document.getElementById('score_x');
      const scoreO = document.getElementById('score_o');
      scoreX.textContent = this.scores['X'];
      scoreO.textContent = this.scores['O'];
      console.log(`Scores updated: X=${this.scores['X']}, O=${this.scores['O']}`);
    }
    
    checkWinner() {
      const winningCombinations = [
        ['one', 'two', 'three'],
        ['four', 'five', 'six'],
        ['seven', 'eight', 'nine'],
        ['one', 'four', 'seven'],
        ['two', 'five', 'eight'],
        ['three', 'six', 'nine'],
        ['one', 'five', 'nine'],
        ['three', 'five', 'seven']
      ];
    
      for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        const cellA = document.getElementsByClassName(a)[0].querySelector('.xo');
        const cellB = document.getElementsByClassName(b)[0].querySelector('.xo');
        const cellC = document.getElementsByClassName(c)[0].querySelector('.xo');
    
        if (cellA.textContent === this.currentPlayer &&
            cellB.textContent === this.currentPlayer &&
            cellC.textContent === this.currentPlayer) {
          this.scores[this.currentPlayer]++;
          this.updateScores();
          console.log(`Winner found: ${this.currentPlayer}`);
          return true;
        }
      }
      console.log("No winner found.");
      return false;
    }
    
    clearBoard() {
      const cells = document.querySelectorAll('.xo');
      cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
        console.log(`Cell ${cell.classList[0]} cleared.`);
      });
    }
    
    newGame() {
      this.currentPlayer = 'X';
      this.placedPieces = { X: [], O: [] }; // Reset placedPieces for both players
      this.gameBoard.addEventListener('click', (event) => this.handleClick(event));
      console.log("New game started.");
      this.clearBoard();
      console.log("Board cleared.");
      this.updateDisplayPlayer();
      console.log("Display player updated.");
      this.startTimers();
      console.log("Timers started.");
    }
    
    resetGame() {
      this.newGame();
      console.log("Game reset.");
      this.clearBoard();
      console.log("Board cleared.");
      this.scores = { X: 0, O: 0 };
      this.updateScores();
      console.log("Scores reset.");
    }    

    handleClick(event) {
      const cell = event.target.closest('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
      if (cell) {
        const xoSpan = cell.querySelector('.xo');
    
        if (!xoSpan.textContent) {
          xoSpan.textContent = this.currentPlayer;
          xoSpan.classList.add(this.currentPlayer);
    
          this.placedPieces[this.currentPlayer].push(xoSpan);
    
          if (this.placedPieces[this.currentPlayer].length > this.maxPieces) {
            const removedPiece = this.placedPieces[this.currentPlayer].shift();
            removedPiece.textContent = '';
            removedPiece.classList.remove(this.currentPlayer);
            console.log(`Player ${this.currentPlayer}'s piece removed from cell ${removedPiece.parentElement.classList[0]}`);
          }
    
          if (this.checkWinner()) {
            this.gameBoard.removeEventListener('click', this.handleClick);
            console.log(`Winning move made by ${this.currentPlayer}`);
            if (window.confirm(`Player ${this.currentPlayer} has won!\n\nPress OK to start a new game.\n\nPress Cancel to reset the game`)) {
              this.newGame();
            } else {
              this.resetGame();
            }
          } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            this.updateDisplayPlayer();
            console.log(`Player changed to ${this.currentPlayer}`);
          }
          clearTimeout(this.playerTimer);
          this.startTimers();
          console.log("Timers restarted.");
        }
      }
    }       
}
  
const ticTacToe = new TicTacToe();

const newGameButton = document.querySelector('.new_game');
newGameButton.addEventListener('click', () => {
  console.log("New game button clicked.");
  ticTacToe.newGame();
});

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', () => {
  console.log("Reset button clicked.");
  ticTacToe.resetGame();
});
