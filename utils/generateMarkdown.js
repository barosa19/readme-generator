// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("receiving data")
  console.log(data)
  return `
  
          # ${data.title}

          ## Description
          
          ${data.description}

          ## Table of Contents

          - [Installation](#installation)
          - [Usage](#usage)
          - [Contribution](#contribution)
          - [Tests](#tests)
          - [License](#license)
          - [Questions](#questions)

        ## Installation

        ${data.installation}

        ## Usage

        ${data.usage}


        ## Contribution

        ${data.contribution}

        ## Test

        ${data.tests}

        ## Questions
        Here is my link to my GitHub profile: ${data.github}. If you have any questions please feel free to reach me at ${data.email}.

        ## License

        //TODO use license function

`;
}

module.exports = generateMarkdown;
