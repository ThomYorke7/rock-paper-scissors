const buttons = Array.from(document.querySelectorAll("button"));
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const gameBanner = document.querySelector("#gameBanner");



function computerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const computerSelection = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return computerSelection
}

function scoreTracker() {
    if (playerScore.innerHTML == 5) {
        gameBanner.innerHTML = "Yeah, you win. Great deal. <br>";
        gameBanner.innerHTML += "Click here to prove it wasn't luck.";
        buttons.forEach(button => button.disabled = true);
        gameBanner.addEventListener("click", () => {
            playerScore.innerHTML = 0;
            computerScore.innerHTML = 0;
        })
    } else if (computerScore.innerHTML == 5) {
        gameBanner.innerHTML = "YOU LOSE! MWHAHAHAHAHAHAHAHAHAHAH <br>";
        gameBanner.innerHTML += "Click here to lose again.";
        buttons.forEach(button => button.disabled = true);
        gameBanner.addEventListener("click", () => {
            playerScore.innerHTML = 0;
            computerScore.innerHTML = 0;
        })
    } else {
        return;
    }
}

function playRound(e) {

    const playerPlay = document.querySelector(`button[id = "${e.target.id}"`)
    const playerSelection = playerPlay.id;
    const computerSelection = computerChoice();

    if (playerSelection == computerSelection) {
        gameBanner.textContent = "Ha! You draw."
    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            ++computerScore.innerHTML;
            gameBanner.textContent = "You lose! Paper beats Rock.";
            scoreTracker();
        } else {
            ++playerScore.innerHTML;
            gameBanner.textContent = "You win! Rock beats Scissors."
            scoreTracker();
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            ++computerScore.innerHTML;
            gameBanner.textContent = "You lose! Scissors beats Paper."
            scoreTracker();
        } else {
            ++playerScore.innerHTML;
            gameBanner.textContent = "You win! Paper beats Rock."
            scoreTracker();
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            ++computerScore.innerHTML;
            gameBanner.textContent = "You lose! Rock beats Scissors."
            scoreTracker();
        } else {
            ++playerScore.innerHTML;
            scoreTracker();
            gameBanner.textContent = "You win! Scissors beats Paper."
        }
    }
}




gameBanner.addEventListener("click", () => {
    buttons.forEach(button => button.disabled = false);
})
gameBanner.addEventListener("click", () => gameBanner.textContent = "Make your choice.")
buttons.forEach(button => button.disabled = true);
buttons.forEach(button => button.addEventListener("click", playRound))