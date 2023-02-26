// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username:',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        },
    },
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
        message: 'Please write a brief description of your project:',
        validate: (descInput) => {
            if (descInput) {
                return true;
            } else {
                console.log('Please write a brief description of your project!');
                return false;
            }
        },
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
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
        message: 'Please provide usage information for your project:',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please provide usage information for your project!');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log('What command should be run to run tests?');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know anout contributing to the repo?',
        validate: (contribInput) => {
            if (contribInput) {
                return true;
            } else {
                console.log('What does the user need to know anout contributing to the repo?');
                return false;
            }
        },
    },
];

//Creating a function to generate a README file
function generateREADME(answers) {
    return `
    # ${answers.title}
  
    ![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)
    
    ## Description
    
    ${answers.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    To install the necessary dependencies, run the following command:
    
    \`\`\`
    ${answers.installation}
    \`\`\`
    
    ## Usage
    
    ${answers.usage}
    
    ## License
    
    This project is licensed under the ${answers.license} license.
    
    ## Contributing
    
    ${answers.contributing}
    
    ## Tests
    
    To run tests, run the following command:
    
    \`\`\`
    ${answers.tests}
    \`\`\`
    
    ## Questions
    
    If you have any questions about the repository, open an issue or contact me directly at ${answers.email}. You can find more of my work at [${answers.github}](https://github.com/${answers.github}/).
    `;
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, (err) =>
    err ? console.error(err): console.log('README file created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .createPromptModule(questions)
    .then((answers) => {
        const readme = generateREADME(answers);
        writeToFile('./dist/README.md', readme);
    })
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();
