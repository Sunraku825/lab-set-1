//Now that we have created a ball object and have code that updates
//and draws it, we are going to create a new function named bounceBall.
//That function will take a ball as the parameter, update it and draw it.
//We will then replace the ball variable with two, ballOne and ballTwo, and
//call the bounceBall function TWICE, once for each one.

let gravity = vector(0, 9.8, 0);

let ballOne = {
    position: vector(5, -4, 0),
    velocity: vector(-5, -8, 3.5),
    red: 0,
    green: 255,
    blue: 0,
}
let balltwo = {
    position: vector(6, -4, 3),
    velocity: vector(-5, 8, 3.5),
      red: 255,
    green: 0,
    blue: 0,
}
let ballthree = {
    position: vector(6, -4, 7),
    velocity: vector(-5, 13, 3.5),
      red: 0,
    green: 0,
    blue: 255,
}
export function draw(t, dt) {
    ballBounce(ballOne, dt);
    ballBounce(balltwo, dt);
    ballBounce(ballthree, dt);

}

function ballBounce(ball, dt) {

    //Do the calculus stuff!
    ball.position = ball.position.plus(ball.velocity.times(dt));
    ball.velocity = ball.velocity.plus(gravity.times(dt));

    //Detect collisions and bounce
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
    fill(ball.red, ball.green, ball.blue);
    sphere(.3);
    pop();

}
