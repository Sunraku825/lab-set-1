// -------------------------------------------------------
//  Draw a little line star burst, then put it in a function.
//  Call that function twice with a translation in between.
//
//  How do I draw a line?
//      https://p5js.org/reference/p5/line/
//  How do I change its color?
//      https://p5js.org/reference/p5/stroke/
//  How do I change the stroke width?
//      https://p5js.org/reference/p5/strokeWeight/
// -------------------------------------------------------

export function draw() {



    rectanglebottom();
shellbottom();

    rectangleside();
    shell();
    function rectanglebottom() {


        beginShape();
        vertex(100, 0, 150);
        vertex(-100, 0, 150);
        vertex(-100, 0, -150);
        vertex(100, 0, -150);
        endShape();

    }
    function rectangleside() {
        fill(211, 211, 211);
        beginShape();
        vertex(100, -50, 150);
        vertex(100, 0, 150);
        vertex(-100, 0, 150);
        vertex(-100, -50, 150);
        endShape();
    }
    beginShape()
    vertex(-100, 0, 150);
    vertex(-100, 0, -150);
    vertex(-100, -50, -150);
    vertex(-100, -50, 150);
    endShape();
    beginShape();
    vertex(100, 0, 150);
    vertex(100, 0, -150);
    vertex(100, -50, -150);
    vertex(100, -50, 150);
    endShape();
    beginShape();
    vertex(-100, -50, -150);
    vertex(-100, 0, -150);
    vertex(100, 0, -150);
    vertex(100, -50, -150);
    endShape();
}
function shellbottom() {
    fill(211,211,211);
beginShape();
vertex(150, -50, 225);
vertex(-150, -50, 225);
vertex(-150, -50, -225);
vertex(150, -50, -225);
endShape();
}
function shell() { 
    
    beginShape();
    vertex(150,-50,225);
    vertex(-150,-50,225);
    vertex(-150,-125,225);
    vertex(150,-125,225);
    endShape();
        beginShape();
    vertex(-150,-50,-225);
    vertex(150,-50,-225);
    vertex(150,-125,-225);
    vertex(-150,-125,-225);
    endShape();
}
/*   pyrimid(-300,100);
   translate(300, 0, 0);
   pyrimid(-200,100);
   solidpyrimid(100);



}
function star() {

   stroke('red');
   strokeWeight(4);
   line(0, 0, 0, 100, -100, 100);
   line(0, 0, 0, 100, 100, 100);
   line(0, 0, 0, 100, -100, -100);
   line(0, 0, 0, -100, -100, 100);
   line(0, 0, 0, -100, -100, -100);
   line(0, 0, 0, -100, 100, 100);
   line(0, 0, 0, 100, 100, -100);
   line(0, 0, 0, -100, 100, -100);
   line(0, 0, 0, 0, 0, 100);
   line(0, 0, 0, 100, 0, 0);
   line(0, 0, 0, 0, 100, 0);
   line(0, 0, 0, 0, -100, 0);
   line(0, 0, 0, 0, 0, -100);
   line(0, 0, 0, -100, 0, 0);

}

function pyrimid(height,width) {

   stroke('red');
   strokeWeight(4);
   line(0, height, 0, width, 0, width);
   line(0, height, 0, width, 0, -width);
   line(0, height, 0, -width, 0, width);
   line(0, height, 0, -width, 0, -width);
   line(width, 0, width, -width, 0, width);
   line(width, 0, width, width, 0, -width);
   line(width, 0, -width, -width, 0, -width);
   line(-width, 0, -width, -width, 0, width);

}
function solidpyrimid(vertexsize) { 
 
beginShape();
vertex(vertexsize,0,vertexsize);
vertex(-vertexsize,0,vertexsize)
vertex(-vertexsize,0,-vertexsize);
vertex(vertexsize,0,-vertexsize);
endShape();
beginShape();
vertex(vertexsize,0,vertexsize);
vertex(0,-200,0);
vertex(-vertexsize,0,vertexsize);
endShape();
beginShape();
vertex(-vertexsize,0,-vertexsize);
vertex(0,-200,0);
vertex(vertexsize,0,-vertexsize);
endShape();
beginShape();
vertex(vertexsize,0,-vertexsize);
vertex(0,-200,0);
vertex(vertexsize,0,vertexsize);
endShape();
beginShape();
vertex(-vertexsize,0,-vertexsize);
vertex(0,-200,0);
vertex(-vertexsize,0,vertexsize);
endShape();

}*/