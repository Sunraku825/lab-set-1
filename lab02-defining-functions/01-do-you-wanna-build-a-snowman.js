// -------------------------------------------------------
//  Do you want to build a snowman?
//
//  Practice what we did yesterday!
//
//  Start by adjusting the size and position of the spheres
//  to make a better snowman. Compare it with the demo and
//  add a hat.
//
//  Easy? You can add eyes, a carrot nose, a pipe and even
//  some arms.
//
//
//  How do I draw a cylinder?
//      https://p5js.org/reference/p5/cylinder/
//  How do I change colors?
//      https://p5js.org/reference/p5/fill/
//  How do I move?
//      https://p5js.org/reference/p5/translate/
//  How do I draw a sphere?
//    https://p5js.org/reference/p5/sphere/
// -------------------------------------------------------
export function draw(){
    fill(200);
    translate(0,-50,0);
    sphere(85);
    translate(0,-85,0);
    sphere(65);
    translate(-15,-10,-40);
    rotateX(65);
    fill('brown');

    cylinder(7,220);
    rotateX(-65);
    translate(15,10,40);
    translate(0,-90,0);
    fill(200)
    sphere(50);
    fill('black');
    translate(0,-40,0)
    cylinder(50,15);
    fill('black');
    cylinder(20,100);
    translate(-30,40,0)
    rotateZ(90)
    fill('orange');
    cone(25,90)
    rotateZ(-90);
    translate(-7,-17,20);
    fill('black')
    sphere(10)
    translate(0,0,-40);
    fill('black');
    sphere(10);
}