
// import pixi, p2 and phaser ce
import "pixi";
import "p2";
import * as Phaser from "phaser-ce";

/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
export class Game extends Phaser.Game {
    /**
     * Creates an instance of Game.
     * @memberof Game
     */
    constructor() {
        // call parent constructor
        super( 0, 0, Phaser.CANVAS, "game", null );

        // add some game states
        this.state.start('Home');
        // start with boot state
    }
}
