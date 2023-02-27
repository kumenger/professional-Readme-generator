var url=`https://github.com/kumenger/professional-readme-generator#`
let myLicence = {
  "IBM Public License Version 1.0": {
    badge:
      "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)",
    link: "https://opensource.org/licenses/IPL-1.0",
  },
  MIT: {
    badge:
      "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    link: "https://opensource.org/licenses/MIT",
  },
  "Mozilla Public License 2.0": {
    badge:
      "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  "Open Database License": {
    badge:
      "![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)",
    link: "https://opendatacommons.org/licenses/by/",
  },
  "The Unlicense": {
    badge:
      "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)",
    link: "http://unlicense.org/",
  },
  "zLib License": {
    badge:
      "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)",
    link: "https://opensource.org/licenses/Zlib",
  },
  ISC: {
    badge: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
    link: "https://opensource.org/licenses/ISC",
  },
  SIL: {
    badge:
      "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)",
    link: "https://opensource.org/licenses/OFL-1.1",
  },
  "N/A":{
    badge:
    " ",
  link: "",
},
  }
function renderLicenseBadge(license) {
  if (myLicence.hasOwnProperty(license)) {
     
    return myLicence[license];
  } else return " ";
}


function renderLicenseLink(license) {
  if (myLicence.hasOwnProperty(license)) {
   
    return myLicence[license];
  } else return " ";
}


function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.License).badge}
  # ${data.title}
   ## Description
 ### ${data.description}
  ## Table of Contents
  ### [Installation](${url+"installation"})
 ### [Questions](${url+"questions"})
 ### [Usage](${url+"usage"})
 ### [License](${url+"license"})
  ## Installation
 ### ${data.Installation}
   ## Usage
 ### ${data.Usage}
  ## Questions
   ### Github Profile:${data.github}
   ### Contact Me:${data.email}
 ## License
 ### ${renderLicenseLink(data.License).link}



`;
}

module.exports = generateMarkdown;
