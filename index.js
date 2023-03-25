
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require("./utils/generateMarkdown")
const questions = require('./utils/questions')


function init() {
    inquirer.prompt(questions).then(answers => {
        fs.writeFile(`${answers.title}.md`, generateMarkdown(answers), err=> console.log(err))
        })
}

init();


