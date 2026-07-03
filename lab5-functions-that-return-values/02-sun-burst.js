// -------------------------------------------------------
//  Draw a sunburst
//
// -------------------------------------------------------
export function draw() {
    let x = 0
    let degrees = 0
    fill('orange');
    sphere(60);
    while (x < 12) {
        push();
        rotateZ(degrees);
        translate(0, 200, 0);
        fill('yellow');
        cone(25,height(x));
        pop();
        x = x + 1
        degrees = degrees + 30
    }
}

//This function RETURNS either 100 of n is even or
//200 if N is odd. Your job right now is not to understand
//how it works inside (but we can talk about it), but how
//we can use it
function height(n) {
    if (n % 2 == 0) {
        return 100;
    } else {
        return 200;
    }
}