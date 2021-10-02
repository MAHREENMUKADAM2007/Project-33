class Snow {
    constructor(x, y, r) {
        var options = {
            restitution: 0.4
        }
        this.body = Bodies.circle(x, y, r, options)
        this.r = r;
        World.add(world, this.body)
    }

    display() {
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        fill("white")
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop()
    }

}



