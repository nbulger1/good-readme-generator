// require inquirer
const inquirer = require("inquirer");
//require filesystem (fs) so we can read, write, append files
const fs = require("fs");

// Array of questions for user input
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
    message:
      "Please provide a brief description of your project (motivation for completion, problems solved by the application, and lessons learned)",
    name: "description",
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
    type: "input",
    message:
      "Provide alternate text that describes the screenshot image of your application",
    name: "alternateText",
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
    message: "Name of your third collaborator?",
    name: "collabNameThree",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message: "What is your third collabs Github profile link?",
    name: "collabThreeGit",
    when: (response) => response.collabYesNo === "Yes",
  },
  {
    type: "input",
    message:
      "Any notes for those who would like to contribute to your project?",
    name: "notesToContributors",
  },
  {
    type: "rawlist",
    message: "Which license?",
    choices: ["MIT", "Apache", "Boost", "GNU GPL", "Eclipse", "ISC", "ODbL"],
    name: "license",
  },
  {
    type: "input",
    message: "What's one test for your application?",
    name: "testOne",
  },
  {
    type: "input",
    message: "What's an example for how to run the first test?",
    name: "testOneExample",
  },
  {
    type: "input",
    message: "What's a second test for your application?",
    name: "testTwo",
  },
  {
    type: "input",
    message: "What's an example for how to run the second test?",
    name: "testTwoExample",
  },
];

// Function to write README file
function writeToFile(response) {
  //function to print out the steps for installation based on user response to be called in the readmeFile variable
  function printSteps(number) {
    // Make an array of of the steps for installation
    let stepsArray = [
      response.stepOne,
      response.stepTwo,
      response.stepThree,
      response.stepFour,
      response.stepFive,
    ];

    // define stepIndex as the number fed to the printSteps function
    let stepIndex = number - 1;

    //Filter the stepsArray on the index to return if stepIndex is less than or equal to the index of the array
    let userSteps = stepsArray.filter((step, index) => {
      return index <= stepIndex;
    });

    //Define a string to hold the result of the function
    let resultString = "";

    //For each i of the usersteps length create a template literal of the steps in the array with the number of the list equaling i+1 and the step as the index of the usersteps (filtered step array)
    for (var i = 0; i < userSteps.length; i++) {
      resultString = resultString.concat(`${i + 1}. ${userSteps[i]}\n`);
    }

    //return the resulting string
    return resultString;
  }

  let license;
  //switch statement for the the license to define which badge should be used in the README file
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

  //Defining the constant readmeFile as a template literal using the user input
  const readmeFile = `
      
  # ${response.title}
  
  ## Description
  
  ${response.description}
          
  ## Table of Contents
          
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
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
  
  ![${response.alternateText}](${response.screenshotFilePath})
  
  ## License
  
  This project is licensed under the ${response.license} License.
          
  ## Collaborating
  
  Collaborators
  
  ${
    response.collabYesNo === "Yes"
      ? `
  - ${response.collabNameOne}: ${response.collabOneGit} 
  - ${response.collabNameTwo}: ${response.collabTwoGit} 
  - ${response.collabNameThree}: ${response.collabThreeGit}`
      : "No Collaborators as of Now"
  }
  
  If you would like to contribute to this project please follow the [Contributor Covenant](https://www.contributor-covenant.org/).
  
  Notes: ${response.notesToContributors}
          
  ## Tests
          
  Test #1: ${response.testOne}

  - Example: ${response.testOneExample}

  Test #2: ${response.testTwo}
  
  - Example: ${response.testTwoExample}
  
  ## Questions
  
  If you have any questions please feel free to contact: ${response.name} (${
    response.githubUrl
  }) at ${response.email}.`;

  //using the filesystem required at the top of index.js to write a file with the name of the user-README.md using the constant readmeFile
  fs.writeFile(
    `${response.name.split(" ").join("")}-README.md`,
    readmeFile,
    function (err) {
      //if there is an error then console log the error otherwise console log "Success!"
      err ? console.log(err) : console.log("Success!");
    }
  );
}

// Function to initialize app that uses inquirer to prompt the question array and then use the response object to run the writeToFile function
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile(response);
  });
}

// Call the init() function to initialize app
init();
