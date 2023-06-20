class Wave {
    constructor(posX, posY) {
        this.position = {
            x: posX, 
            y: posY
        };

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

export default Wave;