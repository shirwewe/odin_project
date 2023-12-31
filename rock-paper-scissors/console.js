// This is the main game console for the game rock, papaer, scissors.
// The user will be playing against a bot who will return either Rock, Paper, or Scissors at random


// This function will randomly return either rock paper or scissors
function getComputerChoice(){
    const list_of_moves = ["rock", "paper", "scissors"];
    const random_move = Math.floor(Math.random() * list_of_moves.length);
    return list_of_moves[random_move];
}

function playRound(playerSelection, computerSelection){
    const lowerplayerSelection = playerSelection.toLowerCase();
    let message;
    switch(lowerplayerSelection){
        case "rock":
            if (computerSelection == "rock"){
                message = "It's a tie!";
            }
            else if (computerSelection == "paper"){
                message = "You Lose! Paper beats Rock!";
            }
            else if (computerSelection == "scissors"){
                message = "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if (computerSelection == "rock"){
                message = "You Win! Paper beats Rock!";

            }
            else if (computerSelection == "paper"){
                message = "It's a tie!";

            }
            else if (computerSelection == "scissors"){
                message = "You Lose! Scissors beats Paper!";
            }
            break; 
        case "scissors":
            if (computerSelection == "rock"){
                message = "You Lose! Rock beats Scissors!";
            }
            else if (computerSelection == "paper"){
                message = "You win! Scissors beats Paper!";
            }
            else if (computerSelection == "scissors"){
                message = "It's a tie";
            }
            break;
        default:
            message = "Wrong input, please try again";
        
    }
    return message;

}

function game(){
    for (let i = 5; i > 0; i--){
        const playerSelection = prompt("Please input one of: 'Rock', 'Paper', 'Scissors'");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()