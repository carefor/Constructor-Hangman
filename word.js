const wordList = require("./wordList.js");
const game = require("./game.js");
var Letter = require('./letter.js');


Word = (chosenWord) => {
    this.chosenWord.toUpperCase = chosenWord;
    this.chosenWordArr = [...chosenWord];
    this.dashedWordArr = [];
    this.wrongLettArr = [];
    this.wordComplete = false;

    this.renderDashes = () => {
        for (var i = 0; i < this.chosenWordArr.length; i++) {
            if (this.chosenWordArr[i] === " ") {
                this.dashedWordArr[i].push(" ");
            } else {
                this.dashedWordArr[i].push("_");
            }
        }
    }

    this.renderLetter = () => {
        for (var i = 0; i < this.chosenWordArr.length; i++) {
            this.dashedWordArr[i].push(new Letter);
            console.log(`You have ` + this.guessesLeft-- + `chances left`);
            console.log(`Failed shots fired: ` + wrongLettArr);
            console.log(`Your target is ` + dashedWordArr);
        }
    }

    this.wrongLetter = () => {
        this.wrongLettArr.push(new Letter);
        console.log(`Failed shots fired: ` + wrongLettArr);
        console.log(`You have ` + this.guessesLeft-- + `paces left`);
        console.log(dashedWordArr);
    }

    this.wordSolved = () => {
        if (dashedWordArr === chosenWordArr) {
            this.wordComplete = true;
        } else {
            this.wordComplete = false;
        }
    }
}

module.exports = Word;






// const chosenWord = require("./wordList.js");
// const LetterConstr = require("./letter.js");


// function WordConstr(chosenWord) {

//     this.chosenWord = chosenWord;
//     this.chosenWordArr = chosenWord.split("");
//     this.matchLetterArr = [];
//     this.wordComplete = false;

//     this.fillMatchLetterArr = () => {
//         this.chosenWordArr.forEach((guessedLetter) => {
//             this.matchLetterArr.push(new LetterConstr(guessedLetter));
//         })
//     };

//     this.matchGuess = (letter) => {
//         this.matchLetterArr.forEach((guessedLetter) => {
//             if (guessedLetter.letter.indexOf(letter) > -1) {
//                 guessedLetter.letterMatch = true;
//             }
//         })
//     };

//     this.displayWord = () => {
//         let wordInProgress = "";
//         this.matchLetterArr.forEach((guessedLetter) => wordInProgress += guessedLetter.compareLetter());
//         console.log(wordInProgress + "\n");
//     };

//     this.gameWon = () => {
//         if (this.matchLetterArr.every((guessedLetter) =>
//                 guessedLetter.letterMatch === true
//             )) {
//             this.wordComplete = true;
//         }
//     };

// };

// module.exports = WordConstr;