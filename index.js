// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
var returedData = {};

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is title of Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Project Description?",
    name: "description",
  },
  {
    type: "input",
    message: "Any Installation?",
    name: "Installation",
  },
  {
    type: "input",
    message: "Usage?",
    name: "Usage",
  },
  {
    type: "input",
    message: "Table of Contents for project",
    name: "Contents",
  },
  {
    type: "input",
    message: "who Contributed to this project",
    name: "Contributed",
  },
 
  {
    type: "input",
    message: "Any kind test for this project",
    name: "test",
  },
  {
    type: "input",
    message: "your Github profile?",
    name: "github",
  },
  {
    type: "input",
    message: "what is your email",
    name: "email",
  },
  {
    type: "input",
    message: "License used?",
    name: "License",
    type: "list",
    choices:["IBM Public License Version 1.0","MIT","Mozilla Public License 2.0","Open Database License","The Unlicense", "zLib License","ISC","SIL","N/A"],
  },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, generateMarkdown(data),(err,res)=>{
    if(err){
        console.log('error',err)
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((dataHere)=>writeToFile('README.md',dataHere))
}
//writeToFile('README.md',data)).then(() => console.log('Successfully wrote to redme.md')
// Function call to initialize app
init();

