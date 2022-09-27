import FixWidthButtons from 'phaser3-rex-plugins/templates/ui/fixwidthbuttons/FixWidthButtons';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import CPContainer from '../../ui/cp_ui';
import FFTCGCard, {FFTCGCardElement} from '../cards/card_fftcg';
import {BaseZone, GameZoneEvents, IGameZoneConfig} from './base.zone';
import GameObject = Phaser.GameObjects.GameObject;
import Sprite = Phaser.GameObjects.Sprite;

export default class StageZone extends BaseZone {
    private submitImage: Sprite;
    private cancelImage: Sprite;
    private cpContainer: CPContainer;
    private buttons: FixWidthButtons;

    constructor(config: IGameZoneConfig) {
        const {scene, x, y, width, height} = config;

        const submitImage = new Sprite(scene, 0, 0, 'blueUI', 'blue_button00.png');
        const cancelImage = new Sprite(scene, 0, 0, 'redUI', 'red_button00.png');

        super(config);
        config.height = height * .15;

        config.y = this.getBounds().bottom;
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

        this.cpContainer.x = this.x;
        this.cpContainer.y = this.getBounds().bottom;

        this.hideCPContainer();
        this.createButtons();
        this.hideButtons();
    }


    // createBorder(color: number = 0x3e3e3e, lineWidth: number = 10, alpha: number = .5) {
    // }

    createLabel() {
    }

    createCardCount() {

    }

    // createBorder(color: number = 0x3e3e3e, lineWidth: number = 10, alpha: number = .5) {
    //
    // }

    onCardAdded(card: FFTCGCard) {
        console.log('Align');
        card.flipForward();
        card.disableInteractive();
        card.endHover();
        card.disableDrag();
        this.alignCardsInZone(card);
        this.showButtons();
        this.showCPContainer();
    }

    addCP(count: number, element: FFTCGCardElement) {
        this.cpContainer.createCPs(count, element);
        this.cpContainer.fillNextCP();
    }

    calculateCPCosts(card: FFTCGCard) {
        for (const element of card.metadata.elements) {
            this.cpContainer.createCPs(card.metadata.cost / 2, element);
        }
    }

    alignCardsInZone(cardAdded: FFTCGCard) {
        this.scene.add.tween({
            duration: 300,
            targets: [cardAdded],
            x: this.x,
            y: this.y - 10,
            ease: 'Sine'
        });

        let depth = 100;
        for (const card of this.cards) {
            card.depth = depth;
            depth -= 10;
        }
    }

    unstage() {
        this.clearCP();
        this.hideButtons();
        this.hideCPContainer();

        this.emit(GameZoneEvents.RequestUnstageCard, this.cards[0]);
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
            this.unstage();
        });

        buttons.on('button.over', (button, index, pointer, event) => {
            console.log('Buttons Over');
        });


        this.buttons = this.scene.add.existing(buttons);
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
