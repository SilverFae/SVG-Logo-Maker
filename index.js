const { Triangle, Circle, Square } = require("./lib/shapes.js");
const inquirer = require("inquirer");
const fs = require('fs');

//adding class SVG to set paramerers for text and shape
class SVG {
  constructor() {
    this.textIn = "";
    this.shapeIn = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeIn}${this.textIn}</svg>`
  }
  setTextElement(text, color) {
    this.textIn = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape) {
    this.shapeIn = shape.render();
  }
}
//inquirer questions
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters!",
  },
  {
    type: "input",
    name: "textColor",
    message: "Please enter the color you want for the text using a keyword or hexadecimal number!",
  },
  {
    type: "list",
    name: "image",
    message: "Please choose a shape:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Please enter the color you want for the shape using a keyword or hexadecimal number!",
  },
];

//calling fs so our data writes to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("You generated your file to logo.svg!!!!!!");
  });
}

//saving our answers for prompt to logo.svg
async function init() {
  const svgFile = "logo.svg";
  const answers = await inquirer.prompt(questions);

  // Slice the user's input to three characters.
  const userIn = answers.text.slice(0, 3);
  //defining font color
  const userFontColor = answers["textColor"];
  //defining shape
  const userShapeChoice = answers.image.toLowerCase();
  //defining shape color
  const userShapeColor = answers["shapeColor"];

  let userShape;
  //setting user conditions
  if (userShapeChoice === "triangle") {
    userShape = new Triangle();
  } 
  else if (userShapeChoice === "circle") {
    userShape = new Circle();
  }
   else if (userShapeChoice === "square") {
    userShape = new Square();
  } 
  else {
    console.log("Invalid shape");
    return;
  }

  //setting color of the shape
  userShape.setColor(userShapeColor);


  const svg = new SVG();
  //implementing color of the font
  svg.setTextElement(userIn, userFontColor);
  //implementing the users shape
  svg.setShapeElement(userShape);
  const svgString = svg.render();

  writeToFile(svgFile, svgString);
}

init();