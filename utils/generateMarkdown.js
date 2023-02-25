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
  return `# ${data.title}
   ## Description
  ${data.description}
  ## Installation
  ${data.Installation}
   ## Usage
  ${data.Usage}
  ## Questions
  Github Profile:${data.github}
  COntact Me:${data.email}
 ## License
${data.License}


[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
`;
}

module.exports = generateMarkdown;
