## Good README Generator - Week 9 Homework

## Description

High-quality README documents are essential for open source projects in Github as they explain what the app is for, how to use the app, how to report issues, how to install it, and how to make contributions to encourage other developers to contribute. A user can create a README file using a command-line application to allow them to devote more time to working on a project.

I was tasked to create a command-line application that generates a professional README from a user's input by using the Inquirer package through node package manager.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Question Bank](#questions)
- [Write to File](#readme)
- [License](#license)
- [Screen Recording](#screen-recording)
- [Link](#link)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Questions

I started out the command-line interface by making an array of questions that I could call using the prompt method of the inquirer package. The question bank contains anything that may need user input to personalize the README to their application.

## README

To create the template for the README file I took the categories supplied in the acceptance criteria and generated a table of contents after the project "Description". From there, I consulted the https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide for guidelines on the necessary information for each section of the README. Once I created the general content then I took the information from the question bank and plugged that into the appropriate spots in the framework.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is protected under the MIT License.

## Screen Recording

https://youtu.be/A8NHED3j8S8

## Application Sample README

The sample README is in the Github repository under the name "NatalieBulger-README.md"
