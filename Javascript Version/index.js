//stores value of score needed to break while loop
const winningScore = 3;

//storing values safe to use in computerPlay()
const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";   
//variables to store current scores of each player, both start with 0
let playerScore = 0;
let computerScore = 0;
//declaring result variable as to not do it in the while loop
let playerSelection;
let computerSelection;
let result;
//constants to store important DOM elements
const playerScoreElement = document.querySelector('#currentPlayerScore');
const computerScoreElement = document.querySelector('currentComputerScore');
const roundWinnerElement = document.querySelector('#roundWinner');
const playerSelectionElement = document.querySelection('#playerSelection');
const computerSelectionElement = document.querySelection('#compterSelection');
const winnerElement = document.querySelection('#winner');

/*Function to return a whole integer between args min and max
    Used to choose computer's choice
*/
let randomInt = (min, max) => {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Function to return random computer choice
    Runs randomInt to get a value between 1 and 3 that is then associated with a choice
*/
let computerPlay = () => {
    let int = randomInt(1,3);

    switch(true){
        case int == 1:
            return rock;
        case int == 2:
            return paper;
        case int == 3:
            return scissors;
    }
};

/*Function to convert playerchoice to all caps and check if it is a valid choice*/
let parsePlayerChoice = (playerChoice) => {
    playerChoice = playerChoice.toUpperCase();

    if(playerChoice != rock && playerChoice != paper && playerChoice != scissors){
        console.log("Please enter in a choice of ROCK, PAPER, or SCISSORS");
        return null;
    }
    else{
        return playerChoice;
    }

};

/*Compares playerSelection and computerSelection  to evaluate results. 
    Sends back a string with the result and increases winner score.
*/
let game = (playerSelection, computerSelection) => {
    if(playerSelection === computerSelection){
        return `It's a tie!`;
    } else{
        //
        switch(true){
            case playerSelection === rock:
                if(computerSelection === paper){
                    computerScore++;
                    return `Computer Wins!`;
                } else{
                    //computer selection is scissors
                    playerScore++;
                    return `Player Wins!`;
                }
                break;
            case playerSelection === paper:
                if(computerSelection === rock){
                        playerScore++;
                        return `Player Wins!`;
                    } else{
                        //computer selection is scissors
                        computerScore++;
                        return `Computer Wins!`;
                    }
                    break;
            case playerSelection === scissors:
                if(computerSelection === paper){
                        playerScore++;
                        return `Player Wins!`;
                    } else{
                        //computer selection is rock
                        computerScore++;
                        return `Computer Wins!`;
                    }
                    break;
        }
    }
};

let updateValues = (playerSelection, computerSelection, finalWinner) => {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    roundWinnerElement.textContent = result;
    playerSelectionElement.textContent = playerSelection;
    computerScoreElement.textContent = computerSelection;
    if(finalWinner){
        winnerElement.textContent = finalWinner;
    }
};

/*Loop that runs while player or computer score is less than winningScore
*/
while(playerScore < winningScore && computerScore < winningScore){
    playerSelection = "ROCK";//parsePlayerChoice(prompt("What is your choice?"));
    computerSelection = computerPlay();

    result = game(playerSelection, computerSelection);

    if(result){
        console.log(`${result} 
        Your Score: ${playerScore} | Computer Score: ${computerScore}`);
   } 
    
}

if(playerScore > computerScore){
    console.log("You won the match!");
}else{
    console.log("The computer won the match!");
}