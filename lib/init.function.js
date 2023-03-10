// this file was created in an attempt to clean index.js by placing the main function in its own file **working in progress**

// function init() {
//     inquirer.prompt(generateUserPrompts).then(response => {
//         console.log(response)
//         let shape;
//         if (response.shape === 'circle'){
//             shape = new Circle()
//             shape.setColor(response.shapeColor)
//         }
//         else if(response.shape === 'triangle'){
//             shape = new Triangle()
//             shape.setColor(response.shapeColor)
//         }
//         else {
//             shape = new Square()
//             shape.setColor(response.shapeColor)
//         }
//         console.log(shape);
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         ${shape.render()}
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.nameOfLogo}</text>
//         </svg>
//         `
//     }).then(data => {
//         console.log(data);
//         fs.writeFileSync("Generated logo.svg", data)
//     })
// };

// init()