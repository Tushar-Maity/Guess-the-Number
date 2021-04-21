

guesses = [];

let correctNumber = getRandomNumber();


window.onload = function() {
    document.getElementById("number_submit").addEventListener("click", playGame);
    document.getElementById("restart_game").addEventListener("click", initGame);
}

// Functionality to restart the game
function initGame() {
    //Reset the correctNumber
    //Reset the result display
    //Reset the guesses array
    //Reset the guess history display
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    displayHistory();
}
// Functionality to play the whole game

function playGame() {
    let numberGuess = document.getElementById("number_guess").value;
    displayResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayHistory();
}

function displayResult(numberGuess) {
    if(numberGuess > correctNumber){
        showNumberAbove();
    } 
    else if(numberGuess < correctNumber){
        showNumberBelow();
    } 
    else {
        showYouWon();
    }
}

function getRandomNumber(){
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    console.log(wholeNumber)
    return wholeNumber;
}

function getDialog(dialogType, text){
    switch(dialogType){
        case "warning":
            dialog = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}


function showYouWon() {
    const text = "Awesome job! You got it";
    let dialog = getDialog("won", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high";
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low";
    let dialog = getDialog("warning", text);
    document.getElementById("result").innerHTML = dialog;
}

function saveGuessHistory(guess){
    guesses.push(guess);
    console.log(guesses);
}

function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>";

    while(index >= 0){
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
        index -= 1;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
}