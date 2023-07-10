// application should use Jest for running the unit tests

//Each shape class should be tested for a render() method that returns a string for 
//the corresponding SVG file with the given shape color.

//The following example test should pass:

//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


//import
const {Shape, Circle, Triangle, Square} = require('./shapes.js');

describe('Shape', () => {
    it('renders correctly', () => {
        const shape = new Shape('shapeColor', 'textColor', 'text')
        expect(shape.shapeColor).toBe('shapeColor')
        expect(shape.textcolor).toBe('textColor')
        expect(shape.text).toBe('text')
        
    })
})

describe('Circle', () => {
    it('redners correctly', () => {
        const circle = new Circle();
        const shapeColor = ("black");
        const textColor = ("pink");
        const text = ("yay");
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${shapeColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="${textColor}">
        ${text}
        </text>
      </svg>
      `
        expect(circle.renderShape()).toEqual(expectedOutput)
    })
})