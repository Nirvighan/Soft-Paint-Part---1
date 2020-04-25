//create all the variables


//var database;
//var firebase;

var drawing = [];

var currentPath = [];

//namespace the functions form html
const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');

function setup() {
  //create the canvas
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  
  //make the drawing with mouse
  canvas.mousePressed(startPath);
 
}

//create the start path function
function startPath()
{
  currentPath = [];
  drawing.push(currentPath);
}



function draw() {
  
  //clear the background
  background(0);
  
  //write the propeties for point when mouse is pressed
  if(mouseIsPressed)
     {
       var point = {
         x:mouseX,
         y:mouseY,
         color: colorInput.value,
         weight: weight.value
       }
     currentPath.push(point);
     }
  
 //run a loop for giving the drawing  color and stroke weight
  for(var i = 0;i < drawing.length;i++)
  {
    beginShape();
    var path = drawing[i];
    for(var j = 0;j < path.length;j++){
      stroke(path[j].color);
  strokeWeight(path[j].weight);
  noFill();
   vertex(path[j].x , path[j].y) 
    
    }
    endShape();   
  }
    
}
