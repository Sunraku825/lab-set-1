// -------------------------------------------------------
//  A Lollipop Forest
//
//  
//
//  https://p5js.org/reference/p5/cylinder/
//  https://p5js.org/reference/p5/fill/
//  https://p5js.org/reference/p5/translate/
//  https://p5js.org/reference/p5/sphere/
//
// -------------------------------------------------------

export function draw() {
    //2️⃣ Copy your code from Lab 1 Activity 4, but replace each block
    //of code that draws a tree with one line that calls the tree function
    tree();
    translate(150, 0, 0);
    tree();
    translate(-150,0,0);


    // Translate 120 units Right and 140 down

    //Copy and paste your tree code again

    //Translate 120 units Right and 140 down

    //Copy and paste your tree code again
}

function tree() {
    translate(0, -50, 0);

    fill('brown');

    cylinder(10, 100);

    translate(0, -90, 0);

    fill('green');

    sphere();

    translate(0, 140, 0)


    //1️⃣ Copy and paste your 6 or so lines of tree code from Lab 1 Activity 4.
    //(Just the code to draw ONE tree)

}