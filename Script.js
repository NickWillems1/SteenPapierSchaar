//constants and variables

const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer")
const result = document.querySelector("#result")
const steenBTN = document.querySelector("#steen")
const papierBTN = document.querySelector("#papier")
const schaarBTN = document.querySelector("#schaar")
let humanChoice = " ";
let computerChoice = "";
humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

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
    if ( randomNumber === 1 ) {
        computerChoice = 'steen';
    }

    if ( randomNumber === 2 ) {
        computerChoice = 'papier';
    }

    if ( randomNumber === 3 ) {
        computerChoice = 'schaar';
    }
    computerOutput.innerHTML = computerChoice;

    if (humanChoice === computerChoice){
        result.innerHTML = "It's a Tie!"
    }
    else if (wins[humanChoice] === computerChoice) {
        result.innerHTML = "You WIN!"
    }
    else { 
        result.innerHTML = "You LOSE! 😂🤡"
    }

}
// click events

steenBTN.addEventListener('click', rungame)
papierBTN.addEventListener('click', rungame)
schaarBTN.addEventListener('click', rungame)