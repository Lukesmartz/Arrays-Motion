let words = ["Plymouth", "is","awesome"];
let wordIndex = 0;


function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}

function draw() {
    background(220);
    textSize(36);
    text(words,[wordIndex], width/2,height/2);
}


function mousePressed(){ 
    if (wordIndex== words.length-1){
        wordIndex= 0;
    } else {
        wordIndex++;
    }
}





