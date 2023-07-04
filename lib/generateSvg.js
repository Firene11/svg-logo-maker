// create a function to generate svg file

//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered

function generateSvg(answers) {
    return `
    <svg width="300" height="200">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    <circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />
    <polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />
    <rect width="100%" height="100%" fill="${answers.shapeColor}" />
    </svg>
  `;
  }


module.exports = generateSvg;