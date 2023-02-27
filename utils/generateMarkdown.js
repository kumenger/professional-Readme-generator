// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let myLicence={
   "Microsoft Public License":{badge:"",link:""},
   "MIT":{badge:"",link:""},
   "Mozilla Public License 2.0":{badge:"",link:""},
   "Open Software License 3.0":{badge:"",link:""},
   "The Unlicense":{badge:"",link:""},
   "zLib License":{badge:"",link:""},
   "ISC":{badge:"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]",link:"https://opensource.org/licenses/ISC"},
   "Microsoft Public License":{badge:"",link:""},
}
function renderLicenseBadge(license) {
    return myLicence.license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   
  return ` ${myLicence[data.License].badge}
  # ${data.title}
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
  ${myLicence[data.License].link}



`;
}

module.exports = generateMarkdown;
