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
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "install",
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
  }]


// function to write README file
function writeToFile(fileName, data) {
  //run generatemarkdown here
  //make the file
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(function (response) {
      console.log(response);
      const text = generateMarkdown(response);
      console.log(text);

      fs.writeFileSync("README.md", text);
    })
    .catch(function (err) {
      console.log(err);
    });
}

async function init() {
  try {
    let response = await inquirer.prompt(questions);

    console.log(response);
    const text = generateMarkdown(response);
    console.log(text);

    fs.writeFileSync("README.md", text);
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
