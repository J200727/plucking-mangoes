class ground
{
	constructor(alyssa,angela,sanjo,evanjo)
	{
		var options={
			isStatic:true			
			}
		this.alyssa=alyssa;
		this.angela=angela;
		this.sanjo=sanjo
		this.evanjo=evanjo
		this.body=Bodies.rectangle(alyssa, angela, sanjo, evanjo, options);
 		World.add(world, this.body);

	}
	display()
	{
				
			push()
			var groundPosition=this.body.position;	
			translate(groundPosition.x, groundPosition.y);
			rectMode(CENTER)
			
			fill(128,128,128)
			rect(0,0,this.sanjo, this.evanjo);
			pop()
			
	}

}