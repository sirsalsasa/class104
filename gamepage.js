// random value generated
var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var guess = 1;
// made for correct Guess
// function for number guessed by user
playername = localStorage.getItem("player_name")

function submit() {
    var x = document.getElementById("guessField").value;

    if (x == y) {
        alert("Congrats! " + playername + ". You guessed right in " + guess + "guess.");
        guess + 1;
    } else if (x > y) {
        guess++;
        alert("Wrong guess, try something lower than that!")
    } else if (x < y) {
        guess++;
        alert("Wrong guess, try something higher than that!")
    };
}

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}