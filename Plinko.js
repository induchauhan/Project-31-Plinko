class Plinko
{
    constructor(x,y)
    {
        var options=
        {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0.toExponential,
            'isStatic':true
            
        }
        this.body=Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        
        
    }

    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,10);
    }

};
