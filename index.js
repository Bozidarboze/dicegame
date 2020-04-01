var dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0, winner;

document.querySelector("#p1").addEventListener("click", function () {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#dice1").setAttribute("src", "images/dice" + dice1 + ".png");
    document.querySelector("#dice2").setAttribute("src", "images/dice" + dice2 + ".png");

    checkWinner();

    if (dice3 != 0) {
        document.querySelector("h1").textContent = winner;
    }

    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();

    this.disabled = true;

});

document.querySelector("#p2").addEventListener("click", function () {
    dice3 = Math.floor(Math.random() * 6) + 1;
    dice4 = Math.floor(Math.random() * 6) + 1;

    document.querySelector("#dice3").setAttribute("src", "images/dice" + dice3 + ".png");
    document.querySelector("#dice4").setAttribute("src", "images/dice" + dice4 + ".png");

    checkWinner();

    if (dice1 != 0) {
        document.querySelector("h1").textContent = winner;
    }

    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();

    this.disabled = true;

});

document.querySelector("#reset").addEventListener("click", function () {
    dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0;

    for (i = 0; i < 4; i++) {
        document.querySelectorAll(".dice")[i].setAttribute("src", "images/dice.png");
        document.querySelector("h1").textContent = "Dice Game";
    }

    document.querySelector("#p1").disabled = false;
    document.querySelector("#p2").disabled = false;

})

function checkWinner() {
    if (dice1 + dice2 > dice3 + dice4) {
        winner = "🏆Winner is Player 1!🏆";
    } else if (dice1 + dice2 < dice3 + dice4) {
        winner = "🏆Winner is Player 2!🏆";
    } else {
        winner = "Draw!";
    }
}

