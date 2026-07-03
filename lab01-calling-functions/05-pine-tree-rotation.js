// -------------------------------------------------------
//  A Pine Tree
//
//  What is wrong with this tree? Can you fix it?
//  Each of these functions rotates the given number of
//  degrees around the given axis.
//
//  Which two will work?
//  ❓PUT YOUR ANSWER HERE
//
//  https://p5js.org/reference/p5/rotateX/
//  https://p5js.org/reference/p5/rotateY/
//  https://p5js.org/reference/p5/rotateZ/
//
// -------------------------------------------------------
export function draw(){
    //Draw the brown trunk
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
    cone(50,120);
}