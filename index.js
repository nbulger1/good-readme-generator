// require inquirer
const inquirer = require('inquirer');
//require filesystem (fs) so we can read, write, append files
const fs = require('fs'); 

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'githubUrl',
    },
    {
        type: 'input',
        message: 'What is your preferred email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation to complete this project?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problem does your application solve?',
        name: 'problemSolve',
    },
    {
        type: 'input',
        message: 'What lessons did you learn while working on this application?',
        name: 'lessonsLearned',
    },
    {
        type: 'rawlist',
        message: 'How many steps do you need to install your application?',
        name: 'numberOfSteps',
        choices: [1, 2, 3, 4, 5],
    },
    {
        type: 'input',
        message: 'What is step #1 to install your application?',
        name: 'stepOne',
        when: (response) => response.numberOfSteps >= 1,
    },
    {
        type: 'input',
        message: 'What is step #2 to install your application?',
        name: 'stepTwo',
        when: (response) => response.numberOfSteps >= 2,
    },
    {
        type: 'input',
        message: 'What is step #3 to install your application?',
        name: 'stepThree',
        when: (response) => response.numberOfSteps >= 3,
    },
    {
        type: 'input',
        message: 'What is step #4 to install your application?',
        name: 'stepFour',
        when: (response) => response.numberOfSteps >= 4,
    },
    {
        type: 'input',
        message: 'What is step #5 to install your application?',
        name: 'stepFive',
        when: (response) => response.numberOfSteps >= 5,
    },
    {
        type: 'input',
        message: 'Provide brief 2-3 sentence instructions for use',
        name: 'instructionsForUse',
    },
    {
        type: 'input',
        message: 'What is one example for a use of your application?',
        name: 'exampleOne',
    },
    {
        type: 'input',
        message: 'What is a second example for a use of your application?',
        name: 'exampleTwo',
    },
    {
        type: 'input',
        message: 'What is third example for a use of your application?',
        name: 'exampleThree',
    },
    {
        type: 'input',
        message: 'What is the file path to the screenshot of your application?',
        name: 'screenshotFilePath',
    },
    {
        type: 'rawlist',
        message: 'Did you have collaborators?',
        choices: ['Yes', 'No'],
        name: 'collabYesNo',
    },
    {
        type: 'input',
        message: 'Name of your first collaborator?',
        name: 'collabNameOne',
        when: (response) => response.collabYesNo === 'Yes',
    },
    {
        type: 'input',
        message: 'What is your first collabs Github profile link?',
        name: 'collabOneGit',
        when: (response) => response.collabYesNo === 'Yes',
    },
    {
        type: 'input',
        message: 'Name of your second collaborator?',
        name: 'collabNameTwo',
        when: (response) => response.collabYesNo === 'Yes',
    },
    {
        type: 'input',
        message: 'What is your second collabs Github profile link?',
        name: 'collabTwoGit',
        when: (response) => response.collabYesNo === 'Yes',
    },
    {
        type: 'input',
        message: 'Name of your second collaborator?',
        name: 'collabNameThree',
        when: (response) => response.collabYesNo === 'Yes',
    },
    {
        type: 'input',
        message: 'What is your second collabs Github profile link?',
        name: 'collabThreeGit',
        when: (response) => response.collabYesNo === 'Yes',
    },
    {
        type: 'rawlist',
        message: 'Which license?',
        choices: ['MIT', 'Apache', 'Boost', 'BSD', 'GNU GPL', 'Eclipse', 'ISC', 'ODbL'],
        name: 'license',
    },
];

// // TODO: Create a function to write README file
function writeToFile(data) {

};

// // TODO: Create a function to initialize app
function init() {

inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)

    const readmeFile = 
    `# ${response.title}

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

    ${response.license['MIT'] ? `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`: ''}
    ${response.license['Apache'] ? `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`: ''}
    ${response.license['Boost'] ? `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`: ''}
    ${response.license['GNU GPL'] ? `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`: ''}
    ${response.license['Eclipse'] ? `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`: ''}
    ${response.license['ISC'] ? `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`: ''}
    ${response.license['ODbL'] ? `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`: ''}
    
    ## Installation
    
    Step-by-Step Instructions:
    ${response.numberOfSteps[1] ? `
    1. ${response.stepOne}
    `
    : ''}

    ${response.numberOfSteps[2] ? `
    1. ${response.stepOne}
    2. ${response.stepTwo}
    `
    : ''}

    ${response.numberOfSteps[3] ? `
    1. ${response.stepOne}
    2. ${response.stepTwo}
    3. ${response.stepThree}
    `
    : ''}

    ${response.numberOfSteps[4] ? `
    1. ${response.stepOne}
    2. ${response.stepTwo}
    3. ${response.stepThree}
    4. ${response.stepFour}
    `
    : ''}

    ${response.numberOfSteps[5] ? `
    1. ${response.stepOne}
    2. ${response.stepTwo}
    3. ${response.stepThree}
    4. ${response.stepFour}
    5. ${response.stepFive}
    `
    : ''}

    ## Usage
    
    Instructions for use:

    ${response.instructionsForUse}

    Examples:
    - ${response.exampleOne}
    - ${response.exampleTwo}
    - ${response.exampleThree}

    ![alt text](${response.screenshotFilePath})
    
    ## Credits
    ${response.collabYesNo['Yes'] ? `
    Collaborators
    - ${response.collabNameOne} (${response.collabOneGit})
    - ${response.collabNameTwo} (${response.collabTwoGit})
    - ${response.collabNameThree} (${response.collabThreeGit})` 
    : ''}

    If you followed tutorials, include links to those here as well.
    
    ## License

    This project is licensed under the ${response.license} License.
    
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.

    ## Questions

    If you have any questions please feel free to contact: ${response.name} (${response.githubUrl}) at ${response.email}.

    `

    fs.writeFile(`${response.name.split(' ').join("")}-README.md`, readmeFile, function(err){
        //if there is an error then console log the error otherwise console log "Success!"
        err ? console.log(err) : console.log('Success!')
    })});
}

// Function call to initialize app
init();