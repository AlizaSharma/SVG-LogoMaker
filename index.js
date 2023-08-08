const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');

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
     name: 'text',
     message:'what is your svg text?',
     
    }, 

    {type: 'input',
     name: 'textColor',
     message: 'what is your desired textColor?',
    

    },

])
.then((answers) => {
let shapeSelect; 
if(answers.shape === "triangle"){
    shapeSelect = new Triangle(answers.text, answers.color, answers.textColor);
} else if (answers.shape === "circle"){
    shapeSelect = new Circle(answers.text, answers.color, answers.textColor);
} else if (answers.shape === "square"){
    shapeSelect = new Square(answers.text, answers.color, answers.textColor);
} 
console.log(shapeSelect)
writeToFile(`./examples/${answers.shape}.svg`, shapeSelect.render());
})



}

function writeToFile(fileName, data){
    fs.writeFile(fileName, data, 
        (err) => 
        err ? console.error(err) : console.log('svg success!'))
}

init();
