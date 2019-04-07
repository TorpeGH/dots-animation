var population;
var backgroundColor = '#ffffff';

function setup() {
    createCanvas(
        innerWidth,
        innerHeight
    );
    population = new Population();
}

function draw() {
    background(backgroundColor);
    population.run();
}