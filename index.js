const {Triangle, Circle, Square} = require("./lib/shapes");
const inquirer = require("inquirer");
const fs = require('fs');

class SVG{
    constructor(){
        this.textIn = ""
        this.shapeIn = ""
    }
    render(){
       return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeIn}${this.textIn}</svg>`
    }
    setText(text,color){
        this.textIn = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeIn = shape.render()
    }
}

