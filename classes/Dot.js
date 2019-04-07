function Dot() {
    this.dim = random(0.7, 1.2);
    this.rad = 50;
    this.dotColor = '#2679d3';
    this.pos = createVector(
        random(this.dim, innerWidth  - this.dim),
        random(this.dim, innerHeight - this.dim)
    );
    this.vel = createVector(
        random(-0.6, 0.6),
        random(-0.6, 0.6)
    );


    this.updateLocation = function() {
        this.pos.add(this.vel);
    }

    this.bounce = function() {
        if ((this.pos.x + this.dim/2 > innerWidth)  || this.pos.x - this.dim/2 < 0)
            this.vel.x = this.vel.x * -1;
        if ((this.pos.y + this.dim/2 > innerHeight) || this.pos.y - this.dim/2 < 0)
            this.vel.y = this.vel.y * -1;
    }

    this.display = function() {
        push();
        stroke(this.dotColor);
        fill(this.dotColor);
        ellipse(this.pos.x, this.pos.y, this.dim, this.dim);
        pop();
    }

}