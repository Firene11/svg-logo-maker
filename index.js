// Packages needed for this application - inquirer and fs

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./lib/generateSvg');

inquirer
  .prompt([
//WHEN I am prompted for text
//THEN I can enter up to three characters <--IMPORTANT (need then statements to handle input)
    {
      type: 'input',
      name: 'text',
      message: 'Please enter three letters',
    },
//WHEN I am prompted for the text color
//THEN I can enter a color keyword (OR a hexadecimal number) <--IMPORTANT
    {
      type: 'input',
      name: 'textColor',
      message: 'Pick a color for your Text!',
    },
//WHEN I am prompted for a shape
//THEN I am presented with a list of shapes to choose from: circle, triangle, and square
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape',
      choices: ['Circle', 'Triangle', 'Square']
    },
//WHEN I am prompted for the shape's color
//THEN I can enter a color keyword (OR a hexadecimal number) <--IMPORTANT
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Pick a color for your Shape!',
    },
  ])

//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line
  .then((answers) => {
    const svgContent = generateSvg(answers);

    fs.writeFile('logo.svg', svgContent, (err) =>
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
  });
