import * as Utils from "./utils.js";

class Boat {
    constructor(canvas, boatImage) {
        this.position = {
            x: Utils.getRandom(0, canvas.width), 
            y: Utils.getRandom(0, canvas.height)
        };

        this.distanceTo = {
            x: Utils.getRandom(-10, 10),
            y: Utils.getRandom(-10, 10)
        };

        this.size = {
            x: canvas.width / 10,
            y: canvas.height / 14
        };

        this.image = boatImage;
        this.velocity = 0.02;
    }

    draw(renderer) {
        renderer.drawImage(this);
    }

    update(boundX, boundY) {
        this.position.x += this.distanceTo.x * this.velocity;
        this.position.y += this.distanceTo.y * this.velocity;

        this.checkBounds(boundX, boundY);
    }

    checkBounds(boundX, boundY) {
        if (this.position.x <= 0) {
            this.position.x = 0;
        }
    
        if (this.position.y <= 0) {
            this.position.y = 0;
        }
    
        if (this.position.x + this.size.x >= boundX) {
            this.position.x = boundX - this.size.x;
        }
    
        if (this.position.y + this.size.y >= boundY) {
            this.position.y = boundY - this.size.y;
        }
    }
};

export default Boat;