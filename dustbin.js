class Dustbin{
    constructor(world,y){
        var options = {isStatic: true};
        this.redb = Matter.Bodies.rectangle(650,490,10,110,options);
        
        this.redl = Matter.Bodies.rectangle(590,435,10,110,options);
        Matter.World.add(world,this.redl);
        this.redr = Matter.Bodies.rectangle(710,435,10,110,options);
        Matter.World.add(world,this.redb);
        Matter.World.add(world,this.redr);
        this.image=loadImage("greendustbin.png");
    }
    display(){
        rectMode(CENTER);
        var red1 = createSprite(this.redb.position.x,this.redb.position.y,125,10);
        var red2 = createSprite(this.redl.position.x,this.redl.position.y,10,110);
        var red3 = createSprite(this.redr.position.x,this.redr.position.y,10,110);
        red1.shapeColor = color("red");
        red2.shapeColor = color("red");
        red3.shapeColor = color("red");
        push();
        translate(this.redb.position.x,this.redl.position.y+15);
        imageMode(CENTER);
        image(this.image,0,-25,120,120);
        pop();
    }
}