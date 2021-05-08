function userOption() {
    let rawUserSelect = prompt("Choose between rock, paper, scissor");
    let userSelect;

    if (rawUserSelect !== null) { //Added a condition check for string.
        userSelect = rawUserSelect.toLowerCase();
    }

    switch (true) {
        case "rock": break;
        case "paper": break;
        case "scissor": break;
        case null: //Added null case if user exits the prompt without typing any string.
        default:
            console.log("Type rock, paper, or scissor");
            userOption();
            break;
    }
    return userSelect;
}

function computerOption() {
    let rawComputerSelect = Math.floor(Math.random() * 3);
    let computerSelect;
    if (rawComputerSelect === 0) {
        computerSelect = "rock";
    } else if (rawComputerSelect === 1) {
        computerSelect = "paper";
    } else if (rawComputerSelect === 2) {
        computerSelect = "scissor";
    } else {
        console.log("Error occurred, will run computer selection again.");
        computerOption();
    }
    return computerSelect;
}

function runGame() {
    let userScore = 0;
    let computerScore = 0;
    let userSelect;
    let computerSelect;
    
    while (userScore < 5 && computerScore < 5) {
        userSelect = userOption();
        computerSelect = computerOption();
        switch (true) {
            case userSelect === "rock" && computerSelect === "scissor":
            case userSelect === "scissor" && computerSelect === "paper":
            case userSelect === "paper" && computerSelect === "rock":
                console.log(`You win! ${userSelect} beats ${computerSelect}`);
                ++userScore;
                console.log(`User Score: ${userScore} ; Computer Score: ${computerScore}`);
                break;
            case computerSelect === "rock" && userSelect === "scissor":
            case computerSelect === "scissor" && userSelect === "paper":
            case computerSelect === "paper" && userSelect === "rock":
                console.log(`You lose! ${computerSelect} beats ${userSelect}`);
                ++computerScore;
                console.log(`User Score: ${userScore} ; Computer Score: ${computerScore}`);
                break;
            case userSelect === computerSelect:
                console.log("It's a draw!");
                console.log(`User Score: ${userScore} ; Computer Score: ${computerScore}`);
                break;
        }
    }
    if (userScore > computerScore) {
        return (`You won the game! User Score: ${userScore} ; Computer Score ${computerScore}`);
    } else {
        return (`You lost the game! User Score: ${userScore} ; Computer Score ${computerScore}`);
    }
}

console.log(runGame());