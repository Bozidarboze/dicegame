var dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0, winner;

$("#p1").click(function () {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    $("#dice1").attr("src", "images/dice" + dice1 + ".png");
    $("#dice2").attr("src", "images/dice" + dice2 + ".png");

    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();

    checkWinner();

    if (dice3 != 0) {
        $("h1").text(winner);
    }

    this.disabled = true;

});

$("#p2").click(function () {
    dice3 = Math.floor(Math.random() * 6) + 1;
    dice4 = Math.floor(Math.random() * 6) + 1;

    $("#dice3").attr("src", "images/dice" + dice3 + ".png");
    $("#dice4").attr("src", "images/dice" + dice4 + ".png");

    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();

    checkWinner();

    if (dice1 != 0) {
        $("h1").text(winner);
    }

    this.disabled = true;

});

$("#reset").click(function () {
    dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0;

    $(".dice").attr("src", "images/dice.png");
    $("h1").text("Dice Game");
    $("#p1").prop("disabled", false);
    $("#p2").prop("disabled", false);
});

function checkWinner() {
    if (dice1 + dice2 > dice3 + dice4) {
        winner = "🏆Winner is Player 1!🏆";
    } else if (dice1 + dice2 < dice3 + dice4) {
        winner = "🏆Winner is Player 2!🏆";
    } else {
        winner = "Draw!";
    }
}

