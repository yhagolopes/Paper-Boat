import Boat from "./boat.js";
import Wave from "./wave.js";
import Renderer from "./renderer.js";

import * as Utils from "./utils.js";

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = canvas.getContext("2d");
        this.setFullscreen();

        // .bind(this) for this context not to be lost
        this.canvas.addEventListener("click", this.clickEvent.bind(this));

        this.paperBoat = new Boat(250, 250);
        this.wave = new Wave(10, 10);
        this.renderer = new Renderer(this.canvasContext);
    }

    setFullscreen() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    runLoop() {
        // Clear screen
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.wave.draw(this.renderer);
        this.paperBoat.draw(this.renderer);

        this.wave.update();
        this.paperBoat.update(this.canvas, this.wave);

        // Call this function again with the same context
        requestAnimationFrame(this.runLoop.bind(this));
    }

    // Callback function
    clickEvent(event) {
        this.wave.position.x = event.clientX;
        this.wave.position.y = event.clientY;
        this.wave.radius = 0;

        let distance = Utils.getDistance(this.wave.position, this.paperBoat.position);
        console.log(distance);
    }
};

export default Game;