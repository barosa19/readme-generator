const questions = [{
    type: 'input',
    name: "title",
    message: 'What is your Github URL',
    default: "U suck"
},
{
    type: 'list',
    name: "license",
    message: 'What isyour license choice',
    choices: [":Mit", "Apache"]
}]

module.exports = questions