/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, activePlayer, roundScore;

init();

function swapPlayer() {
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
    console.log("I've reached line 31");

}

document.querySelector(".btn-roll").addEventListener("click", function() {
    // random number assignment to dice
    var dice = Math.ceil(Math.random() * 6);
    // display this number on the dice
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    // display the obtained number on the current score as well
    if (dice !== 1) {
        // Add score in the pocket of the currently active player
        roundScore += dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    } else {
        // swap the palyer and reset thescore of the by far currrently active player as 0 again
        swapPlayer();
    }

});


document.querySelector(".btn-hold").addEventListener("click", function() {
    score[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = score[activePlayer];
    if (score[activePlayer] >= 20) {
        document.getElementById("name-" + activePlayer).textContent = "WINNER!";
        document.querySelector(".dice").style.display = "none";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        document.querySelector(".btn-roll").style.display = "none";
        document.querySelector(".btn-hold").style.display = "none";

    } else {
        swapPlayer();
    }

});

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    score = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    document.querySelector(".dice").style.display = "none";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".btn-roll").style.display = "block";
    document.querySelector(".btn-hold").style.display = "block";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");

}
