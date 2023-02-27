
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
var returedData = {};


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



function writeToFile(fileName, data) {
    
  fs.writeFile(fileName, generateMarkdown(data),(err,res)=>{
    if(err){
        console.log('error',err)
    }
  });
}


function init() {
    inquirer.prompt(questions).then((dataHere)=>writeToFile('README.md',dataHere))
}

init();

