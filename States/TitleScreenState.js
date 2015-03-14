var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameFromScratch;
(function (GameFromScratch) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.create = function () {
            this.TitleScreenImage = this.add.sprite(0, 0, "title");
            this.TitleScreenImage.scale.setTo(this.game.width / this.TitleScreenImage.width, this.game.height / this.TitleScreenImage.height);

            this.input.onTap.addOnce(this.titleClicked, this);
        };
        TitleScreenState.prototype.titleClicked = function () {
            this.game.state.start("GamePlayState");
        };
        return TitleScreenState;
    })(Phaser.State);
    GameFromScratch.TitleScreenState = TitleScreenState;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=TitleScreenState.js.map
