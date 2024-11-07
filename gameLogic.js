let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    let choice = '';
    
    if (randomNumber <= 33.33) {
        choice = "Rock";
    } else if (randomNumber > 33.33 && randomNumber <= 66.66) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function getHumanChoice() {
    let chosenNumber = prompt("Enter a number to choose your weapon.\n| Rock = 1 | Paper = 2 | Scissors = 3 |");
    let choice = '';

    while (chosenNumber !== '1' && chosenNumber  !== '2' && chosenNumber !== '3') {
        chosenNumber = prompt("Please enter a correct number.\n| Rock = 1 | Paper = 2 | Scissors = 3 | ");
    }

    if (chosenNumber === '1') {
        choice = "Rock";
    } else if (chosenNumber === '2') {
        choice = "Paper";
    } else if (chosenNumber === '3') {
        choice = "Scissors";
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);

        console.log(`Round ${i + 1}`);
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(result);

        if (result === "You win!") {
            humanScore += 1;
        } else if ( result === "Computer wins!") {
            computerScore += 1;
        } else {
            i--;
        }
         console.log(`Current score: You: ${humanScore} | Computer: ${computerScore}\n************************************`);
    }
    return `Game over! Final results are:\n| your score: ${humanScore} | computer score: ${computerScore} |`;
}

console.log(playGame());