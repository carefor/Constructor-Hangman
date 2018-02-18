let prompts = {

    startGame: [{
        type: "confirm",
        name: "startPrompt",
        message: "Do you accept this challenge?",
    }],

    guessLetter: [{
        type: "input",
        name: "guessPrompt",
        message: "Guesseth a letter",
        validate: (value) => {
            let letterValue = value.slice(0, 1).toUpperCase();
            return (/^[a-zA-Z]+$/).test(letterValue) ? true : "You have terrible aim! A valid letter is henceforth required."
        }
    }],

    playAgain: [{
        type: "confirm",
        name: "restartPrompt",
        message: "Dare to challenge me again?",
    }]
};

module.exports = prompts;






// let prompts = {

//     startGame: [{
//         type: "confirm",
//         name: "startQues",
//         message: "Do you accept this challenge?",
//         validate: (userInput) => {
//             userInput = userInput.slice(0, 1).toLowerCase();
//             return (userInput === "y" || userInput === "n") ? true : "You have terrible aim! Choose only 'y' or 'n'."
//         }
//     }],

//     guessLetter: [{
//         type: "input",
//         name: "guessQues",
//         message: "Guesseth thine letter",
//         validate: (userInput) => userInput.match(/^[a-zA-Z]+$/) ? true : "A valid letter is henceforth required."
//     }]

//      playAgain: [{
//          type: "input",
//          name: "playAgain",
//          message: "Do you want to play again?",
//          validate: (userInput) => {
//              value = value.slice(0, 1).toLowerCase();
//              return (value === "y" || value === "n") ? true : "Please input either yes or no only!"
//          },
//          default: "yes"
//      }]

// };

// module.exports = prompts;