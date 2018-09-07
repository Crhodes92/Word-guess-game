
//Variables



var userGuess = "";
var letterGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterBank=["a", "b","c","d","e","f","g","h","i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
var letterIndex = Math.floor(Math.random()*letterBank.length);
var compGuess = letterBank[letterIndex];      


//Records user key input//




document.onkeyup = function (event) {
    userGuess = event.key; {

        
        //converts user input into letter guesses displayed on screen
       


        // if else statement for if userguess is the same as compguess//
        if (userGuess === compGuess) {
            document.getElementById("success").style.display = "block";
            wins++;
            this.getElementById("winNumber").innerHTML = wins.toString();
            this.getElementById("letterGuesses").innerHTML = "";
            letterGuesses=[];
            guessesLeft = 10;
            compGuess = letterBank[Math.floor(Math.random()*letterBank.length)];
            
        }

        if (userguess != letterBank) {
            alert (userGuess + " is not a letter!");
        }

        else {
            guessesLeft--;
            document.getElementById("success").style.display = "none";
            this.getElementById("guessesLeft").innerHTML = guessesLeft.toString();
            letterGuesses = letterGuesses+ [userGuess];
            this.getElementById("letterGuesses").innerHTML=letterGuesses.toString();

            if (guessesLeft === 0) {
                losses ++;
                this.getElementById("lossNumber").innerHTML=losses.toString();
                letterGuesses=[];
                guessesLeft = 10;
                this.compGuess = letterBank[letterIndex];
            }


        }
    }

}



