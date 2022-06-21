/* Set variables and create function of  game play */

function playRPS() {
    let choiceRPorS = ["r", "R", "p", "P", "s", "S"];

    let yourChoice = prompt("Enter R, P, or S to play!");
        console.log(yourChoice);

/* Prompt player to enter a selection and verify that choice is valid */
    if (choiceRPorS.includes(yourChoice)) {

/* Generate random computer answer */
        let randomIndex = Math.floor(Math.random() * choiceRPorS.length);
            console.log(randomIndex);

        let computerChoice = choiceRPorS[randomIndex];
            console.log(computerChoice);

/* Output result to HTML */
        document.getElementById("showResult").innerHTML = 
        "You chose " + 
        yourChoice + 
        ". The computer chose " +
        computerChoice + 
        ". Click START to play again!"
    }
    else {
        alert("You made the wrong choice. Choose R, P, or S.")
    }
}