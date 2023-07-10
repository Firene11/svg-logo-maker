//The application must include Triangle, Circle, and Square classes, as well as tests 
//for each of these classes using Jest. While not a requirement, it is recommended 
//that you place any common functionality and properties shared by the 
//Triangle, Circle, and Square classes in a parent Shape class and use inheritance 
//to reuse the code in the child classes.


class Shape {
    constructor(color, textColor, text) {
      this.color = color
      this.textColor = textColor
      this.text = text
    }

    rednerShape() {
        return this.generateSvg
    }
}
//extend class to the shapes

class Triangle extends Shape {
    render() {
        return '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${answers.shapeColor}" />'
    }
}


const circle = new Shape('', circle);
const triangle = new Shape('', triangle);
const square = new Shape('', square);

module.exports = generateSvg;