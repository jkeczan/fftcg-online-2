import Sprite = Phaser.GameObjects.Sprite;
import Text = Phaser.GameObjects.Text;
import GAMEOBJECT_POINTER_DOWN = Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN;
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import GAMEOBJECT_POINTER_UP = Phaser.Input.Events.GAMEOBJECT_POINTER_UP;
import {Scene} from 'phaser';

export interface IGameButtonTextureConfig {
    textureUp: string;
    frameUp: string;
    textureDown: string;
    frameDown: string;
    textureOver: string;
    frameOver: string;
}

export default class GameButton extends Phaser.GameObjects.Container {
    private upImage: Sprite;
    private overImage: Sprite;
    private downImage: Sprite;
    private label: Text;

    constructor(scene: Scene, x: number, y: number, text: string, textures: IGameButtonTextureConfig) {
        super(scene, x, y);

        this.upImage = scene.add.sprite(0, 0, textures.textureUp, textures.frameUp);
        this.overImage = scene.add.sprite(0, 0, textures.textureOver, textures.frameOver);
        this.downImage = scene.add.sprite(0, 0, textures.textureDown, textures.frameDown);
        this.label = scene.add.text(0, 0, text, {fontFamily: 'Ken Vecotr', fontSize: '25pt'});

        this.add(this.upImage);
        this.add(this.overImage);
        this.add(this.downImage);
        this.add(this.label);

        this.overImage.setVisible(false);
        this.downImage.setVisible(false);

        this.label.depth = 3;
        this.label.setOrigin(0.5, 0.5);

        this.setSize(this.upImage.width, this.upImage.height);

        this.setInteractive()
            .on(GAMEOBJECT_POINTER_UP, () => {
                this.upImage.setVisible(true);
                this.overImage.setVisible(false);
                this.downImage.setVisible(false);
                this.label.setColor('#FFFFFF');
            })
            .on(GAMEOBJECT_POINTER_OVER, () => {
                this.upImage.setVisible(false);
                this.overImage.setVisible(true);
                this.downImage.setVisible(false);
                this.label.setColor('#58afe5');
            })
            .on(GAMEOBJECT_POINTER_OUT, () => {
                this.upImage.setVisible(true);
                this.overImage.setVisible(false);
                this.downImage.setVisible(false);
                this.label.setColor('#FFFFFF');
            }).on(GAMEOBJECT_POINTER_DOWN, () => {
            this.upImage.setVisible(false);
            this.overImage.setVisible(false);
            this.downImage.setVisible(true);
            this.label.setColor('#FFFFFF');
        });

        scene.add.existing(this);
    }

    setText(text: string) {
        this.label.text = text;
    }
}
