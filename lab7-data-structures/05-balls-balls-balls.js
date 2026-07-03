//I will show you ARRAYS and lead you on a multiball journey!

let gravity = vector(0, 9.8, 0);


let balls = [{
    position: vector(5, -4, 0),
    velocity: vector(-5, -8, 3.5),
},
{
    position: vector(-3, -3, 2),
    velocity: vector(2, -6, 4.5),
},
{
    position: vector(-3, 7, 2),
    velocity: vector(2, 36, 11),
},
{
    position: vector(-3, 7, -2),
    velocity: vector(-2, 6, 7),
}
];

export function draw(t, dt) {
    for (let ball of balls) {
        bounceBall(ball, dt);

    }
}

function bounceBall(ball, dt) {
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
    fill(50, 255, 50);
    sphere(.3);
    pop();
}