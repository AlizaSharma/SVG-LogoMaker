class Shape {
    constructor(){
        this.color = color;
    }
}

class Triangle extends Shape {
constructor(text, color, textColor){
    super(color);
    this.text = text;
    this.textColor = textColor;
    
}
render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <triangle points="200,10 250,190 160,210" fill= ${this.color} />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill= ${this.textColor}>${this.text}</text>
  
  </svg>`
}
    }

class Square extends Shape {
constructor(text, color, textColor){
    super(color);
    this.text = text;
    this.textColor = textColor;
}
render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <square x="10" y="10" width="10" height="10" fill= ${this.color} />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill= ${this.textColor}>${this.text}</text>
  
  </svg>`
}

}

class Circle extends Shape{
    constructor(text, color, textColor){
        super(color);
        this.text = text;
        this.textColor = textColor;
   
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill= ${this.color} />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill= ${this.textColor}>${this.text}</text>
      
      </svg>`
    }

}



module.exports = {Triangle, Square, Circle}
