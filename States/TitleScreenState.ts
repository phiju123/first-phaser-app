module GameFromScratch {
    export class TitleScreenState extends Phaser.State {
        game: Phaser.Game;
        TitleScreenImage: Phaser.Sprite;

        constructor() {
            super();
        }
        create() {
            this.TitleScreenImage = this.add.sprite(0, 0, "title");
            this.TitleScreenImage.scale.setTo(
                this.game.width / this.TitleScreenImage.width,
                this.game.height / this.TitleScreenImage.height);

            this.input.onTap.addOnce(this.titleClicked, this);
        }
        titleClicked() {
            this.game.state.start("GamePlayState");
        }
    }
} 