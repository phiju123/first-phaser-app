module GameFromScratch {
    export enum PlayerState { Idle, Walking }
    export class Player extends Phaser.Sprite {
        game: Phaser.Game;
        playerstate: PlayerState;

        RIGHT_ARROW: Phaser.Key;
        LEFT_ARROW: Phaser.Key;
        ESCAPE: Phaser.Key;

        walkingspeed: number;

        public static MAX_SPEED: number = 30;
        constructor(game: Phaser.Game, x: number, y: number) {
            this.game = game;
            this.walkingspeed = 0;
            this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.RIGHT_ARROW.onDown.add(Player.prototype.MoveRight, this);

            this.LEFT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.LEFT_ARROW.onDown.add(Player.prototype.MoveLessRight, this);

            this.ESCAPE = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
            this.ESCAPE.onDown.add(Player.prototype.GameOver, this);



            super(game, x, y, "HERO_WALKING", 0);
            this.anchor.set(0.0, 1.0);
            this.StartIdle();

        }

        MoveRight() {
            if (this.playerstate == PlayerState.Idle) {
                this.StartWalking();
            }
            else if (this.walkingspeed < Player.MAX_SPEED) {
                this.walkingspeed++;
                this.animations.currentAnim.speed = this.walkingspeed;

            }
        }
        StartWalking() {
            this.playerstate = PlayerState.Walking;
            this.walkingspeed = 6;
            this.loadTexture("HERO_WALKING", 0);
            this.animations.add("walk");
            this.animations.play("walk", this.walkingspeed, true);

        }
        StartIdle() {
            this.playerstate = PlayerState.Idle;
            this.walkingspeed = 0;
            this.loadTexture("HERO_IDLE", 0);
            this.animations.add("Idle");
            this.animations.play("Idle", 15, true);
        }
        MoveLessRight() {
            if (this.playerstate != PlayerState.Idle) {
                this.walkingspeed--;

                if (this.walkingspeed > 0) {
                    this.animations.currentAnim.speed = this.walkingspeed;
                }
                else {
                    this.StartIdle();
                }
            }
            
        }
        GameOver() {

        }

        }
        }
    
