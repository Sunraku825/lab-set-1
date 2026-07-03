// -------------------------------------------------------
//  Activity 05: A Lollipop Forest
//
//  https://p5js.org/reference/p5/cylinder/
//  https://p5js.org/reference/p5/fill/
//  https://p5js.org/reference/p5/translate/
//  https://p5js.org/reference/p5/sphere/
//
// -------------------------------------------------------

export function draw() {
    for (let thing = 0; thing < 100; thing++) {
    //This is probably what you have from the last activity, but I have
    //made each translte between trees take two steps, one back
    //to the ground, and one to the right
    push();
    tree();

    translate(150, 0, 0);

    tree();

    translate(159, 0, 0)

    tree();
    pop();
    translate(0, 0, 150);
    push();
    pine();
    translate(150, 0, 0);
    pine();
    translate(150,0,0);
    pine();
    pop();
    translate(0,0,150);
}

function tree() {
    push();
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();
    pop();
}
}
function pine() {
    push();
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);

    // Should you rotate before this translate❓


    //Move up
    translate(0, -90, 0);
    // Or after the translate❓
    rotateX(180);
    //Draw the green cone
    fill(50, 180, 50);
    cone(50, 120);
    pop();
}