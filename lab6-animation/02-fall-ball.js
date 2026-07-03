// -------------------------------------------------------
//  Falling Ball
//
//  HOLY CRAP THERE IS CALCULUS HIDDEN IN THIS THING
//
// -------------------------------------------------------



let position = -2;
let velocity = -4;
const gravity = 9.8;




export function draw(time, deltaTime) {
    velocity = velocity + gravity * deltaTime;
    position = position + velocity * deltaTime;
    
    if (position > 0) {
        velocity = -velocity * .9;
        position = 0;

    }

        translate(0, position, 0);
        fill(50, 255, 50);
        sphere(.1);

    }

