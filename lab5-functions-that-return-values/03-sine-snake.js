// -------------------------------------------------------
//  LET THERE BE MOVEMENTS
//
//  We'll talk this one through together....
//
// -------------------------------------------------------
export function draw(time) {

    let n = -1000;
    while (n <= 1000){
        push();
fill(random(0,225),random(0,225),random(0,225))
        translate(random(-500,500), Math.tan(n+time) * 200,(random(-500,500)))

        sphere(random(25,50));
        pop();
        n = n + 25;
    }
}