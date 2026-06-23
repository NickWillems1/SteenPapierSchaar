const humanOutput = document.querySelector("#human");
const computerKeuze = document.querySelector("#computer");
const uitkomst = document.querySelector("#result")
const steenBTN = document.querySelector("#steen")
const papierBTN = document.querySelector("#papier")
const schaarBTN = document.querySelector("#schaar")

let humanChoice = " ";

humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";


// button click event
 
steenBTN.addEventListener('click', function(event) { 
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice
})
papierBTN.addEventListener('click', function(event) { 
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice
})
schaarBTN.addEventListener('click', function(event) { 
    humanChoice = event.target.id;
    humanOutput.innerHTML = humanChoice
})