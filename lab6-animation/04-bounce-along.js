// -------------------------------------------------------
//  Falling Ball
//
//  We are going to make the ball bounce AND move along the x-axis
//
// -------------------------------------------------------


let positionY = -4;
let velocityY = 0;
const gravity = 9.8;

let positionX = 5;
let velocityX = -.75;

export function draw(time, deltaTime) {
    positionY = positionY + velocityY * deltaTime;
    velocityY = velocityY + gravity * deltaTime;
    positionX = positionX + velocityX * deltaTime;
    velocityX = velocityX * .9999999

    if (positionY >= 0 && positionX > -5.1) {
        positionY = 0;
        velocityY = -velocityY;
        velocityY = velocityY * 0.8;
    }
    translate(positionX, positionY, 0);
    fill(50, 255, 50);
    sphere(.1);
}