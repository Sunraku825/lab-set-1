//In this activity we are going to make a new variable named ball.
//It will be an OBJECT containing two vectors named position
//and velocity

let ball = {
    position: vector(5, - 5, 0),
    velocity: vector(-5, -8, -3.5),

}

let gravity = vector(0, 9.8, 0);

export function draw(t, dt) {

    ball.position = ball.position.plus(ball.velocity.times(dt));
    ball.velocity = ball.velocity.plus(gravity.times(dt));

    if (ball.position.y >= 0) {
        ball.position.y = 0;
        ball.velocity.y = -ball.velocity.y;
    }
    if (ball.position.y <= -10) {
        ball.position.y = -10;
        ball.velocity.y = -ball.velocity.y;
    }
    if (ball.position.x > 5) {
        ball.position.x = 5;
        ball.velocity.x = -ball.velocity.x;
    }
    if (ball.position.x < -5) {
        ball.position.x = -5;
        ball.velocity.x = -ball.velocity.x;
    }
    if (ball.position.z > 5) {
        ball.position.z = 5;
        ball.velocity.z = -ball.velocity.z;
    }
    if (ball.position.z < -5) {
        ball.position.z = -5;
        ball.velocity.z = -ball.velocity.z;
    }

    //Draw the ball
    push();
    translate(ball.position.x, ball.position.y, ball.position.z);
    fill(50, 255, 50);
    sphere(.3);
    pop();

}