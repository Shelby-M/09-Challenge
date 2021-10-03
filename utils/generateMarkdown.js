// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " ";
  if (licenseType === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (licenseType === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  if (licenseType === "GNU GPLv3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (licenseType === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
  }
  return licenseString;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  const licenseType = data.license[0];
  let licenseString = " ";
  if (licenseType === "MIT") {
    return `This application is covered under The MIT License, Please click the link for more information on this license : (https://opensource.org/licenses/MIT)`;
  }
  if (licenseType === "ISC") {
    return `This application is covered under The ISC License, Please click the link for more information on this license : (https://opensource.org/licenses/ISC)`;
  }
  if (licenseType === "GNU GPLv3") {
    return `This application is covered under The GNU GPLv3 License, Please click the link for more information on this license : (https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (licenseType === "Mozilla") {
    return `This application is covered under The Mozilla Public License, Please click the link for more information on this license : (https://opensource.org/licenses/MPL-2.0)`;
  }
  return licenseString;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}
  

## Table Of Contents
-[Description](#description)

-[Installation](#installation)

-[Usage](#usage)

-[Contribution](#contribution)

-[License](#license)

-[Test](#test)

-[Email](#Email)


## Description
${data.description}



## Installation
${data.installation}


## Usage
${data.usage}


## Contribution
${data.contribution}


## License
${renderLicenseLink(data)}


## Test
${data.test}

## Questions
If there area any questions, email the developer at 
<${data.Email}> or visit their GitHub profile
(http://github.com/${data.github})`;
}

module.exports = generateMarkdown;
