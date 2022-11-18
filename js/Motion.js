let xPos, yPos, xSpeed, ySpeed;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
    xPos = width/2;
    yPos = height/2;
    xSpeed = 10;
    ySpeed = 1;
}

function draw() {
    background(220);
    circle(xPos, yPos, 100, 100);

    //horizontal movement
    xPos = xPos + xSpeed;
    if (xPos + 50 > width || xPos-50 < 0){
        xSpeed *= -1; //inverts the value
    }

    //vertical movement
    yPos = yPos + ySpeed;
    if (yPos+50 > height || yPos-50 < 0){
        ySpeed *= -1;
    }
}