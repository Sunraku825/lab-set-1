import * as activity from "./01-grid-terrain";
import { drawGrid } from "@/utils/grid.js";
import { demoMode } from "@/utils/demoMode";

    let size = 30;
    
export function setup() {
    camera(800, -500, 1200);
}

export function draw(t) {
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    stroke(0);
    noStroke();
    if (demoMode)
        demo();
    else
        activity.draw();
}

function groundHeight(x, z) {
    return noise(x / 10, z / 10) * 10;
}

function ground() {
    beginGeometry();
    translate(-size / 2, 0, -size / 2);
    for (let x = 0; x < size; x++) {
        for (let z = 0; z < size; z++) {
            beginShape();
            vertex(x, groundHeight(x, z), z);
            vertex(x + 1, groundHeight(x + 1, z), z);
            vertex(x + 1, groundHeight(x + 1, z + 1), z + 1);
            vertex(x, groundHeight(x, z + 1), z + 1);
            endShape();
        }
    }
    let ground = endGeometry();
    ground.computeNormals();
    return ground;
}

function demo() {

    scale(50);

    push();
    fill("blue");
    translate(0, 5, 0);
    box(size, .5, size);
    pop();

    fill("green");
    model(ground());
}

