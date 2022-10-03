import {Scene} from 'phaser';
import {Card2} from '../gameobjects/cards/card2';
import {IComponent} from '../managers/component.manager';
import {BaseComponent} from './base.component';
import Graphics = Phaser.GameObjects.Graphics;


export class BorderComponent<T extends Card2> extends BaseComponent implements IComponent {
    protected gameObject: T;
    protected border: Graphics;

    constructor(scene: Scene) {
        super();

        this.scene = scene;
    }

    awake() {
        this.border = this.scene.add.graphics();
    }

    destroy() {
        this.border.destroy(true);
    }

    init(gameObject: T): IComponent {
        this.gameObject = gameObject;
        return this;
    }

    start() {
        // this.border = this.scene.add.(0, 0, 0, 0, 0xff0000);
        this.border.lineStyle(10, 0xff0000, .5);

    }

    update(dt: number) {
        this.border.strokeRect(this.gameObject.x - this.gameObject.width / 2, this.gameObject.y - this.gameObject.height / 2, this.gameObject.width, this.gameObject.height);
    }
}
