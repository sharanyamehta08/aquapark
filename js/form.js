class Form{
    constructor(){
        this.title = createElement("h1");
        this.description1 = createElement("h2");
        this.description2 = createElement("h2");
        this.input = createInput("").attribute("placeholder","Enter your Name");
        this.button = createImage("./images/startImage.jpg", "start button");
    }
    setElementPosition(){
        this.title.html("AQUAPARK");
        this.title.position(width/2, height/4);
        this.description1.html("Reach to the end of the water slide, try to be the first!")
        this.description1.position(width/2, height/4+100);
        this.description2.html("Use Arrow keys to move")
        this.description2.position(width/2, height/4+200);
        this.input.position(width/2,height/4+400);
        this.button.position(width/2,height/4+600);
    }
    
    setElementStyle(){
        this.title.class("titlText");
    }

    display(){
        this.setElementPosition();
        this.setElementStyle();
    }

   
}