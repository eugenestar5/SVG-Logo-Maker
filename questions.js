// require colorKeywords array to check if input matches one of the accepted colors
const colorKeywords = require('./colorKeywords.js')

const questions = [
    // Shape
    {
        name: 'Shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Triangle', 'Circle', 'Square'],
    },

    // Color of Shape
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Please choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // Color Keyword and Validation
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // Validate hexadecimal with RegEx pattern
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },


    // Text, validation and ensuring user submits only 3 characters
    {
        name: 'text',
        message: 'What is the text? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Please try again, If text is three characters or less!!");
            }
            return true;
        }
    },

    // Color
    {
        name: 'textColorChoice',
        message: 'What is the color of the text? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    // Color Keyword
    {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal 
    {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;