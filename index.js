// TODO: Include packages needed for this application
const inquirer = require('inquirer')


// TODO: Create an array of questions for user input
// original code: const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project, explaining the what, hwy, and how of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Type the directions for installing your project',
        },
        {
            type: 'input',
            name: 'uage',
            message: 'Type the instructions for using your application',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators on this project as well as their GitHub profile',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Include your license information or put None.',
        },
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
