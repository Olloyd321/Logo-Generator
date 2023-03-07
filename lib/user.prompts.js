const inquirer = require('inquirer'); // inquirer package 
inquirer
.prompt([
    {
        type: 'input',
        name: 'Name of Logo',
        Message: 'What is the name of your Logo?'
    },
    {
        type: 'input',
        name: 'Color',
        Message: 'What color would you like your logo to be?'
    },
    {
        type: 'input',
        name: 'shape',
        Message: 'What shape would you like your logo to be?'
    },
]);

