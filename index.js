const fileName = "team.html";

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// create the html pages needed

const util = require('util');// a node utility

// const generateHTML = require("./lib/generateHTML.js");
//const generateHTML = require("./lib/generateHTML");
const generateHTML = require("./lib/generatefile.js");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

//const render = require("./src/page-template.js");

// save the html file based on the input gathered from the user
//const writeFileAsync = util.promisify(fs.writeFile);
const writeFileAsync = util.promisify(fs.writeFile);

// questions to be used for the team profile
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "nameManager",
      message: "Please enter your name for the Manager:\n",
    },
    {
      type: "input",
      name: "idManager",
      message: "Please enter current Manager id:\n",
    },
    {
      type: "input",
      name: "emailManager",
      message: "Please enter Manager eMail:\n",
    },
    {
      type: "input",
      name: "officeNoManager",
      message: "Please enter Manager officeNumber:\n",
    },
    {
      type: "input",
      name: "nameEngineer",
      message: "Please enter your name for the Engineer:\n",
    },
    {
      type: "input",
      name: "idEngineer",
      message: "Please enter current Engineer id:\n",
    },
    {
      type: "input",
      name: "emailEngineer",
      message: "Please enter Engineer eMail:\n",
    },
    {
      type: "input",
      name: "githubUser",
      message: "Please enter Engineer githubUser:\n",
    },
    {
      type: "input",
      name: "nameIntern",
      message: "Please enter your name for the Intern:\n",
    },
    {
      type: "input",
      name: "idIntern",
      message: "Please enter current Intern id:\n",
    },
    {
      type: "input",
      name: "emailIntern",
      message: "Please enter Intern eMail:\n",
    },
    {
      type: "input",
      name: "school",
      message: "Please enter Intern School:\n",
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
    const empManager = new Manager(answers.nameManager, answers.idManager,answers.emailManager, answers.officeNoManager);
    const empEngineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubUser);
    const empIntern = new Intern (answers.nameIntern, answers.idIntern, answers.emailIntern,answers.school);

    console.log("Manager Details:");
    console.log(empManager);
    console.log("Engineer Details:");
    console.log(empEngineer);
    console.log("Intern Details:");
    console.log(empIntern);
    //
    //

    //

    // const userInfo = answers.email;
    console.log("value of answers Input:");
   
    console.log(answers);
    //const html = generateHTML(answers);
    const html = generateHTML(answers);
    console.log("value of HTML file");
    console.log(html);

    //const _html="Test Message to save"

    await writeFileAsync(fileName,html);
    
    // fs.writeFile(fileName, "Hello Node.js", (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });

    console.log("Successfully saved to file");
  } catch (err) {
    console.log(err);
  }
};

init();
