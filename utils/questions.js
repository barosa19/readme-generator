const questions = [{
    type: 'input',
    name: "title",
    message: 'What is your application title?',
    default: "README",
},
{
    type: 'input',
    name: "description",
    message: 'Provide a short description explaining the what, why and how of your project',
},
{
    type: 'input',
    name: "github",
    message: 'Provide a link to your GitHub',
},
{
    type: 'input',
    name: "email",
    message: 'What is your email address?',
},
{
    type: 'input',
    name: "installation",
    message: 'What are the steps required to install your project?',
},
{
    type: 'input',
    name: "usage",
    message: 'Provide instructions and examples for use',
},
{
    type: 'input',
    name: "contribution",
    message: 'How would you like others to contribute to your application?',
},
{
    type: 'input',
    name: "tests",
    message: 'Provide tests for this application and how to run them',
},
{
    type: 'list',
    name: "license",
    message: 'Choose a license',
    choices: ["Mit", "Apache", "GNU",]
},
]

module.exports = questions