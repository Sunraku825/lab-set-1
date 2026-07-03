// -------------------------------------------------------
//  Do you want to build a snowman?
//
//  Earlier you made a snow man as a warmup.
//
//  Create a snow globe similar to the demo. I want you to
//  1. Create a snowMan() function (Copy from earlier!)
//  2. Create a pineTree() function (copy from earlier!)
//  3. Use them both from your draw() function
//  4. Look up how to make transparency. Do that last.
//
//  Make use of a lot of push and pop!
//
// -------------------------------------------------------
export function draw() {
    push();
    fill('green');
    cylinder(500, 175)
    pop();
    translate(0, -150, 0);
    fill('green');
    cylinder(445, 150)
    translate(0, -75, 0);
    fill('white');
    cylinder(415, 30);
    push();
    translate(-168, 0, -120);
    pine();
    pop();
    push();
    translate(45, 0, 255);
    pine();
    pop();
    push();
    translate(50, 0, 80);
    snowman();
    pop();
    push();
    translate(125, 0, -185);
    rotateY(180);
    snowman();
    pop();
    push();
    translate(0, -115, 0);
    fill(125, 25)
    sphere(432);
    pop();



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
function snowman() {
    fill(200);
    translate(0, -50, 0);
    sphere(85);
    translate(0, -85, 0);
    sphere(65);
    translate(-15, -10, -40);
    puhs();
    rotateX(65);
    fill('brown');
    pop();
    cylinder(7, 220);
    rotateX(-65);
    translate(15, 10, 40);
    translate(0, -90, 0);
    fill(200)
    sphere(50);
    fill('black');
    translate(0, -40, 0)
    cylinder(50, 15);
    fill('black');
    cylinder(25, 100);
    translate(-30, 40, 0)
    rotateZ(90)
    fill('orange');
    cone(25, 90)
    rotateZ(-90);
    translate(-7, -17, 20);
    fill('black')
    sphere(10)
    translate(0, 0, -40);
    fill('black');
    sphere(10);
}