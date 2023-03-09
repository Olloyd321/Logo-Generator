const inquirer = require('inquirer'); // inquirer package 
const { default: Choices } = require('inquirer/lib/objects/choices');
const questions = [
    {
        type: 'input',
        name: 'nameOfLogo',
        message: 'What is the name of your Logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like your logo text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ["circle", "square", "triangle"],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'what color would you like your shape to be?'
    },

];

module.exports = questions;