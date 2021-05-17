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
  return `# ${data.name}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation

${data.installation}

## Usage 

${data.usage}

## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

* [${data.username}'s GitHub](http://github.com/${data.username})
* ${data.username}'s Email: ${data.email}

${data.questions}

## License

${data.license}


`;
}

module.exports = generateMarkdown;
