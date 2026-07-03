// -------------------------------------------------------
//  Growing Spheres
//
//  How do I draw a sphere of a certain size?
//    https://p5js.org/reference/p5/sphere/
//
// -------------------------------------------------------

export function draw() {
    let x = 0
    let radius = 1
    let growth = 10
    translate(-900, 0, 0);
    while (x < 10) {
        sphere(radius);
        translate(200, 0, 0);
        x = x + 1;
        radius = radius + growth;
    }
}