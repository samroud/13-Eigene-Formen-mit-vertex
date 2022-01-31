
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //ortho(); // SANS PERSPECTIVE

  //debugMode()
}

let speed = 0.01
function draw() {
  background(0)
  //orbitControl();
  noStroke()
  rotateX(sin(frameCount * speed))
  rotateY(cos(frameCount * speed))
  rotateZ(-sin(frameCount * speed))

  pointLight(0, 0, 255, 0, -windowWidth/2, 600)
  pointLight(255, 0, 0, 0, -windowWidth/2, 0)


 for (let x = -200; x <= 200; x +=40){
    for (let y = -200; y <= 200; y +=40){
        for (let z = -200; z <= 200; z +=40){

          push()
          translate(x,y,z)
          sphere(10);
          pop()
          //vertex(x, y, z)
        }
    }
  }
  
}