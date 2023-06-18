class Wave {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = 0;
        this.height = 0;
    };

    draw(context) {
        context.fillStyle = "red";
        context.fillRect(this.positionX, this.positionY, this.width, this.height);
    }

    update() {
        this.width += 5;
        this.height += 5;
    }
};

class PaperBoat {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = 100;
        this.height = 100;
    }

    draw(context) {
        context.fillStyle = "green";
        context.fillRect(this.positionX, this.positionY, this.width, this.height);
    }

    update(canvas) {
        if (this.positionX <= canvas.width - 100) {
            
        }
        
    }
};


const game = {
    canvas: null,
    canvasContext: null,
    paperBoat: null,
    wave: null,

    init: function() {
        this.canvas = document.querySelector("#game");
        this.canvasContext = this.canvas.getContext("2d");
        this.setFullscreen();

        this.canvas.addEventListener("click", this.onclick.bind(this));

        this.paperBoat = new PaperBoat(250, 250);
        this.wave = new Wave(10, 10);
    },

    setFullscreen: function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    draw: function() {
        // Clear screen
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.wave.draw(this.canvasContext);
        this.paperBoat.draw(this.canvasContext);

        this.update();
        requestAnimationFrame(this.draw.bind(this));
    },

    update: function() {
        this.wave.update();
        this.paperBoat.update(this.canvas);
    },

    onclick: function(event) {
        this.wave.positionX = event.clientX;
        this.wave.positionY = event.clientY;
        this.wave.width = 0;
        this.wave.height = 0;
    }
};

game.init();
game.draw();