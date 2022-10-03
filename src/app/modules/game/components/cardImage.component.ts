import {Scene} from 'phaser';
import {Card2} from '../gameobjects/cards/card2';
import {IComponent} from '../managers/component.manager';
import {BaseComponent} from './base.component';
import Sprite = Phaser.GameObjects.Sprite;


export class CardImageComponent<T extends Card2> extends BaseComponent implements IComponent {
    protected gameObject: T;
    protected sprite: Sprite;

    constructor(scene: Scene) {
        super();

        this.scene = scene;
    }

    awake() {
    }

    destroy() {
    }

    init(gameObject: T): IComponent {
        this.gameObject = gameObject;
        return this;
    }

    start() {
        this.sprite = this.scene.add.sprite(0, 0, this.gameObject.texture);
    }

    update(dt: number) {
        this.sprite.x = this.gameObject.x;
        this.sprite.y = this.gameObject.y;

        this.setCardSpriteScale();

    }

    private setCardSpriteScale() {
        if (this.sprite?.width > this.gameObject.width) {
            this.sprite.setScale(
                1 - ((this.sprite.width - this.gameObject.width) / this.sprite.width),
                1 - ((this.sprite.height - this.gameObject.height) / this.sprite.height)
            );
        } else {
            this.sprite?.setScale(
                1 + ((this.gameObject.width - this.sprite.width) / this.gameObject.width),
                1 + ((this.gameObject.height - this.sprite.height) / this.gameObject.height)
            );
        }
    }
}
