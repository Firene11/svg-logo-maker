// create a function to generate svg file

//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered

function generateSvg(answers) {
    return `
    <svg width="300" height="200">
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
    
    </svg>
  `;
  }


module.exports = generateSvg;