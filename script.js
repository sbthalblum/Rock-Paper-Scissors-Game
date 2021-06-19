function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function computerPlay () {
    let randomNumber = getRandomInt(3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}