const inquirer = require('inquirer');
const fs = require('fs');
const [Circle, Triangle, Square] = require('./lib/shapes');

const triangle = new Triangle(answers.text, answers.color, answers.textColor)
shape.render();
const circle = new Circle(answers.text, answers.color, answers.textColor)
shape.render();
const square = new Square(answers.text, answers.color, answers.textColor)
shape.render();

let shapeSelect; 
if(answers.shape === "Triangle"){
    shapeSelect = new Triangle();
} else if (answers.shape === "Circle"){
    shapeSelect = new Circle();
} else if (answers.shape === "Square"){
    shapeSelect = new Square();
}

function init(){

inquirer
.prompt([
    {type: 'list',
    name: 'shape',
    message: 'what is the desired shape of your svg?',
    choices: ['circle', 'triangle', 'square']
    },

    {type: 'input',
     name: 'color',
     message:'what is the desired color of your svg? ',
    },

    {type: 'input',
     message:'what is your svg text?',
     name: 'text',
    }, 

    {type: 'input',
     message: 'what is your desired textColor?',
     name: 'textColor',

    },

])
.then((answers) => {
    writeToFile("logo.svg", answers);

})
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, 
        (err) => 
        err ? console.error(err) : console.log('svg success!'))
}
}

init();
