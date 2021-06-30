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

let playerWin = 0;
let computerWin = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const res = document.querySelector('#res');
const sco = document.querySelector('#sco');
const playerSelect = document.querySelector('#playerSelect');
const computerSelect = document.querySelector('#computerSelect');

const scoreContainer = document.querySelector('#score-container');
const resetButton = document.createElement('button');
resetButton.innerHTML = "Reset";

resetButton.addEventListener('click', () => {
    playerSelect.textContent = "";
    computerSelect.textContent = "";
    res.innerHTML = "";
    sco.textContent = "";
    playerWin = 0;
    computerWin = 0;
})

rock.addEventListener('click', () => {
    let compSelect = computerPlay()
    let result = playRound('rock', compSelect);
    playerSelect.textContent = 'You choose: rock';
    computerSelect.textContent = `I choose: ${compSelect}`;
    if (result.slice(0,5) == "You w") {
        playerWin += 1;
        res.innerHTML = result.fontcolor("green");
    } else if (result.slice(0,5) == "You l") {
        computerWin += 1;
        res.innerHTML = result.fontcolor("red");
    } else {
        res.innerHTML = result.fontcolor("yellow");
    }
    sco.textContent = `Score | You: ${playerWin}       Me: ${computerWin} |`
    scoreContainer.appendChild(resetButton);
})

paper.addEventListener('click', () => {
    let compSelect = computerPlay()
    let result = playRound('paper', compSelect);
    playerSelect.textContent = 'You choose: paper';
    computerSelect.textContent = `I choose: ${compSelect}`;
    if (result.slice(0,5) == "You w") {
        playerWin += 1;
        res.innerHTML = result.fontcolor("green");
    } else if (result.slice(0,5) == "You l") {
        computerWin += 1;
        res.innerHTML = result.fontcolor("red");
    } else {
        res.innerHTML = result.fontcolor("yellow");
    }
    sco.textContent = `Score | You: ${playerWin}       Me: ${computerWin} |`
    scoreContainer.appendChild(resetButton);
})

scissors.addEventListener('click', () => {
    let compSelect = computerPlay()
    let result = playRound('scissors', compSelect);
    playerSelect.textContent = 'You choose: scissors';
    computerSelect.textContent = `I choose: ${compSelect}`;
    if (result.slice(0,5) == "You w") {
        playerWin += 1;
        res.innerHTML = result.fontcolor("green");
    } else if (result.slice(0,5) == "You l") {
        computerWin += 1;
        res.innerHTML = result.fontcolor("red");
    } else {
        res.innerHTML = result.fontcolor("yellow");
    }
    sco.textContent = `Score | You: ${playerWin}       Me: ${computerWin} |`
    scoreContainer.appendChild(resetButton);
})