let position = vector(5, -4, 0);

let velocity = vector(9, 2, 19);

let gravity = vector(0, 9.8, 0);

let position2 = vector(9, -3, 8);

let velocity2 = vector(13, 5, 1);


export function draw(t, dt) {

    push();

    position = position.plus(velocity.times(dt));
    velocity = velocity.plus(gravity.times(dt));
    position2 = position2.plus(velocity2.times(dt));
    velocity2 = velocity2.plus(gravity.times(dt));

    if (position.y >= 0) {
        position.y = 0;
        velocity.y = -velocity.y;
        velocity.y = velocity.y * 1;
    }

    if (position.x <= -5) {
        position.x = -5;
        velocity.x = -velocity.x;
        velocity.x = velocity.x * 1;
    }

    if (position.z <= -5) {
        position.z = -5;
        velocity.z = -velocity.z;
        velocity.z = velocity.z * 1;
    }

    if (position.y <= -10) {
        position.y = 10;
        velocity.y = -velocity.y;
        velocity.y = velocity.y * 1;
    }

    if (position.x >= 5) {
        position.x = 5;
        velocity.x = -velocity.x;
        velocity.x = velocity.x * 1;
    }

    if (position.z >= 5) {
        position.z = 5;
        velocity.z = -velocity.z;
        velocity.z = velocity.z * 1;
        fill(0, 255, 50);

    }
    translate(position.x, position.y, position.z);

    sphere(.5);

    pop();

    push();

    if (position2.y >= 0) {
        position2.y = 0;
        velocity2.y = -velocity2.y;
        velocity2.y = velocity2.y * 1;
    }

    if (position2.x <= -5) {
        position2.x = -5;
        velocity2.x = -velocity2.x;
        velocity2.x = velocity2.x * 1;
    }

    if (position2.z <= -5) {
        position2.z = -5;
        velocity2.z = -velocity2.z;
        velocity2.z = velocity2.z * 1;
    }

    if (position2.y <= -10) {
        position2.y = 10;
        velocity2.y = -velocity2.y;
        velocity2.y = velocity2.y * 1;
    }

    if (position2.x >= 5) {
        position2.x = 5;
        velocity2.x = -velocity2.x;
        velocity2.x = velocity2.x * 1;
    }

    if (position2.z >= 5) {
        position2.z = 5;
        velocity2.z = -velocity2.z;
        velocity2.z = velocity2.z * 1;
    }


    translate(position2.x, position2.y, position2.z);

    fill(190, 50, 0);
    sphere(.5);
    pop();

}

