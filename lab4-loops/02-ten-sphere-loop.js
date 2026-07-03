// -------------------------------------------------------
//  10 Spheres in a row.
//
//  WOW THAT LAST ACTIVITY WAS PAINFUL. I'll put a slide up
//  on the screen that should help you do this...
//
// -------------------------------------------------------

export function draw() {
    //1️⃣ Translate 900 units to the LEFT
    let x = 0;
    translate(-900, 0, 0);
    while (x < 10) {
        sphere();
        translate(200, 0, 0);
        x = x + 1;
    }
    //2️⃣ Create a while loop that goes 10 times and...

    //3️⃣ Draw a sphere
    //4️⃣ Translate 200 units right.

}