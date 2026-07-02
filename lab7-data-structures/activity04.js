import { vector } from "@/utils/vec3.js";
import * as activity from "./04-multi-ball-object.js";
import { drawGrid } from "@/utils/grid.js";
import showTime from "@/utils/timer";

export function setup() {
    camera(300, -200, 700);
}

export function draw(t, dt) {
    scale(50);
    showTime(t);
    orbitControl();
    background(30);
    ambientLight(80);
    translate(0,4,0);


    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid(10, 10);

    push()
    translate(0, -10, 0);
    drawGrid(10, 10, [60, 60, 60]);
    pop();

    push();
    translate(5, -5, 0);
    rotateZ(90);
    drawGrid(10, 10, [60, 60, 60]);
    pop();

    push();
    translate(-5, -5, 0);
    rotateZ(90);
    drawGrid(10, 10, [60, 60, 60]);
    pop();

    push();
    translate(0, -5, 5);
    rotateX(90);
    drawGrid(10, 10, [60, 60, 60]);
    pop();

    push();
    translate(0, -5, -5);
    rotateX(90);
    drawGrid(10, 10, [60, 60, 60]);
    pop();

    noStroke();

    activity.draw(t, dt);

}