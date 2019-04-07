function Population() {
    this.dots = [];
    this.popsize = 1500;
    this.linecolor = '#2679d3';

    for (var i = 0; i < this.popsize; i++){
        this.dots[i] = new Dot();
    }

    this.distSquared = function (x1, y1, x2, y2) {
        var dx = x2 - x1;
        var dy = y2 - y1;
        return Math.sqrt( dx * dx + dy * dy);
    }

    this.distSquaredMouse = function (x1, y1) {
        var dx = mouseX - x1;
        var dy = mouseY - y1;
        return Math.sqrt( dx * dx + dy * dy);
    }

    this.linkDots = function () {
        for(var i = 0; i < this.popsize; i++){
            for(var j = 0; j < this.popsize; j++){
                this.i_dot = this.dots[i];
                this.j_dot = this.dots[j];

                this.dotsDist = this.distSquared(this.i_dot.pos.x, this.i_dot.pos.y,
                                     this.j_dot.pos.x, this.j_dot.pos.y);

                if( this.dotsDist < this.i_dot.rad){
                    this.mouseDist = this.distSquaredMouse(this.i_dot.pos.x, this.i_dot.pos.y);
                    if (this.mouseDist < 200) {
                        this.brush = map(this.dotsDist, this.i_dot.rad, 0, 0.1, 0.5);
                        push();
                        stroke(this.linecolor);
                        strokeWeight(this.brush);
                        line(this.i_dot.pos.x,
                            this.i_dot.pos.y,
                            this.j_dot.pos.x,
                            this.j_dot.pos.y);
                        pop();
                    }
                }
            }
        }
    }

    this.run = function(){
        for (var i = 0; i < this.popsize; i++){
            this.dots[i].updateLocation();
            this.dots[i].bounce();
            this.dots[i].display();
        }
        this.linkDots();
    }
}