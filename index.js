var dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0, winner;

$("#p1").click(function () {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    random3 = Math.floor(Math.random() * 6) + 1;
    random4 = Math.floor(Math.random() * 6) + 1;


    $("#dice1").attr("src", "images/dice" + random1 + ".png");
    setTimeout(() => {
        $("#dice1").attr("src", "images/dice" + random2 + ".png");
    }, 100);
    setTimeout(() => {
        $("#dice1").attr("src", "images/dice" + random3 + ".png");
    }, 200);
    setTimeout(() => {
        $("#dice1").attr("src", "images/dice" + random4 + ".png");
    }, 300);
    setTimeout(() => {
        $("#dice1").attr("src", "images/dice" + dice1 + ".png");
    }, 400);



    $("#dice2").attr("src", "images/dice" + random4 + ".png");
    setTimeout(() => {
        $("#dice2").attr("src", "images/dice" + random3 + ".png");
    }, 100);
    setTimeout(() => {
        $("#dice2").attr("src", "images/dice" + random2 + ".png");
    }, 200);
    setTimeout(() => {
        $("#dice2").attr("src", "images/dice" + random1 + ".png");
    }, 300);
    setTimeout(() => {
        $("#dice2").attr("src", "images/dice" + dice2 + ".png");
    }, 400);


    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();

    checkWinner();

    if (dice3 != 0) {
        setTimeout(() => {
            $("h1").text(winner);
        }, 500);
    }

    this.disabled = true;

});

$("#p2").click(function () {
    dice3 = Math.floor(Math.random() * 6) + 1;
    dice4 = Math.floor(Math.random() * 6) + 1;
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    random3 = Math.floor(Math.random() * 6) + 1;
    random4 = Math.floor(Math.random() * 6) + 1;


    $("#dice3").attr("src", "images/dice" + random1 + ".png");
    setTimeout(() => {
        $("#dice3").attr("src", "images/dice" + random2 + ".png");
    }, 100);
    setTimeout(() => {
        $("#dice3").attr("src", "images/dice" + random3 + ".png");
    }, 200);
    setTimeout(() => {
        $("#dice3").attr("src", "images/dice" + random4 + ".png");
    }, 300);
    setTimeout(() => {
        $("#dice3").attr("src", "images/dice" + dice3 + ".png");
    }, 400);



    $("#dice4").attr("src", "images/dice" + random4 + ".png");
    setTimeout(() => {
        $("#dice4").attr("src", "images/dice" + random3 + ".png");
    }, 100);
    setTimeout(() => {
        $("#dice4").attr("src", "images/dice" + random2 + ".png");
    }, 200);
    setTimeout(() => {
        $("#dice4").attr("src", "images/dice" + random1 + ".png");
    }, 300);
    setTimeout(() => {
        $("#dice4").attr("src", "images/dice" + dice4 + ".png");
    }, 400);

    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();

    checkWinner();

    if (dice1 != 0) {
        setTimeout(() => {
            $("h1").text(winner);
        }, 500);
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

