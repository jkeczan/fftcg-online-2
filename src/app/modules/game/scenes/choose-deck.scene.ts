import {Scene} from 'phaser';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
import {GameMessages} from '../server/messages/game_messages';
import GameServer from '../server/server';
import GameButton from '../ui/button';

export default class ChooseDeckScene extends Scene {
    private server!: GameServer;
    private headerText: Phaser.GameObjects.Text;
    private deck1Cover: Phaser.GameObjects.Sprite;
    private deck2Cover: Phaser.GameObjects.Sprite;
    private nextButton: GameButton;
    private selectedDeck: Phaser.GameObjects.Sprite;
    public deck: FFTCGCard[];

    constructor() {
        super('ChooseDeckScene');
    }

    preload() {
        console.log('Preloading Choose Deck Scene');

        this.load.glsl('gray_cloud', 'assets/shaders/gray_cloud.frag');
        this.load.image('turk', 'assets/game/cards/opus15/15-140S.jpeg');
        this.load.image('avalanche', 'assets/game/cards/opus15/15-139S.jpeg');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');
    }

    create(data: { server: GameServer }) {
        console.log('Creating Choose Deck Scene');
        this.server = data.server;
        const {width, height} = this.scale;

        this.add.shader('gray_cloud', width / 2, height / 2, width, height);

        this.deck1Cover = this.add.sprite(width / 4, height / 2.5, 'turk').setInteractive();
        this.deck1Cover.name = 'turks';
        this.deck2Cover = this.add.sprite(width - width / 4, height / 2.5, 'avalanche').setInteractive();
        this.deck2Cover.name = 'avalanche';


        this.headerText = this.add.text(width / 2, 50, 'Choose your Deck', {
            fontFamily: 'Ken Vector',
            fontSize: '40pt'
        });
        this.headerText.setOrigin(0.5);

        this.nextButton = new GameButton(this, width / 2, height - (height / 4), 'Confirm', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        });
        this.nextButton.alpha = 0;

        this.deck1Cover.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            this.onDeckSelected(this.deck1Cover);
        });

        this.deck2Cover.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            this.onDeckSelected(this.deck2Cover);
        });

        this.nextButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            this.confirmDeck();
        });
    }

    showConfirm() {
        this.add.tween({
            targets: [this.nextButton],
            alpha: 1,
            scale: 1
        });
    }

    confirmDeck() {
        const {width} = this.scale;
        const deckToHide = this.selectedDeck.name === this.deck1Cover.name ? this.deck2Cover : this.deck1Cover;

        this.add.tween({
            targets: [deckToHide],
            alpha: 0,
            scale: 0
        });

        this.add.tween({
            targets: [this.selectedDeck],
            ease: 'Cubic',
            x: width / 2
        });

        this.server.room.send(GameMessages.DeckChosen, {deckID: this.selectedDeck.name});
        this.time.delayedCall(500, () => {
            this.server.room.send(GameMessages.PlayerConfirmsHand);
            this.nextButton.off(Phaser.Input.Events.GAMEOBJECT_POINTER_UP);
            this.nextButton.setText('Waiting on Other Player');

            this.time.delayedCall(1000, () => {
                this.scene.start('RelayScene', {server: this.server});

            });
        });

    }


    onDeckSelected(sprite: Phaser.GameObjects.Sprite) {
        const postFxPlugin = this.plugins.get('rexOutlinePipeline') as OutlinePipelinePlugin;

        postFxPlugin.remove(sprite);
        this.selectedDeck = sprite;
        postFxPlugin.add(sprite, {
            outlineColor: 0xff6700,
            name: 'outline'
        });
        this.selectedDeck.removeInteractive();
        this.showConfirm();
    }
}
