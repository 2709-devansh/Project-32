class polygon{
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
       }
       this.image = loadImage("4b0082.png");
       this.body = Bodies.circle(x,y,20,options);
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("turquoise");
        strokeWeight(2);
        circle(pos.x,pos.y,30,30);
    }
}