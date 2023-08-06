const inquirer = require('inquirer')
const Circle = require('./lib/shapes')
const Triangle = require('./lib/shapes')
const Square = require('./lib/shapes')

const circle = new Circle(answers.text, answers.color, answers.textColor)
shape.render();

const triangle = new Triangle(answers.text, answers.color, answers.textColor)
shape.render();

const square = new Square(answers.text, answers.color, answers.textColor)
shape.render();