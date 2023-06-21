import * as Utils from "./utils.js"

class Wave {
    constructor(posX, posY) {
        this.position = {
            x: posX, 
            y: posY
        };

        this.color = "#0000003b";
        this.radius = 0;
        this.lineWidth = 4;
        this.velocity = 5;
        this.collided = false;
        this.outsideBounds = false;
    }

    draw(renderer) {
        renderer.drawCircle(this);
    }

    update(boat, boundX, boundY) {
        this.radius += this.velocity;

        if (this.collided === false) {
            let collidePointOfBoat = Utils.getCenterOf(boat.position, boat.size);

            if (Utils.checkCollide(this.position, this.radius, collidePointOfBoat)) {
                let positionTo = Utils.getPositionTo(boat.position, this.position, collidePointOfBoat);
                boat.distanceTo = {
                    x: positionTo.x - boat.position.x,
                    y: positionTo.y - boat.position.y
                };

                this.collided = true;
            }
        }

        this.checkBounds(boundX, boundY);
    }

    checkBounds(boundX, boundY) {
        if (this.position.x - this.radius < -boundX && 
            this.position.y - this.radius < -boundY &&
            this.position.x + this.radius > boundX * 2 &&
            this.position.y + this.radius > boundY * 2)
        {
            this.outsideBounds = true;
        }
    }
};

export default Wave;