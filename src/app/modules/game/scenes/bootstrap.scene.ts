import {Scene} from 'phaser';
import {GameMessages, GamePhases} from '../server/messages/game_messages';
import GameServer from '../server/server';
import {CorneliaRoomState} from '../server/states/CorneliaRoomState';
import {PlayerState} from '../server/states/PlayerState';
import GameButton from '../ui/button';
import Sprite = Phaser.GameObjects.Sprite;


export default class BootstrapScene extends Scene {
    private server!: GameServer;
    private logoSprite: Sprite;
    private headerText: Phaser.GameObjects.Text;
    private getStartedButton: GameButton;
    private getTestingButton: GameButton;
    private fire: Phaser.GameObjects.Shader;

    constructor() {
        super('BootstrapScene');
    }

    preload() {
        this.server = new GameServer();
        this.load.image('logo', 'assets/large-fftcg-logo.png');
        this.load.glsl('fireball', 'assets/shaders/green_cloud.frag');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');

    }

    create() {
        const {width, height} = this.scale;
        this.fire = this.add.shader('fireball', width / 2, height / 2, width, height);
        // this.scene.launch('GameScene', {
        //     server: this.server
        // });

        this.logoSprite = this.add.sprite(width / 2, height / 2, 'logo');
        this.headerText = this.add.text(width / 2, height / 2, 'Welcome to FFTCG.ONLINE', {
            fontFamily: 'Ken Vector',
            fontSize: '40pt'
        });
        this.getStartedButton = new GameButton(this, width / 2, (height / 2) + 100, 'Get Started', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        });
        this.getTestingButton = new GameButton(this, width / 2, (height / 2) + 200, 'Test Room', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        });
        this.headerText.setOrigin(0.5, 0.55);
        this.headerText.setStroke('0xFF0000', 10);
        this.logoSprite.scale = 2;
        this.headerText.alpha = 1;
        this.getStartedButton.alpha = 1;
        this.logoSprite.y -= 200;
        // this.add.tween({
        //     targets: [this.logoSprite],
        //     scale: 2,
        //     duration: 2000,
        //     ease: 'Cubic',
        //     y: this.logoSprite.y - 200,
        //     onComplete: () => {
        //         this.add.tween({
        //             targets: [this.headerText, this.getStartedButton],
        //             duration: 1000,
        //             ease: 'Cubic',
        //             alpha: 1
        //         });
        //     }
        // });

        this.getTestingButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, async () => {
            await this.server.joinGame();
            this.scene.start('TestRoomScene', {
                server: this.server
            });
        });

        this.getStartedButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, async () => {
            this.add.tween({
                targets: [this.fire],
                alpha: 0
            });
            await this.server.joinGame();

            if (this.server.room) {
                this.headerText.setText(`Room Found: ${this.server.room.name}.`);
            }

            this.server.room.onStateChange((state: CorneliaRoomState) => {
                this.getStartedButton.visible = false;

                if (state.gamePhase === GamePhases.WAITING_FOR_PLAYERS) {
                    console.log('Waiting For Players')
                    this.headerText.text = '\nWaiting on another player...';
                } else if (state.gamePhase === GamePhases.READY_TO_START) {
                    this.headerText.text = `Game Started...`;
                    this.time.delayedCall(500, () => {
                        this.scene.start('ChooseDeckScene', {
                            server: this.server
                        });
                    })


                }
            });
        });
    }
}
