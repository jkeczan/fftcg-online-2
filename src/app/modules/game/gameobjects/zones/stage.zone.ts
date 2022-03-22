import {BaseZone, IGameZoneConfig} from './base.zone';
import FFTCGCard from '../cards/fftcg_card';
import FixWidthButtons from 'phaser3-rex-plugins/templates/ui/fixwidthbuttons/FixWidthButtons';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import Sprite = Phaser.GameObjects.Sprite;
import GameObject = Phaser.GameObjects.GameObject;

export default class StageZone extends BaseZone {
    private card: FFTCGCard;
    private submitImage: Sprite;
    private cancelImage: Sprite;
    private buttons: FixWidthButtons;

    constructor(config: IGameZoneConfig) {
        const {scene, x, y, width, height} = config;

        const submitImage = new Sprite(scene, 0, 0, 'blueUI', 'blue_button00.png');
        const cancelImage = new Sprite(scene, 0, 0, 'redUI', 'red_button00.png');

        super(config);

        this.width = width;
        this.height = height;

        this.submitImage = submitImage;
        this.cancelImage = cancelImage;

        this.submitImage.visible = false;
        this.cancelImage.visible = false;

        this.scene.add.existing(this.submitImage);
        this.scene.add.existing(this.cancelImage);

        this.createButtons();
        this.hideButtons();

    }

    onCardAdded(card: FFTCGCard) {
        card.x = this.x;
        card.y = this.y;
        this.showButtons();
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

            if (button.name === 'submitButton') {
                this.gameState.next();
            }
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
