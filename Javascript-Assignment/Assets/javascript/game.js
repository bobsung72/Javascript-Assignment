
var startGame = confirm ("Are you ready to start Game? Clue: German Luxury Car");

var userGuess = event.key;

var luxuryCarsName = [
"Porsche", "Audi", "BMW", "Mercedes"];

var alphabetLetters = [
"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var computerChoices = [porscheIndex,audiIndex,bmwIndex,mercedesIndex,lexusIndex,teslaIndex];

var porscheIndex = ["p", "o", "r", "s", "c", "h", "e"];

var audiIndex = ["a", "u", "d", "i"];

var bmwIndex = ["b", "m", "w"];

var mercedesIndex = ["m", "e", "r", "c", "e", "d", "e", "s"];

var numberOfGuess = 8;

var wins = 0;

var losses = 0;

var ties = 0;

var userGuess = event.key;
