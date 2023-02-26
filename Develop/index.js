// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project:',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a brief description of your project!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instruction for your project:',
        validate: (installInput) => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide installation instructions for your project!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a brief description of your project:',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log('Please provide a brief description of your project!');
                return false;
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
