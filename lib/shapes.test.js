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
        expect(shape.textColor).toBe('textColor')
        expect(shape.text).toBe('text')
        
    })
})

describe('Circle', () => {
    it('renders correctly', () => {
        const circle = new Circle("black", "pink", "yay");
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="black"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="pink">
        yay
        </text>
      </svg>
      `
        expect(circle.renderShape()).toEqual(expectedOutput)
    })
})

describe('Triangle', () => {
    it('renders correctly', () => {
        const triangle = new Triangle("pink", "black", "fun");
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,60 90,190 210,190" fill="pink" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="black">
        fun
        </text>
      </svg>
      `
        expect(triangle.renderShape()).toEqual(expectedOutput)
    })
})

describe('Square', () => {
    it('renders correctly', () => {
        const square = new Square("orange", "blue", "end");
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,60 90,190 210,190" fill="orange" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="blue">
        end
        </text>
      </svg>
      `
        expect(square.renderShape()).toEqual(expectedOutput)
    })
})