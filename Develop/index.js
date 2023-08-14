// TODO: Include packages needed for this application
const inquirer = require("inquierer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the project called?",
},
{
    type: "input",
    name: "description",
    message: "Can you briefly describe the project?",
},
{
    type: "input",
    name: "installation",
    message: "What is the installation process for this project?",
},
{
    type: "input",
    name: "usage",
    message: "How is the project used?",
},
{
    type: "checkbox",
    name: "license",
    message: "What license was used for the project?",
    choices: ["GNU","MPL 2.0", "MIT", "None"],
},
{
    type: "input",
    name: "contributions",
    message: "Who else contributed to this project?",
},
{
    type: "input",
    name: "tests",
    message: "How can one test the project?",
},
{
    type: "input",
    name: "github",
    message: "Please enter the link to the github repository",
},
{
    type: "input",
    name: "email",
    message: "Please enter your email."
},

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            return console.log(err);
        }
        console.log("Success!");
    });
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const markdownText= generateMarkdown(answers);
        writeToFile("README.md", markdownText);
    });
}

// Function call to initialize app
init();
