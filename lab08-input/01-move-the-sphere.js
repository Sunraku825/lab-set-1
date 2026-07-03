// -------------------------------------------------------
//  We will look at this, and then you will replace x y & z
//  with a vector, for review and practice.
// -------------------------------------------------------

let x = 0;
let y = -.2;
let z = 0;

export function draw() {

  if (keyIsDown(LEFT_ARROW)) {
    x -= .1;
  }
 
  if (keyIsDown(RIGHT_ARROW)) {
    x += .1;
  }

  if (keyIsDown(UP_ARROW)) {
    z -= .1;
  }
 
  if (keyIsDown(DOWN_ARROW)) {
    z += .1;
  }


  push();
  fill(255,64,255);
  translate(x, y, z);
  sphere(.3);
  pop();

  
}
