import { vector } from "@/utils/vec3.js";
import * as activity from "./02-super-sphereio-brother.js";
import { drawAxes } from "@/utils/axes.js";
import { drawGrid } from "@/utils/grid.js";
import { demoMode } from "@/utils/demoMode";

export function setup() {
    camera(300, -300, 700);
}

export function draw(t, dt) {
    scale(100);
    orbitControl();
    background(128,128,256 );
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    drawGrid(10,10);
    noStroke();
    if (demoMode) {
        demo(t, dt);
    } else {
        activity.draw(t, dt);
    }
}

function demo() {
    box();
}
