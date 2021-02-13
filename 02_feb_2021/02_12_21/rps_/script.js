// Initialize scores.
var userScore = 0
var computerScore = 0

// Initialize game loop.
gameLoop();

function gameLoop(){
    // Iterates the function until you or the computer's score hit 5.
    while (userScore < 5 || computerScore < 5){
        
        // Initialize user RPS choice
        var userChoice = prompt("Rock, Paper or Scissors?");
        
        // If user clicks cancel in the prompt, exit out of game.
        if (userChoice === null){
            alert("Thanks for playing!");
            break;
        }
        
        // Computer randomly generates a choice from 0 to 2, which translates to Rock, Paper or Scissors.
        var computerChoice = Math.floor(Math.random() * 3); 
            if (computerChoice === 0) {
                computerChoice = "Rock";
            } else if (computerChoice === 1) {
                computerChoice = "Paper";
            } else {
                computerChoice = "Scissors";
            }
        
        // RPS Logic Function
        var compare = function(choice1, choice2){
            if(choice1 === choice2){
                alert("It's a tie! No points are awarded." + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
            } else if(choice1 === "Rock"){
                if(choice2 ==="Scissors"){
                    userScore++;
                    alert("Rock beats Scissors, you win this round!" + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
                } else if(choice2 === "Paper"){
                    computerScore++;
                    alert("Rock loses to Paper, you lose this round!" + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
                }
            } else if(choice1 === "Paper"){
                if(choice2 === "Rock"){
                    userScore++;
                    alert("Paper beats Rock, you win this round!" + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
                } else if(choice2 === "Scissors"){
                    computerScore++;
                    alert("Paper loses to Scissors, you lose this round!"  + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
                }   
            } else if(choice1 === "Scissors"){
                if (choice2 === "Paper"){
                    userScore++;
                    alert("Scissors beats Paper, you win this round!" + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
                } else if(choice2 === "Rock"){
                    computerScore++;
                    alert("Scissors loses to Rock, you lose this round!" + "\n" + "(You) " + userScore + " : " + computerScore + " (CPU)");
                }
            // Failsafe in case the user doesn't input Rock, Paper or Scissors.
            } else {
                alert("Try typing exactly Rock, Paper or Scissors in the prompt!");
            }
        }
        // Initialize RPS Locic Function
        compare(userChoice,computerChoice);

        // Game end functionality
        if (userScore === 5 || computerScore === 5){
            alert("Game Over!");
            // Play again functionality
            var playAgain = confirm("Play again?");
            if (playAgain === true){
                userScore = 0;
                computerScore = 0;
                gameLoop(); // This loops back to the game loop function.
                break; // This was added so we don't have the userChoice prompt pop up again.
            } else {
                alert("Thanks for playing!");
                break;
            }
        }
    }
}