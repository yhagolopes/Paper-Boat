import * as Utils from "./utils.js";

class Boat {
    constructor(posX, posY) {
        this.position = {
            x: posX, 
            y: posY
        };

        this.width = 100;
        this.height = 100;
        this.color = "green";
    }

    draw(renderer) {
        renderer.drawQuad(this);
    }

    update(canvas, wave) {
        if (wave.collided === false) {
            if (Utils.checkCollide(wave, this)) {
                console.log("Collided");
                wave.collided = true;
            }
        }
    }
};

export default Boat;