var dice1, dice2, winner;

document.querySelector("button").addEventListener("click", function () {
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;;
    winner;

    if (dice1 > dice2) {
        winner = "🏆Winner is Player 1!🏆";
    } else if (dice1 < dice2) {
        winner = "🏆Winner is Player 2!🏆";
    } else {
        winner = "Draw!";
    }
    document.querySelector("#dice1").setAttribute("src", "images/dice" + dice1 + ".png");
    document.querySelector("#dice2").setAttribute("src", "images/dice" + dice2 + ".png");
    document.querySelector("h1").textContent = winner;
});

