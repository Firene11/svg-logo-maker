////////// Application uses Jest for running the unit tests ////////////

//imports shape classes from the 'shapes.js' module and defines a test for the shape class.
const {Shape, Circle, Triangle, Square} = require('./shapes.js');

//Each shape class is tested for a render() method that returns a string for 
//the corresponding SVG file with the given text, shape and text color.

//Shape Class
describe('Shape', () => {
    it('renders correctly', () => {
        const shape = new Shape('shapeColor', 'textColor', 'text')
        expect(shape.shapeColor).toBe('shapeColor')
        expect(shape.textColor).toBe('textColor')
        expect(shape.text).toBe('text')
        
    })
})

// Circle Class
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

// Triangle Class
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

//Square Class
describe('Square', () => {
    it('renders correctly', () => {
        const square = new Square("yellow", "blue", "end");
        const expectedOutput = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="110" y="60" width="80" height="80" fill="yellow"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="blue">
        end
        </text>
      </svg>`
        expect(square.renderShape()).toEqual(expectedOutput)
    })
})