import {Scene} from 'phaser';
import GameServer from '../server/server';
import GameButton from '../ui/button';


export default class ChooseDeckScene extends Scene {
    private server!: GameServer;
    private headerText: Phaser.GameObjects.Text;
    private deck1Cover: Phaser.GameObjects.Sprite;
    private deck2Cover: Phaser.GameObjects.Sprite;
    private getStartedButton: GameButton;

    constructor() {
        super('ChooseDeckScene');
    }

    preload() {
        this.load.image('turk', 'assets/game/cards/opus15/15-140S.jpeg');
        this.load.image('avalanche', 'assets/game/cards/opus15/15-139S.jpeg');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');

    }

    create(data: { server: GameServer }) {
        this.server = data.server;
        const {width, height} = this.scale;

        this.deck1Cover = this.add.sprite(width / 4, height / 2, 'turk');
        this.deck2Cover = this.add.sprite(width - width / 4, height / 2, 'avalanche');

        this.headerText = this.add.text(width / 2, 50, 'Choose your Deck', {
            fontFamily: 'Ken Vector',
            fontSize: '40pt'
        });
        this.headerText.setOrigin(0.5);

    }
}
