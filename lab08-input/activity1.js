import { vector } from "@/utils/vec3.js";
import * as activity from "./01-move-the-sphere";
import { drawAxes } from "@/utils/axes.js";
import { drawGrid } from "@/utils/grid.js";

export function setup() {
    camera(300, -300, 700);
}

export function draw(t) {
    scale(100);
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid(10,10);
    noStroke();
    activity.draw();
}

function demo() {
    box();
}
