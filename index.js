
var game = require("./game.js");

var wordConstruct = require("./word.js");
//Ties to word.js file
var letterConstruct = require("./letter.js");
//able to read user input in the console
var inquirer = require("inquirer");
//ties to games.js file
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;


var myWord = new wordConstruct.wordConstruct(game.randomWord);
var maxGuesses = 12;
function takeAGuess(){
    console.log('Star Wars - Characters and Places');
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses){
        console.log('Oh no. You lost. Hit the Up Arrow, then enter to play again');
    return;
    }

    //provides the user interface and the inquiry session flow
    //enter a letter to play
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Enter a letter:',
        validate: function(str){

//Regular Expressions(regExp). The letters A-Z, upper and lower case, plus whitespace
            var regEx = new RegExp("[a-zA-Z\s]");
            return regEx.test(str);
                }
        }]).then(function(letterInput){
                var letter = letterInput.letter; 
                //checks
                myWord.findLetter(letter);
                    //winner
                    if(myWord.isComplete()){ 
                    console.log('Nice Work! It was ' + myWord.toString() + '. Hit the Up Arrow to play again ');
                    return;
                    }
                console.log('-------------------\n');
                console.log((maxGuesses - myWord.guessesMade.length) + ' Guesses remain. You can do it!');
                console.log('-------------------\n');
                takeAGuess();
                }
  );
}
takeAGuess();