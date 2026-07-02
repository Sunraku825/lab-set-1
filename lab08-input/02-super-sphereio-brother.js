//  OH SNAP I FORGET WHAT ALL THIS DOES.
//
//  You are going to figure out and comment each section of code
//  replace the WTF with a comment that explains the code that
//  comes after it.

let position = vector(0, 0, 0);
let velocity = vector(0, 0, 0);
let gravity = vector(0, 9.8, 0);

export function draw(t, dt) {

  //If the left arrow is pressed add some Left (X-) velocity
  if (keyIsDown(LEFT_ARROW)) {
    velocity.x -= .2;
  }

  //WTF
  if (keyIsDown(RIGHT_ARROW)) {
    velocity.x += .2;
  }

  //WTF
  if (keyIsDown(UP_ARROW)) {
    velocity.z -= .2;
  }

  //WTF
  if (keyIsDown(DOWN_ARROW)) {
    velocity.z += .2;
  }

  //WTF!!
  if (keyIsDown(32) && position.y == 0) {
    velocity.y = -5;
  }

  //WTF
  position = position.plus(velocity.times(dt));
  velocity = velocity.plus(gravity.times(dt));

  //WTF!!
  if (position.y == 0) {
    velocity.x = velocity.x * .95;
    velocity.z = velocity.z * .95;
  }

  //WTF
  if (position.y > 0) {
    position.y = 0;
    velocity.y = 0;
  }

  //WTF
  push();
  fill(0, 0, 0);
  scale(1, 0, 1);
  translate(position.x, 0, position.z);
  sphere(.3);
  pop();

  //WTF
  push();
  fill(255, 64, 64);
  translate(0, -.4, 0);
  if (position.y == 0) {
    //WTF
    translate(0, - Math.sin(3 * t) * .05, 0);
  }
  translate(position.x, position.y, position.z);
  sphere(.3);
  pop();
}
