// -------------------------------------------------------
//  Bouncing Ball
//
//  We are going to learn and write an "IF" statement!
//
// -------------------------------------------------------


let position = -4;
let velocity = 0;
const gravity = 9.8;

export function draw(time, deltaTime) {


    translate(0, position, 0);
    fill(50, 255, 50);
    sphere(.1);
}