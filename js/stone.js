class stone
{
	constructor(alyssa,angela,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.alyssa=alyssa;
		this.angela=angela;
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.alyssa, this.angela, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			push()
			var stoneposition=this.body.position;		
			translate(stoneposition.x, stoneposition.y)
			// rectMode(CENTER)
			 rotate(this.body.angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image,0,0,this.r*2, this.r*2)
			//ellipse(0,0,this.r)
			pop()
			
	}

}