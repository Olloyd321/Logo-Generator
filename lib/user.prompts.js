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

<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg>