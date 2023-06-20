class Renderer {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    drawQuad(quad) {
        this.canvasContext.fillStyle = quad.color;
        this.canvasContext.fillRect(quad.position.x, quad.position.y, quad.width, quad.height);
    }

    drawCircle(circle) {
        this.canvasContext.beginPath();
        this.canvasContext.arc(circle.position.x, circle.position.y, circle.radius, 0, 2 * Math.PI);
        this.canvasContext.stroke();
    }
};

export default Renderer;