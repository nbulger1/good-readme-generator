// require inquirer
const inquirer = require('inquirer');
//require filesystem (fs) so we can read, write, append files
const fs = require('fs'); 

// Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'What is your name?',
        name: 'name',
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
        choices: ['MIT', 'GNU'],
        name: 'license',
    },
    {
        type: 'rawlist',
        message: 'Would you like a tests section?',
        choices: ['Yes', 'No'],
        name: 'testsYesNo',
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

    This project is licensed under the ${response.license['MIT'] ? `https://opensource.org/licenses/MIT` : ''} ${response.license['GNU'] ? `https://www.gnu.org/licenses/` : ''}.
    
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    ---
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ${response.testsYesNo['Yes'] ?  `
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    `
    : ''}

    `

    fs.writeFile(`${response.name.split(' ').join("")}-README.md`, readmeFile, function(err){
        //if there is an error then console log the error otherwise console log "Success!"
        err ? console.log(err) : console.log('Success!')
    })});
}

// Function call to initialize app
init();

// inquirer
//   .prompt(questions)
//   .then((response) => {
//     console.log(response)

//     const readmeFile = 
//     `# ${response.title}

//     ## Description

//     Motivation

//     ${response.motivation}

//     Problem Solved

//     ${response.problemSolve}

//     Lessons Learned

//     ${response.lessonsLearned}
    
//     ## Table of Contents (Optional)
    
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Credits](#credits)
//     - [License](#license)
    
//     ## Installation
    
//     Step-by-Step Instructions:
//     ${response.numberOfSteps[1] ? `
//     1. ${response.stepOne}
//     `
//     : ''}

//     ${response.numberOfSteps[2] ? `
//     1. ${response.stepOne}
//     2. ${response.stepTwo}
//     `
//     : ''}

//     ${response.numberOfSteps[3] ? `
//     1. ${response.stepOne}
//     2. ${response.stepTwo}
//     3. ${response.stepThree}
//     `
//     : ''}

//     ${response.numberOfSteps[4] ? `
//     1. ${response.stepOne}
//     2. ${response.stepTwo}
//     3. ${response.stepThree}
//     4. ${response.stepFour}
//     `
//     : ''}

//     ${response.numberOfSteps[5] ? `
//     1. ${response.stepOne}
//     2. ${response.stepTwo}
//     3. ${response.stepThree}
//     4. ${response.stepFour}
//     5. ${response.stepFive}
//     `
//     : ''}

//     ## Usage
    
//     Instructions for use:

//     ${response.instructionsForUse}

//     Examples:
//     - ${response.exampleOne}
//     - ${response.exampleTwo}
//     - ${response.exampleThree}

//     ![alt text](${response.screenshotFilePath})
    
//     ## Credits
//     ${response.collabYesNo['Yes'] ? `
//     Collaborators
//     - ${response.collabNameOne} (${response.collabOneGit})
//     - ${response.collabNameTwo} (${response.collabTwoGit})
//     - ${response.collabNameThree} (${response.collabThreeGit})` 
//     : ''}

//     If you followed tutorials, include links to those here as well.
    
//     ## License

//     This project is licensed under the 
    
//     The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
//     ---
    
//     🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    
//     ## Badges
    
//     ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
//     Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
//     ## Features
    
//     If your project has a lot of features, list them here.
    
//     ## How to Contribute
    
//     If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
//     ## Tests
    
//     Go the extra mile and write tests for your application. Then provide examples on how to run them here.
    
//     `

//     fs.writeFile(`${response.name.split(' ').join("")}-README.md`, readmeFile, function(err){
//         //if there is an error then console log the error otherwise console log "Success!"
//         err ? console.log(err) : console.log('Success!')
//     })});