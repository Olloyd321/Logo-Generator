const inquirer = require('inquirer'); // inquirer package 
const fs = require('fs'); // file system package
const generateUserPrompts = require('./lib/user.prompts');


function init(){
    inquirer.prompt(generateUserPrompts);
};

