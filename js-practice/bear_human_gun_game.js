function getUserChoice(userInput) {
    var userInput = userInput.toLowerCase();
    if (userInput === "bear" || userInput === "human" || userInput === "gun")
        return userInput;
    else
        console.error("Invalid input");
}

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    var choices = ['bear', 'human', 'gun'];
    return choices[randomNumber];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice)
        return "It's a tie!";
    else if (userChoice === "human") {
        if (computerChoice === "bear")
            return "Computer won!";
        else
            return "User won!";
    }
    else if (userChoice === "bear") {
        if (computerChoice === "gun")
            return "Computer won!";
        else
            return "User won!";
    }
    else if (userChoice === "gun") {
        if (computerChoice === "human")
            return "Computer won!";
        else
            return "User won!";
    }
}

function playGame() {
    var promptUserChoice = prompt("Please choose bear, human or gun");
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();