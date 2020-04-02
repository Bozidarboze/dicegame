var dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0, dice5 = 0, dice6 = 0, dice7 = 0, dice8 = 0,
    dices1, dices2, score1 = 0, score2 = 0, score3 = 0, score4 = 0, winner, draw;

$(".p1").click(function () {
    playerRoll(".dice1", ".dice2", ".p1", ".p2", ".p3", ".p4", dice3, dice5, dice7);
    dice1 = dices1;
    dice2 = dices2;
    score1 = dice1 + dice2;
    checkWinner();
    setWinner();
});

$(".p2").click(function () {
    playerRoll(".dice3", ".dice4", ".p2", ".p1", ".p3", ".p4", dice1, dice5, dice7);
    dice3 = dices1;
    dice4 = dices2;
    score2 = dice3 + dice4;
    checkWinner();
    setWinner();
});

$(".p3").click(function () {
    playerRoll(".dice5", ".dice6", ".p3", ".p1", ".p2", ".p4", dice1, dice3, dice7);
    dice5 = dices1;
    dice6 = dices2;
    score3 = dice5 + dice6;
    checkWinner();
    setWinner();
});

$(".p4").click(function () {
    playerRoll(".dice7", ".dice8", ".p4", ".p1", ".p2", ".p3", dice1, dice3, dice5);
    dice7 = dices1;
    dice8 = dices2;
    score4 = dice7 + dice8;
    checkWinner();
    setWinner();
});

$("#reset").click(function () {
    reset();
});

function playerRoll(dicec1, dicec2, buttonPressed, button1, button2, button3, bd1, bd2, bd3) {
    $(buttonPressed).prop("disabled", true);
    dices1 = Math.floor(Math.random() * 6) + 1;
    dices2 = Math.floor(Math.random() * 6) + 1;
    random1 = Math.floor(Math.random() * 6) + 1;
    random2 = Math.floor(Math.random() * 6) + 1;
    random3 = Math.floor(Math.random() * 6) + 1;
    random4 = Math.floor(Math.random() * 6) + 1;


    $(dicec1).attr("src", "images/dice" + random1 + ".png");
    setTimeout(() => {
        $(dicec1).attr("src", "images/dice" + random2 + ".png");
    }, 100);
    setTimeout(() => {
        $(dicec1).attr("src", "images/dice" + random3 + ".png");
    }, 200);
    setTimeout(() => {
        $(dicec1).attr("src", "images/dice" + random4 + ".png");
    }, 300);
    setTimeout(() => {
        $(dicec1).attr("src", "images/dice" + dices1 + ".png");
    }, 400);


    $(dicec2).attr("src", "images/dice" + random4 + ".png");
    setTimeout(() => {
        $(dicec2).attr("src", "images/dice" + random3 + ".png");
    }, 100);
    setTimeout(() => {
        $(dicec2).attr("src", "images/dice" + random2 + ".png");
    }, 200);
    setTimeout(() => {
        $(dicec2).attr("src", "images/dice" + random1 + ".png");
    }, 300);
    setTimeout(() => {
        $(dicec2).attr("src", "images/dice" + dices2 + ".png");
    }, 400);

    if (draw != true) {
        $(button1).prop("disabled", true);
        $(button2).prop("disabled", true);
        $(button3).prop("disabled", true);
        setTimeout(() => {
            if (bd1 == 0 && draw != true) { $(button1).prop("disabled", false); }
            if (bd2 == 0 && draw != true) { $(button2).prop("disabled", false); }
            if (bd3 == 0 && draw != true) { $(button3).prop("disabled", false); }
        }, 600);
    }

    var diceRollSound = new Audio("sounds/dice-roll.mp3");
    diceRollSound.play();
};

