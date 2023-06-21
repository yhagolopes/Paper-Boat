import Boat from "./boat.js";
import Wave from "./wave.js";
import Renderer from "./renderer.js";

class Game {
    constructor(canvas, boatImage) {
        this.canvas = canvas;
        this.canvasContext = this.canvas.getContext("2d");
        this.setFullscreen();

        this.paperBoat = new Boat(this.canvas, boatImage);
        this.waves = [];
        this.renderer = new Renderer(this.canvasContext);

        // .bind(this) for this context not to be lost
        this.canvas.addEventListener("click", this.clickEvent.bind(this));
    }

    setFullscreen() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    runLoop() {
        // Clear screen
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.paperBoat.draw(this.renderer);
        this.paperBoat.update(this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.waves.length; i++) {
            this.waves[i].draw(this.renderer);
            this.waves[i].update(this.paperBoat, this.canvas.width, this.canvas.height);

            if (this.waves[i].outsideBounds === true) {
                this.waves.splice(i, 1);
            }
        }

        // Call this function again with the same context
        requestAnimationFrame(this.runLoop.bind(this));
    }

    // Callback function
    clickEvent(event) {
        this.waves.push(new Wave(event.clientX, event.clientY));
    }
};

export default Game;