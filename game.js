var wordsToGuess = ['Han Solo', 'Ewoks', 'Darth Vadar', 'Tie Fighter', 'Death Star', 'Luke Skywalker', 'Yoda', 'Light Saber', 'Lando',
 'Chewbacca', 'Hoth', 'The Force', 'Greedo', 'Cantina','Boba Fett']
//generate randoms words from 'words to guess' 
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
//
exports.randomWord = randomWord;