/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, activePlayer, roundScore;
score = [0, 0];
activePlayer = 0;
roundScore = 0;

document.querySelector(".dice").style.display = "none";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function() {
    // random number assignment to dice
    var dice = Math.ceil(Math.random() * 6);
    // display this number on the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = "dice-" + dice + ".png";
    diceDOM.style.display = "block";
    // display the obtained number on the current score as well
    document.getElementById("current-" + activePlayer).textContent = dice;
    if (dice !== 1) {
        // Add score in the pocket of the currently active player
        roundScore += dice;
        document.getElementById("score-" + activePlayer).textContent = roundScore;

    } else {
        // swap the palyer and reset the scores of the by far currrently active player as 0 again
        roundScore = 0;
        activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";

    }

});
