//I will show you ARRAYS and lead you on a multiball journey!

let gravity = vector(0, 9.8, 0);

let balls = [
    {
        position: vector(5, -4, 0),
        velocity: vector(-5, -8, 3.5),
        red: 255,
        green: 128,
        blue: 0
    },
    {
        position: vector(-3, -3, 2),
        velocity: vector(2, -6, 4.5),
        red: 255,
        green: 0,
        blue: 255
    },
    {
        position: vector(-3, -2, 2),
        velocity: vector(5, -2, 4.5),
        red: 0,
        green: 255,
        blue: 255
    },
    {
        position: vector(3, -3, 4),
        velocity: vector(2, -6, 5.5),
        red: 0,
        green: 255,
        blue: 0
    },
    {
        position: vector(-2, -3, -3),
        velocity: vector(2, -6, 4.5),
        red: 0,
        green: 0,
        blue: 255
    }
];

export function setup() {
    let extraBalls = 0;
    for (let i = 0; i < extraBalls; i++) {
        balls.push({
            position: vector(random(-5, 5), random(-10, 0), random(-5, 5)),
            velocity: vector(random(-5, 5), random(-10, 5), random(-5, 5)),
            red: random(0, 255),
            green: random(0, 255),
            blue: random(0, 255)
        });
    }
}

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
    fill(ball.red, ball.green, ball.blue);
    sphere(.3);
    pop();
}