// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { resolve } = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your Github username",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter the name of your project",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description for your project",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please enter the installation instructions for your project, if there are none please enter NONE",
    name: "installation",
    default: "npm i",
  },
  {
    type: "input",
    message: "How should this application be used",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed on this project?",
    name: "contribution",
  },
  {
    type: "checkbox",
    message: "Please select a license",
    choices: ["MIT", "ISC", "GNU GPLv3", "Mozilla"],
    name: "license",
  },
  {
    type: "input",
    message: "Please enter the the test instructions ",
    name: "test",
    default: "npm run test",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success");
      }
    });
  });
}

// Function call to initialize app
init();
