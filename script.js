let question = "Enter your selection (R, P, or S):";

let result = window.confirm(question);

/* Computer generates random selection. It takes a variable  */ 

let gamePlay = ["R", "P", "S"];

let randomIndex = Math.floor(Math.random()*gamePlay.length);

let randomItem = gamePlay[randomIndex];

console.log(randomItem);

