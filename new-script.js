function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function computerPlay () {
    let randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function playerSelection () {
    let selection = prompt("Enter Rock, Paper, or Scissors", "Choice");
    selection = selection.toLowerCase();
    return selection;
}
function playRound(playerSelect, computerSelect) {
    if (playerSelect == computerSelect) {
        return "Draw! Play Again.";
    } else if (playerSelect == "rock" && computerSelect == "paper"){
        return "You lose! Paper beats rock.";
    } else if (playerSelect == "rock" && computerSelect == "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelect == "paper" && computerSelect == "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelect == "paper" && computerSelect == "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelect == "scissors" && computerSelect == "paper") {
        return "You win! Scissors beats paper";
    } else if (playerSelect == "scissors" && computerSelect == "rock") {
        return "You lose! Rock beats scissors"
    }
}

let playerWin = 0;
let computerWin = 0;
function game () {
        let result = playRound(playerSelection(), computerPlay());
        if (result.slice(0,5) == "You w") {
            computerWin += 1;
        } else {
            playerWin += 1;
        }
        console.log(result)
    
    if (computerWin > playerWin) {
        console.log(`You lose, computer wins ${computerWin} to ${playerWin}`)
    } else {
        console.log(`You win! You beat computer ${playerWin} to ${computerWin}`)
    }
}