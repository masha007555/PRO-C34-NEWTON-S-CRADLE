class Roof{
	constructor(x,y,w,h){

		var options={
			isStatic:true,
			friction:2
		}

		this.w=700;
		this.h=40;
		this.body=Bodies.rectangle(x, y,700, 40, options);
 		World.add(world, this.body);

	}

	display(){
		var roofPosition=this.body.position;

		push()
		translate(roofPosition.x, roofPosition.y);	
		rectMode(CENTER);
		strokeWeight(3);
		stroke("black");
		fill(40);
		rect(0,0,700,40);
		pop()
	}
}