const fileName = "team.html";
// const Manager = require("../lib/Manager.js");
const Manager = require("./lib/Manager");
// const Engineer = require("/lib/Engineer.js");
const Engineer = require("./lib/Engineer");

// const Intern = require("/lib/Intern.js");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// create the html pages needed
//const util = require("./lib");
const util = require("./lib");

// const generateHTML = require("./lib/generateHTML.js");
const generateHTML = require("./lib/generateHTML");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./src/page-template.js");

// save the html file based on the input gathered from the user
const writeFileAsync = util.promisify(fs.writeFile);

// questions to be used for the team profile
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name for the Team Member:\n",
    },
    {
      type: "input",
      name: "id",
      message: "Please enter current Team Member id:\n",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter Team Member eMail:\n",
    },
  ]);
};

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Using async/await and try/catch
const init = async () => {
  console.log("initialising...");
  try {
    const answers = await questions();
    console.log("Generating your HTML next...");
    const userInfo = answers.email;
    console.log("value of userInfo=");
    console.log(userInfo);
    const html = generateHTML(answers, userInfo);
    //console.log("value of markdown");
    //console.log(html);

    await writeFileAsync(fileName, html);

    console.log("Successfully saved to file");
  } catch (err) {
    console.log(err);
  }
};

init();
