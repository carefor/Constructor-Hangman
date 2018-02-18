const inquirer = require("inquirer");
const prompts = require("./prompts.js");
const wordList = require("./wordList.js");
const Word = require("./word.js");
const Letter = require("./letter.js");


var guessesLeft = 13;
var chosenWord;

console.log(`\nI've been expecting you.\nA historical game of Hangman is ready to commence.\n`);

inquirer.prompt(prompts.startGame).then(answer => {
    if (answer.startPrompt == true) {
        console.log(`Challenge accepted, very good..`);
        game.prepareGame();
        game.requestGuess();
    } else {
        console.log(`Be a man!`);
        process.exit();
    }
});

let game = {
    prepareGame: () => {
        this.guessesLeft = 13;
        console.log(`You have 13 chances to hit your target\n..or else.`);
        this.chosenWord = this.wordList[Math.floor(Math.random() * wordList.length)];
    },

    requestGuess: () => {
        inquirer.prompt(prompts.guessLetter).then(answer => {
            let charac = answer.guessPrompt.slice(0, 1).toUpperCase();
        });
    },

    gameWon: () => {
        if (this.wordComplete == true) {
            console.log(`VICTORY IS YOURS!`);
            game.keepPlaying();
        } else {
            return;
        }
    },

    gameLost: () => {
        if (this.guessesLeft === 0) {
            console.log(`History has spoken, and it doesn't end well for you.\nYOU'VE BEEN HIT`);
            game.keepPlaying();
        } else {
            return;
        }
    },

    keepPlaying: () => {
        inquirer.prompt(prompts.playAgain).then(answer => {
            if (answer.restartPrompt == true) {
                console.log(`It's time to defend your honor!`);
                game.prepareGame();
            } else {
                console.log(`Be a man!`);
                process.exit();
            }
        });
    }
}


module.exports = game;






// const inquirer = require("inquirer");
// const prompts = require("./prompts.js");
// const WordConstr = require('./word.js');


// console.log(`We've been expecting you.`
//     `A historical game of Hangman is ready to commence.`);
// inquirer.prompt(prompts.startGame).then((userInput) => {
//     userInput = userInput.start.slice(0, 1).toUpperCase();
//     switch (userInput) {
//         case true:
//             // let newGame = new GameConstructor();
//             // newGame.newGame();
//             break;
//         case false:
//             console.log("Be a man!")
//             // process.exit();
//             break;
//     };
// });


// const GameConstr = require('./constructors/gameConstructor.js');
// const readline = require('readline');
// const hangmanFigure = require('../assets/hangmanDrawings.js');


// function gameConstr() {

//     this.guessesLeft = 13;
//     this.wins = 0;
//     this.losses = 0;

//     this.newGame = () => {
//         if (this.guessesLeft == 13) {
//             this.lettersGuessed = []; // Creates an Empty Array to store the letters Guessed So Far
//             console.log("\n ********* \n You have 13 paces left until draw.. \n ********* \n");
//             this.generateRandomWordObject(); // Creates a New Word Object
//         } else { // If New Game starts without guessRemaining == 10
//             this.guessRemaining = 10;
//             this.newGame();
//         }
//     };

//     module.exports = GameConstructor;