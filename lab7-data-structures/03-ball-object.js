//In this activity we are going to make a new variable named ball.
//It will be an OBJECT containing two vectors named position
//and velocity

let position = vector(5, -4, 0);
let velocity = vector(-5, -8, 3.5);
let gravity = vector(0, 9.8, 0);

export function draw(t, dt) {

    //Do the calculus stuff!
    position = position.plus(velocity.times(dt));
    velocity = velocity.plus(gravity.times(dt));

    //Detect collisions and bounce
    if (position.y >= 0) {
        position.y = 0;
        velocity.y = -velocity.y;
    }
    if (position.y <= -10) {
        position.y = -10;
        velocity.y = -velocity.y;
    }
    if (position.x > 5) {
        position.x = 5;
        velocity.x = -velocity.x;
    }
    if (position.x < -5) {
        position.x = -5;
        velocity.x = -velocity.x;
    }
    if (position.z > 5) {
        position.z = 5;
        velocity.z = -velocity.z;
    }
    if (position.z < -5) {
        position.z = -5;
        velocity.z = -velocity.z;
    }

    //Draw the ball
    push();
    translate(position.x, position.y, position.z);
    fill(50, 255, 50);
    sphere(.3);
    pop();

}