class Ground{

    constructor(x,y)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.width = 1900;
		this.height = 20;
		
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
		rect(0, 0, this.width, this.height);
			
			
			pop()
			
	}

}
