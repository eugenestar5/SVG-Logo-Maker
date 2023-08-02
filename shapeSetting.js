
const {Circle, Square, Triangle} = require('./shapes.js');


function shapeSetting(response) {
    console.log(response.Shape)
    if (response.Shape === 'Circle') {
        let userShape = new Circle (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.Shape === 'Square') {
        let userShape = new Square (response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }

    if (response.Shape === 'Triangle') {
        let userShape = new Triangle (response.shapeColor, response.text, response.textColor)
        console.log(userShape)
        console.log(userShape.render())
        return userShape.render()
    }
};

module.exports = shapeSetting;