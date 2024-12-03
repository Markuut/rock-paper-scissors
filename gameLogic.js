let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random() * 100;
    if (randomNumber <= 33.33) return "Rock";
    if (randomNumber <= 66.66) return "Paper";
    return "Scissors";
}

function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
        humanScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    updateScore();
    displayResult(result, humanChoice, computerChoice);
    checkGameOver();
}

function updateScore() {
    document.querySelector(".score").textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
}

function displayResult(result, humanChoice, computerChoice) {
    document.querySelector(".result").textContent = `You chose ${humanChoice}. Computer chose ${computerChoice}. ${result}`;
}

function checkGameOver() {
    if (humanScore === 3 || computerScore === 3) {
        const winner = humanScore === 3 ? "You are the winner!" : "Computer is the winner!";
        document.querySelector(".endgame-result").textContent = `Game over. ${winner}`;
        showPlayAgainButton();
        showEndgameScreen();
    }
}

function showEndgameScreen(playerWon) {
    const container = document.querySelector(".endgame-result");

    const crownImg = document.createElement("img");
    crownImg.src = "images/crown.png";
    crownImg.alt = "Crown";

    crownImg.style.width = "100px";
    crownImg.style.marginTop = "10px";

    container.appendChild(crownImg);
}

function showPlayAgainButton() {
    const container = document.querySelector(".game-container");
    container.innerHTML = ""; 

    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    playAgainButton.addEventListener("click", resetGame);

    container.appendChild(playAgainButton);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    const container = document.querySelector(".game-container");
    container.innerHTML = `
        <button class="btn rock"><img src="images/rock.png">
            </button>
        <button class="btn paper"><img src="images/paper.png">
            </button>
        <button class="btn scissors"><img src="images/scissors.png">
            </button>
    `;

    document.querySelector(".score").textContent = "Your score: 0 | Computer score: 0";
    document.querySelector(".result").textContent = "Choose your weapon to start the game!";
    document.querySelector(".endgame-result").textContent = "";

    document.querySelector(".rock").addEventListener("click", () => playRound("Rock", getComputerChoice()));
    document.querySelector(".paper").addEventListener("click", () => playRound("Paper", getComputerChoice()));
    document.querySelector(".scissors").addEventListener("click", () => playRound("Scissors", getComputerChoice()));
}

document.querySelector(".rock").addEventListener("click", () => playRound("Rock", getComputerChoice()));
document.querySelector(".paper").addEventListener("click", () => playRound("Paper", getComputerChoice()));
document.querySelector(".scissors").addEventListener("click", () => playRound("Scissors", getComputerChoice()));
