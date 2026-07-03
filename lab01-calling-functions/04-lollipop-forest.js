// -------------------------------------------------------
//  A Lollipop Forest
//
//  You can move around to draw a tree, now you are going to
//  do it two more times. I'd suggest you type it out, not
//  copy and paste, so you build "muscle memory".
//
//  Draw a tree, then move back down and over to the right
//  and do it again, and then again!
//
//  https://p5js.org/reference/p5/cylinder/
//  https://p5js.org/reference/p5/fill/
//  https://p5js.org/reference/p5/translate/
//  https://p5js.org/reference/p5/sphere/
export function draw() {
// -------------------------------------------------------
 for (let i = 0; i < 8; i++) {




    //1️⃣ Look up the translate function, and translate UP 50 units
    translate(0,-50, 0);

    fill('brown');

    cylinder(10, 100);

    translate(0, -90, 0);

    fill('green');

    sphere();

    translate(100, 90, 0)

   //Draw the brown trunk
    translate(0, 0, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    
    // Should you rotate before this translate❓
  

    //Move up
    translate(0, -90, 0);
    // Or after the translate❓
rotateX(180);
    //Draw the green cone
    fill(50, 180, 50);
    cone(60,130);

    rotateX(180)

translate(100,90)

    fill('brown');

    cylinder(10, 100);

    translate(0, -90, 0);

    fill('green');

    sphere();

      translate(100, 90, 0)

 

    fill('brown');

    cylinder(10, 100);

    translate(0, -90, 0);

rotateY(45);

    fill('green');

    sphere();

    translate(0,150,100);

    rotateY(-90);

translate(0,-10);
 }
}