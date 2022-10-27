var playerScore=0;
var computerScore=0;
var roundWinner ='';

document.getElementById('rock').addEventListener('click',()=>handleClick('ROCK'))
document.getElementById('paper').addEventListener('click',()=>handleClick('PAPER'))
document.getElementById('scissors').addEventListener('click',()=>handleClick('SCISSORS'))

function handleClick(playerSelection) {

    const computerSelection = getComputerChoice();

    playRound(playerSelection,computerSelection);
    if(roundWinner==='tie') {
        console.log(`It's a tie`)
    } else if (roundWinner==='player wins'){
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    } else {
        console.log(`You lose! ${playerSelection} can't beat ${computerSelection}`)
    }

    console.log(`SCORE(player v. computer) ${playerScore} : ${computerScore}`)
}

function getComputerChoice() {
    const RandomNumber = Math.floor(Math.random()*3)
    switch (RandomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        roundWinner = 'player wins';
        playerScore+=1
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'ROCK')
    ) {
        roundWinner = 'computer wins'
        computerScore+=1
    }
}