import {Scene} from 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import PlayerBoard from '../gameobjects/players/playerboard.container';
import GameServer from '../server/server';
import Layer = Phaser.GameObjects.Layer;

// const zoneWidth = screenWidth * .1;
//         const zoneHeight = screenHeight * .25;
//         const zoneSpacing = zoneHeight / 10;
//

export class GameSceneV2 extends Scene {
    public server: GameServer;
    public rexUI: RexUIPlugin;
    private backgroundLayer: Layer;
    private fieldLayer: Layer;
    private attentionLayer: Layer;
    private playerBoard: PlayerBoard;
    private zoneDimensions: { height: number, width: number, spacing: number };

    constructor() {
        super('GameScene');
        // this.backgroundLayer = new Layer(this);
        // this.fieldLayer = new Layer(this);
        // this.attentionLayer = new Layer(this);
        this.zoneDimensions = {
            width: 0,
            height: 0,
            spacing: 0,
        };
    }

    preload() {
        this.load.image('background', 'assets/cornelia_bg.jpg');

        this.zoneDimensions.width = this.scale.width * .1;
        this.zoneDimensions.height = this.scale.height * .25;
        this.zoneDimensions.spacing = this.zoneDimensions.height / 10;

        this.backgroundLayer = this.add.layer();
        this.fieldLayer = this.add.layer();
        this.attentionLayer = this.add.layer();

        this.backgroundLayer.setDepth(1);
        this.fieldLayer.setDepth(2);
    }

    create(data: { server: GameServer }) {
        this.server = data.server;

        this.add.sprite(this.scale.width / 2, this.scale.height / 2, 'background')
            .setAlpha(.5, .5, .5, .5);


        this.playerBoard = new PlayerBoard({
            id: this.server.getCurrentPlayer().sessionID,
            scene: this,
            zoneHeight: this.zoneDimensions.height,
            zoneWidth: this.zoneDimensions.width,
            zoneSpacing: this.zoneDimensions.spacing,
            boardWidth: this.scale.width,
            boardHeight: this.scale.height,
            opponent: false
        });
    }

    update() {

    }

}
