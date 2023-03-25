// returns the badge for the license selected
function renderLicense(license) {
  if (license === 'Mit'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license === 'GNU'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  return ''
 }

//Generates markdown for README
function generateMarkdown(data) {
  return `${renderLicense(data.license)}
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

## Tests

${data.tests}

## License

This application is licensed by ${data.license}

## Questions

Here is my link to my GitHub profile: ${data.github}. If you have any questions please feel free to reach me at ${data.email}.
`;
}

module.exports = generateMarkdown;
