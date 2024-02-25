// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Creates function to generate the README content.
const generateReadmeContent = (answers) => {
    return `# ${answers.name}
![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg)

## Description
${answers.description}

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License

This project is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).
GitHub: [${answers.github}](https://github.com/${answers.github})`;  
}

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
            name: 'usage',
            message: 'Type the instructions for using your application',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application.',
            choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Type directions for users should they wish to contribute.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Type directions for running tests.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.'
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then((answers) => writeToFile('README.md', generateReadmeContent(answers)))
        .catch((error) => console.log(error));
}

// Function call to initialize app
init();
