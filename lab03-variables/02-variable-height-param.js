// -------------------------------------------------------
//  Variable Height trees specified by a parameter
//
//  This lab makes the height variable a PARAMETER
//
// -------------------------------------------------------

export function draw() {
    tree(250,300);
    translate(120, 0, 0);   //Translate right to next tree

    tree(1110,100);
    translate(120, 0, 0);   //Translate right to next tree

    tree(750,166);
}

//Something new‼️The height variable is now a PARAMETER. You
//can use is to get different results from the tree function...
function tree(height,radius) {
    if (radius > height) {
    radius = height -10;
    }
    if (height < 50) {
        height = 50;

    }
    if (radius > 250) {
    radius = 250;
    }
    if (height > 1000) {
        height = 1000;
    }
    push();
    translate(0, -height / 2, 0);
    fill(150, 90, 20);
    cylinder(10, height);
    translate(0, -height / 2 - 40, 0);
    fill(50, 180, 50);
    sphere(radius);
    pop();
}