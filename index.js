const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./questions');
const fileName = "./examples/logo.svg";
const shapeSetting = require('./shapeSetting')

// Creating a new svg file that uses inquirer response and file system
function createLogo(response) {
    //console.log(response)
    const svg = shapeSetting(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

// initializing and questions that creates the Logo through responses and it also catchs any errors
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();