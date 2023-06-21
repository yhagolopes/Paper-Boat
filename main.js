import Game from "./src/game.js";

class boatImage {
    constructor() {
        this.data = new Image();
        this.data.src = "images/boat.png";
        this.hasLoaded = false;
        this.data.onload = this.onLoad.bind(this);
    }

    onLoad() {
        this.hasLoaded = true;
    }
};

const game = new Game(document.querySelector("#game"), new boatImage);
game.runLoop();