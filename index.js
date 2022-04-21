// require inquirer
const inquirer = require("inquirer");
//require filesystem (fs) so we can read, write, append files
const fs = require("fs");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Github URL?",
    name: "githubUrl",
  },
  {
    type: "input",
    message: "What is your preferred email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What was your motivation to complete this project?",
    name: "motivation",
  },
  {
    type: "input",
    message: "What problem does your application solve?",
    name: "problemSolve",
  },
  {
    type: "input",
    message: "What lessons did you learn while working on this application?",
    name: "lessonsLearned",
  },
  {
    type: "rawlist",
    message: "How many steps do you need to install your application?",
    name: "numberOfSteps",
    choices: [1, 2, 3, 4, 5],
  },
  {
    type: "input",
    message: "What is step #1 to install your application?",
    name: "stepOne",
    when: (response) => response.numberOfSteps >= 1,
  },
  {
    type: "input",
    message: "What is step #2 to install your application?",
    name: "stepTwo",
    when: (response) => response.numberOfSteps >= 2,
  },
  {
    type: "input",
    message: "What is step #3 to install your application?",
    name: "stepThree",
    when: (response) => response.numberOfSteps >= 3,
  },
  {
    type: "input",
    message: "What is step #4 to install your application?",
    name: "stepFour",
    when: (response) => response.numberOfSteps >= 4,
  },
  {
    type: "input",
    message: "What is step #5 to install your application?",
    name: "stepFive",
    when: (response) => response.numberOfSteps >= 5,
  },
  {
    type: "input",
    message: "Provide brief 2-3 sentence instructions for use",
    name: "instructionsForUse",
  },
  {
    type: "input",
    message: "What is one example for a use of your application?",
    name: "exampleOne",
  },
  {
    type: "input",
    message: "What is a second example for a use of your application?",
    name: "exampleTwo",
  },
  {
    type: "input",
    message: "What is third example for a use of your application?",
    name: "exampleThree",
  },
  {
    type: "input",
    message: "What is the file path to the screenshot of your application?",
    name: "screenshotFilePath",
  },
  {
    type: "rawlist",
    message: "Did you have collaborators?",
    choices: ["Yes", "No"],
    name: "collabYesNo",
  },
  {
    type: "input",
    message: "Name of your first collaborator?",
    name: "collabNameOne",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message: "What is your first collabs Github profile link?",
    name: "collabOneGit",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message: "Name of your second collaborator?",
    name: "collabNameTwo",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message: "What is your second collabs Github profile link?",
    name: "collabTwoGit",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message: "Name of your second collaborator?",
    name: "collabNameThree",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message: "What is your second collabs Github profile link?",
    name: "collabThreeGit",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "rawlist",
    message: "Which license?",
    choices: ["MIT", "Apache", "Boost", "GNU GPL", "Eclipse", "ISC", "ODbL"],
    name: "license",
  },
];

// // TODO: Create a function to write README file
// function writeToFile(data) {

// };

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response.collabYesNo);
    console.log(response.license);

    //possibly store the steps as an array of some kind so to loop?
    function printSteps(number) {
      let stepsArray = [
        response.stepOne,
        response.stepTwo,
        response.stepThree,
        response.stepFour,
        response.stepFive,
      ];

      let stepIndex = number - 1;

      let userSteps = stepsArray.filter((step, index) => {
        return index <= stepIndex;
      });
      console.log(userSteps);

      let resultString = "";

      for (var i = 0; i < userSteps.length; i++) {
        resultString = resultString.concat(
          `${i.toString(i + 1)}. ${userSteps[i]}\n`
        );
      }
      console.log(resultString);
      return resultString;
    }

    let license;
    //switch here for the the license
    switch (response.license) {
      case "MIT":
        license =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache":
        license =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "Boost":
        license =
          "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "GNU GPL":
        license =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "Eclipse":
        license =
          "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case "ISC":
        license =
          "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
      case "ODbL":
        license =
          "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
        break;
      default:
        license = "No License Specified";
    }

    const readmeFile = `# ${response.title}

        ## Description

        Motivation

        ${response.motivation}

        Problem Solved

        ${response.problemSolve}

        Lessons Learned

        ${response.lessonsLearned}
        
        ## Table of Contents (Optional)
        
        - [Installation](#installation)
        - [Usage](#usage)
        - [Credits](#credits)
        - [License](#license)

        ${license}
        
        ## Installation

        Step-by-Step Instructions:

        ${printSteps(response.numberOfSteps)}

        ## Usage
        
        Instructions for use:

        ${response.instructionsForUse}

        Examples:
        - ${response.exampleOne}
        - ${response.exampleTwo}
        - ${response.exampleThree}

        ![alt text](${response.screenshotFilePath})
        
        ## Credits

        Collaborators

        ${
          response.collabYesNo === "Yes"
            ? `
        - ${response.collabNameOne}: ${response.collabOneGit} 
        - ${response.collabNameTwo}: ${response.collabTwoGit} 
        - ${response.collabNameThree}: ${response.collabThreeGit}`
            : "No Collaborators"
        }

        If you followed tutorials, include links to those here as well.
        
        ## License

        This project is licensed under the ${response.license} License.
        
        ## Tests
        
        Go the extra mile and write tests for your application. Then provide examples on how to run them here.

        ## Questions

        If you have any questions please feel free to contact: ${
          response.name
        } (${response.githubUrl}) at ${response.email}.
        `;

    fs.writeFile(
      `${response.name.split(" ").join("")}-README.md`,
      readmeFile,
      function (err) {
        //if there is an error then console log the error otherwise console log "Success!"
        err ? console.log(err) : console.log("Success!");
      }
    );
  });
}

// Function call to initialize app
init();
