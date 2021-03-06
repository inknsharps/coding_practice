// Declare initial score and time variables
var wins = 0;
var losses = 0;
var timeRemaining;

// Word guessing generation
// Declare wordlist (array), selected word (array), blank version of selected word (string), the letters of the selected word (array)
var wordList = ["banana", "apple", "pear"];
var wordSelected;
var wordSelectedAnswer;
var wordToMatch;

// Query Selectors
// Selects the wins span element
var winsEl = document.querySelector(".wins");
// Selects the losses span element
var lossesEl = document.querySelector(".losses");
// Selects the word field element for displaying answer
var wordFieldEl = document.querySelector(".word-field");
// Selects the guessed letters element for displaying guessed letters
var guessedLettersEl = document.querySelector(".guessed-letters");
// Selects the timer element for displaying timer
var gameTimerEl = document.querySelector(".timer");
// Selects the start button element
var startButton = document.querySelector("#game-start");

// Guessing logic
// Declare letter to be guessed, and guessed letters array
var letter;
var guessedLetters = [];
// When a key is pressed, convert key to uppercase, add the key pressed to the guessedLetters array, add key to elements on the page, run checkLetters function
document.onkeypress = function(event) {
    letter = event.key.toUpperCase();
    guessedLetters.push(letter);
    guessedLettersEl.textContent = guessedLetters.join("").split(" "); // This removes the commas in guessedLettersEl because guessedLetters is currently an array
    checkLetters(letter);
    checkAnswer();
}

// Function to check guessed typed in letters, and add them to the word field if they match
function checkLetters(a){
    // For loop to iterate through the wordToMatch array (remember that this is currently an array of letters), and if the letter put through the function matches, splice them into  wordSelectedAnswer (which has the blanks)
    for (var i = 0; i < wordToMatch.length; i++){
        if (a === wordToMatch[i]){
            wordSelectedAnswer.splice(i, 1, a);
        }
        // When the letters are guessed and match, add them to the wordSelectedAnswer array
        wordFieldEl.textContent = wordSelectedAnswer.join("");
    }
}

// Function for checking the inputted answer
function checkAnswer(){
    // If the timer is still running
    if (timeRemaining !== 0){
        // AND if the joined string value of wordSelectedAnswer = wordSelected, increment wins, set time to 0
        if (wordSelectedAnswer.join("") === wordSelected){
            wins++;
            timeRemaining = 0;
        }
    }
}

// Build section for the word to guess 
function buildWordGuess(){
    // Get a random word from the wordList array and turn it into uppercase
    wordSelected = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    console.log("The selected word is:", wordSelected);
    // Converts wordSelected (which is currently an array w/ 1 index), into a string first, so a split method can be applied, and the individual letters of that word are put into an array
    wordToMatch = wordSelected.toString().split("");
    // Build the empty field for the word using " _ "
    wordSelectedAnswer = [];
    for (var i = 0; i < wordSelected.length; i++){
        wordSelectedAnswer.push(" _ ");
    }
    wordFieldEl.textContent = wordSelectedAnswer.join("");
}

// Game Initialization functions
function gameInit(){
    // Reset the guessedletters array
    guessedLetters = [];
    guessedLettersEl.textContent = guessedLetters;
    // Timer functionality
    timeRemaining = 10;
    var timeInterval = setInterval(() => {
        if (timeRemaining !== 0){
        gameTimerEl.textContent = timeRemaining;
        timeRemaining--;
        } else {
        clearInterval(timeInterval);
        gameTimerEl.textContent = "Time's up!";
        // In the case where the timer is 0 AND the user did not guess the word
        if (wordSelectedAnswer.join("") !== wordSelected){
            losses++;
        }
        // Set up wins and losses
        winsEl.textContent = wins;
        lossesEl.textContent = losses;
        }
    }, 1000);   
}

// Event listener for button, which runs gameInit function
// Start the game, and buildWordGuess with a button functionality
startButton.addEventListener("click", gameInit);
startButton.addEventListener("click", buildWordGuess);