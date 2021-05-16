// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput =>{
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter the name of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are your instructions for installation?',
            validate: installationInput =>{
                if (installationInput) {
                    return true;
                } else {
                    console.log('please enter your instructions for installation');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What are your instructions for usage?',
            validate: usageInput =>{
                if (usageInput) {
                    return true;
                } else {
                    console.log('please enter your instructions for usage');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'What are your contributors?',
            validate: creditsInput =>{
                if (creditsInput) {
                    return true;
                } else {
                    console.log('please enter your contributors');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'licenses',
            message: 'What are your licenses?',
            validate: licenseInput =>{
                if (licenseInput) {
                    return true;
                } else {
                    console.log('please enter your licenses');
                    return false;
                }
            }
        },
        
        
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();