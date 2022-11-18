let nums = [100, 150,200,250,300];
let numIndex = 0;


function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}

function draw() {
    background(220);

 
    circle(200, 200, nums[numIndex]);

    circle(100, 100, nums[numIndex]);

}

//function keyPressed(){ 
  //  if (numIndex > 3){
//numIndex=0;
 //} else{
   //  numIndex = numIndex + 1;

   //or 
function keyPressed(){ 
    if (numIndex == 5 ){
        numIndex=0;
 } else{
     numIndex++;

 }
}