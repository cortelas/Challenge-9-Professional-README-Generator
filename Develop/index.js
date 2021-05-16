// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: nameInput =>{
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please give a description of your project?',
            validate: descriptionInput =>{
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project');
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
                    console.log('Please enter your instructions for installation');
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
                    console.log('Please enter your instructions for usage');
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
                    console.log('Please enter your licenses');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can someone contribute to your project?',
            validate: contributeInput =>{
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter how to contribute to your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide example tests',
            validate: testInput =>{
                if (testInput) {
                    return true;
                } else {
                    console.log('Please provide example tests');
                    return false;
                }
            }
        },  
        {
            type: 'input',
            name: 'questions',
            message: 'How can someone ask you questions?',
            validate: contributeInput =>{
                if (contributeInput) {
                    return true;
                } else {
                    console.log('How can someone ask you questions?');
                    return false;
                }
            }
        },       
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("README file generated")
    });
}


// TODO: Create a function to initialize app
async function init() {
    const responses = await inquirer.prompt(questions);
    console.log("questions asked");
    const markdown = await generateMarkdown(responses);
    await writeToFile(responses.name + ".md", markdown);
}

// Function call to initialize app
init();