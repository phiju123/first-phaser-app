var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameFromScratch;
(function (GameFromScratch) {
    (function (PlayerState) {
        PlayerState[PlayerState["Idle"] = 0] = "Idle";
        PlayerState[PlayerState["Walking"] = 1] = "Walking";
    })(GameFromScratch.PlayerState || (GameFromScratch.PlayerState = {}));
    var PlayerState = GameFromScratch.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            this.game = game;
            this.walkingspeed = 0;
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT_ARROW.onDown.add(Player.prototype.MoveRight, this);

            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT_ARROW.onDown.add(Player.prototype.MoveLessRight, this);

            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Player.prototype.GameOver, this);

            _super.call(this, game, x, y, "HERO_WALKING", 0);
            this.anchor.set(0.0, 1.0);
            this.StartIdle();
        }
        Player.prototype.MoveRight = function () {
            if (this.playerstate == 0 /* Idle */) {
                this.StartWalking();
            } else if (this.walkingspeed < Player.MAX_SPEED) {
                this.walkingspeed++;
                this.animations.currentAnim.speed = this.walkingspeed;
            }
        };
        Player.prototype.StartWalking = function () {
            this.playerstate = 1 /* Walking */;
            this.walkingspeed = 6;
            this.loadTexture("HERO_WALKING", 0);
            this.animations.add("walk");
            this.animations.play("walk", this.walkingspeed, true);
        };
        Player.prototype.StartIdle = function () {
            this.playerstate = 0 /* Idle */;
            this.walkingspeed = 0;
            this.loadTexture("HERO_IDLE", 0);
            this.animations.add("Idle");
            this.animations.play("Idle", 15, true);
        };
        Player.prototype.MoveLessRight = function () {
            if (this.playerstate != 0 /* Idle */) {
                this.walkingspeed--;

                if (this.walkingspeed > 0) {
                    this.animations.currentAnim.speed = this.walkingspeed;
                } else {
                    this.StartIdle();
                }
            }
        };
        Player.prototype.GameOver = function () {
        };
        Player.MAX_SPEED = 30;
        return Player;
    })(Phaser.Sprite);
    GameFromScratch.Player = Player;
})(GameFromScratch || (GameFromScratch = {}));
//# sourceMappingURL=Player.js.map
