const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "Apache", "GPL", "BSD"]
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
    default: "npm install",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
    default: "npm install",
  }]

function init() {
  inquirer
    .prompt(questions)
    .then(function (response) {
      const text = generateMarkdown(response);
      fs.writeFileSync("README2.md", text);
    })
    .catch(function (err) {
    });
}

init();
