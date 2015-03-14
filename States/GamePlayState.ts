module GameFromScratch {
    export class GamePlayState extends Phaser.State {
        game: Phaser.Game;
        Player: GameFromScratch.Player;

        constructor() {
            super();
        }
        create() {
            this.Player = new Player(this.game, 0, this.game.height - 0);
            this.game.add.existing(this.Player);

        }
    }
} 