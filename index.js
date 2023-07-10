// Packages needed for this application - inquirer and fs

const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Circle, Triangle, Square} = require('./lib/shapes.js');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter three letters',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Pick a color for your Text!',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape',
      choices: ['Circle', 'Triangle', 'Square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Pick a color for your Shape!',
    },
  ])

//Function to render shapes
  .then((answers) => {
    let shape;
    switch (answers.shape) {
        case 'Triangle':
            shape = new Triangle(answers.shapeColor, answers.textColor, answers.text)
            break

        case 'Square':
            shape = new Square(answers.shapeColor, answers.textColor, answers.text)
            break

        case 'Circle':
            shape = new Circle(answers.shapeColor, answers.textColor, answers.text)
            break
    }

//Function to write file
    const svgContent = shape.renderShape()
    fs.writeFile(`examples/logo.svg`, svgContent, err => {
        err ? console.error(err) : console.info('Successfully created logo.svg!!!')
    })
})
.catch(error => {
    console.error(error)
})