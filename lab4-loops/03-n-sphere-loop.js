// -------------------------------------------------------
//  ??? spheres in a row.
//
// 
//
// -------------------------------------------------------

export function draw() {
   fill('brown');
    let x = 0;
    let count = 100
    randomSeed(1);
    translate(100 + (-300), 0, 0);
    while (x < count) {
        sphere(random(50,200),);
        rotateX(random(-180,180));
        rotateY(random(-180,180));
        rotateZ(random(-180,180));
        translate(100, 0, 0);
          x = x + 1;
      
    }
  
    
    for (let t = 0; t < 10; t++) {
        fill('yellow');
        sphere(random(50,200));
        translate(0, -300, 0);
        rotateZ(random(-180,180));
        rotateY(random(-180,180));
        fill('blue');
        sphere();


    }

}