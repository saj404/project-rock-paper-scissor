let options = document.querySelectorAll('#player-option-cntnr button');
let userScore = 0;
let computerScore = 0;

//Adding event listener on buttons
options.forEach((option) => {
    option.addEventListener('click', () => {
        //Checks score if game already ended
        if (userScore == 5) {
            let play = confirm('Play again?');
            if (play == true) {
                location.reload()
            } else {
                return false;
            }
        } else if (computerScore == 5) {
            play = confirm('Play again?');
            if (play == true) {
                location.reload()
            } else {
                return false;
            }
        } else {
            runGame(option.dataset.value);
        }
    });
});

function runGame(userSelect) {
    let userBoard = document.querySelector('#player-score');
    let computerBoard = document.querySelector('#computer-score');
    let comment = document.querySelector('#text-display');



    let computerSelect = computerOption();

    //Displays User select
    let userSelectDisplay = document.querySelector('#player-select');
    let userSelectImg = document.querySelector('#player-select-img');
    userSelectImg.setAttribute('src', `images/${userSelect}.png`);
    userSelectImg.style.width = '280px';

    userSelectDisplay.appendChild(userSelectImg);

    //Displays Computer select
    let computerSelectDisplay = document.querySelector('#computer-select');
    let computerSelectImg = document.querySelector('#computer-select-img');
    computerSelectImg.setAttribute('src', `images/${computerSelect}.png`);
    computerSelectImg.style.width = '280px';
    
    computerSelectDisplay.appendChild(computerSelectImg);

    switch (true) {
        case userSelect === "rock" && computerSelect === "scissor":
        case userSelect === "scissor" && computerSelect === "paper":
        case userSelect === "paper" && computerSelect === "rock":
            comment.textContent = `You win! ${userSelect} beats ${computerSelect}`;
            console.log(`You win! ${userSelect} beats ${computerSelect}`);
            ++userScore;
            userBoard.textContent = userScore;
            break;
        case computerSelect === "rock" && userSelect === "scissor":
        case computerSelect === "scissor" && userSelect === "paper":
        case computerSelect === "paper" && userSelect === "rock":
            comment.textContent = `You lose! ${computerSelect} beats ${userSelect}`;
            console.log(`You lose! ${computerSelect} beats ${userSelect}`);
            ++computerScore;
            computerBoard.textContent = computerScore;
            break;
        case userSelect === computerSelect:
            comment.textContent = "It's a draw!";
            console.log("It's a draw!");
            break;
    }

    if (userScore == 5) {
        let play = confirm('You Win! Play again?');
        if (play == true) {
            location.reload()
        } else {
            return false;
        }
    } else if (computerScore == 5) {
        play = confirm('You lose! Play again?');
        if (play == true) {
            location.reload()
        } else {
            return false;
        }
    }
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

    let computerOptions = document.querySelectorAll('#computer-option-cntnr button');
    computerOptions.forEach((option) => {
        option.classList.remove('button-select');
        console.log(option);
        if (option.dataset.value == computerSelect) {
            option.classList.add('button-select');
        }
        });

    return computerSelect;
}