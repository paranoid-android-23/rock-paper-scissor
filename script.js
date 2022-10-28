var playerScore=0;
var computerScore=0;
var roundWinner ='';
var isGameOver = false;

document.getElementById('rock').addEventListener('click',()=>handleClick('ROCK'))
document.getElementById('paper').addEventListener('click',()=>handleClick('PAPER'))
document.getElementById('scissors').addEventListener('click',()=>handleClick('SCISSORS'))

function handleClick(playerSelection) {

    if (isGameOver) {
        restartGame()
    } else {
        document.getElementById('choice').textContent = `Player's choice of weapon is ${playerSelection}!`;
    
        const computerSelection = getComputerChoice();
    
        playRound(playerSelection,computerSelection);

        if(roundWinner==='tie') {
            document.getElementById('resultInfo').textContent = 'It\'s a tie!';
            console.log(`It's a tie`);
        } else if (roundWinner==='player wins'){
            document.getElementById('resultInfo').textContent = `You win! ${playerSelection} beats ${computerSelection}`
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        } else {
            document.getElementById('resultInfo').textContent = `You lose! ${playerSelection} can't beat ${computerSelection}`
            console.log(`You lose! ${playerSelection} can't beat ${computerSelection}`)
        }
        updateScore();
    
        if ( playerScore === 5 ) {
            isGameOver = true;
            document.getElementById('resultInfo').textContent = "GAME OVER! PLAYER 1 wins"
            console.log("GAME OVER! PLAYER 1 wins!")

        } else if ( computerScore === 5 ) {
            isGameOver = true;
            document.getElementById('resultInfo').textContent = "GAME OVER! COMPUTER wins"
            console.log("GAME OVER! COMPUTER wins!")
        }
        
        console.log(`SCORE(player v. computer) ${playerScore} : ${computerScore}`);
    };
}

function updateScore() {
    document.getElementById('playerScore').textContent = playerScore
    document.getElementById('computerScore').textContent = computerScore
}

function restartGame() {
    isGameOver = false;
    playerScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('resultInfo').textContent = 'Let\'s roll!'
    document.getElementById('choice').textContent = 'Choose your weapon'
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