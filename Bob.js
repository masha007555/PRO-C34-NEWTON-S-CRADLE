class Bob{
    constructor(x,y,r){

		var options={
			isStatic:false,
			restitution:1.08,
			friction:0.6,
            density:4.5
        }

        this.x=x;
        this.y=y;
		this.r=100;
		//this.image=loadImage("Paper.png");
		this.body=Bodies.circle(this.x, this.y,this.r/2, options);
		World.add(world, this.body);

    }
    
	display(){
			
        var bobpos=this.body.position;		

		push()
        translate(bobpos.x, bobpos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("gray");
        ellipse(0,0,100,100);
        
		//imageMode(CENTER);
		//image(this.image,0,0,45,45);
		pop()
			
	}
}