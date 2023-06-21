class Renderer {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    drawQuad(quad) {
        this.canvasContext.fillStyle = quad.color;
        this.canvasContext.fillRect(quad.position.x, quad.position.y, quad.size.x, quad.size.y);
    }

    drawCircle(circle) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(circle.position.x, circle.position.y, circle.radius, 0, 2 * Math.PI);
        this.canvasContext.strokeStyle = circle.color;
        this.canvasContext.lineWidth = circle.lineWidth;
        this.canvasContext.stroke();
    }

    drawImage(object) {
        if (object.image.hasLoaded) {
            this.canvasContext.drawImage(object.image.data, object.position.x, object.position.y, object.size.x, object.size.y);
        }
    }
};

export default Renderer;