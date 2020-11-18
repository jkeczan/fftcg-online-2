import Container = Phaser.GameObjects.Container;
import Sprite = Phaser.GameObjects.Sprite;
import {Scene} from 'phaser';

export default class CardBase extends Container {
    private _name: string;
    private _scene: Scene;
    private _depth: number;
    private _spriteCard: Sprite;
    private _spriteImage: Sprite;
    private _spriteImageBack: Sprite;

    constructor(data) {
        const {scene, x, y, card, image, name, depth, imageBack} = data;
        const spriteCard = new Sprite(scene, 0, 0, card);
        const spriteImage = new Sprite(scene, 0, 0, image);
        const spriteImageBack = new Sprite(scene, 0, 0, imageBack);

        spriteImage.setScale(.7, .7);
        spriteImageBack.setScale(.5, .5);

        super(scene, x, y, [spriteCard, spriteImage, spriteImageBack]);

        this.spriteCard = spriteCard;
        this.spriteImage = spriteImage;
        this.spriteImageBack = spriteImageBack;
        this.scene = scene;
        this.name = name;
        this.depth = depth;
        this.flipBack();
        this.scene.add.existing(this);
    }

    flipBack() {
        this.spriteImage.visible = false;
        this.spriteImageBack.visible = true;
    }

    flipForward() {
        this.spriteImage.visible = true;
        this.spriteImageBack.visible = false;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }

    get depth(): number {
        return this._depth;
    }

    set depth(value: number) {
        this._depth = value;
    }

    get spriteCard(): Phaser.GameObjects.Sprite {
        return this._spriteCard;
    }

    set spriteCard(value: Phaser.GameObjects.Sprite) {
        this._spriteCard = value;
    }

    get spriteImage(): Phaser.GameObjects.Sprite {
        return this._spriteImage;
    }

    set spriteImage(value: Phaser.GameObjects.Sprite) {
        this._spriteImage = value;
    }


    get spriteImageBack(): Phaser.GameObjects.Sprite {
        return this._spriteImageBack;
    }

    set spriteImageBack(value: Phaser.GameObjects.Sprite) {
        this._spriteImageBack = value;
    }
}
