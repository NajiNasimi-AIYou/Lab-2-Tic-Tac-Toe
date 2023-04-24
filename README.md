Tic Tac Toe

The below is what has been completed is marked. What has not been completed is not marked. 

- [x]  Allow for two players to take turns. Assume X always starts the game.
- [x]  Detect when the game ends
    - [x]  when there is no winner and the game has gone for more than 2 minutes.
    - [x]  When a player wins, the player must get three of their pieces (X or O) in a row.
- [x]  Output message to indicate whether it's player X's turn or player O's turn.
- [x]  Maintain the score for each player, i.e. the number of games that each player has won.
- [x]  Maintain an array that holds the squares that contain Xs and one that holds the moves made by O. You can use this array to store the order of plays to detect the piece that needs to be removed.
- [x]  Create a New Game button that resets the board and starts a new game.
    - [x]  Unlike the "Reset" button, the "New Game" button does not reset the scores.
    - [x]  There should be a "**Reset**" button that resets the scores as well as the board.
- [x]  Your design should look similar to the above prototype but you can be creative in your design as long the required elements are included (Animating each play or making the game feel 3d, or ...). Again be sure not to copy code online as that will result in a zero.
- [x]  Finally, you will add a time for players. Set the time to be half a second (or some other reasonable time). You will need to implement some sort of timer event ([https://www.w3schools.com/js/js_timing.aspLinks to an external site.](https://www.w3schools.com/js/js_timing.asp)). *If a user is out of time, you should display a message and skip their turn*. Ideally, your timer should count down the seconds. This is an example on W3C that you can modify and implement to countdown the seconds.
- [ ]  Once you have implemented the above features, then create another button to allow the user to either "**Play Against AI**" or "**Select 2 Players**".
    - [ ]  If you are interested in making your AI "smarter", then look at the MinMax approach ([https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/Links to an external site.](https://www.geeksforgeeks.org/minimax-algorithm-in-game-theory-set-3-tic-tac-toe-ai-finding-optimal-move/)
    ). You must make a note during submission (in the README) to indicate if you implemented the MinMax approach.
    - [ ]  If they select "Play Against AI" then create a simple AI to allow the user to play against the computer. Note, the computer can be pretty dumb and just select to play any random square on the tic tac toe board.

Rubric

- [x]  10 Allow for two players to take turns. Assume X always starts the game.
- [x]  10 Detect when the game ends.
- [x]  15 Detect when a player wins.
    - [x]  Does not allow the game to continue once a game wins
- [x]  10 Output message to indicate whether its player X's turn or player O's turn.
- [x]  10 Maintain the score for each player, i.e. the number of games that player has won.
- [x]  10 The "Reset" button resets the scores as well as the board.
- [x]  15 The New Game button resets the board and starts a new game.
- [x]  10 Timer (timer event ; countdown; error message displayed on timeout; skip player's turn)
- [ ]  10 Simple AI correctly places X or O in an empty box