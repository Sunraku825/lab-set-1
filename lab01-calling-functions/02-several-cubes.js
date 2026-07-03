// -------------------------------------------------------
//  Several Cubes
//
//  This activity introduces the translate function. It allows
//  us to move the "cursor" where we are drawing things to a
//  different location.
//
//  The translate function takes THREE parameters, X, Y and Z.
//
//
//  How do I draw a box?
//    https://p5js.org/reference/p5/box/
//  How do I move?
//      https://p5js.org/reference/p5/translate/
//
// -------------------------------------------------------

export function draw() {

  //Draw a box
  box();

  //Move up (-Y) 100 units
  translate(0, -100, 0);

  //Draw another box
  box();

  //Move right (+X) 100 units
  translate(100, 0, 0);

  //Draw another box
  box();

  translate(0,100,0);

box();

  translate(0,0,100);

  box();

  //Move up (-Y) 100 units
  translate(0, -100, 0);

  //Draw another box
  box();

  //Move right (+X) 100 units
  translate(-100, 0, 0);

  //Draw another box
  box();

  translate(0,100,0);

  box();

  //1️⃣ Move DOWN (+Y) 100 units and draw another box

  //2️⃣ Continue on to match the demo
}
