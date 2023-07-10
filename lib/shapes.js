//The application must include Triangle, Circle, and Square classes, as well as tests 
//for each of these classes using Jest. While not a requirement, it is recommended 
//that you place any common functionality and properties shared by the 
//Triangle, Circle, and Square classes in a parent Shape class and use inheritance 
//to reuse the code in the child classes.


class Shape {
    constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor
      this.textColor = textColor
      this.text = text
    }

    renderShape() {
        return this.svg
    }
}
//extend class to the shapes

class Circle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    renderShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="50" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="${this.textColor}">
        ${this.text}
        </text>
      </svg>
      `
    }
}
class Triangle extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    renderShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,60 90,190 210,190" fill="${this.shapeColor}" />
        <text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="${this.textColor}">
        ${this.text}
        </text>
      </svg>
      `
    }
}
class Square extends Shape {
    constructor(shapeColor, textColor, text) {
        super(shapeColor, textColor, text)
    }
    renderShape() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="110" y="60" width="80" height="80" fill="${this.shapeColor}"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="30" fill="${this.textColor}">
        ${this.text}
        </text>
      </svg>`
    }
}

/////
module.exports = {Shape, Circle, Triangle, Square}