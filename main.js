class Wave {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.radius = 0;
        this.collided = false;
    }

    draw(renderer) {
        renderer.drawCircle(this);
    }

    update() {
        this.radius += 5;
    }
};

class PaperBoat {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = 100;
        this.height = 100;
        this.color = "green";
    }

    draw(renderer) {
        renderer.drawQuad(this);
    }

    update(canvas, wave) {
        if (this.positionX == wave.positionX) {

        }
        
    }
};

class Renderer {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    drawQuad(quad) {
        this.canvasContext.fillStyle = quad.color;
        this.canvasContext.fillRect(quad.positionX, quad.positionY, quad.width, quad.height);
    }

    drawCircle(circle) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(circle.positionX, circle.positionY, circle.radius, 0, 2 * Math.PI);
        this.canvasContext.stroke();
    }
};

class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvasContext = canvas.getContext("2d");
        this.setFullscreen();

        // .bind(this) for this context not to be lost
        this.canvas.addEventListener("click", this.clickEvent.bind(this));

        this.paperBoat = new PaperBoat(250, 250);
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
        this.wave.positionX = event.clientX;
        this.wave.positionY = event.clientY;
        this.wave.radius = 0;
    }
};

const game = new Game(document.querySelector("#game"));
game.runLoop();