function checkWinner() {
    if (score1 > score2 && score1 > score3 && score1 > score4) {
        winner = "🏆Winner is Player 1!🏆";
        draw = false;
    } else if (score2 > score1 && score2 > score3 && score2 > score4) {
        winner = "🏆Winner is Player 2!🏆";
        draw = false;
    } else if (score3 > score1 && score3 > score2 && score3 > score4) {
        winner = "🏆Winner is Player 3!🏆";
        draw = false;
    } else if (score4 > score1 && score4 > score2 && score4 > score3) {
        winner = "🏆Winner is Player 4!🏆";
        draw = false;
    } else {
        winner = "Draw!";
        if (score1 == score2 && $("#players2").hasClass("active")
            || score1 == score2 && score3 != 0 && $("#players3").hasClass("active")
            || score1 == score2 && score3 != 0 && score4 != 0 && $("#players4").hasClass("active")) {
            $(".p1").prop("disabled", false);
            $(".p2").prop("disabled", false);
            draw = true;
        } else if (score1 == score3 && $("#players2").hasClass("active")
            || score1 == score3 && score2 != 0 && $("#players3").hasClass("active")
            || score1 == score3 && score2 != 0 && score4 != 0 && $("#players4").hasClass("active")) {
            $(".p1").prop("disabled", false);
            $(".p3").prop("disabled", false);
            draw = true;
        } else if (score1 == score4 && $("#players2").hasClass("active")
            || score1 == score4 && score2 != 0 && $("#players3").hasClass("active")
            || score1 == score4 && score2 != 0 && score3 != 0 && $("#players4").hasClass("active")) {
            $(".p1").prop("disabled", false);
            $(".p4").prop("disabled", false);
            draw = true;
        } else if (score2 == score3 && $("#players2").hasClass("active")
            || score2 == score3 && score1 != 0 && $("#players3").hasClass("active")
            || score2 == score3 && score1 != 0 && score4 != 0 && $("#players4").hasClass("active")) {
            $(".p2").prop("disabled", false);
            $(".p3").prop("disabled", false);
            draw = true;
        } else if (score2 == score4 && $("#players2").hasClass("active")
            || score2 == score4 && score1 != 0 && $("#players3").hasClass("active")
            || score2 == score4 && score1 != 0 && score3 != 0 && $("#players4").hasClass("active")) {
            $(".p2").prop("disabled", false);
            $(".p4").prop("disabled", false);
            draw = true;
        } else if (score3 == score4 && $("#players2").hasClass("active")
            || score3 == score4 && score1 != 0 && $("#players3").hasClass("active")
            || score3 == score4 && score1 != 0 && score2 != 0 && $("#players4").hasClass("active")) {
            $(".p3").prop("disabled", false);
            $(".p4").prop("disabled", false);
            draw = true;
        }
    }
};

function setWinner() {
    if (dice1 != 0 && dice3 != 0 && $("#players2").hasClass("active")
        || dice1 != 0 && dice3 != 0 && dice5 != 0 && $("#players3").hasClass("active")
        || dice1 != 0 && dice3 != 0 && dice5 != 0 && dice7 != 0 && $("#players4").hasClass("active")) {
        setTimeout(() => {
            $("h1").text(winner);
        }, 500);
    }
}

function reset() {
    dice1 = 0, dice2 = 0, dice3 = 0, dice4 = 0, dice5 = 0, dice6 = 0, dice7 = 0, dice8 = 0,
        score1 = 0, score2 = 0, score3 = 0, score4 = 0, draw = false;

    $(".dice").attr("src", "images/dice.png");
    $("h1").text("Dice Game");
    $(".p1").prop("disabled", false);
    $(".p2").prop("disabled", false);
    $(".p3").prop("disabled", false);
    $(".p4").prop("disabled", false);
}

$("#players2").click(function () {
    $("#players2").addClass("active");
    $(".players3").addClass("hidden");
    $(".players4").addClass("hidden");
    $("#players3").removeClass("active");
    $("#players4").removeClass("active");
    reset();
});

$("#players3").click(function () {
    $("#players3").addClass("active");
    $(".players3").removeClass("hidden");
    $(".players4").addClass("hidden");
    $("#players2").removeClass("active");
    $("#players4").removeClass("active");
    reset();
});

$("#players4").click(function () {
    $("#players4").addClass("active");
    $(".players4").removeClass("hidden");
    $(".players3").addClass("hidden");
    $("#players2").removeClass("active");
    $("#players3").removeClass("active");
    reset();
});
