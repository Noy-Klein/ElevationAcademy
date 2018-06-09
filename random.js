var randomNum = Math.floor(Math.random() * 5 + 1);
var guesses = 0; // the number of guesses it took to guess the random number

/*  a function that checks if the number it is given is the
same as the random number*/

function guess(num) {
  if (num !== randomNum) {
    console.log("Keep guessing!");
    guesses++;
  } else {
    console.log("You guessed th random number!");
    console.log("It took you " + guesses + " guesses!");
  }
}
