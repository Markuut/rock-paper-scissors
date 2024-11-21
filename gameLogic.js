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
    let round = 1;

function playNextRound() {
    if (humanScore === 3 || computerScore === 3) {
        const winner = humanScore === 3 ? "You are the winner!" : "Computer is the winner!";
        console.log(`Game over! ${winner}`);
        console.log(`Final results are:\n| Your score: ${humanScore} | Computer score: ${computerScore} |`);
        return;
    }

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

    console.log(`Round ${round}`);
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(result);

    if (result === "You win!") {
        humanScore++;
    } else if ( result === "Computer wins!") {
        computerScore++;
    } else if (result == "It's a tie!") {
        round--;
    }

    
     console.log(`Current score: You: ${humanScore} | Computer: ${computerScore}\n************************************`);
     round++;

     setTimeout(playNextRound, 1000); // Delay the round by 1 second
    }

    playNextRound();
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Rock Paper Scissors! Best out of 5 rounds.");
    playGame();
});