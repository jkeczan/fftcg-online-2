import FixWidthButtons from 'phaser3-rex-plugins/templates/ui/fixwidthbuttons/FixWidthButtons';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import UIPlugins from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import GameScene from '../../scenes/game.scene';
import CPContainer from '../../ui/cp_ui';
import FFTCGCard, {FFTCGCardElement} from '../cards/card_fftcg';
import {BaseZone, IGameZoneConfig} from './base.zone';
import GameObject = Phaser.GameObjects.GameObject;
import Sprite = Phaser.GameObjects.Sprite;
import Sizer = UIPlugins.Sizer;

export default class StageZone2 extends BaseZone {
    private submitImage: Sprite;
    private cancelImage: Sprite;
    private cpContainer: CPContainer;
    private buttons: FixWidthButtons;
    private cardSizer: Sizer;

    constructor(config: IGameZoneConfig) {
        const {scene, x, y, width, height} = config;

        const submitImage = new Sprite(scene, 0, 0, 'blueUI', 'blue_button00.png');
        const cancelImage = new Sprite(scene, 0, 0, 'redUI', 'red_button00.png');

        super(config);
        config.height = height * .15;
        const cpContainer = new CPContainer(config);

        this.width = width;
        this.height = height;

        this.submitImage = submitImage;
        this.cancelImage = cancelImage;
        this.cpContainer = cpContainer;

        this.submitImage.visible = false;
        this.cancelImage.visible = false;

        this.scene.add.existing(this.submitImage);
        this.scene.add.existing(this.cancelImage);

        this.hideCPContainer();

        // this.cpContainers = [];
        // this.createButtons();
        // this.hideButtons();

        this.layout(config.scene);
    }

    layout(scene: GameScene) {
        this.cardSizer = scene.rexUI.add.sizer({
            x: 500,
            y: 500,
            orientation: 'y',
            space: { left: 20, right: 20, top: 20, bottom: 20, item: 25 }
        });

        this.cardSizer.addBackground(scene.rexUI.add.roundRectangle(0,0,1,1, 5, 0xff0000));
        // this.cardSizer.add();

        this.cardSizer.add(scene.rexUI.add.label({
            text: scene.rexUI.add.BBCodeText(0, 0, 'Test 1', { fontSize: '20px' })
        }))
        this.cardSizer.layout();
    }


    // createBorder(color: number = 0x3e3e3e, lineWidth: number = 10, alpha: number = .5) {
    // }

    createLabel() {
    }

    onCardAdded(card: FFTCGCard) {
        console.log('Align')
        this.alignCardsInZone(card);
        this.showButtons();
        this.cpContainer.createCPs([{count: 4, element: FFTCGCardElement.EARTH}]);

        this.showCPContainer();
    }

    alignCardsInZone(cardAdded: FFTCGCard) {
        // this.scene.add.tween({
        //     duration: 300,
        //     targets: [cardAdded],
        //     x: this.x,
        //     y: this.y - 10,
        //     ease: 'Sine'
        // });
        //
        let depth = 100;
        for (const card of this.cards) {
            card.depth = depth;
            depth -= 10;
        }

        this.cardSizer.insert(0, cardAdded)
        this.cardSizer.layout();
    }

    unstage() {
        this.clearCP();
        this.hideButtons();
        this.hideCPContainer();
    }

    hideCPContainer() {
        this.cpContainer.visible = false;
    }

    showCPContainer() {
        this.cpContainer.visible = true;
    }

    removeCard(cardToRemove: FFTCGCard) {
        super.removeCard(cardToRemove);
    }

    onCardRemoved(cardToRemove: FFTCGCard) {
        return null;
    }

    clearCP() {
        this.cpContainer.clearCP();
    }

    unfillCP() {
        this.cpContainer.removeCP();
        // this.cpContainer.cp[this.cpContainer.cp.length - 1].unfill();
        // this.cards[0].stopZoneParticleEffect();
    }

    showButtons() {
        this.buttons.visible = true;
        this.submitImage.visible = true;
        this.cancelImage.visible = true;
    }

    hideButtons() {
        this.buttons.visible = false;
        this.submitImage.visible = false;
        this.cancelImage.visible = false;
    }

    fillCP() {
        this.cpContainer.fillNextCP();
        if (this.cpContainer.amountOfFilledCP === 2) {
            this.cards[0].highlightZoneParticleEffect();
        }
    }

    createButtons() {
        const buttons = new FixWidthButtons(this.scene, {
            x: this.x,
            // y: this.y + (this.height / 2) - (this.height * .15),
            y: this.y + this.height,
            space: {
                left: 10, right: 10, top: 20, bottom: 20, item: 10
            },
            buttons: [
                this.createButton('submitButton', 'Pay Cost', this.submitImage),
                this.createButton('cancelButton', 'Cancel', this.cancelImage)
            ]
        });

        buttons.layout();
        buttons.depth = 100;

        buttons.on('button.click', (button: GameObject, index, pointer, event) => {
            console.log(button, index, pointer, event);
        });

        buttons.on('button.over', (button, index, pointer, event) => {
            console.log('Buttons Over');
        });


        return buttons;
    }

    createButton(name: string, text: string, image: Sprite) {
        return new Label(this.scene, {
            background: image,
            text: this.scene.add.text(0, 0, text, {fontFamily: 'Ken Vector'}),
            align: 'center',
            name,
            width: this.width * .9,
            height: this.height * .15
        });
    }
}
