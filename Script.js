//constants and variables

const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer")
const result = document.querySelector("#result")
const button = document.querySelector("#Buttons")
const scoreDisplay = document.querySelector("#score")
let humanChoice = "";
let computerChoice = "";
let score = 0


//define wintable

const wins = {
    steen: "schaar",
    schaar: "papier",
    papier: "steen"
} 

//main game function
 
function rungame(event) {
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) { 
        case 1:
            computerChoice = 'steen'
        break
        case 2:
            computerChoice = 'papier'
        break
        case 3:
            computerChoice = 'schaar'
        break
    }
    computerOutput.innerHTML = computerChoice;

    if (humanChoice === computerChoice){
        result.innerHTML = "It's a Tie!"
    }
    else if (wins[humanChoice] === computerChoice) {
        result.innerHTML = "You WIN!"
        score++
        scoreDisplay.innerHTML = score
    }
    else { 
        result.innerHTML = "You LOSE! 😂🤡"
    }

}
// click events
button.addEventListener('click', rungame)
