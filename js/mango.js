class mango{
	constructor(alyssa,angela,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.alyssa=alyssa;
		this.angela=angela;
		this.r=r
		this.image=loadImage("images/mango.png")
		this.body=Bodies.circle(this.alyssa, this.angela, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPosition=this.body.position;	
		push()
		translate(mangoPosition.x ,mangoPosition.y);
		
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}