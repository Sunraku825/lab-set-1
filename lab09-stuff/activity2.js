import * as activity from "./02-city";
import { drawAxes } from "@/utils/axes.js";
import { drawGrid } from "@/utils/grid.js";
import { demoMode } from "@/utils/demoMode.js";
import { drawWithPause } from "@/utils/animatedDraw.js";

export function setup() {
    camera(300, -300, 700);
}

export function draw(t) {
    orbitControl();
    background(30);
    ambientLight(80);
    directionalLight(255, 255, 255, 1, 1, -1);
    stroke(0);
    drawWithPause(demoMode ? demo : activity.draw);
}

let grid = [
    [1, 1, 3, 3, 3],
    [0, 1, 0, 0, 2],
    [0, 1, 1, 1, 1],
    [0, 2, 3, 1, 0],
    [3, 3, 0, 1, 0],
];

function tree() {
    push();
    noStroke();
    scale(0.004);
    translate(0, -50, 0);
    fill(150, 90, 20);
    cylinder(10, 100);
    translate(0, -90, 0);
    fill(50, 180, 50);
    sphere();
    pop();
}

function demo() {
    let size = 5;
    scale(50);

    push();
    translate(-.5,.1,-.5);
    fill(100,200,50);
    box(size * .99, 0.2, size * .99);
    pop();

    translate(-size / 2, 0, -size / 2);


    
    for (let x = 0; x < size; x++) {
        for (let z = 0; z < size; z++) {
            push();
            translate(x, 0, z);
            if (grid[x][z] == 1) {
                fill(100);
                box(1, .15, 1);
            }
             if (grid[x][z] == 2) {
                fill(150);
                translate(0,-1,0);
                box(.8, 2, .8);
             }
             if ( grid[x][z] == 3 ){
                tree();
             }
            pop();
        }
    }
}
