//initalizing class of shape
class Shape {
    constructor(){
         //set the default color to an empty string
        this.color = "";
    }

    setColor(color){
        this.color = color;
    }
}

class Triangle extends Shape {
    render(){
       return `<polygon height = "100%" width="100%" points="0,200,300,200,150,0" fill="${this.color}"/>` 
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render(){
        return `<rect x="50" width="100" height="100" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle};
