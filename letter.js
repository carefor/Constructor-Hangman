const game = require("./game.js");
const prompts = require("./prompts.js");
const Word = require('./word.js');

let Letter = (charac) => {
    this.charac = charac;
    this.allLettArr = [];

    this.noRepeat = () => {
        if (this.allLettArr.includes(this.charac)) {
            console.log(`You've already pulled that trick. Draw again.`);
            game.requestGuess();
        } else {
            this.allLettArr.push(this.charac);
            console.log(`You aimed for: ` + this.charac);
            return this.charac;
        }
    }
}

module.exports = Letter;






// function LetterConstr(letter) {

//     this.letter = letter;
//     this.letterMatch = false;

//     this.compareLetter = () => {
//         if (this.letterMatch === true) {
//             return this.letter;
//         } else if (this.letterMatch === false) {
//             return " _ ";
//         } else if (this.letter == " ") {
//             this.letterMatch = true;
//             return " ";
//         }
//     };
// };

// module.exports = LetterConstr;