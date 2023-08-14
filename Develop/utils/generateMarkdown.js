// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license'){
    return `(https://img.shields.io/badge/license-${license}-blue)
    ![badge]
    `;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license'){
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License]
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License
${renderLicenseBadge(data.license)}

## Table of Contents

*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*[Contributions](#contributions)
*[Tests](#tests)
*[Links](#links)

## Description

${data.description}

## Installation

${data.installation}

## Usage 

${data.usage}

## Contributions

${data.contributions}

## Tests

${data.tests}

## Links

[GitHub][${data.github}](https://github.com/${data.github})

[Email:][${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
